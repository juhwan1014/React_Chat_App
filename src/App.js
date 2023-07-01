import React , {useState , useRef} from 'react';
import './App.css';
import { Auth } from './components/Auth'
import { Chat } from './components/Chat'

import Cookies from "universal-cookie"

const cookies = new Cookies();

function App() {

   const [isAuth, setIsAuth] = useState(cookies.get("auto-token"));
   const [room, setRoom] = useState(null);
   const roomInputRef = useRef("")
  
   if(!isAuth){

      return (<div>
                <Auth setIsAuth={setIsAuth} />
             </div>)
             }


      return (
       
         <div className="App">
          {room ? (<div><Chat room = {room} /></div>) 
          
          :
          
          (<div className="room">
            <label>Enter Room Name :</label>
            <input ref = {roomInputRef} />
            <button onClick={() => setRoom(roomInputRef.current.value) }>Enter Chat</button>
         
          </div>  )
           }

           
           </div>
  );
    
}

export default App;