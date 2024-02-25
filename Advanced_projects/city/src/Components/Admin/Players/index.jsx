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

const AdminPlayers = () => {
    const [lastVisible, setLastVisible] = useState(null);
    const [players, setPlayers] = useState([]);
    const [loading, setLoading] = useState(false);
    const [initialLoad, setInitialLoad] = useState(true);

    const fetchPlayers = async () => {
        setLoading(true);
        let playersQuery = collection(db, "players");

        if (lastVisible) {
            playersQuery = query(playersQuery, startAfter(lastVisible));
        }

        playersQuery = query(playersQuery, limit(2));

        try {
            const querySnapshot = await getDocs(playersQuery);
            const lastVisibleDoc = querySnapshot.docs[querySnapshot.docs.length - 1];
            const playersData = querySnapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            }));

            if (initialLoad) {
                setInitialLoad(false);
                setPlayers(playersData);
            } else {
                const newPlayers = playersData.filter(player => !players.find(existingPlayer => existingPlayer.id === player.id));
                if(newPlayers.length > 0)
                {
                    setPlayers(prevPlayers => [...prevPlayers, ...newPlayers])
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
            fetchPlayers();
        }
    }, [initialLoad]);

    const loadMorePlayers = () => {
        fetchPlayers();
    };

    return (
        <AdminLayout title="The Players">
            <div className="mb-5">
                <Button
                    disableElevation
                    variant="outlined"
                    component={Link}
                    to={'/admin_players/add_player'}
                >
                    Add player
                </Button>
            </div>

            <Paper className="mb-5">
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>First name</TableCell>
                            <TableCell>Last name</TableCell>
                            <TableCell>Number</TableCell>
                            <TableCell>Position</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {players.map((player) => (
                            <TableRow key={player.id}>
                                <TableCell>
                                    <Link to={`/admin_players/edit_player/${player.id}`}>
                                        {player.name}
                                    </Link>
                                </TableCell>
                                <TableCell>
                                    <Link to={`/admin_players/edit_player/${player.id}`}>
                                        {player.lastname}
                                    </Link>
                                </TableCell>
                                <TableCell>
                                    {player.number}
                                </TableCell>
                                <TableCell>
                                    {player.position}
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </Paper>

            <Button
                variant="contained"
                color="primary"
                onClick={loadMorePlayers}
                disabled={loading}
            >
                Load more
            </Button>

            <div className="admin_progress">
                {loading &&
                    <CircularProgress thickness={7} style={{ color:'#98c5e9' }}/>
                }
            </div>
        </AdminLayout>
    );
};

export default AdminPlayers;
