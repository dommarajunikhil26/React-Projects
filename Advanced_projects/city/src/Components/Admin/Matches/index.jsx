import { useEffect, useState } from "react";
import AdminLayout from "../../Hoc/AdminLayout";
import { collection, getDocs, query, startAfter, limit } from "firebase/firestore";
import { db } from "../../../firebase";
import { Link } from "react-router-dom";
import { 
    Button, 
    Table, 
    TableBody, 
    TableCell, 
    TableHead, 
    TableRow, 
    Paper,
    CircularProgress
} from "@mui/material";

import { showToastError } from "../../Helper/tools";

const AdminMatches = () => {
    const [lastVisible, setLastVisible] = useState(null);
    const [matches, setMatches] = useState([]);
    const [loading, setLoading] = useState(false);
    const [initialLoad, setInitialLoad] = useState(true);

    const fetchMatches = async () => {
        setLoading(true);
        let matchesQuery = collection(db, "matches");

        if (lastVisible) {
            matchesQuery = query(matchesQuery, startAfter(lastVisible));
        }

        matchesQuery = query(matchesQuery, limit(2));

        try {
            const querySnapshot = await getDocs(matchesQuery);
            const lastVisibleDoc = querySnapshot.docs[querySnapshot.docs.length - 1];
            const matchesData = querySnapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            }));

            if (initialLoad) {
                setInitialLoad(false);
                setMatches(matchesData);
            } else {
                const newMatches = matchesData.filter(match => !matches.find(existingMatch => existingMatch.id === match.id));
                if(newMatches.length > 0)
                {
                    setMatches(prevMatches => [...prevMatches, ...newMatches])
                } else {
                    showToastError("All the player data has been loaded")
                }
            }
            setLastVisible(lastVisibleDoc);
        } catch (error) {
            console.error("Error fetching players:", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (initialLoad) {
            fetchMatches();
        }
    }, [initialLoad]);

    const loadMoreMatches = () => {
        fetchMatches();
    };

    return (
        <AdminLayout title="The Matches">
            <div className="mb-5">
                <Button
                    disableElevation
                    variant="outlined"
                    component={Link}
                    to={'/admin_matches/add_match'}
                >
                    Add Match
                </Button>
            </div>

            <Paper className="mb-5">
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Date</TableCell>
                            <TableCell>Match</TableCell>
                            <TableCell>Result</TableCell>
                            <TableCell>Final</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {matches ?
                            matches.map((match) => (
                            <TableRow key={match.id}>
                                <TableCell>
                                    {match.date}
                                </TableCell>
                                <TableCell>
                                    <Link to={`/admin_matches/edit_match/${match.id}`}>
                                        { match.away} <strong>-</strong> {match.local}
                                    </Link>
                                </TableCell>
                                <TableCell>
                                    {match.resultAway} <strong>-</strong> {match.resultLocal}
                                </TableCell>
                                <TableCell>
                                    {match.final === "Yes" ?
                                    <span className="matches_tag_red">Final</span>
                                    :
                                    <span className="matches_tag_green">Not played yet</span>
                                    }
                                </TableCell>
                            </TableRow>
                        ))
                    :null}
                    </TableBody>
                </Table>
            </Paper>

            <Button
                variant="contained"
                color="primary"
                onClick={loadMoreMatches}
                disabled={loading}
            >
                Load more
            </Button>

            <div className="admin_progress">
                {loading ?
                    <CircularProgress thickness={7} style={{ color:'#98c5e9' }}/>
                :null}
            </div>
        </AdminLayout>
    );
};

export default AdminMatches;
