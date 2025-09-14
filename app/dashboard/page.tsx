import { SidebarTrigger } from "@/components/ui/sidebar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { 
  BarChart3, 
  TrendingUp, 
  TrendingDown, 
  Eye, 
  Users, 
  Clock, 
  Target,
  FileText,
  Search,
  Calendar,
  Brain,
  Zap,
  Plus
} from "lucide-react"
import {
  ChartContainer,
  ChartTooltip,
  BarChart,
  Bar,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
} from "@/components/ui/chart"
import Link from "next/link"

export default function Dashboard() {
  // Key metrics data
  const metrics = [
    {
      title: "Content Generated",
      value: "127",
      change: "+23%",
      trend: "up",
      icon: FileText,
      description: "This month"
    },
    {
      title: "Total Views",
      value: "24,847",
      change: "+12.5%",
      trend: "up",
      icon: Eye,
      description: "All content"
    },
    {
      title: "Active Campaigns",
      value: "8",
      change: "+2",
      trend: "up",
      icon: Target,
      description: "Running now"
    },
    {
      title: "Avg. GEO Score",
      value: "87",
      change: "+5%",
      trend: "up",
      icon: TrendingUp,
      description: "Out of 100"
    },
  ]

  // Recent activity data
  const recentActivity = [
    {
      type: "content",
      title: "Blog post generated",
      description: "AI Marketing Strategies for 2024",
      time: "2 hours ago",
      status: "completed"
    },
    {
      type: "campaign",
      title: "Campaign launched",
      description: "Q1 Product Launch Campaign",
      time: "5 hours ago",
      status: "active"
    },
    {
      type: "keywords",
      title: "Keyword research completed",
      description: "Found 45 new opportunities",
      time: "1 day ago",
      status: "completed"
    },
    {
      type: "geo",
      title: "GEO optimization",
      description: "3 articles optimized for AI",
      time: "2 days ago",
      status: "completed"
    }
  ]

  // Chart data
  const chartConfig = {
    content: { label: "Content", color: "#3b82f6" },
    views: { label: "Views", color: "#10b981" },
  }

  const weeklyData = [
    { day: "Mon", content: 12, views: 2400 },
    { day: "Tue", content: 19, views: 1398 },
    { day: "Wed", content: 8, views: 9800 },
    { day: "Thu", content: 15, views: 3908 },
    { day: "Fri", content: 22, views: 4800 },
    { day: "Sat", content: 18, views: 3800 },
    { day: "Sun", content: 14, views: 4300 },
  ]

  // Quick actions
  const quickActions = [
    {
      title: "Generate Content",
      description: "Create new AI-powered content",
      icon: Brain,
      href: "/generate",
      color: "bg-blue-500"
    },
    {
      title: "Research Keywords",
      description: "Find new keyword opportunities",
      icon: Search,
      href: "/keywords",
      color: "bg-green-500"
    },
    {
      title: "Create Campaign",
      description: "Launch a new marketing campaign",
      icon: Calendar,
      href: "/campaigns",
      color: "bg-purple-500"
    },
    {
      title: "Optimize for GEO",
      description: "Improve content for AI systems",
      icon: Zap,
      href: "/tools/seo",
      color: "bg-orange-500"
    }
  ]

  return (
    <div className="flex flex-col">
      <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
        <SidebarTrigger className="-ml-1" />
        <div className="flex flex-1 items-center justify-between">
          <div>
            <h1 className="text-lg font-semibold">Dashboard</h1>
            <p className="text-sm text-muted-foreground">Welcome back! Here's your content overview</p>
          </div>
          <Button className="btn-primary">
            <Plus className="mr-2 h-4 w-4" />
            Quick Generate
          </Button>
        </div>
      </header>

      <main className="flex-1 space-y-6 p-6">
        {/* Key Metrics */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {metrics.map((metric, index) => (
            <Card key={metric.title} className="card-hover">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">{metric.title}</CardTitle>
                <metric.icon className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{metric.value}</div>
                <div className="flex items-center text-xs text-muted-foreground">
                  {metric.trend === "up" ? (
                    <TrendingUp className="mr-1 h-3 w-3 text-green-600" />
                  ) : (
                    <TrendingDown className="mr-1 h-3 w-3 text-red-600" />
                  )}
                  <span className={metric.trend === "up" ? "text-green-600" : "text-red-600"}>
                    {metric.change}
                  </span>
                  <span className="ml-1">{metric.description}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {/* Weekly Performance Chart */}
          <Card className="lg:col-span-2 card-hover">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BarChart3 className="h-5 w-5" />
                Weekly Performance
              </CardTitle>
              <CardDescription>Content generation and views over the past week</CardDescription>
            </CardHeader>
            <CardContent>
              <ChartContainer config={chartConfig} className="h-64">
                <BarChart data={weeklyData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="day" />
                  <YAxis />
                  <ChartTooltip />
                  <Bar dataKey="content" fill="var(--color-content)" />
                </BarChart>
              </ChartContainer>
            </CardContent>
          </Card>

          {/* Recent Activity */}
          <Card className="card-hover">
            <CardHeader>
              <CardTitle>Recent Activity</CardTitle>
              <CardDescription>Latest actions and updates</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {recentActivity.map((activity, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="flex-shrink-0">
                    <div className={`w-2 h-2 rounded-full mt-2 ${
                      activity.status === 'active' ? 'bg-green-500' : 
                      activity.status === 'completed' ? 'bg-blue-500' : 'bg-gray-400'
                    }`} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900">{activity.title}</p>
                    <p className="text-sm text-gray-500">{activity.description}</p>
                    <p className="text-xs text-gray-400 mt-1">{activity.time}</p>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions */}
        <Card className="card-hover">
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
            <CardDescription>Jump to your most used features</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {quickActions.map((action, index) => (
                <Link key={action.title} href={action.href}>
                  <div className="flex items-center space-x-3 p-4 rounded-lg border hover:bg-muted/50 transition-colors cursor-pointer">
                    <div className={`p-2 rounded-lg ${action.color} text-white`}>
                      <action.icon className="h-4 w-4" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium">{action.title}</p>
                      <p className="text-xs text-muted-foreground">{action.description}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}
