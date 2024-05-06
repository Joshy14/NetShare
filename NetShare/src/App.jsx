import { useState } from 'react'
import './App.css'
import boardLogo from './assets/board.svg'
import chatLogo from './assets/chat.svg'
import creditLogo from './assets/credits.svg'
import logo from './assets/logo.svg'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='app'>
      <div className='window'>
        <Nav></Nav>
        <Board></Board>
      </div>
    </div>
  )
}
const Nav = ({})=>{
  return(
    <div className='nav'>
      <img  src={logo}></img>
        <ol>
          <li><img src={boardLogo}></img></li>
          <li><img src={chatLogo}></img></li>
          <li><img src={creditLogo}></img></li>
        </ol>
      </div>

  )
}
const Board = ()=>{
  return(
    <div className='board'>
      
    </div>
  )
}
export default App
