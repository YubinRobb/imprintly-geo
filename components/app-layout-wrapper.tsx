"use client"

import { usePathname } from "next/navigation"
import { MarketingLayout } from "./marketing-layout"
import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar"
import { AppSidebar } from "./app-sidebar"

interface AppLayoutWrapperProps {
  children: React.ReactNode
}

// Define which routes should use the dashboard layout with sidebar
const DASHBOARD_ROUTES = [
  "/dashboard",
  "/generate",
  "/keywords",
  "/library",
  "/analytics",
  "/campaigns",
  "/batch",
  "/settings",
  "/tools"
]

// Define marketing/landing page routes
const MARKETING_ROUTES = [
  "/",
  "/about",
  "/features", 
  "/pricing",
  "/contact",
  "/blog"
]

export function AppLayoutWrapper({ children }: AppLayoutWrapperProps) {
  const pathname = usePathname()
  
  // Check if current route should use dashboard layout
  const isDashboardRoute = DASHBOARD_ROUTES.some(route => 
    pathname === route || pathname.startsWith(route + "/")
  )
  
  // Check if current route is marketing page
  const isMarketingRoute = MARKETING_ROUTES.includes(pathname)
  
  // For dashboard routes, use sidebar layout
  if (isDashboardRoute) {
    return (
      <SidebarProvider>
        <AppSidebar />
        <SidebarInset>
          {children}
        </SidebarInset>
      </SidebarProvider>
    )
  }
  
  // For marketing routes and any other routes, use marketing layout
  return (
    <MarketingLayout>
      {children}
    </MarketingLayout>
  )
}
