"use client"
import { useState } from "react"
import { Bell, Search, Workflow, Play, Pause, Settings, Clock, CheckCircle, AlertCircle, Plus, Filter } from "lucide-react"
import { Input } from "@/components/ui/input"
import Sidebar from "@/components/layout/sidebar"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export default function WorkflowsPage() {
  const [activeItem, setActiveItem] = useState("workflows")
  const [searchTerm, setSearchTerm] = useState("")
  const [statusFilter, setStatusFilter] = useState("all")

  // Mock data for workflows
  const workflows = [
    {
      id: "WF-001",
      name: "Invoice Processing",
      description: "Automated invoice processing and approval workflow",
      status: "active",
      lastRun: "2 minutes ago",
      nextRun: "5 minutes",
      successRate: "98.5%",
      avgDuration: "2.3 min",
      triggers: ["Invoice Upload", "Manual Trigger"],
      steps: 5
    },
    {
      id: "WF-002",
      name: "User Verification",
      description: "KYC/B verification process for new users",
      status: "active",
      lastRun: "15 minutes ago",
      nextRun: "1 hour",
      successRate: "95.2%",
      avgDuration: "8.5 min",
      triggers: ["User Registration", "Document Upload"],
      steps: 8
    },
    {
      id: "WF-003",
      name: "Payment Processing",
      description: "Automated payment processing and settlement",
      status: "paused",
      lastRun: "1 hour ago",
      nextRun: "Paused",
      successRate: "99.1%",
      avgDuration: "1.2 min",
      triggers: ["Invoice Approval", "Scheduled"],
      steps: 4
    },
    {
      id: "WF-004",
      name: "Report Generation",
      description: "Daily and weekly report generation",
      status: "active",
      lastRun: "6 hours ago",
      nextRun: "18 hours",
      successRate: "100%",
      avgDuration: "3.7 min",
      triggers: ["Scheduled", "Manual Trigger"],
      steps: 3
    },
    {
      id: "WF-005",
      name: "Data Backup",
      description: "Automated system data backup process",
      status: "error",
      lastRun: "2 hours ago",
      nextRun: "4 hours",
      successRate: "87.3%",
      avgDuration: "12.5 min",
      triggers: ["Scheduled"],
      steps: 6
    }
  ]

  const statsData = [
    {
      title: "Active Workflows",
      value: "12",
      change: "+2",
      changeType: "positive",
      icon: Workflow,
      description: "Currently running"
    },
    {
      title: "Success Rate",
      value: "96.8%",
      change: "+1.2%",
      changeType: "positive",
      icon: CheckCircle,
      description: "Average success rate"
    },
    {
      title: "Total Executions",
      value: "45,234",
      change: "+15%",
      changeType: "positive",
      icon: Play,
      description: "This month"
    },
    {
      title: "Failed Executions",
      value: "156",
      change: "-8%",
      changeType: "positive",
      icon: AlertCircle,
      description: "Requires attention"
    }
  ]

  const getStatusColor = (status) => {
    switch (status) {
      case "active":
        return "bg-green-100 text-green-800"
      case "paused":
        return "bg-yellow-100 text-yellow-800"
      case "error":
        return "bg-red-100 text-red-800"
      case "stopped":
        return "bg-gray-100 text-gray-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const getStatusIcon = (status) => {
    switch (status) {
      case "active":
        return Play
      case "paused":
        return Pause
      case "error":
        return AlertCircle
      case "stopped":
        return Settings
      default:
        return Clock
    }
  }

  const filteredWorkflows = workflows.filter(workflow => {
    const matchesSearch = workflow.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         workflow.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesStatus = statusFilter === "all" || workflow.status === statusFilter
    return matchesSearch && matchesStatus
  })

  return (
    <div className="min-h-screen bg-[#f7f7f7] flex">
      <Sidebar activeItem={activeItem} setActiveItem={setActiveItem} />
      <div className="flex-1">
        {/* Header */}
        <header className="bg-white border-b border-[#e4e4e7] px-6 py-4 flex items-center justify-between">
          <div>
            <h1 className="text-xl font-semibold text-[#272635] flex items-center gap-2">Workflow Management</h1>
            <p className="text-sm text-[#5f6057]">Monitor and manage automated workflows</p>
          </div>
          <div className="flex items-center gap-4">
            <Button 
              className="bg-[#03a84e] hover:bg-[#03a84e]/90"
              onClick={() => console.log("Create new workflow")}
            >
              <Plus className="w-4 h-4 mr-2" />
              Create Workflow
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
                    placeholder="Search workflows by name or description..."
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
                    <SelectItem value="paused">Paused</SelectItem>
                    <SelectItem value="error">Error</SelectItem>
                    <SelectItem value="stopped">Stopped</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>

          {/* Workflows Table */}
          <Card className="border-[#e4e4e7] shadow-sm">
            <CardHeader>
              <CardTitle className="text-lg font-semibold text-[#272635]">System Workflows</CardTitle>
              <CardDescription>Manage automated processes and their execution</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="text-[#272635] font-medium">Workflow ID</TableHead>
                    <TableHead className="text-[#272635] font-medium">Name</TableHead>
                    <TableHead className="text-[#272635] font-medium">Status</TableHead>
                    <TableHead className="text-[#272635] font-medium">Performance</TableHead>
                    <TableHead className="text-[#272635] font-medium">Schedule</TableHead>
                    <TableHead className="text-[#272635] font-medium">Triggers</TableHead>
                    <TableHead className="text-[#272635] font-medium">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredWorkflows.map((workflow) => {
                    const StatusIcon = getStatusIcon(workflow.status)
                    return (
                      <TableRow key={workflow.id}>
                        <TableCell className="font-medium text-[#272635]">{workflow.id}</TableCell>
                        <TableCell>
                          <div>
                            <div className="font-medium text-[#272635]">{workflow.name}</div>
                            <div className="text-xs text-[#5f6057]">{workflow.description}</div>
                            <div className="text-xs text-[#5f6057] mt-1">{workflow.steps} steps</div>
                          </div>
                        </TableCell>
                        <TableCell>
                          <Badge className={getStatusColor(workflow.status)}>
                            <StatusIcon className="w-3 h-3 mr-1" />
                            {workflow.status}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <div className="space-y-1">
                            <div className="text-sm">
                              <span className="text-[#5f6057]">Success: </span>
                              <span className="font-medium text-[#272635]">{workflow.successRate}</span>
                            </div>
                            <div className="text-sm">
                              <span className="text-[#5f6057]">Duration: </span>
                              <span className="font-medium text-[#272635]">{workflow.avgDuration}</span>
                            </div>
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="space-y-1">
                            <div className="text-sm">
                              <span className="text-[#5f6057]">Last run: </span>
                              <span className="font-medium text-[#272635]">{workflow.lastRun}</span>
                            </div>
                            <div className="text-sm">
                              <span className="text-[#5f6057]">Next run: </span>
                              <span className="font-medium text-[#272635]">{workflow.nextRun}</span>
                            </div>
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="space-y-1">
                            {workflow.triggers.map((trigger, index) => (
                              <Badge key={index} variant="outline" className="text-xs">
                                {trigger}
                              </Badge>
                            ))}
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            <Button 
                              variant="ghost" 
                              size="sm"
                              className="text-[#03a84e] hover:text-[#03a84e] hover:bg-[#03a84e]/10"
                              onClick={() => console.log(`View ${workflow.id}`)}
                            >
                              <Settings className="w-4 h-4" />
                            </Button>
                            {workflow.status === "active" ? (
                              <Button 
                                variant="ghost" 
                                size="sm"
                                className="text-yellow-600 hover:text-yellow-600 hover:bg-yellow-50"
                                onClick={() => console.log(`Pause ${workflow.id}`)}
                              >
                                <Pause className="w-4 h-4" />
                              </Button>
                            ) : (
                              <Button 
                                variant="ghost" 
                                size="sm"
                                className="text-green-600 hover:text-green-600 hover:bg-green-50"
                                onClick={() => console.log(`Start ${workflow.id}`)}
                              >
                                <Play className="w-4 h-4" />
                              </Button>
                            )}
                          </div>
                        </TableCell>
                      </TableRow>
                    )
                  })}
                </TableBody>
              </Table>
            </CardContent>
          </Card>

          {/* Workflow Performance */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card className="border-[#e4e4e7] shadow-sm">
              <CardHeader>
                <CardTitle className="text-lg font-semibold text-[#272635]">Recent Executions</CardTitle>
                <CardDescription>Latest workflow executions and their status</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { name: "Invoice Processing", status: "success", time: "2 min ago", duration: "1.8 min" },
                    { name: "User Verification", status: "success", time: "15 min ago", duration: "7.2 min" },
                    { name: "Payment Processing", status: "error", time: "1 hour ago", duration: "0.5 min" },
                    { name: "Report Generation", status: "success", time: "6 hours ago", duration: "3.1 min" }
                  ].map((execution, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <div>
                        <div className="font-medium text-[#272635]">{execution.name}</div>
                        <div className="text-sm text-[#5f6057]">{execution.time}</div>
                      </div>
                      <div className="text-right">
                        <Badge className={
                          execution.status === "success" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
                        }>
                          {execution.status}
                        </Badge>
                        <div className="text-xs text-[#5f6057] mt-1">{execution.duration}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="border-[#e4e4e7] shadow-sm">
              <CardHeader>
                <CardTitle className="text-lg font-semibold text-[#272635]">Workflow Health</CardTitle>
                <CardDescription>System health and performance metrics</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-[#5f6057]">CPU Usage</span>
                    <div className="flex items-center gap-2">
                      <div className="w-24 bg-gray-200 rounded-full h-2">
                        <div className="bg-[#03a84e] h-2 rounded-full" style={{ width: '65%' }}></div>
                      </div>
                      <span className="text-sm font-medium text-[#272635]">65%</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-[#5f6057]">Memory Usage</span>
                    <div className="flex items-center gap-2">
                      <div className="w-24 bg-gray-200 rounded-full h-2">
                        <div className="bg-[#03a84e] h-2 rounded-full" style={{ width: '78%' }}></div>
                      </div>
                      <span className="text-sm font-medium text-[#272635]">78%</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-[#5f6057]">Queue Length</span>
                    <div className="flex items-center gap-2">
                      <div className="w-24 bg-gray-200 rounded-full h-2">
                        <div className="bg-yellow-500 h-2 rounded-full" style={{ width: '45%' }}></div>
                      </div>
                      <span className="text-sm font-medium text-[#272635]">45</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-[#5f6057]">Error Rate</span>
                    <div className="flex items-center gap-2">
                      <div className="w-24 bg-gray-200 rounded-full h-2">
                        <div className="bg-red-500 h-2 rounded-full" style={{ width: '3%' }}></div>
                      </div>
                      <span className="text-sm font-medium text-[#272635]">3.2%</span>
                    </div>
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
