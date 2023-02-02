export default function Game(props){
    return(
        <>


            <div className="position-relative">
                <button className="btn text-white border border-3 border-dark px-3 py-2 mt-5 return-btn" onClick={props.startGame}><h2>Show home page.</h2></button>
            </div>
        </>
        
    )
}