'use client'

import { useState, useEffect } from 'react'
import { Input } from "../../../components/ui/input"
import { Button } from "../../../components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../../../components/ui/dropdown-menu"
import { Sidebar } from './sidebar'
import { Bootcamps } from './bootcamps'
import { Webinars } from './webinars'
import { Internships } from './internships'
import { InternAssignments } from './intern-assignment'
import { LabBookings } from './lab-booking'
import { BellIcon, MenuIcon } from 'lucide-react'

export default function AdminDashboard() {
  const [activeSection, setActiveSection] = useState('bootcamps')
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
      setIsSidebarOpen(window.innerWidth >= 768)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const renderContent = () => {
    switch (activeSection) {
      case 'bootcamps':
        return <Bootcamps />
      case 'webinars':
        return <Webinars />
      case 'internships':
        return <Internships />
      case 'internAssignments':
        return <InternAssignments />
      case 'labBookings':
        return <LabBookings />
      default:
        return <div>Select a section</div>
    }
  }

  return (
    <div className="flex min-h-screen">
      <Sidebar
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
        setActiveSection={setActiveSection}
        isMobile={isMobile}
      />

      {/* Main content section */}
      <div className={`flex-1 flex flex-col transition-all duration-300 ${isSidebarOpen && !isMobile ? 'ml-64' : 'ml-0'}`}>
        <header className="flex justify-between items-center p-4 bg-primary_color1 border-b">
          <div className="flex items-center">
            <Button
              variant="ghost"
              size="icon"
              className="mr-2 md:hidden"
              onClick={() => setIsSidebarOpen(true)}
            >
              <MenuIcon className="h-6 w-6" />
            </Button>
            <h1 className="text-xl text-black font-semibold">Admin Dashboard</h1>
          </div>
          <div className="flex items-center">
            <Input
              type="search"
              placeholder="Search..."
              className="mr-2 md:w-[300px]"
            />
            <Button variant="ghost" size="icon">
              <BellIcon className="h-6 w-6 text-black" />
            </Button>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon">
                  <img
                    src="/placeholder.svg?height=32&width=32"
                    alt="Admin"
                    className="rounded-full"
                  />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Profile</DropdownMenuItem>
                <DropdownMenuItem>Settings</DropdownMenuItem>
                <DropdownMenuItem>Logout</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </header>

        <main className="flex-1 bg-gray-100 p-6">
          {renderContent()}
        </main>
      </div>
    </div>
  )
}
