"use client"
import { usePathname } from "next/navigation"
import { useState } from "react"
import { ChevronDown, ChevronRight } from "lucide-react"

export default function Navigation({ items, activeItem, setActiveItem }) {
  const router = usePathname()
  const [expandedItems, setExpandedItems] = useState(new Set())

  const toggleExpanded = (itemId) => {
    const newExpanded = new Set(expandedItems)
    if (newExpanded.has(itemId)) {
      newExpanded.delete(itemId)
    } else {
      newExpanded.add(itemId)
    }
    setExpandedItems(newExpanded)
  }

  const isActive = (item) => {
    if (item.children) {
      return item.children.some(child => router === child.href)
    }
    return router === item.href
  }

  const isChildActive = (child) => {
    return router === child.href
  }

  return (
    <nav className="flex-1 py-4">
      <ul className="space-y-1">
        {items.map((item) => {
          const Icon = item.icon
          const active = isActive(item)
          const hasChildren = item.children && item.children.length > 0
          const isExpanded = expandedItems.has(item.id)

          return (
            <li key={item.id}>
              <button
                onClick={() => {
                  if (hasChildren) {
                    toggleExpanded(item.id)
                  } else {
                    window.location.href = item.href
                    setActiveItem(item.id)
                  }
                }}
                style={{
                  boxShadow: active ? "rgba(17, 17, 26, 0.05) 0px 1px 0px, #081F2426 0px 0px 2px" : "none",
                }}
                className={`w-full flex items-center cursor-pointer text-[#081F24] gap-3 px-4 py-3 rounded-lg text-sm transition-colors ${
                  active ? "bg-[#F7F7F7]" : "hover:bg-[#F7F7F7]"
                }`}
              >
                <Icon className={`w-4 h-4 ${active ? " text-[#03A84E]" : "text-black"}`} />
                <span className="flex-1 text-left">{item.label}</span>
                {hasChildren && (
                  isExpanded ? 
                    <ChevronDown className="w-4 h-4 text-gray-500" /> : 
                    <ChevronRight className="w-4 h-4 text-gray-500" />
                )}
              </button>
              
              {/* Nested children */}
              {hasChildren && isExpanded && (
                <ul className="ml-6 mt-1 space-y-1">
                  {item.children.map((child) => {
                    const ChildIcon = child.icon
                    const childActive = isChildActive(child)
                    
                    return (
                      <li key={child.id}>
                        <button
                          onClick={() => {
                            window.location.href = child.href
                            setActiveItem(child.id)
                          }}
                          className={`w-full flex items-center cursor-pointer text-[#081F24] gap-3 px-4 py-2 rounded-lg text-sm transition-colors ${
                            childActive ? "bg-[#E8F5E8] text-[#03A84E]" : "hover:bg-[#F7F7F7]"
                          }`}
                        >
                          <ChildIcon className={`w-3 h-3 ${childActive ? "text-[#03A84E]" : "text-gray-600"}`} />
                          {child.label}
                        </button>
                      </li>
                    )
                  })}
                </ul>
              )}
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
