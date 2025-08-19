"use client"

import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { ArrowUpDown, X } from "lucide-react"

export default function RejectedTable() {
  const rejectedData = [
    {
      id: "AS-127GH673",
      submissionDate: "Dec 1, 2025",
      provider: "ASCOMA",
      amount: "100.000",
      flagReason: "Missing insured ID",
      status: "Rejected",
    },
    {
      id: "AS-127GH673",
      submissionDate: "Nov 1, 2025",
      provider: "MCI",
      amount: "100.000",
      flagReason: "This invoice seems to be a dupl...",
      status: "Rejected",
    },
    {
      id: "AS-127GH673",
      submissionDate: "Oct 1, 2025",
      provider: "ASCOMA",
      amount: "100.000",
      flagReason: "Exceeded usage by the insured",
      status: "Rejected",
    },
    {
      id: "AS-127GH673",
      submissionDate: "Sep 1, 2025",
      provider: "VITALIS ASANTE",
      amount: "100.000",
      flagReason: "Missing docs",
      status: "Rejected",
    },
    {
      id: "AS-127GH673",
      submissionDate: "Aug 1, 2025",
      provider: "ASCOMA",
      amount: "100.000",
      flagReason: "Exceeded usage by the insured",
      status: "Rejected",
    },
    {
      id: "AS-127GH673",
      submissionDate: "Aug 1, 2025",
      provider: "ASCOMA",
      amount: "100.000",
      flagReason: "This invoice seems to be a dupl...",
      status: "Rejected",
    },
    {
      id: "AS-127GH673",
      submissionDate: "Aug 1, 2025",
      provider: "MCI",
      amount: "100.000",
      flagReason: "Missing insured ID",
      status: "Rejected",
    },
    {
      id: "AS-127GH673",
      submissionDate: "Aug 1, 2025",
      provider: "ASCOMA",
      amount: "100.000",
      flagReason: "Missing docs",
      status: "Rejected",
    },
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
              <TableHead className="text-[#49454f] font-medium">Payment provider</TableHead>
              <TableHead className="text-[#49454f] font-medium">
                <button className="flex items-center gap-1 hover:text-[#000000]">
                  Amount Paid
                  <ArrowUpDown className="w-3 h-3" />
                </button>
              </TableHead>
              <TableHead className="text-[#49454f] font-medium">
                <button className="flex items-center gap-1 hover:text-[#000000]">
                  Flag reason
                  <ArrowUpDown className="w-3 h-3" />
                </button>
              </TableHead>
              <TableHead className="text-[#49454f] font-medium">
                <button className="flex items-center gap-1 hover:text-[#000000]">
                  Status
                  <ArrowUpDown className="w-3 h-3" />
                </button>
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {rejectedData.map((row, index) => (
              <TableRow key={index} className="border-b border-[#e4e4e7] hover:bg-[#f7f7f7]">
                <TableCell className="font-medium text-[#000000] p-6">{row.id}</TableCell>
                <TableCell className="text-[#49454f]">{row.submissionDate}</TableCell>
                <TableCell className="text-[#49454f]">{row.provider}</TableCell>
                <TableCell className="text-[#49454f]">
                  {row.amount} <span className="text-[#a1a1aa]">XOF</span>
                </TableCell>
                <TableCell className="text-[#49454f]">
                  <div className="flex items-center gap-2">
                    <X className="w-4 h-4 text-[#ef4444]" />
                    {row.flagReason}
                  </div>
                </TableCell>
                <TableCell>
                  <Badge variant="secondary" className="bg-[#fef2f2] text-[#ef4444] hover:bg-[#fef2f2]">
                    {row.status}
                  </Badge>
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
