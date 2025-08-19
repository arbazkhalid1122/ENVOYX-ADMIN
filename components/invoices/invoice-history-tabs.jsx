"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Search, Command, Filter } from "lucide-react"
import PendingTable from "@/components/tables/pending-table"
import ProgressTable from "@/components/tables/progress-table"
import ResolveTable from "@/components/tables/resolve-table"
import ProcessedTable from "@/components/tables/processed-table"
import RejectedTable from "@/components/tables/rejected-table"
import { useEffect, useState } from "react"
import api from "@/lib/axios"

export default function InvoiceHistoryTabs() {
  const [invoices, setInvoices] = useState([])

  const fetchInvoices = async () => {
    try {
      const response = await api.get('/invoices')

console.log("response", response);      
      setInvoices(response.data.data)
    } catch (error) {
      console.error("Error fetching invoices:", error)
    }
  }

 useEffect(()=>{
    fetchInvoices()
},[])
  
  return (
    <div className="bg-[#ffffff] rounded-lg border border-[#e4e4e7]">
      <div className="p-6 border-b border-[#e4e4e7]">
        <h2 className="text-lg font-semibold text-[#000000] mb-1">Invoice history</h2>
        <p className="text-sm text-[#a1a1aa]">Showing activities on the invoices submitted for financing</p>
      </div>

      <Tabs defaultValue="pending" className="w-full">
        <div className="flex items-center justify-between bg-[#FAFAFA] px-6 py-4 border-b border-[#e4e4e7]">
    <TabsList className="bg-transparent p-0 h-auto">
        <TabsTrigger
          value="pending"
          className="bg-white data-[state=active]:bg-[#FAFAFA] border border-[#e4e4e7] rounded-l-lg rounded-r-none px-4 py-2 shadow-none border-r-0"
        >
          Pending
        </TabsTrigger>
        <TabsTrigger
          value="progress"
          className="bg-white data-[state=active]:bg-[#FAFAFA] rounded-none px-4 py-2 border border-[#e4e4e7] shadow-none border-r-0"
        >
          In progress
        </TabsTrigger>
        <TabsTrigger
          value="resolve"
          className="bg-white data-[state=active]:bg-[#FAFAFA] rounded-none px-4 py-2 border border-[#e4e4e7] shadow-none border-r-0"
        >
          Resolve
        </TabsTrigger>
        <TabsTrigger
          value="processed"
          className="bg-white data-[state=active]:bg-[#FAFAFA] rounded-none px-4 py-2 border border-[#e4e4e7] border-r-0"
        >
          Processed
        </TabsTrigger>
        <TabsTrigger
          value="rejected"
          className="bg-white data-[state=active]:bg-[#FAFAFA] rounded-none px-4 py-2 rounded-r-lg rounded-l-none border border-[#e4e4e7] shadow-none"
        >
          Rejected
        </TabsTrigger>
      </TabsList>
          <div className="flex items-center gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-[#a1a1aa]" />
              <Input
                placeholder="Search"
                className="pl-10 pr-12 w-64 bg-white border-[#e4e4e7] border-none focus-none outline-none"
              />
              <div className="absolute right-3 top-1/2 transform -translate-y-1/2 flex items-center gap-1 text-xs text-[#a1a1aa]">
                <Command className="w-3 h-3" />
                <span>K</span>
              </div>
            </div>
            <Button variant="outline" className="border-[#e4e4e7] text-[#49454f] bg-white">
              <Filter className="w-4 h-4 mr-2" />
              Filters
            </Button>
          </div>
        </div>

        <TabsContent value="pending" className="mt-0">
          <PendingTable invoices={invoices} />
        </TabsContent>

        <TabsContent value="progress" className="mt-0">
          <ProgressTable />
        </TabsContent>

        <TabsContent value="resolve" className="mt-0">
          <ResolveTable />
        </TabsContent>

        <TabsContent value="processed" className="mt-0">
          <ProcessedTable />
        </TabsContent>

        <TabsContent value="rejected" className="mt-0">
          <RejectedTable />
        </TabsContent>
      </Tabs>

           
    </div>
  )
}
