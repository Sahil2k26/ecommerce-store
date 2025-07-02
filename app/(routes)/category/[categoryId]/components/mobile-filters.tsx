"use client"

import { Button } from "@/components/ui/button"
import { Color, Size } from "@/config/types"
import { Dialog, DialogPanel } from "@headlessui/react"
import { Plus, X } from "lucide-react"
import { useState } from "react"
import { Filter } from "./filter"

interface MobileFiltersProps {
    sizes: Size[]
    colors: Color[]
}
export function MobileFilters({ sizes, colors }: MobileFiltersProps) {
    const [open, setOpen] = useState(false)
    const onOpen = () => setOpen(true);
    const onClose = () => setOpen(false);
    return (
        <>
            <Button onClick={onOpen} className="flex items-center gap-x-2 px-4 py-5 rounded-2xl font-semibold lg:hidden">
                Filters
                <Plus size={20} ></Plus>
            </Button>
            <Dialog open={open} as="div" className="relative z-40 lg:hidden " onClose={onClose}>
                {/* Background */}
                <div className="fixed inset-0 bg-black/25  " />
                {/* Dialog Positon */}
                <div className="fixed inset-0 z-40 flex">
                    <DialogPanel className="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-6 shadow-xl">
                        {/* Close Button */}
                        <div className="flex items-center justify-end px-4">
                            <Button
                                variant={"outline"}
                                size={"icon"}
                                onClick={onClose}
                                className="rounded-full"
                            >
                                <X size={15}></X>
                            </Button>
                        </div>
                        {/* Render filters */}
                        <div className="p-4">
                            <Filter valueKey="sizeId" name="Sizes" data={sizes} ></Filter>
                            <Filter valueKey="colorId" name="Colors" data={colors}></Filter>

                        </div>

                    </DialogPanel>
                </div>



            </Dialog>
        </>
    )
}