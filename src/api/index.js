
export const COHORT = "2206-FTB-ET-WEB-FT"
export const APIURL = `https://strangers-things.herokuapp.com/api/${COHORT}`

export async function getPosts() {
  const response = await fetch(`${APIURL}/posts`)
  const result = await response.json()
  return result.data.posts
}

export const newPost = async (event) => {
    const token = localStorage.getItem('token')
    const newPostTitle = event.target[0].value
    const newPostDescription = event.target[1].value
    const newPostPrice = event.target[2].value
    const newPostLocation = event.target[3].value
    const newPostDeliver = event.target[4].checked
    const response = await fetch(`${APIURL}/posts`,{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
          },
        body: JSON.stringify({
            post: {
                title: newPostTitle,
                description: newPostDescription,
                price: newPostPrice,
                location: newPostLocation,
                willDeliver: newPostDeliver
            }
        })
    })
    const result = await response.json()
}

export async function registerPerson(event){
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
    localStorage.setItem("token", token)
    const tokenFromStorage = localStorage.getItem("token")
}

export async function loginPerson(username, password){
  const response = await fetch(`${APIURL}/users/login`,
  {
      method: "POST",
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify({
          user: {
            username: username,
            password: password
          }
        })
  })
  const result = await response.json()
  const token = result.data.token
  return token
}

export const getProfile = async(token) => {
    const response = await fetch(`${APIURL}/users/me`, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
          }, 
    })
    const result = await response.json()
    return result
}

export const deletePost = async(token, postID) => {
  const response = await fetch(`${APIURL}/posts/${postID}`, {
    method: 'DELETE', 
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    },
  })
  const result = await response.json()
}

export const sendMessage = async(token, postID, message) => {
  const response = await fetch(`${APIURL}/posts/${postID}/messages`, {
    method: 'POST', 
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    },
    body: JSON.stringify({
      message: {
        content: `${message}`
      }
    })
  })
  const result = await response.json()
}