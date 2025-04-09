
import { Category } from "@/types"
import axios from "axios"

const url=`${process.env.NEXT_PUBLIC_API_URL}/categories`
const getCategory =async (id:string):Promise<Category> => {
    const res = await axios.get(`${url}/${id}`);
    return res.data.category
}
export default getCategory