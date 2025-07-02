"use client"
import { Product } from "@/config/types";
import { Currency } from "./ui/currency";
import { Circle, ShoppingCart } from "lucide-react";
import { Button } from "./ui/button";
import useCart from "@/hooks/use-cart";
import { MouseEventHandler } from "react";

interface InfoProps {
    data: Product
}
export function Info({ data }: InfoProps) {
    const cart = useCart();
    const onAddToCart: MouseEventHandler<HTMLButtonElement> = (event) => {
        event.stopPropagation()
        cart.addItem(data);
    }
    return (
        <div>
            <h1 className="text-3xl font-bold text-gray-900">{data.name}</h1>
            <div className="mt-3 items-end justify-between">
                <div className="text-2xl text-gray-900">
                    <Currency value={data?.price}></Currency>
                </div>
            </div>
            <hr className="my-4" />
            <div className="flex flex-col gap-y-6 ">
                <div className="flex items-center gap-x-4">
                    <h3 className="font-semibold text-black ">Size:</h3>
                    <div>
                        {data?.size?.name}
                    </div>
                </div>
                <div className="flex items-center gap-x-4">
                    <h3 className="font-semibold text-black ">Color:</h3>
                    <Circle className="h-6 w-6" strokeWidth={2} fill={data?.color?.value}></Circle>
                </div>
            </div>
            <div className="mt-10 flex items-center gap-x-3">
                <Button className="flex items-center gap-x-2 rounded-xl px-3 py-5"
                    onClick={onAddToCart}
                >
                    Add to Cart
                    <ShoppingCart></ShoppingCart>
                </Button>

            </div>



        </div>
    )
}