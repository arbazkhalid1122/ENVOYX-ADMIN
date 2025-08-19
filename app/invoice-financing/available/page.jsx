"use client"
import { useState } from "react"
import { Bell, Search, Eye, Clock, CheckCircle, XCircle, FileText, DollarSign, Filter } from "lucide-react"
import { Input } from "@/components/ui/input"
import Sidebar from "@/components/layout/sidebar"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export default function AvailableInvoices() {
  const [activeItem, setActiveItem] = useState("available")
  const [searchTerm, setSearchTerm] = useState("")
  const [statusFilter, setStatusFilter] = useState("all")

  // Mock data for available invoices
  const availableInvoices = [
    {
      id: "INV-2024-001",
      company: "ABC Corporation",
      amount: "$45,000",
      dueDate: "2024-02-15",
      status: "available",
      uploadedAt: "2 hours ago",
      riskScore: "Low",
      documents: 3
    },
    {
      id: "INV-2024-002",
      company: "XYZ Industries",
      amount: "$32,500",
      dueDate: "2024-02-20",
      status: "available",
      uploadedAt: "4 hours ago",
      riskScore: "Medium",
      documents: 2
    },
    {
      id: "INV-2024-003",
      company: "Tech Solutions Ltd",
      amount: "$78,900",
      dueDate: "2024-02-25",
      status: "available",
      uploadedAt: "6 hours ago",
      riskScore: "Low",
      documents: 4
    }
  ]

  const statsData = [
    {
      title: "Available Invoices",
      value: "156",
      change: "+23%",
      changeType: "positive",
      icon: FileText,
      description: "Ready for financing"
    },
    {
      title: "Total Value",
      value: "$2.4M",
      change: "+18%",
      changeType: "positive",
      icon: DollarSign,
      description: "Available for financing"
    },
    {
      title: "Average Risk",
      value: "Low",
      change: "-5%",
      changeType: "positive",
      icon: CheckCircle,
      description: "Risk assessment"
    },
    {
      title: "Processing Time",
      value: "2.3 days",
      change: "-12%",
      changeType: "positive",
      icon: Clock,
      description: "Average processing"
    }
  ]

  const getRiskColor = (risk) => {
    switch (risk.toLowerCase()) {
      case "low":
        return "bg-green-100 text-green-800"
      case "medium":
        return "bg-yellow-100 text-yellow-800"
      case "high":
        return "bg-red-100 text-red-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const filteredInvoices = availableInvoices.filter(invoice => {
    const matchesSearch = invoice.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         invoice.company.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesStatus = statusFilter === "all" || invoice.status === statusFilter
    return matchesSearch && matchesStatus
  })

  return (
    <div className="min-h-screen bg-[#f7f7f7] flex">
      <Sidebar activeItem={activeItem} setActiveItem={setActiveItem} />
      <div className="flex-1">
        {/* Header */}
        <header className="bg-white border-b border-[#e4e4e7] px-6 py-4 flex items-center justify-between">
          <div>
            <h1 className="text-xl font-semibold text-[#272635] flex items-center gap-2">Available for Financing</h1>
            <p className="text-sm text-[#5f6057]">Invoices ready for financing approval</p>
          </div>
          <div className="flex items-center gap-4">
            <div className="relative">
              <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-[#5f6057]" />
              <Input
                placeholder="Search invoices..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 w-64 border-[#e4e4e7] focus:border-[#03a84e] focus:ring-[#03a84e]"
              />
            </div>
            <Select value={statusFilter} onValueChange={setStatusFilter}>
              <SelectTrigger className="w-auto border-[#e4e4e7]">
                <Filter className="w-4 h-4 mr-2" />
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Status</SelectItem>
                <SelectItem value="available">Available</SelectItem>
                <SelectItem value="pending">Pending</SelectItem>
              </SelectContent>
            </Select>
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

          {/* Available Invoices Table */}
          <Card className="border-[#e4e4e7] shadow-sm">
            <CardHeader>
              <CardTitle className="text-lg font-semibold text-[#272635]">Available Invoices</CardTitle>
              <CardDescription>Invoices ready for financing approval and processing</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="text-[#272635] font-medium">Invoice ID</TableHead>
                    <TableHead className="text-[#272635] font-medium">Company</TableHead>
                    <TableHead className="text-[#272635] font-medium">Amount</TableHead>
                    <TableHead className="text-[#272635] font-medium">Due Date</TableHead>
                    <TableHead className="text-[#272635] font-medium">Risk Score</TableHead>
                    <TableHead className="text-[#272635] font-medium">Documents</TableHead>
                    <TableHead className="text-[#272635] font-medium">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredInvoices.map((invoice) => (
                    <TableRow key={invoice.id}>
                      <TableCell className="font-medium text-[#272635]">{invoice.id}</TableCell>
                      <TableCell>
                        <div>
                          <div className="font-medium text-[#272635]">{invoice.company}</div>
                          <div className="text-xs text-[#5f6057]">Uploaded {invoice.uploadedAt}</div>
                        </div>
                      </TableCell>
                      <TableCell className="font-medium text-[#272635]">{invoice.amount}</TableCell>
                      <TableCell className="text-[#5f6057]">{invoice.dueDate}</TableCell>
                      <TableCell>
                        <Badge className={getRiskColor(invoice.riskScore)}>
                          {invoice.riskScore}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-[#5f6057]">{invoice.documents} docs</TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <Button 
                            variant="ghost" 
                            size="sm"
                            className="text-[#03a84e] hover:text-[#03a84e] hover:bg-[#03a84e]/10"
                            onClick={() => console.log(`View ${invoice.id}`)}
                          >
                            <Eye className="w-4 h-4" />
                          </Button>
                          <Button 
                            variant="ghost" 
                            size="sm"
                            className="text-green-600 hover:text-green-600 hover:bg-green-50"
                            onClick={() => console.log(`Approve ${invoice.id}`)}
                          >
                            <CheckCircle className="w-4 h-4" />
                          </Button>
                          <Button 
                            variant="ghost" 
                            size="sm"
                            className="text-red-600 hover:text-red-600 hover:bg-red-50"
                            onClick={() => console.log(`Reject ${invoice.id}`)}
                          >
                            <XCircle className="w-4 h-4" />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
