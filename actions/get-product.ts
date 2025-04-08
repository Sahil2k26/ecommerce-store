import { Product } from "@/types"
import axios from "axios"

const url=`${process.env.NEXT_PUBLIC_API_URL}/products`
const getProduct =async (id:string):Promise<Product> => {
    const res = await axios.get(`${url}/${id}`);
    return res.data.product
}
export default getProduct