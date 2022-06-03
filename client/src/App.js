import { useQuery } from '@apollo/client';
import { useEffect, useState } from 'react';
import './App.css';
import {GET_ALL_USERS} from "./query/user.js"

function App() {
   const {data,loading,error} = useQuery(GET_ALL_USERS)
  const [users, setUsers] = useState([]);
console.log(data)
  useEffect(() => {
    if(!loading){
      setUsers(data.getAllUsers)
    }
    if(loading){
      return <h1>loading ....</h1>
    }
  },[data]);



  return (
    <div className="App">
 <form>
   <input type="text"></input>
   <input type="number"></input>
   <div >
     <button className='button'> create</button>
     <button className='button'> Recieve</button>
   </div>
 </form>
 <div>
 {users.map(user=>
<div className='user' key={user.id}>{user.id}.{user.username}.{user.age}</div>
 )}
 </div>
    </div>

  );
}

export default App;
