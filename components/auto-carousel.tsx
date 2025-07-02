// components/AutoCarousel.tsx
"use client";

import * as React from "react";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import useEmblaCarousel from "embla-carousel-react";
import { Billboard } from "@/config/types";
//import { useEmblaCarousel } from "embla-carousel-react";

interface AutoCarouselProps {
  data: Billboard
  interval?: number; // interval in ms
}

export function AutoCarousel({ data, interval = 1000 }: AutoCarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true })
  console.log(data);


  React.useEffect(() => {
    if (!emblaApi) return;

    const timer = setInterval(() => {
      if (emblaApi.canScrollNext()) {
        emblaApi.scrollNext();
      } else {
        emblaApi.scrollTo(0); // loop to beginning
      }
    }, interval);


    return () => clearInterval(timer);
  }, [emblaApi, interval]);

  return (
    <Carousel opts={{ loop: true }} className="" >
      <CarouselContent ref={emblaRef}>
        {data.images.map((image, idx) => (
          <CarouselItem key={idx} className="flex justify-center items-center">
            {/* <img
              src={image.url}
              alt={`Slide ${idx + 1}`}
              className="sm:h-64 lg:min-h-96  bg-cover bg-center  rounded-xl relative aspect-square  sm:aspect-[2.5/1]  lg:aspect-[3/1] overflow-hidden"
            /> */}
            <div
              style={{ backgroundImage: `url(${image.url})` }}
              className=""
              role="img"
              aria-label={`Slide ${idx + 1}`}
            >
              <div className="h-full w-full flex flex-col justify-center items-center text-center gap-y-8 ">
                {data.toShowLabel && <div className="font-bold text-3xl sm:text-3xl lg:text-6xl sm:max-w-xl max-w-xs">
                  {data.label}!
                </div>
                }

              </div>


            </div>


          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
