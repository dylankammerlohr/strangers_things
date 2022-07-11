
export const COHORT = "2206-FTB-ET-WEB-FT"
export const APIURL = `https://strangers-things.herokuapp.com/api/${COHORT}`


// export const getPost = async() => {
//     const response = await fetch(`${APIURL}/posts`)
//     const result = await response.json()
//     // .then(response => response.json())
//     // .then(result => {
//     console.log(result, 'result');
//   }
//   console.log(getPost, 'getpost')
// //   )
// //     .catch(console.error)
// // }
export async function getPosts() {
  const response = await fetch(`${APIURL}/posts`)
  const result = await response.json()
  // console.log(result)
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
    console.log(response, 'api index response')
    const result = await response.json()
    console.log(result, 'api index result')
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
    console.log(token)
    localStorage.setItem("token", token)
    const tokenFromStorage = localStorage.getItem("token")
    console.log(tokenFromStorage)
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
  console.log(result, 'api/index result')
  const token = result.data.token
  console.log(token, 'token in api index')
  return token
}

// profile
export const getProfile = async(token) => {
    const response = await fetch(`${APIURL}/users/me`, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
          }, 
    })
    const result = await response.json()
    console.log(result, 'api profile result')
    // const data = result.data
    // console.log(data, 'data')
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
  console.log(result)
}
