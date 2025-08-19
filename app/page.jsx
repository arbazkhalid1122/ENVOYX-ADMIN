"use client"
import { useEffect } from "react"
import { useRouter } from "next/navigation"

export default function HomePage() {
  const router = useRouter()

  useEffect(() => {
    router.push("/dashboard")
  }, [router])

  return (
    <div className="min-h-screen bg-[#f7f7f7] flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-2xl font-semibold text-[#272635] mb-2">EnvoyX Admin</h1>
        <p className="text-[#5f6057]">Redirecting to dashboard...</p>
      </div>
    </div>
  )
}
