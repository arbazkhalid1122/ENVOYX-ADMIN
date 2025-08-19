"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export function ProfileForm() {
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    workEmail: "",
    phoneNumber: "",
    role: "",
    password: "",
    confirmPassword: "",
  })

  const router = useRouter()

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleActivateAccount = async () => {
    setIsLoading(true)
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500))
    setIsLoading(false)
    router.push("/dashboard")
  }

  const handleDoLater = () => {
    router.push("/dashboard")
  }

  // Disable "Activate your account" button if any required field is empty
  const isFormIncomplete =
    !formData.firstName ||
    !formData.lastName ||
    !formData.workEmail ||
    !formData.phoneNumber ||
    !formData.role ||
    !formData.password ||
    !formData.confirmPassword

  return (
    <div className="bg-white rounded-lg p-4 sm:p-8 lg:p-12 max-w-2xl w-full mx-4 sm:mx-auto">
      <div className="text-center mb-6 sm:mb-8">
        <h1 className="text-2xl sm:text-3xl font-semibold text-[#272635] mb-4">Create contact profile</h1>
        <p className="text-[#5f6057] leading-relaxed max-w-md mx-auto text-sm sm:text-base">
          Provide basic details to help us identify the contact person for your business
        </p>
      </div>

      <div className="space-y-4 sm:space-y-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
          <div>
            <label className="block text-sm text-[#272635] mb-2">First name</label>
            <Input
              className="w-full border-[#e4e4e7] focus:border-[#03a84e] focus:ring-[#03a84e] p-4 sm:p-6"
              value={formData.firstName}
              onChange={(e) => handleInputChange("firstName", e.target.value)}
            />
          </div>
          <div>
            <label className="block text-sm text-[#272635] mb-2">Last name</label>
            <Input
              className="w-full border-[#e4e4e7] focus:border-[#03a84e] focus:ring-[#03a84e] p-4 sm:p-6"
              value={formData.lastName}
              onChange={(e) => handleInputChange("lastName", e.target.value)}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
          <div>
            <label className="block text-sm text-[#272635] mb-2">Work email</label>
            <Input
              type="email"
              className="w-full border-[#e4e4e7] focus:border-[#03a84e] focus:ring-[#03a84e] p-4 sm:p-6"
              value={formData.workEmail}
              onChange={(e) => handleInputChange("workEmail", e.target.value)}
            />
          </div>
          <div>
            <label className="block text-sm text-[#272635] mb-2">Personal phone number</label>
            <div className="flex">
              <div className="flex items-center gap-2 px-3 border border-r-0 border-[#e4e4e7] rounded-l-md bg-[#f7f7f7]">
                <div className="w-6 h-4 bg-orange-500 rounded-sm"></div>
                <span className="text-sm">+225</span>
              </div>
              <Input
                placeholder="123 456 789"
                className="flex-1 border-[#e4e4e7] rounded-l-none focus:border-[#03a84e] focus:ring-[#03a84e] p-4 sm:p-6"
                value={formData.phoneNumber}
                onChange={(e) => handleInputChange("phoneNumber", e.target.value)}
              />
            </div>
          </div>
        </div>

        <div>
          <label className="block text-sm text-[#272635] mb-2">What's your role?</label>
          <Select value={formData.role} onValueChange={(value) => handleInputChange("role", value)}>
            <SelectTrigger className="w-full border-[#e4e4e7] focus:border-[#03a84e] focus:ring-[#03a84e] p-4 sm:p-6">
              <SelectValue placeholder="Select or create a role" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="ceo">CEO</SelectItem>
              <SelectItem value="cfo">CFO</SelectItem>
              <SelectItem value="manager">Manager</SelectItem>
              <SelectItem value="accountant">Accountant</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
          <div>
            <label className="block text-sm text-[#272635] mb-2">Create password</label>
            <div className="relative">
              <Input
                type={showPassword ? "text" : "password"}
                className="w-full border-[#e4e4e7] focus:border-[#03a84e] focus:ring-[#03a84e] pr-12 p-4 sm:p-6"
                value={formData.password}
                onChange={(e) => handleInputChange("password", e.target.value)}
              />
              {formData.password && (
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-[#03a84e] hover:text-[#58a942]"
                >
                  {showPassword ? (
                    <button className="text-sm text-[#03a84e] hover:underline mt-1">Hide</button>
                  ) : (
                    <button className="text-sm text-[#03a84e] hover:underline mt-1">Show</button>
                  )}
                </button>
              )}
            </div>
          </div>
          <div>
            <label className="block text-sm text-[#272635] mb-2">Confirm password</label>
            <div className="relative">
              <Input
                type={showConfirmPassword ? "text" : "password"}
                className="w-full border-[#e4e4e7] focus:border-[#03a84e] focus:ring-[#03a84e] pr-12 p-4 sm:p-6"
                value={formData.confirmPassword}
                onChange={(e) => handleInputChange("confirmPassword", e.target.value)}
              />
              {formData.confirmPassword && (
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-[#03a84e] hover:text-[#58a942]"
                >
                  {showConfirmPassword ? (
                    <button className="text-sm text-[#03a84e] hover:underline mt-1">Hide</button>
                  ) : (
                    <button className="text-sm text-[#03a84e] hover:underline mt-1">Show</button>
                  )}
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-between mt-8 sm:mt-12 gap-4 sm:gap-0">
        <Button
          variant="outline"
          className="p-4 sm:p-6 bg-transparent w-full sm:w-auto order-2 sm:order-1"
          onClick={handleDoLater}
        >
          Do this later
        </Button>
        <Button
          className="bg-[#081f24] hover:bg-[#0d2c0d] text-white p-4 sm:p-6 w-full sm:w-auto order-1 sm:order-2"
          onClick={handleActivateAccount}
          // disabled={isLoading || isFormIncomplete}
        >
          {isLoading ? "Activating..." : "Activate your account"}
        </Button>
      </div>
    </div>
  )
}
