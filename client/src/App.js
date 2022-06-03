import { useQuery, useMutation } from '@apollo/client';
import { useEffect, useState } from 'react';
import './App.css';
import { CREATE_USER } from './mutation/user.js';
import { GET_ALL_USERS, GET_ONE_USER } from "./query/user.js"

function App() {
  const { data, loading, error, refetch } = useQuery(GET_ALL_USERS)
  const { data: oneUser, loading: loadingOneUser, } = useQuery(GET_ONE_USER, {
    variables: {
      id: 1

    }
  })
  const [users, setUsers] = useState([]);
  const [username, setUsername] = useState('');
  const [age, setAge] = useState(0);
  const [newUser] = useMutation(CREATE_USER);
  console.log(data)
  useEffect(() => {
    if (!loading) {
      setUsers(data.getAllUsers)
    }
    if (loading) {
      <h1>loading ....</h1>
    }
  }, [data]);

  const addUser = (e) => {
    e.preventDefault();
    newUser({
      variables: {
        input: {
          username, age
        }
      }
    }).then(({ data }) => {
      console.log(data);
      setUsername(" ");
      setAge(0);
    })
  }
  const getAll = e => {
    e.preventDefault();
    refetch();
  }
  return (
    <div className="App">
      <form>
        <input value={username} onChange={e => setUsername(e.target.value)} type="text"></input>
        <input value={age} onChange={e => setAge(e.target.value)} type="number"></input>
        <div >
          <button onClick={(e) => addUser(e)} className='button'> create</button>
          <button onClick={(e) => getAll(e)} className='button'> Recieve</button>
        </div>
      </form>
      <div>
        {users.map(user =>
          <div className='user' key={user.id}>{user.id}.{user.username}.{user.age}</div>
        )}
      </div>
    </div>

  );
}

export default App;
