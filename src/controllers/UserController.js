const baseUrl = 'http://localhost:3000/api/'

export const createUser = async (newUser)=>{
    const usersUrl = `${baseUrl}users`
    try{
        const res = await fetch(usersUrl,{
            method:'POST',
            headers:{
                "Content-Type":"application/json"
            },
            body : JSON.stringify(newUser)
        })
        const data = await res.json()
        return data
    }catch(error){
        console.log(error)
    }
}

export const getUsers = async()=>{
    const usersUrl = `${baseUrl}users`
    try{
        const res = await fetch(usersUrl)
        const data = await res.json()
        return data 
    }catch(error){
        console.log(error)
    }
}

export async function getStaticProps() {
    // Using the variables below in the browser will return `undefined`. Next.js doesn't
    // expose environment variables unless they start with `NEXT_PUBLIC_`
    
    return { props: {} }
}