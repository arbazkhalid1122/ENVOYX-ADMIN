"use client"

import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { MoreHorizontal, ArrowUpDown, AlertTriangle } from "lucide-react"
import { useEffect } from "react"
import api from "@/lib/axios"

export default function PendingTable({invoices}) {

  const pendingData = [
    { id: "Claims #007", date: "Dec 1, 2025", status: "Pending" },
    { id: "Claims #006", date: "Nov 1, 2025", status: "Pending" },
    { id: "Claims #005", date: "Oct 1, 2025", status: "Pending" },
    { id: "Claims #004", date: "Sep 1, 2025", status: "Pending" },
    { id: "Claims #003", date: "Aug 1, 2025", status: "Pending" },
    { id: "Claims #003", date: "Aug 1, 2025", status: "Pending" },
    { id: "Claims #005", date: "Aug 1, 2025", status: "Pending" },
    { id: "Claims #003", date: "Aug 1, 2025", status: "Pending" },
  ]

  return (
    <>
      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow className="border-b border-[#e4e4e7]">
              <TableHead className="text-[#49454f] font-medium p-6">
                <button className="flex items-center gap-1 hover:text-[#000000]">
                  Insured ID
                  <ArrowUpDown className="w-3 h-3" />
                </button>
              </TableHead>
              <TableHead className="text-[#49454f] font-medium">
                <button className="flex items-center gap-1 hover:text-[#000000]">
                  Submission date
                  <ArrowUpDown className="w-3 h-3" />
                </button>
              </TableHead>
              <TableHead className="text-[#49454f] font-medium">
                <button className="flex items-center gap-1 hover:text-[#000000]">
                  Status
                  <ArrowUpDown className="w-3 h-3" />
                </button>
              </TableHead>
              <TableHead className="w-12"></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {invoices?.map((row, index) => (
              <TableRow key={index} className="border-b border-[#e4e4e7] hover:bg-[#f7f7f7]">
                <TableCell className="font-medium text-[#000000] p-6">
                  <div className="flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4 text-[#f59e0b]" />
                    {row.insuredId || 'Claims #007'}
                  </div>
                </TableCell>
                <TableCell className="text-[#49454f]">
<TableCell className="text-[#49454f]">
  {new Intl.DateTimeFormat('en-GB', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  }).format(new Date(row.createdAt))}
</TableCell>
                </TableCell>
                <TableCell>
                  <Badge variant="secondary" className="bg-[#f7f7f7] text-[#49454f] hover:bg-[#f7f7f7]">
                    {row.invoiceStatus}
                  </Badge>
                </TableCell>
                <TableCell>
                  <Button variant="ghost" size="icon" className="w-8 h-8">
                    <MoreHorizontal className="w-4 h-4" />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-center gap-4 p-6 border-t border-[#e4e4e7]">
        <Button variant="outline" className="border-[#e4e4e7] text-[#49454f] bg-transparent">
          Previous
        </Button>
        <Button variant="outline" className="border-[#e4e4e7] text-[#49454f] bg-transparent">
          Next
        </Button>
      </div>
    </>
  )
}
