import { useState } from 'react'
import './App.css'
import boardLogo from './assets/board.svg'
import chatLogo from './assets/chat.svg'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Nav></Nav>
      <Board></Board>
    </div>
  )
}
const Nav = ({})=>{
  return(
    <div className='nav'>
        <ol>
          <li><img src={boardLogo}></img></li>
          <li><img src={chatLogo}></img></li>
          <li><a>Credits</a></li>
          <li><a>OpenBoard<sup>TM</sup></a></li>
        </ol>
      </div>

  )
}
const Board = ()=>{
  return(
    <div>
      <h1>OpenBoard<sup>TM</sup></h1>
    </div>
  )
}
export default App
