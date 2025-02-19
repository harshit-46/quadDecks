import './App.css';
import { useAuth0 } from '@auth0/auth0-react';
import HomePage from './components/Homepage';

function App() {

  const { user , loginWithRedirect , isAuthenticated , logout} = useAuth0();
  console.log("current user : ",user);

  return (
    <>
    <HomePage/>
    {isAuthenticated && <h3>Hello , {user.name}</h3>}
    {
        isAuthenticated ? <button onClick={ (e) => {logout()}}>Logout</button> : <button onClick={ (e) => loginWithRedirect()}>Login</button>
    }
    </>
  )
}

export default App