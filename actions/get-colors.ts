
import { BASE_URL } from "@/config/base";
import { Color } from "@/config/types"
import axios from "axios"

const url = `${BASE_URL}/colors`
const getColors = async (): Promise<Color[]> => {
    const res = await axios.get(url);
    return res.data.colors
}
export default getColors