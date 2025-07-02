"use client"

import axios from "axios"
import { Currency } from "./ui/currency"
import { Button } from "./ui/button"
import useCart from "@/hooks/use-cart"
import { useSearchParams } from "next/navigation"
import { useEffect } from "react"
import toast from "react-hot-toast"
import { BASE_URL } from "@/config/base"


export function OrderSummary() {
    const items = useCart((state) => state.items);
    const removeAll = useCart((state) => state.removeAll)
    const searchParams = useSearchParams()

    useEffect(() => {
        if (searchParams.get("success")) {
            toast.success("Payment Successfull! ")
            removeAll();
        }
        if (searchParams.get("canceled")) {
            toast.error("Payment Unsuccessfull")
        }
    }, [searchParams, removeAll])

    const totalPrice = items.reduce((total, item) => { return total + Number(item.price) }, 0);
    const onCheckOut = async () => {
        const res = await axios.post(`${BASE_URL}/checkout`, {
            productIds: items.map((item) => item.id)
        })
        removeAll();
        toast.success("Order created successfuly!")

        //window.location=res.data.url;
    }

    return (
        <div className="mt-16 rounded-lg bg-gray-50 px-4 py-6 sm:p-6 lg:col-span-5 lg:p-8 ">
            <h2 className="text-lg font-semibold text-gray-900 ">Order Summary</h2>
            <div className="mt-4 space-y-4">
                <div className="flex items-center justify-between border-t border-gray-200 pt-4">
                    <div className="text-base font-medium text-gray-900">
                        Order Total
                    </div>
                    <Currency value={totalPrice} />
                </div>
                <Button className="w-full mt-6 rounded-2xl py-5 px-2 "
                    onClick={onCheckOut}
                    disabled={items.length === 0}
                >
                    Checkout
                </Button>

            </div>

        </div>
    )
}