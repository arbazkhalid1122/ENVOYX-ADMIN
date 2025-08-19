"use client"
import InvoiceHistoryTabs from "@/components/invoices/invoice-history-tabs"
import MetricsCards from "@/components/invoices/metrics-cards"
import Header from "@/components/layout/header"

export default function InvoiceDashboard() {

  return (
     <div className="w-full min-h-screen bg-[#f7f7f7]">
      <Header />
      <div className="w-full p-8">
          <MetricsCards />
          <InvoiceHistoryTabs />
      </div>
    </div>
  )
}
