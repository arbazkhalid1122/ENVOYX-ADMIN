"use client"
import { 
  FileText, 
  CreditCard, 
  LogOut, 
  Gauge, 
  LineChartIcon as ChartLine,
  Users,
  Building2,
  Shield,
  UserCheck,
  Settings,
  Workflow,
  BarChart3,
  Eye,
  Clock,
  CheckCircle,
  AlertCircle,
  TrendingUp,
  PieChart,
  Activity
} from "lucide-react"
import { usePathname } from "next/navigation"
import UserProfile from "../invoices/user-profile"
import Navigation from "../invoices/navigation"
import Image from "next/image"
import { signOut } from "next-auth/react"

export default function Sidebar({ activeItem, setActiveItem }) {
  const pathname = usePathname()
  const isOnboarding = pathname.includes("/on-boarding")

  const navigationItems = [
    // Home
    { id: "dashboard", label: "Home", icon: Gauge, href: "/dashboard" },
    
    // Invoice financing
    { id: "invoice-financing", label: "Invoice financing", icon: FileText, href: "/invoice-financing", children: [
      { id: "available", label: "Available for financing", icon: Eye, href: "/invoice-financing/available" },
      { id: "under-review", label: "Under review", icon: Clock, href: "/invoice-financing/under-review" },
      { id: "overview-insights", label: "Overview & Insights", icon: BarChart3, href: "/invoice-financing/overview" },
      { id: "history", label: "History", icon: Activity, href: "/invoice-financing/history" },
    ]},
    
    // Reports & Insights
    { id: "reports", label: "Reports & Insights", icon: ChartLine, href: "/reports", children: [
      { id: "overview", label: "Overview", icon: PieChart, href: "/reports/overview" },
      { id: "claims-intelligence", label: "Claims intelligence", icon: TrendingUp, href: "/reports/claims" },
    ]},
    
    // User management
    { id: "user-management", label: "User management", icon: Users, href: "/user-management", children: [
      { id: "businesses", label: "Businesses", icon: Building2, href: "/user-management/businesses" },
      { id: "financiers", label: "Financiers", icon: CreditCard, href: "/user-management/financiers" },
      { id: "insurers-tpas", label: "Insurers & TPAs", icon: Shield, href: "/user-management/insurers" },
      { id: "admin-users", label: "Admin users", icon: UserCheck, href: "/user-management/admins" },
    ]},
    
    // Workflows
    { id: "workflows", label: "Workflows", icon: Workflow, href: "/workflows" },
    
    // Core configuration
    { id: "core-config", label: "Core configuration", icon: Settings, href: "/core-config" },
  ]

  const navigationItem = [{ id: "on-boarding", label: "Onboarding", icon: Gauge, href: "/on-boarding" }]

  return (
    <div className="w-76 bg-white border-r border-[#e4e4e7] h-screen flex flex-col" style={{ backgroundColor: "white" }}>
      {/* Header */}
      <div className="p-6 pb-4 bg-white">
        {/* Logo */}
        <div className="flex items-center justify-between">
          <Image src="/darkLogo.svg" alt="Drawer Icon" width={100} height={100} />
          <Image src="/drawer.svg" alt="Drawer Icon" width={20} height={20} />
        </div>
      </div>

      {/* Content */}
      <div className="px-6 flex-1 bg-white">
        {/* User Profile - Top */}
        {!isOnboarding && (
          <div className="mb-6">
            <UserProfile name="Admin Dashboard" location="System Administrator" initials="AD" showChevron={true} />
          </div>
        )}

        {/* Navigation */}
        <div className="flex-1">
          <Navigation
            items={isOnboarding ? navigationItem : navigationItems}
            activeItem={activeItem}
            setActiveItem={setActiveItem}
          />
        </div>

        {/* User Profile - Bottom */}
        <div className="mt-auto mb-2">
          <UserProfile name="Admin Dashboard" location="System Administrator" initials="AD" showChevron={true} />
        </div>
      </div>

      {/* Footer */}
      <div className="p-6 bg-white">
        <div className="border-t border-[#e4e4e7] pt-6">
          <button
            onClick={() => signOut({ callbackUrl: '/sign-in' })}
            className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm text-black font-medium hover:bg-[#ee6a5f]/10 transition-colors border border-[#e4e4e7] rounded-full w-[fit-content]"
          >
            <LogOut className="w-4 h-4 text-[#ee6a5f]" />
            Logout
          </button>
        </div>
      </div>
    </div>
  )
}
