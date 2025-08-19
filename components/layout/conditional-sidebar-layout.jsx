"use client"

import { usePathname } from "next/navigation"

// Define routes that should have sidebar (only for non-admin pages)
const SIDEBAR_ROUTES = ["/on-boarding"]

export default function ConditionalSidebarLayout({ children }) {
  const pathname = usePathname()

  // Check if current route should have sidebar
  const shouldShowSidebar = SIDEBAR_ROUTES.some((route) => pathname.startsWith(route))

  // For admin pages, render children directly without any sidebar wrapper
  // Admin pages handle their own sidebar layout
  if (!shouldShowSidebar) {
    return <>{children}</>
  }

  // For non-admin pages that need sidebar, render with basic layout
  return (
    <div className="min-h-screen bg-[#f7f7f7]">
      {children}
    </div>
  )
}
