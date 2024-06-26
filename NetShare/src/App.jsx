import { useState } from 'react'
import './App.css'
import boardLogo from './assets/board.svg'
import chatLogo from './assets/chat.svg'
import creditLogo from './assets/credits.svg'
import logo from './assets/logo.svg'
import search from './assets/search.svg'
import sina from './assets/sina.jpg'
import useWebSocket from 'react-use-websocket'
import Button from '@mui/material/Button'
import SendIcon from '@mui/icons-material/Send'
import Stack from '@mui/material/Stack'
import CssBaseline from '@mui/material/CssBaseline'

// const wsURL = "wss:https://improved-guide-xgrvx9qwv4526v9g-2048.app.github.dev/"

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='app'>
      <CssBaseline></CssBaseline>
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
  const [message, setMessage] = useState("")
  const [messages, setMessages] = useState([])


const send = ()=>{
  //message() = setMessage(e.target.value)
  setMessages([...messages],message)
  console.log(messages)
}
const WS_URL = 'https://improved-guide-xgrvx9qwv4526v9g-8000.app.github.dev/';
useWebSocket(WS_URL, {
  onOpen: () => {
    console.log('WebSocket connection established.');
  }
});
  return(
    <div className='board'>
      <div className='searchInputDiv'>
        <img src={search}></img>
        <input className='searchFriends' type='search' placeholder='Search your friends'></input>
      </div>
      <Stack width={"33%"}>
        <div className='DMreceiver'>
          <p>Chat with</p>
          <h2>Hansel Patel</h2>
        </div>
        <Stack 
        sx={{overflowY:"scroll", scrollbarColor:"#fff"}}
        width={"100%"} 
        height={"85%"}>
          <InboundMessage time="10:12am" message="Hey Sina, just making sure, you would like Sina, not Jared."></InboundMessage>
          <OutboundMessage time="12:58pm" message="Yes, it is  Sina. Sorry for the confusion."></OutboundMessage>
          <InboundMessage time="2:35am" message="Well, well, well. Sina, How- how do I explain this. I have to leave the country and go far away IMEDIATLY! Your promoted to the CEO. "></InboundMessage>
          <OutboundMessage time="9:21am" message="I'm sorry, are you okay? Please just confirm with me that this message is fake."></OutboundMessage>
          <OutboundMessage time="11:12am" message="Hello? I'm starting to worry aout you and our companys safety. Please respond."></OutboundMessage>
          <OutboundMessage time="1:46pm" message="Wow. I just checked Pike13 and it appears my status is ''CEO''. I realy need you to tell me whats happening."></OutboundMessage>
          <div className='messageInputDiv'>
            <img className='pfp'src={sina}></img>
            <input className='messageInput' type='search' placeholder='Type your message here' value = {message} onChange={(e)=>{
            setMessage(e.target.value)
            }}></input>
          {/* <button className='sendButton' onClick={()=>{
              send()
            }}>Send</button> */}
            <Button endIcon={<SendIcon />} size={"small"}sx={{margin:2, backgroundColor:"#fff", borderRadius:"10px"}}>send</Button>
          </div>
      </Stack>
    
    </Stack>
      
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
