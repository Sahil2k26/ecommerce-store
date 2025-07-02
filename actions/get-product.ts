import { BASE_URL } from "@/config/base";
import { Product } from "@/config/types"
import axios from "axios"

const url = `${BASE_URL}/products`
const getProduct = async (id: string): Promise<Product> => {
    const res = await axios.get(`${url}/${id}`);
    return res.data.product
}
export default getProduct