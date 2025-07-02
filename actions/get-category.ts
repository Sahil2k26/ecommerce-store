
import { BASE_URL } from "@/config/base";
import { Category } from "@/config/types"
import axios from "axios"

const url = `${BASE_URL}/categories`
const getCategory = async (id: string): Promise<Category> => {
    const res = await axios.get(`${url}/${id}`);
    return res.data.category
}
export default getCategory