"use client"

import { usePathname } from "next/navigation"
import { SidebarProvider, SidebarTrigger, SidebarInset } from "@/components/ui/sidebar"
import Sidebar from "@/components/layout/sidebar"
import { Menu } from "lucide-react"

// Define routes that should have sidebar
const SIDEBAR_ROUTES = ["/on-boarding", "/dashboard", "/invoices"]

export default function ConditionalSidebarLayout({ children }) {
const pathname = usePathname()

  // Check if current route should have sidebar
  const shouldShowSidebar = SIDEBAR_ROUTES.some((route) => pathname.startsWith(route))

  // If no sidebar needed, render children directly
  if (!shouldShowSidebar) {
    return <>{children}</>
  }

  // If sidebar needed, wrap with SidebarProvider
  return (
    <SidebarProvider>
      <Sidebar />
      <SidebarInset>
        {/* Mobile header with trigger */}
        <div className="md:hidden flex items-center p-4 bg-white border-b border-[#e4e4e7] sticky top-0 w-full">
          <SidebarTrigger className="mr-4">
            <Menu className="h-6 w-6" />
          </SidebarTrigger>
          <h1 className="text-lg font-semibold">Menu</h1>
        </div>

        {/* Main content */}
        <main className="flex-1 w-full bg-[#f7f7f7] pl-0 sm:pl-10">{children}</main>
      </SidebarInset>
    </SidebarProvider>
  )
}
