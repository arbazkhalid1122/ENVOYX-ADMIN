"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Infinity, AlertCircle, ExternalLink, CheckCircle2, Ellipsis } from "lucide-react"

export default function MetricsCards() {
  const metrics = [
    {
      value: "13",
      label: "Your pending invoices",
      icon: Infinity,
      iconColor: "text-[#61c454]",
    },
    {
      value: "13",
      label: "Invoices rejected",
      sublabel: "0% vs last month",
      icon: Ellipsis,
      iconColor: "",
    },
    {
      value: "7",
      label: "Invoices to resolve",
      sublabel: "3.8% vs last month",
      icon: AlertCircle,
      iconColor: "text-[#ee6a5f]",
      hasAction: true,
    },
    {
      value: "7",
      label: "Processed invoices",
      sublabel: "0% vs last month",
      icon: CheckCircle2,
      iconColor: "text-[#61c454]",
    },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      {metrics.map((metric, index) => (
        <Card key={index} className="border-[#e4e4e7] shadow-none">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-2">
              <span className="text-2xl text-[#000000]">{metric.value}</span>
              {metric.icon ? (
                <metric.icon className={`w-5 h-5 ${metric.iconColor}`} />
              ) : (
                <div className="text-xs text-[#a1a1aa]">...</div>
              )}
            </div>
            <p className="text-sm text-[#a1a1aa] mb-1">{metric.label}</p>
            {metric.sublabel && <p className="text-xs text-[#a1a1aa] mb-2">{metric.sublabel}</p>}
            {metric.hasAction && (
              <button className="text-xs text-[#000000] hover:text-[#61c454] flex items-center gap-1">
                Resolve invoices
                <ExternalLink className="w-3 h-3" />
              </button>
            )}
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
