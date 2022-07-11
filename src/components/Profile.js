import React, {useState, useEffect} from 'react'
import { getProfile } from '../api'

const Profile = () =>{
    // let token = localStorage.getItem('token')
    const [myInfo, setMyInfo] = useState({})
    console.log(myInfo, 'myinfo')
    useEffect(()=>{
        let token = localStorage.getItem('token')
        async function getMyInfo() {
            const myReturnedInfo = await getProfile(token)
            console.log(myReturnedInfo, 'profile returned info')
            setMyInfo(myReturnedInfo)
        }
        getMyInfo()
    }, [])
    return(
        <div>
            {myInfo.map((post, index) => {
              
                return (
                    <div key={index}>
                        <h2>{post.messages}</h2>
                        {/* <p>{post.posts.title}</p> */}
                    </div>
                )
            })}
        </div>
    )
}

export default Profile