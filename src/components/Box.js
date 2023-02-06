import React from "react"

export default function Box(props) {
    const [isShown, setIsShown] = React.useState(true)
    function toggleShown(){
        setIsShown(prevShown => !prevShown)
    }

    function combineFunctions(){
        if(props.canClick === true && props.num <= props.dices){
            props.handleClick(props.num)
            toggleShown()
        }else{
            alert("Cant do this!")
        }
    }
    return (
        <div>
            {isShown && 
                <div key={props.key} onClick={combineFunctions} className="border border-3 border-dark py-1 px-4">
                    <h1>{props.num}</h1>
                </div>
            }
        </div>
    )
}
