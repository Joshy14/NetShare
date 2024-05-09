import { useState } from 'react'
import './App.css'
import boardLogo from './assets/board.svg'
import chatLogo from './assets/chat.svg'
import creditLogo from './assets/credits.svg'
import logo from './assets/logo.svg'
import search from './assets/search.svg'
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
      <img className="logo"src={logo}></img>
        <ol>
          <li><img className="button" src={boardLogo}></img></li>
          <li><img className="button" src={chatLogo}></img></li>
          <li><img className="button" src={creditLogo}></img></li>
        </ol>
      </div>

  )
}
const Board = ()=>{
  return(
    <div className='board'>
      
      <img src={search}></img>
      <input className='searchFriends' type='search' placeholder='Search your friends'>
      
      </input>
    </div>
  )
}
export default App
