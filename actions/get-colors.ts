
import {Color } from "@/types"
import axios from "axios"

const url=`${process.env.NEXT_PUBLIC_API_URL}/colors`
const getColors =async ():Promise<Color[]> => {
    const res = await axios.get(url);
    return res.data.colors
}
export default getColors