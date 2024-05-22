import { useState } from 'react'
import './App.css'
import boardLogo from './assets/board.svg'
import chatLogo from './assets/chat.svg'
import creditLogo from './assets/credits.svg'
import logo from './assets/logo.svg'
import search from './assets/search.svg'
import sina from './assets/sina.jpg'
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
      <div className='searchInputDiv'>
        <img src={search}></img>
        <input className='searchFriends' type='search' placeholder='Search your friends'></input>
      </div>
      <div className='soccerMom'>
      <div className='DMreceiver'>
        <p>Chat with</p>
        <h2>Hansel Patel</h2>
      </div>
      <div className='messages'>
        <InboundMessage time="10:12am" message="Hey Sina, just making sure, you would like Sina, not Jared."></InboundMessage>
        <OutboundMessage time="12:58pm" message="Yes, it is Sina. Sorry for the confusion."></OutboundMessage>
        <InboundMessage time="2:35am" message="Well, well, well. Sina, How- how do I explain this. I have to leave the country and go far away IMEDIATLY! Your promoted to the CEO. "></InboundMessage>
        <div className='messageInputDiv'>
        <img class='pfp'src={sina}></img>
        <input className='messageInput' type='search' placeholder='Type your message here'></input>
        </div>
      </div>
    
    </div>
      
    </div>
  )
}
const InboundMessage = ({message, time})=>{
  return(
  <div className='incomingDMoutside'>
    <div className='incomingDM'>
      <p>{message}</p>
    </div>
    <sub>{time}</sub>
  </div>
  )
  
}
const OutboundMessage = ({message, time})=>{
  return(
  <div className='outgoingDMoutside' >
    <div className='outgoingDM'>
      <p>{message}</p>
    </div>
    <div className='pluh'>
      <sub>{time}</sub>
    </div>
    
  </div>
  )
  
}
export default App
