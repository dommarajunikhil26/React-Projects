import { useEffect, useState } from 'react';
import PlayerCard from '../Helper/playerCard';
import { Slide } from 'react-awesome-reveal';

import {showToastError} from '../Helper/tools'
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../firebase';
import { getStorage, ref, getDownloadURL } from 'firebase/storage';
import { CircularProgress } from '@mui/material';

const TheTeam = () => {
    const [loading,setLoading] = useState(true);
    const [players,setPlayers] = useState(null)



    useEffect(()=>{
        const fetchPlayersdata = async () => {
            if(!players)
            {
                const playerSnapShot = await getDocs(collection(db, 'players'));
                const players = playerSnapShot.docs.map(doc => ({
                    id: doc.id,...doc.data()
                }))
                let promises = [];

                players.forEach((player, index) => {
                    promises.push(
                        new Promise((resolve, reject) => {
                            const storage = getStorage();
                            getDownloadURL(ref(storage, player.image))
                            .then((url) => {
                                players[index].url = url;
                                resolve()
                            }).catch(error => {
                                showToastError("Failed to fetch data", error)
                                reject()
                            })
                        })
                    )
                })
                Promise.all(promises).then(() =>{
                    setPlayers(players);
                })
                setLoading(false);
            }
        }
        fetchPlayersdata();
    },[players])

    const showPlayerByCategory = (category) => (
        players ?
            players.map((player, i) => {
                return player.position === category ?
                    <Slide left key={player.id} triggerOnce>
                        <div className='item'>
                            <PlayerCard 
                                number={player.number}
                                name={player.name}
                                lastname={player.lastname}
                                bck={player.url}
                            />
                        </div>
                    </Slide>
                    : null
            })
        :null
    )


    console.log(players)

    return(
        <div className="the_team_container">
            { loading ?
                <div className="progress">
                    <CircularProgress/>
                </div>
                :
                <div>
                    <div className="team_category_wrapper">
                        <div className="title">Keepers</div>
                        <div className="team_cards">
                            {showPlayerByCategory('Keeper')}
                        </div>
                    </div>

                    <div className="team_category_wrapper">
                        <div className="title">Defence</div>
                        <div className="team_cards">
                            {showPlayerByCategory('Defence')}
                        </div>
                    </div>

                    <div className="team_category_wrapper">
                        <div className="title">Midfield</div>
                        <div className="team_cards">
                            {showPlayerByCategory('Midfield')}
                        </div>
                    </div>

                    <div className="team_category_wrapper">
                        <div className="title">Strikers</div>
                        <div className="team_cards">
                            {showPlayerByCategory('Striker')}
                        </div>
                    </div>


                </div>
            }
        </div>
    )
}

export default TheTeam;