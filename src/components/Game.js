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
        if(stats.dices - x < 0){
            alert("You can not pick this number because it is smaller than what you have to beat")
        }else{
        setStats(prevStats =>{
            return {
                ...prevStats,
                toBeat: stats.toBeat - x,
                dices: stats.dices - x,
                clickCount: stats.clickCount - 1
            }
        })}

        if(stats.dices === 0 ){
            setStats(prevStats =>{
                return{
                    ...prevStats,
                    clickCount: 0,
                    canClick: false,
                    diceOne: 0,
                    diceTwo: 0
                }
            })
        }
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
                    clickCount={stats.clickCount}
                />)
        }
    }
    createBoxes();

    function rollDices(){
        if(stats.dices === 0){
            let firstDice = Math.floor(Math.random() * 6)+1;
            let secondDice = Math.floor(Math.random() * 6)+1;

            setStats(prevStats => {
                return {
                    ...prevStats,
                    diceOne: firstDice,
                    diceTwo: secondDice,
                    dices: firstDice + secondDice,
                    canClick: true,
                    clickCount: 2
                }
            })
        }else{
            alert("Cannot roll")
        }
    }

    

    return(
        <>
            {stats.toBeat === 0 && stats.dices ===0 && <div className="position-absolute asdfagfasf w-100 b text-center pt-5" style={{fontSize: "120px"}}>You have won congratulations!!!</div> }
            <div id="boxes" className="d-flex pt-5 gap-5 justify-content-center">
                {rows}
            </div>
            <div className="d-flex justify-content-center gap-5 mt-5">
                <h1 className="">{stats.diceOne}</h1>
                <h1 className="">{stats.diceTwo}</h1>
                <button className="btn border border-3 border-dark text-white b" onClick={rollDices}><h1>Roll dices!</h1></button>
            </div>
            <h4>total to beat: {stats.toBeat}</h4>
            <h4>To beat: {stats.dices}</h4>
            <h4>Available clicks: {stats.clickCount}</h4>
            <button className="btn text-white border border-3 border-dark px-3 py-2 return-btn" onClick={props.startGame}><h2>Show home page.</h2></button>
        </>
        
    )
}