import React,{useContext} from 'react'
import userContext from '../Context/userContext'
function Profile() {
    const {user}= useContext(userContext);
 if(!user) return <div>Please login</div>

    return <div>Welcome {user.username}</div>
}

export default Profile