import {useState} from 'react';
import './css/styles.css';
import './css/main.min.css';
import '../node_modules/bootstrap/js/index.esm';
import MainPage from './components/MainPage';
import Game from './components/Game';

function App() {

  let [showGame, setShowGame] = useState(false)

  function startGame(){
    setShowGame(prevShowGame => !prevShowGame)
  }

  return(
    <div className='text-white asdfagfasf'>
      {showGame ? <Game startGame={startGame}/> : <MainPage startGame={startGame}/>}
    </div>
  )
}

export default App;
