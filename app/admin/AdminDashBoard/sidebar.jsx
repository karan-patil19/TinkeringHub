import { FolderIcon, BeakerIcon, VideoIcon, BriefcaseIcon, XIcon } from 'lucide-react'
import { Button } from "../../../components/ui/button"

export function Sidebar({ setActiveSection, setSidebarOpen }) {
  return (
    <div className="flex flex-col w-64 bg-primary_color1 shadow-lg shadow-gray-400/50">
      {/* Header and close button for mobile */}
      <div className="flex items-center justify-between h-16 p-4 border-b">
        <h1 className="text-xl text-black font-bold">Tinkering Hub</h1>
        {/* Render close button only on mobile screens */}
        {setSidebarOpen && (
          <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setSidebarOpen(false)}>
            <XIcon className="h-6 w-6 text-black" />
          </Button>
        )}
      </div>

      <nav className="flex-grow">
        <ul className="flex flex-col py-4">
          <li>
            <Button
              variant="ghost"
              className="flex items-center w-full text-black hover:bg-primary_color1/80 justify-start"
              onClick={() => setActiveSection('bootcamps')}
            >
              <FolderIcon className="mr-3 h-5 w-5" />
              Bootcamps
            </Button>
          </li>
          <li>
            <Button
              variant="ghost"
              className="flex items-center w-full text-black hover:bg-primary_color1/80 justify-start"
              onClick={() => setActiveSection('webinars')}
            >
              <VideoIcon className="mr-3 h-5 w-5" />
              Webinars
            </Button>
          </li>
          <li>
            <Button
              variant="ghost"
              className="flex items-center w-full text-black hover:bg-primary_color1/80 justify-start"
              onClick={() => setActiveSection('labBookings')}
            >
              <BeakerIcon className="mr-3 h-5 w-5" />
              Lab Bookings
            </Button>
          </li>
          <li>
            <Button
              variant="ghost"
              className="flex items-center w-full text-black hover:bg-primary_color1/80 justify-start"
              onClick={() => setActiveSection('internAssignments')}
            >
              <BeakerIcon className="mr-3 h-5 w-5" />
              Intern Assignments
            </Button>
          </li>
          <li>
            <Button
              variant="ghost"
              className="flex items-center w-full text-black hover:bg-primary_color1/80 justify-start"
              onClick={() => setActiveSection('internships')}
            >
              <BriefcaseIcon className="mr-3 h-5 w-5" />
              Internships
            </Button>
          </li>
        </ul>
      </nav>
    </div>
  )
}
