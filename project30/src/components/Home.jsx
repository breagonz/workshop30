import { useEffect } from "react"
import { Link } from "react-router-dom"
import { myData } from "../apiRequests"

const Home = ({token, user, setUser, navigate}) => {

    useEffect(() => {
        const getMyData = async () => {
            setUser(await myData(token))
        }
        getMyData()
        }, [])

    return (
        <div className="home">
            <h1>Stranger's Things</h1>
            {token && user
            ?
            <div>
                <h2>Logged in as {`${user.username}`}</h2>
                <button onClick={() => {navigate("/profile")}}>View Profile</button>
            </div>
            :
            <p><Link to="/login">Log in</Link> or <Link to="/register">register a new account</Link> </p>}
        </div>
    )
}

export default Home