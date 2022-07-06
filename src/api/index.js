
const COHORT = "2206-FTB-ET-WEB-FT"
const APIURL = `https://strangers-things.herokuapp.com/api/${COHORT}/`

const UserPost = async () => {
    const response = await fetch(`${APIURL}/posts`,{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer TOKEN_STRING_HERE'
          },
        body: JSON.stringify({
            post: {
                title: '',
                description: '',
                price: '',
                willDeliver: false,
            }
        })
    })
    const result = await response.json()
    console.log(result)
}

async function registerPerson(event){
    const registerUsername = event.target[0].value
    const registerPassword = event.target[1].value
    const response = await fetch(`${APIURL}/users/register`,
    {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            user: {
              username: registerUsername,
              password: registerPassword
            }
          })
    })
    const result = await response.json()
    const token = result.data.token
    console.log(token)
    localStorage.setItem("token", token)
    const tokenFromStorage = localStorage.getItem("token")
    console.log(tokenFromStorage)
}

