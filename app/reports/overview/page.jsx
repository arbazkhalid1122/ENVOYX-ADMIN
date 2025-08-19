"use client"
import { useState } from "react"
import { Bell, Search, TrendingUp, TrendingDown, BarChart3, PieChart, LineChart, Activity, DollarSign, Users, FileText, Calendar } from "lucide-react"
import { Input } from "@/components/ui/input"
import Sidebar from "@/components/layout/sidebar"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function ReportsOverview() {
  const [activeItem, setActiveItem] = useState("overview")
  const [timeRange, setTimeRange] = useState("30d")

  // Mock data for reports overview
  const overviewStats = [
    {
      title: "Total Revenue",
      value: "$4.2M",
      change: "+18%",
      changeType: "positive",
      icon: DollarSign,
      description: "This quarter"
    },
    {
      title: "Active Users",
      value: "2,847",
      change: "+12%",
      changeType: "positive",
      icon: Users,
      description: "Monthly active"
    },
    {
      title: "Invoice Volume",
      value: "15,234",
      change: "+25%",
      changeType: "positive",
      icon: FileText,
      description: "Processed this month"
    },
    {
      title: "Conversion Rate",
      value: "78.5%",
      change: "+5%",
      changeType: "positive",
      icon: Activity,
      description: "Invoice approval rate"
    }
  ]

  const topPerformers = [
    {
      rank: 1,
      company: "ABC Corporation",
      revenue: "$450,000",
      invoices: 234,
      growth: "+23%"
    },
    {
      rank: 2,
      company: "XYZ Industries",
      revenue: "$380,000",
      invoices: 189,
      growth: "+18%"
    },
    {
      rank: 3,
      company: "Tech Solutions Ltd",
      revenue: "$320,000",
      invoices: 156,
      growth: "+15%"
    },
    {
      rank: 4,
      company: "Global Trading Co",
      revenue: "$280,000",
      invoices: 134,
      growth: "+12%"
    },
    {
      rank: 5,
      company: "Innovation Labs",
      revenue: "$250,000",
      invoices: 98,
      growth: "+8%"
    }
  ]

  const recentTrends = [
    {
      metric: "Revenue Growth",
      current: "$1.4M",
      previous: "$1.2M",
      change: "+16.7%",
      trend: "up"
    },
    {
      metric: "User Acquisition",
      current: "456",
      previous: "389",
      change: "+17.2%",
      trend: "up"
    },
    {
      metric: "Invoice Processing Time",
      current: "2.3 days",
      previous: "3.1 days",
      change: "-25.8%",
      trend: "up"
    },
    {
      metric: "Customer Satisfaction",
      current: "4.8/5",
      previous: "4.6/5",
      change: "+4.3%",
      trend: "up"
    }
  ]

  return (
    <div className="min-h-screen bg-[#f7f7f7] flex">
      <Sidebar activeItem={activeItem} setActiveItem={setActiveItem} />
      <div className="flex-1">
        {/* Header */}
        <header className="bg-white border-b border-[#e4e4e7] px-6 py-4 flex items-center justify-between">
          <div>
            <h1 className="text-xl font-semibold text-[#272635] flex items-center gap-2">Reports & Analytics</h1>
            <p className="text-sm text-[#5f6057]">Comprehensive insights and performance metrics</p>
          </div>
          <div className="flex items-center gap-4">
            <Select value={timeRange} onValueChange={setTimeRange}>
              <SelectTrigger className="w-auto border-[#e4e4e7]">
                <Calendar className="w-4 h-4 mr-2" />
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="7d">Last 7 days</SelectItem>
                <SelectItem value="30d">Last 30 days</SelectItem>
                <SelectItem value="90d">Last 90 days</SelectItem>
                <SelectItem value="1y">Last year</SelectItem>
              </SelectContent>
            </Select>
            <Button 
              variant="outline" 
              className="border-[#e4e4e7] hover:border-[#03a84e]"
              onClick={() => console.log("Export report")}
            >
              Export Report
            </Button>
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
                      <span className="text-xs text-[#5f6057] ml-1">vs previous period</span>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>

          {/* Charts and Analytics */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Revenue Trend */}
            <Card className="border-[#e4e4e7] shadow-sm">
              <CardHeader>
                <CardTitle className="text-lg font-semibold text-[#272635] flex items-center gap-2">
                  <LineChart className="w-5 h-5 text-[#03a84e]" />
                  Revenue Trend
                </CardTitle>
                <CardDescription>Monthly revenue performance</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-[#5f6057]">January</span>
                    <div className="flex items-center gap-4">
                      <span className="text-sm font-medium text-[#272635]">$1.2M</span>
                      <span className="text-sm text-green-600">+12%</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-[#5f6057]">February</span>
                    <div className="flex items-center gap-4">
                      <span className="text-sm font-medium text-[#272635]">$1.4M</span>
                      <span className="text-sm text-green-600">+16%</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-[#5f6057]">March</span>
                    <div className="flex items-center gap-4">
                      <span className="text-sm font-medium text-[#272635]">$1.6M</span>
                      <span className="text-sm text-green-600">+14%</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-[#5f6057]">April</span>
                    <div className="flex items-center gap-4">
                      <span className="text-sm font-medium text-[#272635]">$1.4M</span>
                      <span className="text-sm text-red-600">-12%</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* User Growth */}
            <Card className="border-[#e4e4e7] shadow-sm">
              <CardHeader>
                <CardTitle className="text-lg font-semibold text-[#272635] flex items-center gap-2">
                  <BarChart3 className="w-5 h-5 text-[#03a84e]" />
                  User Growth
                </CardTitle>
                <CardDescription>New user registrations</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-[#5f6057]">New Businesses</span>
                    <div className="flex items-center gap-4">
                      <span className="text-sm font-medium text-[#272635]">89</span>
                      <span className="text-sm text-green-600">+23%</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-[#5f6057]">Active Users</span>
                    <div className="flex items-center gap-4">
                      <span className="text-sm font-medium text-[#272635]">2,847</span>
                      <span className="text-sm text-green-600">+12%</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-[#5f6057]">Retention Rate</span>
                    <div className="flex items-center gap-4">
                      <span className="text-sm font-medium text-[#272635]">87%</span>
                      <span className="text-sm text-green-600">+5%</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-[#5f6057]">Churn Rate</span>
                    <div className="flex items-center gap-4">
                      <span className="text-sm font-medium text-[#272635]">3.2%</span>
                      <span className="text-sm text-red-600">+0.5%</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Top Performers */}
          <Card className="border-[#e4e4e7] shadow-sm">
            <CardHeader>
              <CardTitle className="text-lg font-semibold text-[#272635] flex items-center gap-2">
                <Trophy className="w-5 h-5 text-[#03a84e]" />
                Top Performing Businesses
              </CardTitle>
              <CardDescription>Highest revenue generating businesses</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {topPerformers.map((performer, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <div className="flex items-center gap-4">
                      <div className="w-8 h-8 bg-[#03a84e] text-white rounded-full flex items-center justify-center text-sm font-bold">
                        {performer.rank}
                      </div>
                      <div>
                        <div className="font-medium text-[#272635]">{performer.company}</div>
                        <div className="text-sm text-[#5f6057]">{performer.invoices} invoices</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-medium text-[#272635]">{performer.revenue}</div>
                      <div className="text-sm text-green-600">{performer.growth}</div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Recent Trends */}
          <Card className="border-[#e4e4e7] shadow-sm">
            <CardHeader>
              <CardTitle className="text-lg font-semibold text-[#272635] flex items-center gap-2">
                <Activity className="w-5 h-5 text-[#03a84e]" />
                Key Performance Indicators
              </CardTitle>
              <CardDescription>Recent performance trends and metrics</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {recentTrends.map((trend, index) => (
                  <div key={index} className="p-4 border border-[#e4e4e7] rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-[#272635]">{trend.metric}</span>
                      {trend.trend === "up" ? (
                        <TrendingUp className="w-4 h-4 text-green-600" />
                      ) : (
                        <TrendingDown className="w-4 h-4 text-red-600" />
                      )}
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-lg font-bold text-[#272635]">{trend.current}</div>
                        <div className="text-xs text-[#5f6057]">vs {trend.previous}</div>
                      </div>
                      <Badge className={
                        trend.trend === "up" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
                      }>
                        {trend.change}
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

// Add Trophy icon import
const Trophy = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
  </svg>
)
