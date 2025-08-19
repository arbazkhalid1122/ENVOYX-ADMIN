"use client"

import { useState } from "react"
import { Bell, MoreHorizontal, MoveUpRight, Search, X, Users, Building2, FileText, TrendingUp, AlertCircle, CheckCircle, Clock, Eye } from "lucide-react"
import { Input } from "@/components/ui/input"
import Sidebar from "./layout/sidebar"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select"
import { Button } from "./ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card"
import { Badge } from "./ui/badge"

export function DashboardContent() {
  const [activeItem, setActiveItem] = useState("dashboard")

  // Mock data for admin dashboard
  const statsData = [
    {
      title: "Total Users",
      value: "1,234",
      change: "+12%",
      changeType: "positive",
      icon: Users,
      description: "Active users this month"
    },
    {
      title: "Businesses",
      value: "89",
      change: "+5%",
      changeType: "positive",
      icon: Building2,
      description: "Registered businesses"
    },
    {
      title: "Pending Invoices",
      value: "156",
      change: "+23%",
      changeType: "negative",
      icon: FileText,
      description: "Awaiting review"
    },
    {
      title: "Revenue",
      value: "$45.2K",
      change: "+18%",
      changeType: "positive",
      icon: TrendingUp,
      description: "This month"
    }
  ]

  const recentActivities = [
    {
      id: 1,
      type: "invoice_uploaded",
      title: "New invoice uploaded",
      description: "Invoice #INV-2024-001 uploaded by ABC Company",
      time: "2 minutes ago",
      status: "pending",
      icon: FileText
    },
    {
      id: 2,
      type: "user_registered",
      title: "New business registered",
      description: "XYZ Corporation completed registration",
      time: "15 minutes ago",
      status: "completed",
      icon: Building2
    },
    {
      id: 3,
      type: "invoice_approved",
      title: "Invoice approved",
      description: "Invoice #INV-2024-002 approved for financing",
      time: "1 hour ago",
      status: "completed",
      icon: CheckCircle
    },
    {
      id: 4,
      type: "system_alert",
      title: "System maintenance",
      description: "Scheduled maintenance completed successfully",
      time: "2 hours ago",
      status: "info",
      icon: AlertCircle
    }
  ]

  const getStatusColor = (status) => {
    switch (status) {
      case "pending":
        return "bg-yellow-100 text-yellow-800"
      case "completed":
        return "bg-green-100 text-green-800"
      case "info":
        return "bg-blue-100 text-blue-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const getStatusIcon = (status) => {
    switch (status) {
      case "pending":
        return Clock
      case "completed":
        return CheckCircle
      case "info":
        return AlertCircle
      default:
        return Eye
    }
  }

  return (
    <div className="min-h-screen bg-[#f7f7f7] flex">
      <Sidebar activeItem={activeItem} setActiveItem={setActiveItem} />
      <div className="flex-1">
        {/* Header */}
        <header className="bg-white border-b border-[#e4e4e7] px-6 py-4 flex items-center justify-between">
          <div>
            <h1 className="text-xl font-semibold text-[#272635] flex items-center gap-2">Admin Dashboard 👋</h1>
            <p className="text-sm text-[#5f6057]">System overview and management</p>
          </div>
          <div className="flex items-center gap-4">
            <div className="relative">
              <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-[#5f6057]" />
              <Input
                placeholder="Search..."
                className="pl-10 w-64 border-[#e4e4e7] focus:border-[#03a84e] focus:ring-[#03a84e]"
              />
              <span className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-[#5f6057]">⌘K</span>
            </div>
            <Bell className="w-5 h-5 text-[#5f6057]" />
          </div>
        </header>

        {/* Dashboard content */}
        <div className="p-6 space-y-6">
          {/* Stats Overview */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {statsData.map((stat, index) => {
              const Icon = stat.icon
              return (
                <Card key={index} className="border-[#e4e4e7] shadow-sm">
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium text-[#5f6057]">
                      {stat.title}
                    </CardTitle>
                    <Icon className="h-4 w-4 text-[#03a84e]" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold text-[#272635]">{stat.value}</div>
                    <p className="text-xs text-[#5f6057] mt-1">{stat.description}</p>
                    <div className="flex items-center mt-2">
                      <span className={`text-xs font-medium ${
                        stat.changeType === "positive" ? "text-green-600" : "text-red-600"
                      }`}>
                        {stat.change}
                      </span>
                      <span className="text-xs text-[#5f6057] ml-1">vs last month</span>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>

          {/* Quick Actions */}
          <Card className="border-[#e4e4e7] shadow-sm">
            <CardHeader>
              <CardTitle className="text-lg font-semibold text-[#272635]">Quick Actions</CardTitle>
              <CardDescription>Common administrative tasks</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Button 
                  variant="outline" 
                  className="h-auto p-4 flex flex-col items-start gap-2 border-[#e4e4e7] hover:border-[#03a84e]"
                  onClick={() => window.location.href = "/user-management/businesses"}
                >
                  <Building2 className="h-5 w-5 text-[#03a84e]" />
                  <div className="text-left">
                    <div className="font-medium">Manage Businesses</div>
                    <div className="text-xs text-[#5f6057]">View and manage registered businesses</div>
                  </div>
                </Button>
                
                <Button 
                  variant="outline" 
                  className="h-auto p-4 flex flex-col items-start gap-2 border-[#e4e4e7] hover:border-[#03a84e]"
                  onClick={() => window.location.href = "/invoice-financing/under-review"}
                >
                  <FileText className="h-5 w-5 text-[#03a84e]" />
                  <div className="text-left">
                    <div className="font-medium">Review Invoices</div>
                    <div className="text-xs text-[#5f6057]">Process pending invoice requests</div>
                  </div>
                </Button>
                
                <Button 
                  variant="outline" 
                  className="h-auto p-4 flex flex-col items-start gap-2 border-[#e4e4e7] hover:border-[#03a84e]"
                  onClick={() => window.location.href = "/reports/overview"}
                >
                  <TrendingUp className="h-5 w-5 text-[#03a84e]" />
                  <div className="text-left">
                    <div className="font-medium">View Reports</div>
                    <div className="text-xs text-[#5f6057]">Access system analytics and insights</div>
                  </div>
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Recent Activities */}
          <Card className="border-[#e4e4e7] shadow-sm">
            <CardHeader>
              <CardTitle className="text-lg font-semibold text-[#272635]">Recent Activities</CardTitle>
              <CardDescription>Latest system activities and updates</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentActivities.map((activity) => {
                  const Icon = activity.icon
                  const StatusIcon = getStatusIcon(activity.status)
                  return (
                    <div key={activity.id} className="flex items-start gap-4 p-3 rounded-lg hover:bg-[#f7f7f7] transition-colors">
                      <div className="flex-shrink-0">
                        <div className="w-8 h-8 bg-[#03a84e]/10 rounded-full flex items-center justify-center">
                          <Icon className="w-4 h-4 text-[#03a84e]" />
                        </div>
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between">
                          <h4 className="text-sm font-medium text-[#272635]">{activity.title}</h4>
                          <Badge className={getStatusColor(activity.status)}>
                            <StatusIcon className="w-3 h-3 mr-1" />
                            {activity.status}
                          </Badge>
                        </div>
                        <p className="text-sm text-[#5f6057] mt-1">{activity.description}</p>
                        <p className="text-xs text-[#5f6057] mt-1">{activity.time}</p>
                      </div>
                    </div>
                  )
                })}
              </div>
            </CardContent>
          </Card>

          {/* System Health */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card className="border-[#e4e4e7] shadow-sm">
              <CardHeader>
                <CardTitle className="text-lg font-semibold text-[#272635]">System Health</CardTitle>
                <CardDescription>Current system status and performance</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-[#5f6057]">API Response Time</span>
                    <span className="text-sm font-medium text-green-600">120ms</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-[#5f6057]">Database Status</span>
                    <span className="text-sm font-medium text-green-600">Healthy</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-[#5f6057]">Storage Usage</span>
                    <span className="text-sm font-medium text-yellow-600">78%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-[#5f6057]">Active Sessions</span>
                    <span className="text-sm font-medium text-[#272635]">45</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-[#e4e4e7] shadow-sm">
              <CardHeader>
                <CardTitle className="text-lg font-semibold text-[#272635]">Pending Tasks</CardTitle>
                <CardDescription>Items requiring attention</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-yellow-50 rounded-lg">
                    <div>
                      <div className="text-sm font-medium text-[#272635]">Invoice Reviews</div>
                      <div className="text-xs text-[#5f6057]">156 invoices pending review</div>
                    </div>
                    <Badge variant="secondary" className="bg-yellow-100 text-yellow-800">
                      156
                    </Badge>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                    <div>
                      <div className="text-sm font-medium text-[#272635]">User Verifications</div>
                      <div className="text-xs text-[#5f6057]">23 users awaiting verification</div>
                    </div>
                    <Badge variant="secondary" className="bg-blue-100 text-blue-800">
                      23
                    </Badge>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-red-50 rounded-lg">
                    <div>
                      <div className="text-sm font-medium text-[#272635]">System Alerts</div>
                      <div className="text-xs text-[#5f6057]">2 critical alerts</div>
                    </div>
                    <Badge variant="secondary" className="bg-red-100 text-red-800">
                      2
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
