
import { Product } from "@/types"
import axios from "axios"
import qs from "query-string"
interface Query{
    categoryId?:string
    colorId?:string
    sizeId?:string
    isFeatured?:boolean

    
}

const URL=`${process.env.NEXT_PUBLIC_API_URL}/products`
const getProducts =async (query:Query):Promise<Product[]> => {
    const url=qs.stringifyUrl({
        url:URL,
        query:{
            colorId:query.colorId,
            sizeId:query.sizeId,
            categoryId:query.categoryId,
            isFeatured:query.isFeatured,
        }

    });
    const res = await axios.get(url);
    //console.log(res.data);
    
    return res.data.products
}
export default getProducts