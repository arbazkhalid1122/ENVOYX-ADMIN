"use client"
import { useState } from "react"
import { Bell, Search, TrendingUp, TrendingDown, Eye, Clock, CheckCircle, XCircle, FileText, DollarSign, Users } from "lucide-react"
import { Input } from "@/components/ui/input"
import Sidebar from "@/components/layout/sidebar"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export default function InvoiceFinancingOverview() {
  const [activeItem, setActiveItem] = useState("overview-insights")

  // Mock data for invoice financing overview
  const overviewStats = [
    {
      title: "Total Invoices",
      value: "2,847",
      change: "+15%",
      changeType: "positive",
      icon: FileText,
      description: "This month"
    },
    {
      title: "Pending Review",
      value: "156",
      change: "+23%",
      changeType: "negative",
      icon: Clock,
      description: "Awaiting approval"
    },
    {
      title: "Approved",
      value: "1,234",
      change: "+8%",
      changeType: "positive",
      icon: CheckCircle,
      description: "Successfully processed"
    },
    {
      title: "Total Value",
      value: "$2.4M",
      change: "+12%",
      changeType: "positive",
      icon: DollarSign,
      description: "Financed amount"
    }
  ]

  const recentInvoices = [
    {
      id: "INV-2024-001",
      company: "ABC Corporation",
      amount: "$45,000",
      status: "pending",
      uploadedAt: "2 hours ago",
      reviewer: "John Doe"
    },
    {
      id: "INV-2024-002",
      company: "XYZ Industries",
      amount: "$32,500",
      status: "approved",
      uploadedAt: "4 hours ago",
      reviewer: "Jane Smith"
    },
    {
      id: "INV-2024-003",
      company: "Tech Solutions Ltd",
      amount: "$78,900",
      status: "rejected",
      uploadedAt: "6 hours ago",
      reviewer: "Mike Johnson"
    },
    {
      id: "INV-2024-004",
      company: "Global Trading Co",
      amount: "$125,000",
      status: "pending",
      uploadedAt: "8 hours ago",
      reviewer: "Sarah Wilson"
    }
  ]

  const getStatusColor = (status) => {
    switch (status) {
      case "pending":
        return "bg-yellow-100 text-yellow-800"
      case "approved":
        return "bg-green-100 text-green-800"
      case "rejected":
        return "bg-red-100 text-red-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const getStatusIcon = (status) => {
    switch (status) {
      case "pending":
        return Clock
      case "approved":
        return CheckCircle
      case "rejected":
        return XCircle
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
            <h1 className="text-xl font-semibold text-[#272635] flex items-center gap-2">Invoice Financing Overview</h1>
            <p className="text-sm text-[#5f6057]">Monitor and manage invoice financing activities</p>
          </div>
          <div className="flex items-center gap-4">
            <div className="relative">
              <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-[#5f6057]" />
              <Input
                placeholder="Search invoices..."
                className="pl-10 w-64 border-[#e4e4e7] focus:border-[#03a84e] focus:ring-[#03a84e]"
              />
            </div>
            <Select defaultValue="all">
              <SelectTrigger className="w-auto border-[#e4e4e7]">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Status</SelectItem>
                <SelectItem value="pending">Pending</SelectItem>
                <SelectItem value="approved">Approved</SelectItem>
                <SelectItem value="rejected">Rejected</SelectItem>
              </SelectContent>
            </Select>
            <Bell className="w-5 h-5 text-[#5f6057]" />
          </div>
        </header>

        {/* Dashboard content */}
        <div className="p-6 space-y-6">
          {/* Stats Overview */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {overviewStats.map((stat, index) => {
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
                      {stat.changeType === "positive" ? (
                        <TrendingUp className="w-3 h-3 text-green-600 mr-1" />
                      ) : (
                        <TrendingDown className="w-3 h-3 text-red-600 mr-1" />
                      )}
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

          {/* Charts Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card className="border-[#e4e4e7] shadow-sm">
              <CardHeader>
                <CardTitle className="text-lg font-semibold text-[#272635]">Invoice Status Distribution</CardTitle>
                <CardDescription>Breakdown of invoice statuses</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      <span className="text-sm text-[#272635]">Approved</span>
                    </div>
                    <span className="text-sm font-medium text-[#272635]">1,234 (43%)</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <span className="text-sm text-[#272635]">Pending</span>
                    </div>
                    <span className="text-sm font-medium text-[#272635]">156 (5%)</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <span className="text-sm text-[#272635]">Rejected</span>
                    </div>
                    <span className="text-sm font-medium text-[#272635]">89 (3%)</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                      <span className="text-sm text-[#272635]">Processing</span>
                    </div>
                    <span className="text-sm font-medium text-[#272635]">1,368 (49%)</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-[#e4e4e7] shadow-sm">
              <CardHeader>
                <CardTitle className="text-lg font-semibold text-[#272635]">Monthly Trends</CardTitle>
                <CardDescription>Invoice volume and value trends</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-[#5f6057]">January</span>
                    <div className="flex items-center gap-4">
                      <span className="text-sm font-medium text-[#272635]">245 invoices</span>
                      <span className="text-sm text-green-600">+12%</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-[#5f6057]">February</span>
                    <div className="flex items-center gap-4">
                      <span className="text-sm font-medium text-[#272635]">312 invoices</span>
                      <span className="text-sm text-green-600">+27%</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-[#5f6057]">March</span>
                    <div className="flex items-center gap-4">
                      <span className="text-sm font-medium text-[#272635]">284 invoices</span>
                      <span className="text-sm text-red-600">-9%</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-[#5f6057]">April</span>
                    <div className="flex items-center gap-4">
                      <span className="text-sm font-medium text-[#272635]">298 invoices</span>
                      <span className="text-sm text-green-600">+5%</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Recent Invoices Table */}
          <Card className="border-[#e4e4e7] shadow-sm">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="text-lg font-semibold text-[#272635]">Recent Invoices</CardTitle>
                  <CardDescription>Latest invoice submissions and their status</CardDescription>
                </div>
                <Button 
                  variant="outline" 
                  className="border-[#e4e4e7] hover:border-[#03a84e]"
                  onClick={() => window.location.href = "/invoice-financing/available"}
                >
                  View All
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="text-[#272635] font-medium">Invoice ID</TableHead>
                    <TableHead className="text-[#272635] font-medium">Company</TableHead>
                    <TableHead className="text-[#272635] font-medium">Amount</TableHead>
                    <TableHead className="text-[#272635] font-medium">Status</TableHead>
                    <TableHead className="text-[#272635] font-medium">Uploaded</TableHead>
                    <TableHead className="text-[#272635] font-medium">Reviewer</TableHead>
                    <TableHead className="text-[#272635] font-medium">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {recentInvoices.map((invoice) => {
                    const StatusIcon = getStatusIcon(invoice.status)
                    return (
                      <TableRow key={invoice.id}>
                        <TableCell className="font-medium text-[#272635]">{invoice.id}</TableCell>
                        <TableCell className="text-[#5f6057]">{invoice.company}</TableCell>
                        <TableCell className="font-medium text-[#272635]">{invoice.amount}</TableCell>
                        <TableCell>
                          <Badge className={getStatusColor(invoice.status)}>
                            <StatusIcon className="w-3 h-3 mr-1" />
                            {invoice.status}
                          </Badge>
                        </TableCell>
                        <TableCell className="text-[#5f6057]">{invoice.uploadedAt}</TableCell>
                        <TableCell className="text-[#5f6057]">{invoice.reviewer}</TableCell>
                        <TableCell>
                          <Button 
                            variant="ghost" 
                            size="sm"
                            className="text-[#03a84e] hover:text-[#03a84e] hover:bg-[#03a84e]/10"
                            onClick={() => console.log(`View ${invoice.id}`)}
                          >
                            View
                          </Button>
                        </TableCell>
                      </TableRow>
                    )
                  })}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
