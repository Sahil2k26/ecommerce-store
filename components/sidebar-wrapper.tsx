import getCategories from "@/actions/get-categories";
import { AppSidebar } from "./app-sidebar";

export const revalidate = 0; // Disable revalidation for this component
export default async function SidebarWrapper() {
    const categories = await getCategories();
    console.log(categories);
    return (
        <AppSidebar data={categories} />
    )
} 