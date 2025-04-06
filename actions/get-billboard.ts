import { Billboard } from "@/types"
import axios from "axios"

const url=`${process.env.NEXT_PUBLIC_API_URL}/billboards`
const getBillboard =async (id:string):Promise<Billboard> => {
    const res = await axios.get(`${url}/${id}`);
    return res.data.billboard
}
export default getBillboard