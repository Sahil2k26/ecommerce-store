import { formatter } from "@/lib/utils";
import { useEffect, useState } from "react";

interface CurrencyProps {
    value: string | number
}
export function Currency({value}: CurrencyProps) {
    const [mounted, setMounted] = useState(false);
    useEffect(()=>{
        setMounted(true);
    },[])
    if(!mounted)  return null;

    return (
        <div className="font-semibold">
            {formatter.format(Number(value))}
        </div>
    )
}