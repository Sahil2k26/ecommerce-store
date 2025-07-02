import { BASE_URL } from "@/config/base";
import { Billboard } from "@/config/types"
import axios from "axios"

const url = `${BASE_URL}/billboards`
const getBillboard = async (id: string): Promise<Billboard> => {
    const res = await axios.get(`${url}/${id}`);
    return res.data.billboard
}
export default getBillboard