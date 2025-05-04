import { Billboard as BillboardType} from "@/types";
import { AutoCarousel } from "./auto-carousel";

interface BillboardProps {
    data: BillboardType;
}

export function Billboard({ data }: BillboardProps) {
    return (
        <div className="p-4 sm:p-6 lg:p-8 rounded-xl overflow-hidden">
            <AutoCarousel data={data} />
        </div>
    )
}

