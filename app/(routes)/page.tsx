import getBillboard from "@/actions/get-billboard";
import { Billboard } from "@/components/billboard";
import Container from "@/components/ui/container";

export const revalidate = 0; // 0 means no revalidation, 1 means revalidate every second, etc.
export default async function HomePage() {
  const data=await getBillboard("cm95u4hma0002eydcn3qt62ka");
  return(
    <Container>
      <div className="space-y-10 pb-10">
        <Billboard data={data} />
      </div>
    </Container>
  )
}