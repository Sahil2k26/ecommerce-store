import Link from "next/link";
import Container from "@/components/ui/container";
import MainNav from "@/components/ui/main-nav";
import getCategories from "@/actions/get-categories";
import NavbarActions from "./navbar-actions";
export const revalidate = 0; // Disable revalidation for this component


export default async function Navbar(){
    const categories = await getCategories();
    
    
    return (
       <div className="border-b">

        <Container>
            <div className="relative px-4 sm:px-6 lg-px-8 flex h-16 items-center">
            <Link href="/" className=" ml-4 lg:ml-0 flex items-center gap-x-2 py-4 ">
                <p className="font-bold text-xl">STORE</p>
            </Link>
            <MainNav  data={categories}/>
            <NavbarActions/>
            </div>
        </Container>

       </div>
    )
}