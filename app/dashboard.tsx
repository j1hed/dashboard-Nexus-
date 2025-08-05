import Image from "next/image"
import Link from "next/link"
import {
  Home,
  Search,
  Bell,
  Moon,
  Star,
  LayoutDashboard,
  ShoppingCart,
  GraduationCap,
  Truck,
  FileText,
  Mail,
  MessageSquare,
  Calendar,
  ClipboardList,
  User,
  Lock,
  ChevronRight,
  BarChart,
  Users,
  Package,
  DollarSign,
  ArrowUp,
  ArrowDown,
  Zap,
  CreditCard,
  MoreVertical,
} from "lucide-react"

import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "@/components/ui/dropdown-menu"

export default function Dashboard() {
  return (
    <div className="flex min-h-screen w-full">
      {/* Sidebar */}
      <aside className="hidden w-64 flex-col border-r bg-white p-4 md:flex">
        <div className="flex items-center justify-between pb-4">
          <div className="flex items-center gap-2">
            <Image src="/placeholder.svg?height=24&width=24" alt="Materio Logo" width={24} height={24} />
            <span className="text-lg font-semibold text-gray-800">MATERIO</span>
          </div>
          <Button variant="ghost" size="icon" className="h-8 w-8">
            <LayoutDashboard className="h-4 w-4 text-gray-600" />
            <span className="sr-only">Toggle sidebar</span>
          </Button>
        </div>
        <div className="relative mb-4">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search ⌘K"
            className="w-full rounded-lg bg-gray-100 pl-8 text-gray-800 focus:ring-0 focus:border-gray-300"
          />
        </div>
        <nav className="grid gap-1 text-sm font-medium">
          <Link
            href="#"
            className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-600 transition-all hover:bg-gray-100 hover:text-gray-900 transition-colors duration-200"
          >
            <Home className="h-4 w-4" />
            Dashboards
            <span className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-red-500 text-xs font-medium text-white">
              3
            </span>
          </Link>
          <Link
            href="#"
            className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-600 transition-all hover:bg-gray-100 hover:text-gray-900 transition-colors duration-200"
          >
            <LayoutDashboard className="h-4 w-4" />
            CRM
          </Link>
          <Link
            href="#"
            className="flex items-center gap-3 rounded-lg bg-dashboard-purple px-3 py-2 text-white transition-all hover:bg-dashboard-purple/90"
          >
            <BarChart className="h-4 w-4" />
            Analytics
          </Link>
          <Link
            href="#"
            className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-600 transition-all hover:bg-gray-100 hover:text-gray-900 transition-colors duration-200"
          >
            <ShoppingCart className="h-4 w-4" />
            eCommerce
          </Link>
          <Link
            href="#"
            className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-600 transition-all hover:bg-gray-100 hover:text-gray-900 transition-colors duration-200"
          >
            <GraduationCap className="h-4 w-4" />
            Academy
          </Link>
          <Link
            href="#"
            className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-600 transition-all hover:bg-gray-100 hover:text-gray-900 transition-colors duration-200"
          >
            <Truck className="h-4 w-4" />
            Logistics
          </Link>
          <div className="mt-4 text-xs font-semibold uppercase text-gray-500">Apps & Pages</div>
          <Link
            href="#"
            className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-600 transition-all hover:bg-gray-100 hover:text-gray-900 transition-colors duration-200"
          >
            <ShoppingCart className="h-4 w-4" />
            eCommerce
            <ChevronRight className="ml-auto h-4 w-4" />
          </Link>
          <Link
            href="#"
            className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-600 transition-all hover:bg-gray-100 hover:text-gray-900 transition-colors duration-200"
          >
            <GraduationCap className="h-4 w-4" />
            Academy
            <ChevronRight className="ml-auto h-4 w-4" />
          </Link>
          <Link
            href="#"
            className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-600 transition-all hover:bg-gray-100 hover:text-gray-900 transition-colors duration-200"
          >
            <Truck className="h-4 w-4" />
            Logistics
            <ChevronRight className="ml-auto h-4 w-4" />
          </Link>
          <Link
            href="#"
            className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-600 transition-all hover:bg-gray-100 hover:text-gray-900 transition-colors duration-200"
          >
            <Mail className="h-4 w-4" />
            Email
          </Link>
          <Link
            href="#"
            className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-600 transition-all hover:bg-gray-100 hover:text-gray-900 transition-colors duration-200"
          >
            <MessageSquare className="h-4 w-4" />
            Chat
          </Link>
          <Link
            href="#"
            className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-600 transition-all hover:bg-gray-100 hover:text-gray-900 transition-colors duration-200"
          >
            <Calendar className="h-4 w-4" />
            Calendar
          </Link>
          <Link
            href="#"
            className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-600 transition-all hover:bg-gray-100 hover:text-gray-900 transition-colors duration-200"
          >
            <ClipboardList className="h-4 w-4" />
            Kanban
          </Link>
          <Link
            href="#"
            className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-600 transition-all hover:bg-gray-100 hover:text-gray-900 transition-colors duration-200"
          >
            <FileText className="h-4 w-4" />
            Invoice
            <ChevronRight className="ml-auto h-4 w-4" />
          </Link>
          <Link
            href="#"
            className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-600 transition-all hover:bg-gray-100 hover:text-gray-900 transition-colors duration-200"
          >
            <User className="h-4 w-4" />
            User
            <ChevronRight className="ml-auto h-4 w-4" />
          </Link>
          <Link
            href="#"
            className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-600 transition-all hover:bg-gray-100 hover:text-gray-900 transition-colors duration-200"
          >
            <Lock className="h-4 w-4" />
            Roles & Permissions
            <ChevronRight className="ml-auto h-4 w-4" />
          </Link>
        </nav>
      </aside>

      {/* Main Content Area */}
      <div className="flex flex-1 flex-col bg-dashboard-background">
        {/* Header */}
        <header className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b border-dashboard-card bg-dashboard-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
          <div className="relative ml-auto flex items-center gap-4">
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8 text-dashboard-lightgray transition-colors duration-200 hover:text-white"
            >
              <Star className="h-4 w-4" />
              <span className="sr-only">Language</span>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8 text-dashboard-lightgray transition-colors duration-200 hover:text-white"
            >
              <Moon className="h-4 w-4" />
              <span className="sr-only">Toggle theme</span>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8 text-dashboard-lightgray transition-colors duration-200 hover:text-white"
            >
              <Bell className="h-4 w-4" />
              <span className="sr-only">Notifications</span>
            </Button>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full">
                  <Image
                    src="/placeholder.svg?height=32&width=32"
                    width={32}
                    height={32}
                    alt="Avatar"
                    className="overflow-hidden rounded-full"
                  />
                  <span className="sr-only">Toggle user menu</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="bg-dashboard-card text-dashboard-lightgray">
                <DropdownMenuItem>My Account</DropdownMenuItem>
                <DropdownMenuItem>Settings</DropdownMenuItem>
                <DropdownMenuItem>Support</DropdownMenuItem>
                <DropdownMenuItem>Logout</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </header>

        {/* Dashboard Content */}
        <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {/* Congratulations Card */}
            <Card className="col-span-full bg-white text-gray-900 md:col-span-2 lg:col-span-2 xl:col-span-2 transition-all duration-300 ease-in-out hover:scale-[1.01] hover:shadow-xl">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Congratulations John! 🎉</CardTitle>
                <MoreVertical className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <p className="text-xs text-muted-foreground">Best seller of the month</p>
                <div className="flex items-center justify-between">
                  <div className="text-2xl font-bold text-dashboard-purple">$42.8k</div>
                  <Image
                    src="/placeholder.svg?height=80&width=80"
                    alt="Trophy"
                    width={80}
                    height={80}
                    className="mr-4"
                  />
                </div>
                <p className="text-xs text-muted-foreground">78% of target 🚀</p>
                <Button className="mt-4 bg-dashboard-purple text-white hover:bg-dashboard-purple/90 transition-colors duration-200">
                  View Sales
                </Button>
              </CardContent>
            </Card>

            {/* Transactions Card */}
            <Card className="col-span-full bg-dashboard-card text-dashboard-lightgray md:col-span-2 lg:col-span-2 xl:col-span-2 transition-all duration-300 ease-in-out hover:scale-[1.01] hover:shadow-xl">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Transactions</CardTitle>
                <MoreVertical className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <p className="text-xs text-muted-foreground">Total 48.5% Growth this month</p>
                <div className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-4">
                  <div className="flex flex-col items-center gap-2">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-dashboard-purple/20 text-dashboard-purple">
                      <DollarSign className="h-5 w-5" />
                    </div>
                    <div className="text-lg font-bold">245k</div>
                    <div className="text-xs text-muted-foreground">Sales</div>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-dashboard-green/20 text-dashboard-green">
                      <Users className="h-5 w-5" />
                    </div>
                    <div className="text-lg font-bold">12.5k</div>
                    <div className="text-xs text-muted-foreground">Users</div>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-dashboard-yellow/20 text-dashboard-yellow">
                      <Package className="h-5 w-5" />
                    </div>
                    <div className="text-lg font-bold">1.54k</div>
                    <div className="text-xs text-muted-foreground">Products</div>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-dashboard-blue/20 text-dashboard-blue">
                      <CreditCard className="h-5 w-5" />
                    </div>
                    <div className="text-lg font-bold">88k</div>
                    <div className="text-xs text-muted-foreground">Revenue</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Weekly Overview Card */}
            <Card className="col-span-full bg-white text-gray-900 md:col-span-1 lg:col-span-1 xl:col-span-1 transition-all duration-300 ease-in-out hover:scale-[1.01] hover:shadow-xl">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Weekly Overview</CardTitle>
                <MoreVertical className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="h-40 w-full">
                  {/* Bar Chart Placeholder */}
                  <svg viewBox="0 0 100 80" preserveAspectRatio="none" className="h-full w-full">
                    <rect x="0" y="60" width="10" height="20" fill="hsl(240 15% 25%)" rx="2" />
                    <rect x="15" y="40" width="10" height="40" fill="hsl(240 15% 25%)" rx="2" />
                    <rect x="30" y="50" width="10" height="30" fill="hsl(240 15% 25%)" rx="2" />
                    <rect x="45" y="10" width="10" height="70" fill="hsl(260 80% 60%)" rx="2" />
                    <rect x="60" y="30" width="10" height="50" fill="hsl(240 15% 25%)" rx="2" />
                    <rect x="75" y="55" width="10" height="25" fill="hsl(240 15% 25%)" rx="2" />
                    <rect x="90" y="45" width="10" height="35" fill="hsl(240 15% 25%)" rx="2" />
                    {/* Y-axis labels */}
                    <text x="-2" y="80" fontSize="8" fill="#888" textAnchor="end">
                      0k
                    </text>
                    <text x="-2" y="60" fontSize="8" fill="#888" textAnchor="end">
                      20k
                    </text>
                    <text x="-2" y="40" fontSize="8" fill="#888" textAnchor="end">
                      40k
                    </text>
                    <text x="-2" y="20" fontSize="8" fill="#888" textAnchor="end">
                      60k
                    </text>
                    <text x="-2" y="0" fontSize="8" fill="#888" textAnchor="end">
                      80k
                    </text>
                  </svg>
                </div>
                <div className="mt-4 flex items-center gap-2">
                  <span className="text-3xl font-bold text-gray-900">45%</span>
                  <p className="text-xs text-muted-foreground">
                    Your sales performance is 45% better compared to last month
                  </p>
                </div>
                <Button className="mt-4 w-full bg-dashboard-purple text-white hover:bg-dashboard-purple/90 transition-colors duration-200">
                  Details
                </Button>
              </CardContent>
            </Card>

            {/* Total Earning Card */}
            <Card className="col-span-full bg-dashboard-card text-dashboard-lightgray md:col-span-1 lg:col-span-1 xl:col-span-1 transition-all duration-300 ease-in-out hover:scale-[1.01] hover:shadow-xl">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Earning</CardTitle>
                <MoreVertical className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-2">
                  <div className="text-2xl font-bold">$24,895</div>
                  <span className="flex items-center text-dashboard-green text-sm">
                    <ArrowUp className="h-4 w-4" />
                    10%
                  </span>
                </div>
                <p className="text-xs text-muted-foreground">Compared to $84,325 last year</p>
                <div className="mt-4 space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-dashboard-blue/20 text-dashboard-blue">
                        <Zap className="h-4 w-4" />
                      </div>
                      <div>
                        <div className="font-medium">Zipcar</div>
                        <div className="text-xs text-muted-foreground">Vuejs, React & HTML</div>
                      </div>
                    </div>
                    <div className="font-bold">$24,895.65</div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-dashboard-yellow/20 text-dashboard-yellow">
                        <Zap className="h-4 w-4" />
                      </div>
                      <div>
                        <div className="font-medium">Bitbank</div>
                        <div className="text-xs text-muted-foreground">Sketch, Figma & XD</div>
                      </div>
                    </div>
                    <div className="font-bold">$8,650.20</div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-dashboard-red/20 text-dashboard-red">
                        <Zap className="h-4 w-4" />
                      </div>
                      <div>
                        <div className="font-medium">Aviato</div>
                        <div className="text-xs text-muted-foreground">HTML & Angular</div>
                      </div>
                    </div>
                    <div className="font-bold">$1,245.80</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Total Profit Card */}
            <Card className="bg-dashboard-card text-dashboard-lightgray transition-all duration-300 ease-in-out hover:scale-[1.01] hover:shadow-xl">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Profit</CardTitle>
                <MoreVertical className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">$86.4k</div>
                <div className="h-20 w-full">
                  {/* Line Chart Placeholder */}
                  <svg viewBox="0 0 100 50" preserveAspectRatio="none" className="h-full w-full">
                    <polyline
                      fill="none"
                      stroke="hsl(260 90% 65%)"
                      strokeWidth="2"
                      points="0,40 20,20 40,35 60,10 80,25 100,5"
                    />
                  </svg>
                </div>
                <div className="mt-2">
                  <div className="text-lg font-bold">$25.6k</div>
                  <span className="flex items-center text-dashboard-green text-sm">
                    <ArrowUp className="h-4 w-4" />
                    42%
                  </span>
                  <p className="text-xs text-muted-foreground">Weekly Profit</p>
                </div>
              </CardContent>
            </Card>

            {/* New Project Card */}
            <Card className="bg-dashboard-card text-dashboard-lightgray transition-all duration-300 ease-in-out hover:scale-[1.01] hover:shadow-xl">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">New Project</CardTitle>
                <MoreVertical className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent className="flex flex-col items-center justify-center text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-dashboard-purple/20 text-dashboard-purple">
                  <FileText className="h-6 w-6" />
                </div>
                <div className="mt-4 text-2xl font-bold">862</div>
                <span className="flex items-center text-dashboard-red text-sm">
                  <ArrowDown className="h-4 w-4" />
                  18%
                </span>
                <p className="text-xs text-muted-foreground">Yearly Project</p>
              </CardContent>
            </Card>

            {/* Sessions Card */}
            <Card className="bg-dashboard-card text-dashboard-lightgray transition-all duration-300 ease-in-out hover:scale-[1.01] hover:shadow-xl">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Sessions</CardTitle>
                <MoreVertical className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">2,856</div>
                <div className="h-20 w-full">
                  {/* Bar Chart Placeholder */}
                  <svg viewBox="0 0 100 50" preserveAspectRatio="none" className="h-full w-full">
                    <rect x="0" y="20" width="8" height="30" fill="hsl(260 90% 65%)" rx="1" />
                    <rect x="12" y="10" width="8" height="40" fill="hsl(260 90% 65%)" rx="1" />
                    <rect x="24" y="30" width="8" height="20" fill="hsl(260 90% 65%)" rx="1" />
                    <rect x="36" y="15" width="8" height="35" fill="hsl(260 90% 65%)" rx="1" />
                    <rect x="48" y="25" width="8" height="25" fill="hsl(260 90% 65%)" rx="1" />
                    <rect x="60" y="5" width="8" height="45" fill="hsl(260 90% 65%)" rx="1" />
                    <rect x="72" y="35" width="8" height="15" fill="hsl(260 90% 65%)" rx="1" />
                    <rect x="84" y="20" width="8" height="30" fill="hsl(260 90% 65%)" rx="1" />
                  </svg>
                </div>
              </CardContent>
            </Card>

            {/* Deposit Card */}
            <Card className="bg-dashboard-card text-dashboard-lightgray transition-all duration-300 ease-in-out hover:scale-[1.01] hover:shadow-xl">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Deposit</CardTitle>
                <Button
                  variant="link"
                  className="h-auto p-0 text-dashboard-purple hover:text-dashboard-purple/80 transition-colors duration-200"
                >
                  View All
                </Button>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-dashboard-green/20 text-dashboard-green">
                      <CreditCard className="h-4 w-4" />
                    </div>
                    <div>
                      <div className="font-medium">Gumroad Account</div>
                      <div className="text-xs text-muted-foreground">Sell UI Kit</div>
                    </div>
                  </div>
                  <div className="font-bold text-dashboard-green">+$4,650</div>
                </div>
              </CardContent>
            </Card>

            {/* Withdraw Card */}
            <Card className="bg-dashboard-card text-dashboard-lightgray transition-all duration-300 ease-in-out hover:scale-[1.01] hover:shadow-xl">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Withdraw</CardTitle>
                <Button
                  variant="link"
                  className="h-auto p-0 text-dashboard-purple hover:text-dashboard-purple/80 transition-colors duration-200"
                >
                  View All
                </Button>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Image
                      src="/placeholder.svg?height=32&width=32"
                      alt="Google Adsense"
                      width={32}
                      height={32}
                      className="rounded-full"
                    />
                    <div>
                      <div className="font-medium">Google Adsense</div>
                      <div className="text-xs text-muted-foreground">Paypal deposit</div>
                    </div>
                  </div>
                  <div className="font-bold text-dashboard-red">-$145</div>
                </div>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  )
}
