"use client"
import { useState } from "react"
import { Bell, Search, Users, Building2, Mail, Phone, MapPin, Calendar, Eye, Edit, Trash2, Plus, Filter } from "lucide-react"
import { Input } from "@/components/ui/input"
import Sidebar from "@/components/layout/sidebar"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export default function BusinessesManagement() {
  const [activeItem, setActiveItem] = useState("businesses")
  const [searchTerm, setSearchTerm] = useState("")
  const [statusFilter, setStatusFilter] = useState("all")

  // Mock data for businesses
  const businesses = [
    {
      id: "BUS-001",
      name: "ABC Corporation",
      email: "contact@abccorp.com",
      phone: "+1 (555) 123-4567",
      location: "New York, NY",
      status: "active",
      registeredDate: "2024-01-15",
      lastActive: "2 hours ago",
      totalInvoices: 45,
      totalValue: "$125,000"
    },
    {
      id: "BUS-002",
      name: "XYZ Industries",
      email: "info@xyzindustries.com",
      phone: "+1 (555) 987-6543",
      location: "Los Angeles, CA",
      status: "active",
      registeredDate: "2024-02-20",
      lastActive: "1 day ago",
      totalInvoices: 32,
      totalValue: "$89,500"
    },
    {
      id: "BUS-003",
      name: "Tech Solutions Ltd",
      email: "hello@techsolutions.com",
      phone: "+1 (555) 456-7890",
      location: "San Francisco, CA",
      status: "pending",
      registeredDate: "2024-03-10",
      lastActive: "3 days ago",
      totalInvoices: 0,
      totalValue: "$0"
    },
    {
      id: "BUS-004",
      name: "Global Trading Co",
      email: "contact@globaltrading.com",
      phone: "+1 (555) 789-0123",
      location: "Chicago, IL",
      status: "suspended",
      registeredDate: "2024-01-05",
      lastActive: "1 week ago",
      totalInvoices: 12,
      totalValue: "$45,200"
    },
    {
      id: "BUS-005",
      name: "Innovation Labs",
      email: "info@innovationlabs.com",
      phone: "+1 (555) 321-6540",
      location: "Austin, TX",
      status: "active",
      registeredDate: "2024-02-28",
      lastActive: "5 hours ago",
      totalInvoices: 67,
      totalValue: "$234,800"
    }
  ]

  const statsData = [
    {
      title: "Total Businesses",
      value: "1,234",
      change: "+12%",
      changeType: "positive",
      icon: Building2,
      description: "Registered businesses"
    },
    {
      title: "Active Businesses",
      value: "1,089",
      change: "+8%",
      changeType: "positive",
      icon: Users,
      description: "Currently active"
    },
    {
      title: "Pending Verification",
      value: "89",
      change: "+15%",
      changeType: "negative",
      icon: Calendar,
      description: "Awaiting approval"
    },
    {
      title: "Suspended",
      value: "56",
      change: "-5%",
      changeType: "positive",
      icon: Eye,
      description: "Temporarily suspended"
    }
  ]

  const getStatusColor = (status) => {
    switch (status) {
      case "active":
        return "bg-green-100 text-green-800"
      case "pending":
        return "bg-yellow-100 text-yellow-800"
      case "suspended":
        return "bg-red-100 text-red-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const filteredBusinesses = businesses.filter(business => {
    const matchesSearch = business.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         business.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         business.location.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesStatus = statusFilter === "all" || business.status === statusFilter
    return matchesSearch && matchesStatus
  })

  return (
    <div className="min-h-screen bg-[#f7f7f7] flex">
      <Sidebar activeItem={activeItem} setActiveItem={setActiveItem} />
      <div className="flex-1">
        {/* Header */}
        <header className="bg-white border-b border-[#e4e4e7] px-6 py-4 flex items-center justify-between">
          <div>
            <h1 className="text-xl font-semibold text-[#272635] flex items-center gap-2">Business Management</h1>
            <p className="text-sm text-[#5f6057]">Manage registered businesses and their accounts</p>
          </div>
          <div className="flex items-center gap-4">
            <Button 
              className="bg-[#03a84e] hover:bg-[#03a84e]/90"
              onClick={() => console.log("Add new business")}
            >
              <Plus className="w-4 h-4 mr-2" />
              Add Business
            </Button>
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

          {/* Filters and Search */}
          <Card className="border-[#e4e4e7] shadow-sm">
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row gap-4 items-center">
                <div className="relative flex-1">
                  <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-[#5f6057]" />
                  <Input
                    placeholder="Search businesses by name, email, or location..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 border-[#e4e4e7] focus:border-[#03a84e] focus:ring-[#03a84e]"
                  />
                </div>
                <Select value={statusFilter} onValueChange={setStatusFilter}>
                  <SelectTrigger className="w-auto border-[#e4e4e7]">
                    <Filter className="w-4 h-4 mr-2" />
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Status</SelectItem>
                    <SelectItem value="active">Active</SelectItem>
                    <SelectItem value="pending">Pending</SelectItem>
                    <SelectItem value="suspended">Suspended</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>

          {/* Businesses Table */}
          <Card className="border-[#e4e4e7] shadow-sm">
            <CardHeader>
              <CardTitle className="text-lg font-semibold text-[#272635]">Registered Businesses</CardTitle>
              <CardDescription>Manage business accounts and their status</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="text-[#272635] font-medium">Business ID</TableHead>
                    <TableHead className="text-[#272635] font-medium">Business Name</TableHead>
                    <TableHead className="text-[#272635] font-medium">Contact Info</TableHead>
                    <TableHead className="text-[#272635] font-medium">Location</TableHead>
                    <TableHead className="text-[#272635] font-medium">Status</TableHead>
                    <TableHead className="text-[#272635] font-medium">Registered</TableHead>
                    <TableHead className="text-[#272635] font-medium">Activity</TableHead>
                    <TableHead className="text-[#272635] font-medium">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredBusinesses.map((business) => (
                    <TableRow key={business.id}>
                      <TableCell className="font-medium text-[#272635]">{business.id}</TableCell>
                      <TableCell>
                        <div>
                          <div className="font-medium text-[#272635]">{business.name}</div>
                          <div className="text-xs text-[#5f6057]">Last active: {business.lastActive}</div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="space-y-1">
                          <div className="flex items-center gap-1 text-sm">
                            <Mail className="w-3 h-3 text-[#5f6057]" />
                            {business.email}
                          </div>
                          <div className="flex items-center gap-1 text-sm">
                            <Phone className="w-3 h-3 text-[#5f6057]" />
                            {business.phone}
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center gap-1 text-sm">
                          <MapPin className="w-3 h-3 text-[#5f6057]" />
                          {business.location}
                        </div>
                      </TableCell>
                      <TableCell>
                        <Badge className={getStatusColor(business.status)}>
                          {business.status}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center gap-1 text-sm">
                          <Calendar className="w-3 h-3 text-[#5f6057]" />
                          {business.registeredDate}
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="text-sm">
                          <div className="font-medium text-[#272635]">{business.totalInvoices} invoices</div>
                          <div className="text-[#5f6057]">{business.totalValue}</div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <Button 
                            variant="ghost" 
                            size="sm"
                            className="text-[#03a84e] hover:text-[#03a84e] hover:bg-[#03a84e]/10"
                            onClick={() => console.log(`View ${business.id}`)}
                          >
                            <Eye className="w-4 h-4" />
                          </Button>
                          <Button 
                            variant="ghost" 
                            size="sm"
                            className="text-blue-600 hover:text-blue-600 hover:bg-blue-50"
                            onClick={() => console.log(`Edit ${business.id}`)}
                          >
                            <Edit className="w-4 h-4" />
                          </Button>
                          <Button 
                            variant="ghost" 
                            size="sm"
                            className="text-red-600 hover:text-red-600 hover:bg-red-50"
                            onClick={() => console.log(`Delete ${business.id}`)}
                          >
                            <Trash2 className="w-4 h-4" />
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
