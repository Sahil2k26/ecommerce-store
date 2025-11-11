import Link from "next/link";
import Container from "@/components/ui/container";
import NavbarActions from "./navbar-actions";
import { ShoppingBasket } from "lucide-react";
import { MobileSideBar } from "./mobile-sidebar";
export const revalidate = 0; // Disable revalidation for this component


export default async function Navbar() {



    return (
        <div className="border-b">

            <Container>
                <div className="relative px-4 sm:px-6 lg-px-8 flex h-16 items-center">
                    <MobileSideBar />
                    <Link href="/" className=" ml-4 lg:ml-0 flex items-center gap-x-2 py-4 ">
                        <div className="md:font-bold md:text-xl flex gap-x-2 items-center sm:text-sm text-pretty font-semibold">
                            {process.env.StoreName}
                            <ShoppingBasket />
                        </div>
                    </Link>
                    {/* <MainNav data={categories} /> */}
                    <NavbarActions />
                </div>
            </Container>

        </div>
    )
}