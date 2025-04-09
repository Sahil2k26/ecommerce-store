"use client"
import {Tab, TabGroup, TabList, TabPanel, TabPanels} from "@headlessui/react"
import { Image as ImageType } from "@/types"
import { GalleryTab } from "./gallery-tab"
import Image from "next/image"

export function Gallery({images}:{images:ImageType[]}){

    return (
        <TabGroup as="div" className="flex flex-col-reverse">
            <div className="mx-auto mt-6 hidden w-full max-w-2xl sm:block lg:max-w-none">
                
                <TabList className="grid grid-cols-4 gap-6">
                    {
                        images.map((image)=>(
                            <GalleryTab key={image.id} image={image}></GalleryTab>
                        ))
                    }
                </TabList>
                
            </div>
            <TabPanels className="aspect-square sm:aspect-[1.8/1] w-full ">
                    {images.map((image)=>{
                        return <TabPanel key={image.id}>
                            <div className="aspect-square sm:aspect-[1.8/1] relative h-full w-full sm:rounded-lg overflow-hidden">
                                <Image
                                    fill
                                    src={image.url}
                                    alt=""
                                    className="object-contain"
                                ></Image>
                            </div>
                        </TabPanel>
                    })}
                </TabPanels>

        </TabGroup>
    )
}