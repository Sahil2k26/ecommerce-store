
import { BASE_URL } from "@/config/base";
import { Size } from "@/config/types"
import axios from "axios"

const url = `${BASE_URL}/sizes`
const getSizes = async (): Promise<Size[]> => {
    const res = await axios.get(url);
    return res.data.sizes
}
export default getSizes