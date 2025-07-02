import { Product } from "@/config/types"
import { NoResult } from "./ui/no-result"
import { ProductCard } from "./ui/product-card"

interface ProductListProps {
    title: string
    items: Product[]
}
export default function ProductList({ title, items }: ProductListProps) {

    return (
        <div className="space-y-4">
            <h3 className="font-bold text-3xl ">{title}</h3>
            {
                items.length === 0 && <NoResult />
            }
            <div className="grid gird-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-x-6 gap-y-8 py-6">
                {
                    items.map((item) => (
                        <ProductCard key={item.id} data={item} />
                    ))
                }

            </div>

        </div>
    )

}