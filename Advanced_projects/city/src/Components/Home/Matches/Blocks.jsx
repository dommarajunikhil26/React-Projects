import { useState, useEffect } from 'react';
import { Slide } from "react-awesome-reveal";
import { db } from '../../../firebase';
import { collection, getDocs } from "firebase/firestore";
import MatchesBlock from '../../Helper/matches_block';

const Blocks = () => {
    const [matches, setMatches] = useState([]);
    const [matchesFetched, setMatchesFetched] = useState(false);

    useEffect(() => {
        const fetchMatches = async () => {
            try {
                const querySnapshot = await getDocs(collection(db, "matches"));
                const matchesData = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
                setMatches(matchesData);
                setMatchesFetched(true);
            } catch (error) {
                console.error("Error fetching matches:", error);
            }
        };

        // Fetch matches only if they haven't been fetched yet
        if (!matchesFetched) {
            fetchMatches();
        }
    }, [matchesFetched]); // Include matchesFetched in the dependency array

    const showMatches = (matches) => (
        matches.length > 0 ? // Check if matches array is not empty
            matches.map((match) => (
                <Slide bottom key={match.id} className='item' triggerOnce>
                    <div>
                        <div className='wrapper'>
                            <MatchesBlock match={match} />
                        </div>
                    </div>
                </Slide>
            ))
        :
        <div>No matches</div>
    );

    return(
        <div>
            {showMatches(matches)}
        </div>
    );
}

export default Blocks;
