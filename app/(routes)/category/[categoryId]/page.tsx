import getCategory from "@/actions/get-category"
import getColors from "@/actions/get-colors"
import getProducts from "@/actions/get-products"
import getSizes from "@/actions/get-sizes"
import { Billboard } from "@/components/billboard"
import Container from "@/components/ui/container"
import { Filter } from "./components/filter"
import ProductList from "@/components/product-list"
import { MobileFilters } from "./components/mobile-filters"

export const revalidate=0

interface CategoryPageProps{
    params:Promise<{categoryId:string}>
    searchParams:Promise<{
        colorId:string
        sizeId:string
    }>
}
export default async function CategoryPage({params,searchParams}:CategoryPageProps){
    const {categoryId}=await params
    const {colorId,sizeId}=await searchParams
    const products=await getProducts({
        categoryId,
        sizeId,
        colorId
    })
    const sizes=await getSizes();
    const colors=await getColors();
    const category=await getCategory(categoryId);

    return (
        <div className="bg-white">
            <Container>
                <Billboard
                    data={category.Billboard}
                />
                <div className="px-4 sm:px-6 lg:px-6 pb-24">
                    <div className="lg:grid lg:grid-cols-5 lg:gap-x-8">
                        <MobileFilters sizes={sizes} colors={colors}/>
                        <div className="hidden md:block ">
                            <Filter name="Sizes" valueKey="sizeId" data={sizes} />
                            <Filter name="Colors" valueKey="colorId" data={colors} />

                        </div>
                        <div className="mt-6 lg:col-span-4 lg:mt-0 ">
                            <ProductList title="" items={products} ></ProductList>
                        </div>
                    </div>

                </div>

               
            </Container>

        </div>
    )


}