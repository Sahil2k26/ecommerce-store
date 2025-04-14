"use client"
import { PreviewModal } from "@/components/preview-modal";
import { useEffect, useState } from "react";

export function ModalProvider(){
    const [isMounted,setMounted]=useState(false)
    useEffect(()=>{
        setMounted(true)
    },[])
    if(!isMounted) return null;
    return <>
        <PreviewModal />
    </>

}