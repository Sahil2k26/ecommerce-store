"use client"
import React from "react"
import { useParams, usePathname } from "next/navigation"
import Link from "next/link"
import { Store, ImageIcon, Grid3X3, Palette, Ruler, ShoppingCart, Package, Settings, ChevronRight, BrainCircuit, HomeIcon } from "lucide-react"

import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarRail,
} from "@/components/ui/sidebar"
import { Category } from "@/config/types"

// Navigation items for the store management
const navigationItems = [
    {
        title: "Dashboard",
        url: "",
        icon: HomeIcon,
        description: "View store analytics and performance",
    },
    {
        title: "Billboards",
        url: "billboards",
        icon: ImageIcon,
        description: "Manage store banners and promotional content",
    },
    {
        title: "Categories",
        url: "categories",
        icon: Grid3X3,
        description: "Organize products into categories",
    },
    {
        title: "Colors",
        url: "colors",
        icon: Palette,
        description: "Define available product colors",
    },
    {
        title: "Sizes",
        url: "sizes",
        icon: Ruler,
        description: "Set up product size options",
    },
    {
        title: "Products",
        url: "products",
        icon: Package,
        description: "Manage your product inventory",
    },
    {
        title: "Orders",
        url: "orders",
        icon: ShoppingCart,
        description: "View and manage customer orders",
    },
    {
        title: "Demand Forecast",
        url: "demand_forecast",
        icon: BrainCircuit,
        description: "Demand Forecast",
    },
    {
        title: "Settings",
        url: "settings",
        icon: Settings,
        description: "Configure store settings",
    },

]


export function AppSidebar({ data }: { data: Category[] }) {

    const pathname = usePathname()
    const routes = data.map((route) => ({
        href: `/category/${route.id}`,
        label: route.name,
        active: pathname === `/category/${route.id}`,
    }))

    return (
        <Sidebar collapsible="offcanvas">
            <SidebarHeader>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton size="lg" asChild>
                            <Link href={"/"} className="flex items-center">
                                <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                                    <Store className="size-4" />
                                </div>
                                <div className="grid flex-1 text-left text-sm leading-tight">
                                    <span className="truncate font-semibold">Home</span>
                                    {/* <span className="truncate text-xs text-muted-foreground">Admin Dashboard</span> */}
                                </div>
                            </Link>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarHeader>

            <SidebarContent>
                <SidebarGroup>
                    <SidebarGroupLabel>Categories</SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {routes
                                .map((item) => {
                                    const href = item.href
                                    const active = item.active
                                    return (
                                        <SidebarMenuItem key={item!.label}>
                                            <SidebarMenuButton asChild isActive={active} className={`${active ? "border-l-2 border-primary rounded-md " : ""}`} >
                                                <Link
                                                    href={href}
                                                    className="flex items-center"
                                                    aria-label={`Navigate to ${item!.label}`}
                                                >




                                                    <span>{item!.label}</span>
                                                    {active && <ChevronRight className="ml-auto size-4 opacity-50" />}
                                                </Link>
                                            </SidebarMenuButton>
                                        </SidebarMenuItem>
                                    )
                                })}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>

                {/* Store Info Section */}
                {/* {storeId && (
          <SidebarGroup>
            <SidebarGroupLabel>Current Store</SidebarGroupLabel>
            <SidebarGroupContent>
              <div className="px-2 py-1.5 text-sm text-muted-foreground">
                <div className="font-medium text-foreground truncate" title={storeName}>
                  {storeName}
                </div>
                <div className="text-xs opacity-70">ID: {storeId}</div>
              </div>
            </SidebarGroupContent>
          </SidebarGroup>
        )} */}
            </SidebarContent>

            <SidebarRail />
        </Sidebar>
    )
}
