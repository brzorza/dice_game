import React from "react"

export default function MainPage(props) {
    return(
        <div>
            <div className="container pt-5">
                <div className="text-center pt-5">
                    <h1 className="b" style={{fontSize: '7em'}}>Welcome<br/>to<br/>Dice Game !!!</h1>
                    <button 
                        className="btn text-white border border-3 border-dark px-3 py-2 mt-5"
                        onClick={props.startGame}
                    >
                        <h2>Start Game</h2>
                    </button>
                </div>
            </div>
        </div>
    )
}