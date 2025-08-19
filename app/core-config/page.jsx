"use client"
import { useState } from "react"
import { Bell, Search, Settings, Database, Shield, Mail, Globe, Key, Save, RefreshCw, AlertTriangle } from "lucide-react"
import { Input } from "@/components/ui/input"
import Sidebar from "@/components/layout/sidebar"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"

export default function CoreConfiguration() {
  const [activeItem, setActiveItem] = useState("core-config")
  const [activeTab, setActiveTab] = useState("general")

  // Mock configuration data
  const systemConfig = {
    general: {
      siteName: "EnvoyX Admin",
      siteDescription: "Invoice Financing Platform",
      timezone: "UTC",
      language: "English",
      maintenanceMode: false,
      debugMode: false
    },
    security: {
      sessionTimeout: 30,
      maxLoginAttempts: 5,
      passwordMinLength: 8,
      requireTwoFactor: true,
      enableAuditLog: true,
      ipWhitelist: []
    },
    email: {
      smtpHost: "smtp.gmail.com",
      smtpPort: 587,
      smtpUser: "admin@envoyx.com",
      smtpPassword: "********",
      fromEmail: "noreply@envoyx.com",
      fromName: "EnvoyX System"
    },
    database: {
      host: "localhost",
      port: 5432,
      name: "envoyx_prod",
      user: "envoyx_user",
      maxConnections: 100,
      connectionTimeout: 30
    }
  }

  const configTabs = [
    { id: "general", label: "General", icon: Settings },
    { id: "security", label: "Security", icon: Shield },
    { id: "email", label: "Email", icon: Mail },
    { id: "database", label: "Database", icon: Database },
    { id: "integrations", label: "Integrations", icon: Globe }
  ]

  const systemStatus = [
    {
      name: "Database",
      status: "healthy",
      lastCheck: "2 minutes ago",
      responseTime: "45ms"
    },
    {
      name: "Email Service",
      status: "healthy",
      lastCheck: "5 minutes ago",
      responseTime: "120ms"
    },
    {
      name: "File Storage",
      status: "warning",
      lastCheck: "10 minutes ago",
      responseTime: "280ms"
    },
    {
      name: "Payment Gateway",
      status: "healthy",
      lastCheck: "1 minute ago",
      responseTime: "85ms"
    }
  ]

  const getStatusColor = (status) => {
    switch (status) {
      case "healthy":
        return "bg-green-100 text-green-800"
      case "warning":
        return "bg-yellow-100 text-yellow-800"
      case "error":
        return "bg-red-100 text-red-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const getStatusIcon = (status) => {
    switch (status) {
      case "healthy":
        return "🟢"
      case "warning":
        return "🟡"
      case "error":
        return "🔴"
      default:
        return "⚪"
    }
  }

  return (
    <div className="min-h-screen bg-[#f7f7f7] flex">
      <Sidebar activeItem={activeItem} setActiveItem={setActiveItem} />
      <div className="flex-1">
        {/* Header */}
        <header className="bg-white border-b border-[#e4e4e7] px-6 py-4 flex items-center justify-between">
          <div>
            <h1 className="text-xl font-semibold text-[#272635] flex items-center gap-2">Core Configuration</h1>
            <p className="text-sm text-[#5f6057]">System settings and configuration management</p>
          </div>
          <div className="flex items-center gap-4">
            <Button 
              variant="outline" 
              className="border-[#e4e4e7] hover:border-[#03a84e]"
              onClick={() => console.log("Refresh configuration")}
            >
              <RefreshCw className="w-4 h-4 mr-2" />
              Refresh
            </Button>
            <Button 
              className="bg-[#03a84e] hover:bg-[#03a84e]/90"
              onClick={() => console.log("Save configuration")}
            >
              <Save className="w-4 h-4 mr-2" />
              Save Changes
            </Button>
            <Bell className="w-5 h-5 text-[#5f6057]" />
          </div>
        </header>

        {/* Dashboard content */}
        <div className="p-6 space-y-6">
          {/* System Status */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {systemStatus.map((service, index) => (
              <Card key={index} className="border-[#e4e4e7] shadow-sm">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <span className="text-2xl">{getStatusIcon(service.status)}</span>
                      <div>
                        <div className="font-medium text-[#272635]">{service.name}</div>
                        <div className="text-xs text-[#5f6057]">{service.lastCheck}</div>
                      </div>
                    </div>
                    <Badge className={getStatusColor(service.status)}>
                      {service.status}
                    </Badge>
                  </div>
                  <div className="text-sm text-[#5f6057]">
                    Response: <span className="font-medium text-[#272635]">{service.responseTime}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Configuration Tabs */}
          <Card className="border-[#e4e4e7] shadow-sm">
            <CardHeader>
              <CardTitle className="text-lg font-semibold text-[#272635]">System Configuration</CardTitle>
              <CardDescription>Manage system settings and preferences</CardDescription>
            </CardHeader>
            <CardContent>
              {/* Tab Navigation */}
              <div className="flex space-x-1 mb-6 border-b border-[#e4e4e7]">
                {configTabs.map((tab) => {
                  const Icon = tab.icon
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-t-lg transition-colors ${
                        activeTab === tab.id
                          ? "bg-[#03a84e] text-white"
                          : "text-[#5f6057] hover:text-[#272635] hover:bg-gray-100"
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                      {tab.label}
                    </button>
                  )
                })}
              </div>

              {/* Tab Content */}
              <div className="space-y-6">
                {activeTab === "general" && (
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="siteName" className="text-sm font-medium text-[#272635]">Site Name</Label>
                        <Input
                          id="siteName"
                          value={systemConfig.general.siteName}
                          className="mt-1 border-[#e4e4e7] focus:border-[#03a84e]"
                        />
                      </div>
                      <div>
                        <Label htmlFor="siteDescription" className="text-sm font-medium text-[#272635]">Site Description</Label>
                        <Input
                          id="siteDescription"
                          value={systemConfig.general.siteDescription}
                          className="mt-1 border-[#e4e4e7] focus:border-[#03a84e]"
                        />
                      </div>
                      <div>
                        <Label htmlFor="timezone" className="text-sm font-medium text-[#272635]">Timezone</Label>
                        <Select defaultValue={systemConfig.general.timezone}>
                          <SelectTrigger className="mt-1 border-[#e4e4e7]">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="UTC">UTC</SelectItem>
                            <SelectItem value="EST">EST</SelectItem>
                            <SelectItem value="PST">PST</SelectItem>
                            <SelectItem value="GMT">GMT</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label htmlFor="language" className="text-sm font-medium text-[#272635]">Language</Label>
                        <Select defaultValue={systemConfig.general.language}>
                          <SelectTrigger className="mt-1 border-[#e4e4e7]">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="English">English</SelectItem>
                            <SelectItem value="French">French</SelectItem>
                            <SelectItem value="Spanish">Spanish</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <Label className="text-sm font-medium text-[#272635]">Maintenance Mode</Label>
                          <p className="text-xs text-[#5f6057]">Enable maintenance mode to restrict access</p>
                        </div>
                        <Switch checked={systemConfig.general.maintenanceMode} />
                      </div>
                      <div className="flex items-center justify-between">
                        <div>
                          <Label className="text-sm font-medium text-[#272635]">Debug Mode</Label>
                          <p className="text-xs text-[#5f6057]">Enable debug logging for development</p>
                        </div>
                        <Switch checked={systemConfig.general.debugMode} />
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === "security" && (
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="sessionTimeout" className="text-sm font-medium text-[#272635]">Session Timeout (minutes)</Label>
                        <Input
                          id="sessionTimeout"
                          type="number"
                          value={systemConfig.security.sessionTimeout}
                          className="mt-1 border-[#e4e4e7] focus:border-[#03a84e]"
                        />
                      </div>
                      <div>
                        <Label htmlFor="maxLoginAttempts" className="text-sm font-medium text-[#272635]">Max Login Attempts</Label>
                        <Input
                          id="maxLoginAttempts"
                          type="number"
                          value={systemConfig.security.maxLoginAttempts}
                          className="mt-1 border-[#e4e4e7] focus:border-[#03a84e]"
                        />
                      </div>
                      <div>
                        <Label htmlFor="passwordMinLength" className="text-sm font-medium text-[#272635]">Password Min Length</Label>
                        <Input
                          id="passwordMinLength"
                          type="number"
                          value={systemConfig.security.passwordMinLength}
                          className="mt-1 border-[#e4e4e7] focus:border-[#03a84e]"
                        />
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <Label className="text-sm font-medium text-[#272635]">Require Two-Factor Authentication</Label>
                          <p className="text-xs text-[#5f6057]">Enforce 2FA for all admin users</p>
                        </div>
                        <Switch checked={systemConfig.security.requireTwoFactor} />
                      </div>
                      <div className="flex items-center justify-between">
                        <div>
                          <Label className="text-sm font-medium text-[#272635]">Enable Audit Logging</Label>
                          <p className="text-xs text-[#5f6057]">Log all administrative actions</p>
                        </div>
                        <Switch checked={systemConfig.security.enableAuditLog} />
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === "email" && (
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="smtpHost" className="text-sm font-medium text-[#272635]">SMTP Host</Label>
                        <Input
                          id="smtpHost"
                          value={systemConfig.email.smtpHost}
                          className="mt-1 border-[#e4e4e7] focus:border-[#03a84e]"
                        />
                      </div>
                      <div>
                        <Label htmlFor="smtpPort" className="text-sm font-medium text-[#272635]">SMTP Port</Label>
                        <Input
                          id="smtpPort"
                          type="number"
                          value={systemConfig.email.smtpPort}
                          className="mt-1 border-[#e4e4e7] focus:border-[#03a84e]"
                        />
                      </div>
                      <div>
                        <Label htmlFor="smtpUser" className="text-sm font-medium text-[#272635]">SMTP Username</Label>
                        <Input
                          id="smtpUser"
                          value={systemConfig.email.smtpUser}
                          className="mt-1 border-[#e4e4e7] focus:border-[#03a84e]"
                        />
                      </div>
                      <div>
                        <Label htmlFor="smtpPassword" className="text-sm font-medium text-[#272635]">SMTP Password</Label>
                        <Input
                          id="smtpPassword"
                          type="password"
                          value={systemConfig.email.smtpPassword}
                          className="mt-1 border-[#e4e4e7] focus:border-[#03a84e]"
                        />
                      </div>
                      <div>
                        <Label htmlFor="fromEmail" className="text-sm font-medium text-[#272635]">From Email</Label>
                        <Input
                          id="fromEmail"
                          value={systemConfig.email.fromEmail}
                          className="mt-1 border-[#e4e4e7] focus:border-[#03a84e]"
                        />
                      </div>
                      <div>
                        <Label htmlFor="fromName" className="text-sm font-medium text-[#272635]">From Name</Label>
                        <Input
                          id="fromName"
                          value={systemConfig.email.fromName}
                          className="mt-1 border-[#e4e4e7] focus:border-[#03a84e]"
                        />
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <Button variant="outline" className="border-[#e4e4e7] hover:border-[#03a84e]">
                        Test Connection
                      </Button>
                      <Button variant="outline" className="border-[#e4e4e7] hover:border-[#03a84e]">
                        Send Test Email
                      </Button>
                    </div>
                  </div>
                )}

                {activeTab === "database" && (
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="dbHost" className="text-sm font-medium text-[#272635]">Database Host</Label>
                        <Input
                          id="dbHost"
                          value={systemConfig.database.host}
                          className="mt-1 border-[#e4e4e7] focus:border-[#03a84e]"
                        />
                      </div>
                      <div>
                        <Label htmlFor="dbPort" className="text-sm font-medium text-[#272635]">Database Port</Label>
                        <Input
                          id="dbPort"
                          type="number"
                          value={systemConfig.database.port}
                          className="mt-1 border-[#e4e4e7] focus:border-[#03a84e]"
                        />
                      </div>
                      <div>
                        <Label htmlFor="dbName" className="text-sm font-medium text-[#272635]">Database Name</Label>
                        <Input
                          id="dbName"
                          value={systemConfig.database.name}
                          className="mt-1 border-[#e4e4e7] focus:border-[#03a84e]"
                        />
                      </div>
                      <div>
                        <Label htmlFor="dbUser" className="text-sm font-medium text-[#272635]">Database User</Label>
                        <Input
                          id="dbUser"
                          value={systemConfig.database.user}
                          className="mt-1 border-[#e4e4e7] focus:border-[#03a84e]"
                        />
                      </div>
                      <div>
                        <Label htmlFor="maxConnections" className="text-sm font-medium text-[#272635]">Max Connections</Label>
                        <Input
                          id="maxConnections"
                          type="number"
                          value={systemConfig.database.maxConnections}
                          className="mt-1 border-[#e4e4e7] focus:border-[#03a84e]"
                        />
                      </div>
                      <div>
                        <Label htmlFor="connectionTimeout" className="text-sm font-medium text-[#272635]">Connection Timeout (s)</Label>
                        <Input
                          id="connectionTimeout"
                          type="number"
                          value={systemConfig.database.connectionTimeout}
                          className="mt-1 border-[#e4e4e7] focus:border-[#03a84e]"
                        />
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <Button variant="outline" className="border-[#e4e4e7] hover:border-[#03a84e]">
                        Test Connection
                      </Button>
                      <Button variant="outline" className="border-[#e4e4e7] hover:border-[#03a84e]">
                        Backup Database
                      </Button>
                    </div>
                  </div>
                )}

                {activeTab === "integrations" && (
                  <div className="space-y-4">
                    <div className="text-center py-8">
                      <Globe className="w-12 h-12 text-[#5f6057] mx-auto mb-4" />
                      <h3 className="text-lg font-medium text-[#272635] mb-2">Integration Settings</h3>
                      <p className="text-sm text-[#5f6057] mb-4">Configure third-party integrations and APIs</p>
                      <Button variant="outline" className="border-[#e4e4e7] hover:border-[#03a84e]">
                        <Key className="w-4 h-4 mr-2" />
                        Manage API Keys
                      </Button>
                    </div>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>

          {/* System Alerts */}
          <Card className="border-[#e4e4e7] shadow-sm">
            <CardHeader>
              <CardTitle className="text-lg font-semibold text-[#272635] flex items-center gap-2">
                <AlertTriangle className="w-5 h-5 text-yellow-600" />
                System Alerts
              </CardTitle>
              <CardDescription>Important system notifications and warnings</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                  <div className="flex items-center gap-3">
                    <AlertTriangle className="w-5 h-5 text-yellow-600" />
                    <div>
                      <div className="font-medium text-[#272635]">Database Backup Overdue</div>
                      <div className="text-sm text-[#5f6057]">Last backup was 7 days ago</div>
                    </div>
                  </div>
                  <Button variant="outline" size="sm" className="border-yellow-300 text-yellow-700 hover:bg-yellow-100">
                    Run Backup
                  </Button>
                </div>
                <div className="flex items-center justify-between p-4 bg-blue-50 border border-blue-200 rounded-lg">
                  <div className="flex items-center gap-3">
                    <AlertTriangle className="w-5 h-5 text-blue-600" />
                    <div>
                      <div className="font-medium text-[#272635]">SSL Certificate Expiring</div>
                      <div className="text-sm text-[#5f6057]">Certificate expires in 15 days</div>
                    </div>
                  </div>
                  <Button variant="outline" size="sm" className="border-blue-300 text-blue-700 hover:bg-blue-100">
                    Renew
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
