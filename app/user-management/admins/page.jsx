"use client"
import { useState } from "react"
import { Bell, UserCheck, FileText } from "lucide-react"
import Sidebar from "@/components/layout/sidebar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function AdminUsersManagement() {
  const [activeItem, setActiveItem] = useState("admin-users")

  return (
    <div className="min-h-screen bg-[#f7f7f7] flex">
      <Sidebar activeItem={activeItem} setActiveItem={setActiveItem} />
      <div className="flex-1">
        <header className="bg-white border-b border-[#e4e4e7] px-6 py-4">
          <h1 className="text-xl font-semibold text-[#272635]">Admin Users Management</h1>
          <p className="text-sm text-[#5f6057]">Manage system administrator accounts</p>
        </header>
        <div className="p-6">
          <Card className="border-[#e4e4e7] shadow-sm">
            <CardHeader>
              <CardTitle className="text-lg font-semibold text-[#272635] flex items-center gap-2">
                <UserCheck className="w-5 h-5 text-[#03a84e]" />
                Admin Users Management
              </CardTitle>
              <CardDescription>Manage system administrator accounts and permissions</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-center py-8">
                <FileText className="w-12 h-12 text-[#5f6057] mx-auto mb-4" />
                <h3 className="text-lg font-medium text-[#272635] mb-2">Admin Users Management Page</h3>
                <p className="text-sm text-[#5f6057]">This page will show admin users management functionality</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
