const BASE_URL = "https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/catalogue.json";



export const fetchFromAPI = async () => {
    try {

        const res = await fetch(`${BASE_URL}`)
        const data = await res.json()
        return data;

    } catch (err){
        return err
    }
}




export const searchItems = (data, query) => {
    let result = []

    for(let i=0; i< data.length; i++){
        if(data[i].name.toLowerCase() === query){
            result.push(data[i])
        } else if(data[i].color.toLowerCase() === query){
            result.push(data[i])
        } else if(data[i].type.toLowerCase() === query){
            result.push(data[i])
        } else if(data[i].name.toLowerCase().split(" ").length >1){
            if(data[i].name.toLowerCase().split(" ")[0] === query){

                result.push(data[i])

            } else if(data[i].name.toLowerCase().split(" ")[1]=== query){
                result.push(data[i])
            }
        }
    }

    return result
}