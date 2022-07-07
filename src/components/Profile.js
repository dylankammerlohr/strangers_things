import React, {useState, useEffect} from 'react'

const Profile = () =>{
    let token = ''
    const [myInfo, setMyInfo] = useState({})
    useEffect(()=>{
        token = localStorage.getItem('token')
        async function getMyInfo() {
            const myReturnedInfo = await getProfile(token)
            setMyInfo(myReturnedInfo)
        }
        getMyInfo()
    }, [])
    return(
        <div>
            {'This is profile component'}
        </div>
    )
}

export default Profile