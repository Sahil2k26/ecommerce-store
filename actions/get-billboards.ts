import { Billboard } from "@/types"
import axios from "axios"

const url=`${process.env.NEXT_PUBLIC_API_URL}/billboards`
const getBillboards =async ():Promise<Billboard[]> => {
    const res = await axios.get(url);
    return res.data.billboards
}
export default getBillboards