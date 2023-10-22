import React from 'react';
import './Tile.css';

const Tile = ({id, tile, setTiles, go, setGo, tiles, winningMessage}) => {

    const clickHandler = (e) => {
        const taken = e.target.firstChild.classList.contains("circle") || e.target.firstChild.classList.contains("cross");

        if(!taken) {
            if(go === 'circle') {
                e.target.firstChild.classList.add("circle");
                handleTileChange("circle");
                setGo("cross");
            } 

            if(go === 'cross') {
                e.target.firstChild.classList.add("cross");
                handleTileChange("cross");
                setGo("circle");
            } 
        }
    };

    const handleTileChange = (className) => {
        const nextTiles = tiles.map((tile, index) => {
            if(index === id) {
                return className;
            } else {
                return tile;
            }
        });
        setTiles(nextTiles);
    };

    return (
        <div className="square" id={id} onClick={clickHandler}>
            <div className={tile}></div>
        </div>
    );
};

export default Tile;
