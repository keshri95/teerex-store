const BASE_URL = import.meta.env.VITE_API_KEY



export const fetchFromAPI = async () => {
    try {

        const res = await fetch(`${BASE_URL}`)
        const data = await res.json()
        return data;

    } catch (err){
        return err
    }
}
