import { BASE_URL } from "@/config/base";
import { Billboard } from "@/config/types"
import axios from "axios"

const url = `${BASE_URL}/billboards`
const getBillboards = async (): Promise<Billboard[]> => {
    const res = await axios.get(url);
    return res.data.billboards
}
export default getBillboards