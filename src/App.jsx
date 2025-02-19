import './App.css';
import { useAuth0 } from '@auth0/auth0-react';

function App() {

  const { user } = useAuth0();
  console.log("current user : ",user);

  return (
    <>
      <p className='text-red-500'>Hello</p>
    </>
  )
}

export default App