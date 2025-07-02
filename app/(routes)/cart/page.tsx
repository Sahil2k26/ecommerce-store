"use client"

import { CartItem } from "@/components/cart-item"
import { OrderSummary } from "@/components/order-summary"
import Container from "@/components/ui/container"
import useCart from "@/hooks/use-cart"
import { ShoppingCartIcon } from "lucide-react"
import { useEffect, useState } from "react"

export default function CartPage() {
    const [isMounted, setMounted] = useState(false)
    const cart = useCart();
    useEffect(() => {
        setMounted(true)
    }, [])
    if (!isMounted) return null;
    return (
        <div className="bg-white">
            <Container>
                <div className="px-4 py-16 sm:px-6 lg:px-8">
                    <div className="flex items-center gap-x-2">
                        <h1 className="text-3xl font-bold ">Shopping Cart</h1>
                        <ShoppingCartIcon className="h-10 w-10" />
                    </div>
                    <div className="mt-12 lg:grid lg:grid-cols-12 lg:items-start gap-x-12 ">
                        <div className="lg:col-span-7">
                            {cart.items.length == 0 && <p className="text-neutral-500 ">No items added to cart</p>}
                            <ul>
                                {cart.items.map((item) => (
                                    <CartItem
                                        key={item.id}
                                        data={item}
                                    ></CartItem>
                                ))}
                            </ul>
                        </div>
                        <OrderSummary />
                    </div>

                    <div>

                    </div>


                </div>
            </Container>

        </div>
    )
}
