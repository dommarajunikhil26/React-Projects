import { useEffect, useState } from 'react';
import { db } from '../../firebase';
import { getDocs, collection } from 'firebase/firestore';

import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow
} from '@mui/material';
import { showToastError } from '../Helper/tools';


const LeagueTable = () => {
    const [positions, setPosition] = useState(null);

    useEffect(() => {
        const fetchPositionsData = async () => {
            if(!positions)
            {
                try{
                    const positionsQuery = await getDocs(collection(db, 'positions'));
                    const positionsData = positionsQuery.docs.map(doc => ({
                        id:doc.id,...doc.data()
                    }));
                    setPosition(positionsData);
                }catch(error){
                    showToastError(error);
                }
            }
        }
        fetchPositionsData();
    },[positions]);

    
    const showTeamPositions = () => (
        positions ?
            positions.map((pos,i)=>(
                <TableRow key={i}>
                    <TableCell>{i+1}</TableCell>
                    <TableCell>{pos.team}</TableCell>
                    <TableCell>{pos.w}</TableCell>
                    <TableCell>{pos.d}</TableCell>
                    <TableCell>{pos.l}</TableCell>
                    <TableCell>{pos.pts}</TableCell>
                </TableRow>
            ))
        :null
    )

    return(
        <div className="league_table_wrapper">
            <div className="title">
                League Table 
            </div>
            <div>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Pos</TableCell>
                            <TableCell>Team</TableCell>
                            <TableCell>W</TableCell>
                            <TableCell>L</TableCell>
                            <TableCell>D</TableCell>
                            <TableCell>Pts</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        { showTeamPositions()}
                    </TableBody>
                </Table>
            </div>
        </div>
    )

} 

export default LeagueTable;