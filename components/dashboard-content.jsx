"use client"

import { useState } from "react"
import { Bell, MoreHorizontal, MoveUpRight, Search, X } from "lucide-react"
import { Input } from "@/components/ui/input"
import Sidebar from "./layout/sidebar"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select"
import { Button } from "./ui/button"
import InvoiceCard from "@/components/invoice-card"
import FinancialDashboard from "@/components/Home/financial-dashboard"
import TransactionHistory from "@/components/Home/transaction"

export function DashboardContent() {
  const [showProfileHelp, setShowProfileHelp] = useState(true)
  const dashboardData = {
    supportBanner: {
      title: "Having trouble completing your profile?",
      description:
        "If you're having trouble with completing your profile, kindly reach out to one of our amazing humans at ErrorX to give you a helping hand. We really want you and your business to win.",
      supportText: "Contact support",
      show: true,
    },
    activity: {
      title: "Financing activity",
      subtitle: "Showing daily activity for the last 30 months",
    },
    chartData: [
      { date: "6 Jan", value: 0 },
      { date: "16 Jan", value: 0 },
      { date: "20 Jan", value: 0 },
      { date: "30 Jan", value: 0 },
      { date: "6 Feb", value: 0 },
      { date: "10 Feb", value: 0 },
      { date: "17 Feb", value: 0 },
      { date: "28 Feb", value: 0 },
      { date: "2 Mar", value: 0 },
    ],
  }

  // Alternative data example
  const customData = {
    supportBanner: {
      title: "Need help with your account?",
      description: "Our support team is ready to assist you with any questions or issues you might have.",
      supportText: "Get help now",
      show: true,
    },
    activity: {
      title: "Transaction activity",
      subtitle: "Showing weekly activity for the last 6 months",
    },
    chartData: [
      { date: "Week 1", value: 5 },
      { date: "Week 2", value: 3 },
      { date: "Week 3", value: 8 },
      { date: "Week 4", value: 2 },
      { date: "Week 5", value: 6 },
      { date: "Week 6", value: 1 },
    ],
  }

  const handleContactSupport = () => {
    console.log("Contact support clicked")
  }

  const handleCloseBanner = () => {
    console.log("Banner closed")
  }

  const handleFilter = () => {
    console.log("Filter clicked")
  }

  const handleViewReport = () => {
    console.log("View detailed report clicked")
  }

  const invoiceData = [
    {
      amount: "00.0",
      currency: "XOF",
      title: "Pending Invoices",
      description: "You've 0 pending invoices",
      highlightNumber: true,
    },
    {
      amount: "00.0",
      currency: "XOF",
      title: "Rejected Invoices",
      description: "0 rejected invoices",
      percentageChange: "0% vs last month",
      highlightNumber: true,
    },
    {
      amount: "00.0",
      currency: "XOF",
      title: "Paid Invoices",
      description: "You've received 0 invoices duly paid so far.",
      percentageChange: "0% vs last month",
      highlightNumber: true,
    },
  ]

  return (
    <div className="min-h-screen bg-[#f7f7f7] flex">
      {/* <Sidebar /> */}
      <div>
        {/* Header */}
        <header className="bg-white border-b border-[#e4e4e7] px-6 py-4 flex items-center justify-between">
          <div>
            <h1 className="text-xl font-semibold text-[#272635] flex items-center gap-2">Hello Assi 👋</h1>
            <p className="text-sm text-[#5f6057]">Increase cashflow with your invoices</p>
          </div>
          <div className="flex items-center gap-4">
            <div className="relative">
              <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-[#5f6057]" />
              <Input
                placeholder="Search"
                className="pl-10 w-64 border-[#e4e4e7] focus:border-[#03a84e] focus:ring-[#03a84e]"
              />
              <span className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-[#5f6057]">⌘K</span>
            </div>
            <Bell className="w-5 h-5 text-[#5f6057]" />
          </div>
        </header>

        {/* Dashboard content */}
        <div className="p-6 space-y-6">
          {/* Account setup */}
          <div>
            <h2 className="text-lg font-semibold text-[#272635] mb-4">Complete your account setup</h2>
            <div className="grid grid-cols-3 gap-6">
              {[
                {
                  title: "Setup your business profile",
                  description: "Pre-fill your business information to get started",
                  status: "Not started",
                  color: "bg-purple-100",
                  progress: "0%",
                  src: '/Frame.svg'
                },
                {
                  title: "Complete KYC/B",
                  description: "Provide some documents to help us keep EnvoyX safe",
                  status: "Not started",
                  color: "bg-green-100",
                  progress: "0%",
                  src: '/Frame1.svg'

                },
                {
                  title: "Financing preferences",
                  description: "Help us identify you by submitting the basic government issue documents",
                  status: "Not started",
                  color: "bg-blue-100",
                  progress: "0%",
                  src: '/Frame2.svg'

                },
              ].map((item, index) => (
                <div key={index} className="bg-white rounded-xl p-6 border border-[#e4e4e7]">
                  {/* <div className={`w-16 h-16 ${item.color} rounded-xl mb-4 flex items-center justify-center`}>
                  <div className="w-8 h-8 bg-white rounded-lg"></div>
                </div> */}
                  <img src={item?.src} alt="" className="mb-12" />
                  <h3 className="font-semibold text-[#272635] mb-2">{item.title}</h3>
                  <p className="text-sm mb-4">{item.description}</p>
                  {index === 0 && <button className="text-[#03a84e] text-sm underline flex items-center gap-1">Preview & sign <MoveUpRight className="h-3 w-3" /></button>}
                </div>
              ))}
            </div>
          </div>

          {/* Account overview */}
          <div className="bg-white rounded-xl p-8 border border-gray-200 shadow-sm">
            {/* Header */}
            <div className="flex items-start justify-between mb-8">
              <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-1">Account overview</h2>
                <p className="text-sm text-gray-500">Showing total visitors for the last 3 months</p>
              </div>
              <div className="flex items-center gap-3">
                <Select defaultValue="last-3-months">
                  <SelectTrigger className="w-auto border-gray-200 text-sm">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="last-3-months">Last 3 months</SelectItem>
                  </SelectContent>
                </Select>
                <Select defaultValue="daily">
                  <SelectTrigger className="w-auto border-gray-200 text-sm">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="daily">Daily</SelectItem>
                  </SelectContent>
                </Select>
                <Select defaultValue="all-invoices">
                  <SelectTrigger className="w-auto border-gray-200 text-sm">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all-invoices">All invoices</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Main Metric */}
            <div className="text-center mb-12">
              <h3 className="text-sm text-gray-500 mb-3">Total invoice financed</h3>
              <div className="mb-3">
                <span className="text-5xl font-bold text-gray-900">00.0</span>
                <span className="text-lg text-gray-400 ml-2">XOF</span>
              </div>
              <div className="text-sm text-gray-500">
                vs. <span className="text-gray-700">32,500,650.00 XOF</span> last period{" "}
                <span className="text-green-600 font-medium">+38.7%</span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
              {invoiceData.map((data, index) => (
                <InvoiceCard key={index} data={data} />
              ))}
            </div>
          </div>
          <FinancialDashboard
            data={dashboardData}
            onContactSupport={handleContactSupport}
            onCloseBanner={handleCloseBanner}
            onFilter={handleFilter}
            onViewReport={handleViewReport}
          />
      <TransactionHistory
        recentTransactionsTitle="Recent transactions"
        recentTransactionsSubtitle="Showing your recent transfers"
        awaitingFinancingTitle="Invoices awaiting financing"
        awaitingFinancingSubtitle="Showing activities on the invoices submitted for financing"
        transactions={[]}
        onTransactionClick={(transaction) => console.log(transaction)}
        className="p-6 bg-white rounded-xl border border-gray-200 shadow-sm"
      />
        </div>
      </div>
    </div>
  )
}
