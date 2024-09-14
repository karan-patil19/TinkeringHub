'use client'
import { useState } from 'react'
import { BellIcon, MenuIcon } from 'lucide-react'
import { Button } from "../../../components/ui/button"
import { Input } from "../../../components/ui/input"
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
import { LabBookings } from './lab-booking'
import { InternAssignments } from './intern-assignment'
import { Internships } from './internships'

export default function AdminDashboard() {
  const [activeSection, setActiveSection] = useState('bootcamps')
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const renderContent = () => {
    switch (activeSection) {
      case 'bootcamps':
        return <Bootcamps />
      case 'webinars':
        return <Webinars />
      case 'labBookings':
        return <LabBookings />
      case 'internAssignments':
        return <InternAssignments />
      case 'internships':
        return <Internships />
      default:
        return <div>Select a section</div>
    }
  }

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar for larger screens */}
      <div className="hidden md:flex">
        <Sidebar setActiveSection={setActiveSection} />
      </div>

      {/* Sidebar for mobile screens */}
      <div className={`fixed inset-y-0 z-50 md:hidden transition-transform transform ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} duration-300 bg-primary_color1 shadow-lg shadow-gray-400/50 w-64`}>
        <Sidebar setActiveSection={setActiveSection} setSidebarOpen={setSidebarOpen} />
      </div>

      {/* Overlay for mobile sidebar */}
      {sidebarOpen && (
        <div className="fixed inset-0 bg-black opacity-50 md:hidden" onClick={() => setSidebarOpen(false)} />
      )}

      <div className="flex-1 flex flex-col overflow-hidden">
        <header className="flex justify-between items-center p-4 bg-primary_color1 border-b">
          <div className="flex items-center">
            {/* Menu icon for mobile screens */}
            <Button variant="ghost" size="icon" className="mr-2 md:hidden" onClick={() => setSidebarOpen(!sidebarOpen)}>
              <MenuIcon className="h-6 w-6" />
            </Button>
            <h1 className="text-xl text-black font-semibold">Admin Dashboard</h1>
          </div>
          <div className="flex items-center">
            <Input type="search" placeholder="Search..." className="mr-2 md:w-[300px]" />
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

        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-primary_color1">
          <div className="container mx-auto px-6 py-8">
            {renderContent()}
          </div>
        </main>
      </div>
    </div>
  )
}
