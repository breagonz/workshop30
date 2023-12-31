import {myData} from "../apiRequests"
import { useNavigate } from "react-router-dom"

const Authenticate = ({username, password, token}) => {
    const navigate = useNavigate()

    async function handleAuthenticate() {
        const data = await myData(token)
        console.log(data)
        navigate("/")
    }

    return (
        <div>
            <p>Confirm that information is correct.</p>
            <p>Username: {username}</p>
            <p>Password: {password}</p>
            <button onClick={handleAuthenticate}>Confirm</button>
        </div>
    )
}

export default Authenticate