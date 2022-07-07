
export const COHORT = "2206-FTB-ET-WEB-FT"
export const APIURL = `https://strangers-things.herokuapp.com/api/${COHORT}`


export const getPost = async() => {
    const response = await fetch(`${APIURL}/posts`)
    const result = await response.json()
    // .then(response => response.json())
    // .then(result => {
    console.log(result, 'result');
  }
  console.log(getPost, 'getpost')
//   )
//     .catch(console.error)
// }




// export const UserPost = async (event) => {
    
//     const response = await fetch(`${APIURL}/posts`,{
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json',
//             'Authorization': 'Bearer TOKEN_STRING_HERE'
//           },
//         body: JSON.stringify({
//             post: {
//                 title: "My favorite stuffed animal",
//                 description: "This is a pooh doll from 1973. It has been carefully taken care of since I first got it.",
//                 price: "$480.00",
//                 willDeliver: true
//             }
//         })
//     })
//     console.log(response)
//     const result = await response.json()
//     console.log(result)
// }

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

