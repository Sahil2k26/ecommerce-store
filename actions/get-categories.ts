
import { BASE_URL } from "@/config/base";
import { Category } from "@/config/types"
import axios from "axios"

const url = `${BASE_URL}/categories`
const getCategories = async (): Promise<Category[]> => {
    const res = await axios.get(url);
    return res.data.categories
}
export default getCategories