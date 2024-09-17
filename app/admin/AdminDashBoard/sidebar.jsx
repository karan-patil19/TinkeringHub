import { FolderIcon, BeakerIcon, VideoIcon, BriefcaseIcon, UserIcon, XIcon } from 'lucide-react';
import { Button } from "../../../components/ui/button";

export function Sidebar({ setActiveSection, isOpen, onClose, isMobile }) {
  return (
    <div 
      className={`fixed inset-y-0 left-0 w-64 bg-primary_color1 shadow-lg shadow-gray-400/50 flex flex-col z-50 transform transition-transform duration-300 ease-in-out
      ${isOpen ? 'translate-x-0' : '-translate-x-full'} ${isMobile ? '' : 'md:translate-x-0'}`}
    >
      <div className="flex items-center justify-between h-16 shadow-md p-4">
        <h1 className="text-lg uppercase text-black font-bold">TinkeringHub</h1>
        {isMobile && (
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={onClose}
          >
            <XIcon className="h-6 w-6 text-black" />
          </Button>
        )}
      </div>

      <nav className="flex-1 py-4">
        <ul className="space-y-2">
          <li>
            <Button
              variant="ghost"
              className="w-full justify-start text-black hover:bg-primary_color2"
              onClick={() => {
                setActiveSection('bootcamps');
                if (isMobile) onClose();
              }}
            >
              <FolderIcon className="mr-3 h-5 w-5" />
              Bootcamps
            </Button>
          </li>
          <li>
            <Button
              variant="ghost"
              className="w-full justify-start text-black hover:bg-primary_color2"
              onClick={() => {
                setActiveSection('webinars');
                if (isMobile) onClose();
              }}
            >
              <VideoIcon className="mr-3 h-5 w-5" />
              Webinars
            </Button>
          </li>
          <li>
            <Button
              variant="ghost"
              className="w-full justify-start text-black hover:bg-primary_color2"
              onClick={() => {
                setActiveSection('internships');
                if (isMobile) onClose();
              }}
            >
              <BriefcaseIcon className="mr-3 h-5 w-5" />
              Internships
            </Button>
          </li>
          <li>
            <Button
              variant="ghost"
              className="w-full justify-start text-black hover:bg-primary_color2"
              onClick={() => {
                setActiveSection('internAssignments');
                if (isMobile) onClose();
              }}
            >
              <UserIcon className="mr-3 h-5 w-5" />
              Intern Assignments
            </Button>
          </li>
          <li>
            <Button
              variant="ghost"
              className="w-full justify-start text-black hover:bg-primary_color2"
              onClick={() => {
                setActiveSection('labBookings');
                if (isMobile) onClose();
              }}
            >
              <BeakerIcon className="mr-3 h-5 w-5" />
              Lab Bookings
            </Button>
          </li>
        </ul>
      </nav>
    </div>
  );
}
