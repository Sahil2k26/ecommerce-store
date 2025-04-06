
import { Product } from "@/types"
import axios from "axios"

const url=`${process.env.NEXT_PUBLIC_API_URL}/products`
const getProducts =async ():Promise<Product[]> => {
    const res = await axios.get(url);
    return res.data.categories
}
export default getProducts