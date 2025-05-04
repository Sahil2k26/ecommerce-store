import getBillboard from "@/actions/get-billboard";
import getBillboards from "@/actions/get-billboards";
import getProducts from "@/actions/get-products";
import { Billboard } from "@/components/billboard";
import ProductList from "@/components/product-list";
import Container from "@/components/ui/container";

export const revalidate = 0; // 0 means no revalidation, 1 means revalidate every second, etc.
export default async function HomePage() {
  const products=await getProducts({ isFeatured: true });
  const res=await getBillboards();
  const data=res[0];
  return(
    <Container>
      <div className="space-y-10 pb-10">
        <Billboard data={data} />
        <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
          <ProductList title="Featured Products" items={products}></ProductList>
        </div>
      </div>
    </Container>
  )
}