import React,{useState} from 'react';
import ShowUsers from './ShowUsers';
export default function GetUsers(){
    const [users,setUsers] = useState([])
    const [isLoading, setLoading] = useState(false)
    const loadUsers = async () => {
        setLoading(true)
        const response = await fetch ("https://api.github.com/users")
        const responseJson = await response.json()
        setUsers(responseJson)
        setLoading(false)
    }
    return(
        <>
            <h1 className='heading'>Ready to get data from API? 😀</h1>
            <ShowUsers users = {users} loadUsers = {loadUsers} Loading={isLoading} />        
        </>
    )
}