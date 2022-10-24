const baseUrl = 'http://localhost:3000/api/'


export const createBonus = async (newBonus)=>{
    const bonusUrl = `${baseUrl}bonus`
    try{
        await fetch(bonusUrl,{
            method:'POST',
            headers:{
                "Content-Type":"application/json"
            },
            body : JSON.stringify(newBonus)
        })
    }catch(error){
        console.log(error)
    }
  }

export const getBonus = async()=>{
    const bonusUrl = `${baseUrl}bonus`
    try{
        const res = await fetch(bonusUrl)
        const data = await res.json()
        return data 
    }catch(error){
        console.log(error)
    }
}
