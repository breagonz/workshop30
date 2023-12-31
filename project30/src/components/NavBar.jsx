import {Link} from "react-router-dom"

const NavBar = ({token, setToken, user}) => {

    return (
        <div className="navbar">
            <span>Stranger's Things</span>
            <Link to="/">Home</Link>
            <Link to="/posts">Posts</Link>
            
            {token && user &&
            <div className="loginRegister">
                <Link to="/profile">Profile</Link>
                <Link onClick={() => {setToken(null)}} to="/login">Sign out</Link>
                <span>Logged in as {`${user.username}`}</span>
            </div>
            }

            {!token && (
                <div className="loginRegister">
                    <Link to="/login">Sign in</Link>
                    
                    <Link to="/register">Sign up</Link>
                </div>
            )}
        </div>
    )
}

export default NavBar