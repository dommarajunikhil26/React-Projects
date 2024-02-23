import { useState, useEffect } from 'react';
import Tile from "./Tile";
import './Box.css';

const Box = () => {
    const [tiles, setTiles] = useState(["","","","","","","","",""]);
    const [go, setGo] = useState("circle");
    const [winningMessage, setWinningMessage] = useState(null);

    console.log(tiles);

    const checkScore = () => {
        const winingCombos = [
            [0,1,2], [3,4,5], [6,7,8],
            [0,3,6], [1,4,7], [2,5,8],
            [0,4,8], [2,4,6]
        ]

        winingCombos.forEach(array => {
            let circleWins = array.every(tile => tiles[tile] === "circle");

            if(circleWins){
                console.log("Circle wins");
                setWinningMessage("Circle Wins");
                return
            }
        })

        winingCombos.forEach(array => {
            let crossWins = array.every(tile => tiles[tile] === "cross");

            if(crossWins){
                setWinningMessage("Cross Wins");
                return
            }
        })
    }
    useEffect(() => {
        checkScore();
    },[tiles])

    const message = "Its now " + go + " 's turn.";
    return (
        <div className="box">
            {tiles.map((tile, index) => 
                <Tile 
                    key={index} 
                    id={index} 
                    setTiles={setTiles} 
                    go={go} 
                    setGo={setGo}
                    tiles={tiles}
                    winningMessage={winningMessage}
                />
            )}
            <div>
                {<h1>{winningMessage || message} </h1>}
            </div>
        </div>
    )
}

export default Box;