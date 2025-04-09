
import {Size } from "@/types"
import axios from "axios"

const url=`${process.env.NEXT_PUBLIC_API_URL}/sizes`
const getSizes =async ():Promise<Size[]> => {
    const res = await axios.get(url);
    return res.data.sizes
}
export default getSizes