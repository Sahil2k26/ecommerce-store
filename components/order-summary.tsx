"use client"

import axios from "axios"
import { Currency } from "./ui/currency"
import { Button } from "./ui/button"
import useCart from "@/hooks/use-cart"
import { useSearchParams } from "next/navigation"
import { useEffect, useState } from "react"
import toast from "react-hot-toast"
import { BASE_URL } from "@/config/base"
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"
import { Label } from "./ui/label"
import { Input } from "./ui/input"
import { Loader2, ShoppingCart } from "lucide-react"



export function OrderSummary() {
    const items = useCart((state) => state.items);
    const removeAll = useCart((state) => state.removeAll)
    const searchParams = useSearchParams()
    const [customerName, setCustomerName] = useState("");
    const [phone, setPhone] = useState("");
    const [isLoading, setIsLoading] = useState(false);


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
        if (!customerName || !phone || items.length === 0) {
            toast.error("Please fill in all required fields.");
            return;
        }
        setIsLoading(true);
        try {
            const response = await axios.post(`${BASE_URL}/checkout`, {
                customerName,
                phone,
                orderType: "ONLINE",
                lineItems: items.map((item) => ({
                    productId: item.id,
                    quantity: 1
                }))
            })
            if (response.status === 201) {
                toast.success("Order created successfully!")
                toast.success("Pickup your order in 20-30 mins from the store.")

            } else {
                toast.error("Failed to create order")
                //alert("Failed to create order")
            }
        }
        catch (error) {
            console.error("Error creating order:", error)
            toast.error("An error occurred while creating the order")
        }
        finally {
            setIsLoading(false);
            removeAll();
            setCustomerName("");
            setPhone("");
        }

        //window.location=res.data.url;
    }

    return (
        <div className="space-y-6 lg:col-span-5">
            <Card>
                <CardHeader>
                    <CardTitle>Customer Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="space-y-2">
                        <Label htmlFor="customerName">Customer Name *</Label>
                        <Input
                            id="customerName"
                            value={customerName}
                            onChange={(e) => setCustomerName(e.target.value)}
                            placeholder="Enter customer name"
                            required
                        />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number *</Label>
                        <Input
                            id="phone"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            placeholder="Enter phone number"
                            required
                        />
                    </div>
                </CardContent>
            </Card>

            <div className="mt-16 rounded-lg bg-gray-50 px-4 py-6 sm:p-6 lg:col-span-5 lg:p-8 ">
                <h2 className="text-lg font-semibold text-gray-900 ">Order Summary</h2>
                <div className="mt-4 space-y-4">
                    <div className="flex items-center justify-between border-t border-gray-200 pt-4">
                        <div className="text-base font-medium text-gray-900">
                            Order Total
                        </div>
                        <Currency value={totalPrice} />
                    </div>
                    <Button disabled={isLoading} onClick={onCheckOut} className="w-full" size="lg">
                        {isLoading ? (
                            <>
                                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                Processing...
                            </>
                        ) : (
                            <>
                                <ShoppingCart className="mr-2 h-4 w-4" />
                                CheckOut
                            </>
                        )}
                    </Button>

                </div>

            </div>
        </div>
    )
}