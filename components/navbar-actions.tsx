"use client"

import { ShoppingBag } from "lucide-react"
import { Button } from "./ui/button"
import { useEffect, useState } from "react"

export default function NavbarActions() {
    const [isMounted, setIsMounted] = useState(false)
    useEffect(()=>{
        setIsMounted(true)
    },[])

    if(!isMounted) return null

    return (
        <div className="ml-auto flex items-center gap-x-4">
            <Button size={"cartIcon"}  className="flex items-center rounded-full bg-black px-5 py-2">
                <ShoppingBag 
                    size={20}
                    color="white"
                />
                <span className="ml-1 text-sm font-medium text-white">
                    0
                </span>
            </Button>
        </div>
    )
}