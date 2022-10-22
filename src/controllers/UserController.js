const baseUrl = process.env.base_api_url
const usersUrl = `${baseUrl}users`

export const createUser = async (newUser)=>{
    try{
        await fetch(usersUrl,{
            method:'POST',
            headers:{
                "Content-Type":"application/json"
            },
            body : JSON.stringify(newUser)
        })
    }catch(error){
        console.log(error)
    }
}

export const getUsers = async()=>{
    try{
        const res = await fetch(usersUrl)
        const data = await res.json()
        return data 
    }catch(error){
        console.log(error)
    }
}
