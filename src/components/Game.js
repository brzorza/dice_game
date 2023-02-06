import React from "react"
import Box from "./Box"

export default function Game(props){

    const[stats, setStats] = React.useState({
        toBeat: 45,
        diceOne: 0,
        diceTwo: 0,
        dices: 0,
        canClick: false,
        canRoll: true,
        clickCount: 0
    })

    function handleClick(x) {
        setStats(prevStats =>{
            return {
                ...prevStats,
                toBeat: stats.toBeat - x,
                dices: stats.dices - x,
                clickCount: stats.clickCount - 1
            }
        })
    }

    const rows = [];
    function createBoxes(){
        for(let i = 1; i <= 9; i++){
                rows.push(<Box 
                    key={i}
                    num={i}
                    canClick={stats.canClick}
                    dices={stats.dices}
                    handleClick={handleClick}
                />)
        }
    }
    createBoxes();

    function rollDices(){
        if(stats.canRoll === true){
            let firstDice = Math.floor(Math.random() * 6)+1;
            let secondDice = Math.floor(Math.random() * 6)+1;

            setStats(prevStats => {
                return {
                    ...prevStats,
                    diceOne: firstDice,
                    diceTwo: secondDice,
                    dices: firstDice + secondDice,
                    canClick: true,
                    canRoll: false,
                    clickCount: 2
                }
            })
        }else{
            alert("Cannot roll")
        }
    }

    return(
        <>
            <div id="boxes" className="d-flex pt-5 gap-5 justify-content-center">
                {rows}
            </div>
            <div className="d-flex justify-content-center gap-5 mt-5">
                <h1 className="">{stats.diceOne}</h1>
                <h1 className="">{stats.diceTwo}</h1>
                <button className="btn border border-3 border-dark text-white b" onClick={rollDices}><h1>Roll dices!</h1></button>
            </div>
            <h2>total to beat: {stats.toBeat}</h2>
            <h2>To beat: {stats.dices}</h2>
            <h2>Available clicks: {stats.clickCount}</h2>
            <button className="btn text-white border border-3 border-dark px-3 py-2 return-btn" onClick={props.startGame}><h2>Show home page.</h2></button>
        </>
        
    )
}