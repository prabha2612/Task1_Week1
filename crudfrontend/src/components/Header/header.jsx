import "./header.css";
import { useAuth0 } from "@auth0/auth0-react";
function Appheader() {
  const {user, loginWithRedirect, isAuthenticated, logout} = useAuth0();
  return (
    <div className="Appheader">
      {/* <Typography.Title>Customer Success Platform</Typography.Title> */}
      <h1>Customer Success Platform</h1>
      {isAuthenticated && <p className="name">{user.name}</p>}
      {isAuthenticated ? (<button className="button" onClick={(e) => logout()}>Logout</button>) : (<button className="button" onClick={(e) => loginWithRedirect()}>Log In</button>)}
      
    </div>
  );
}

export default Appheader;
