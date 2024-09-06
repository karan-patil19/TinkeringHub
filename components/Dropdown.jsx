'use client'

import React from 'react'
import { useRouter } from 'next/navigation'
import { ChevronDown} from "lucide-react";


const dropdowns = [
  {
    buttonLabel: 'Webinar & Expert Session',
    items: [
      { label: 'Upcoming Webinar', href: '/UpcomingWebinar' },
      { label: 'Upcoming Expression', href: '/UpcomingExpression' },
      { label: 'Past Webinar', href: '/PastWebinar' },
      { label: 'Past Expression', href: '/PastExpression' },
    ],
  },
  {
    buttonLabel: 'BootCamps',
    items: [
      { label: 'Upcoming Bootcamp', href: '/UpcomingBootcamp' },
      { label: 'Past BootCamps Videos', href: '/PastBootCampsVideos' },
    ],
  },
  {
    buttonLabel: 'Project Mentoring & InternShips',
    items: [
      { label: 'Peach Project', href: '/PeachProject' },
      { label: 'Open Internship', href: '/OpenInternship' },
      { label: 'Past InternShip Experrience', href: '/PastInternShipExperrience' },
    ],
  },
  {
    buttonLabel: 'Sensitization & Awareness',
    items: [
      { label: 'Upcoming Bootcamp', href: '/UpcomingBootcamp' },
      { label: 'Past BootCamps Videos', href: '/PastBootCampsVideos' },
    ],
  },
  {
    buttonLabel: 'Funding Praposal',
    items: [
      { label: 'Upcoming Bootcamp', href: '/UpcomingBootcamp' },
      { label: 'Past BootCamps Videos', href: '/PastBootCampsVideos' },
    ],
  },
  {
    buttonLabel: 'Demonstration',
    items: [
      { label: 'Upcoming Bootcamp', href: '/UpcomingBootcamp' },
      { label: 'Past BootCamps Videos', href: '/PastBootCampsVideos' },
    ],
  },
  {
    buttonLabel: 'Traning & WorkShop Session',
    items: [
      { label: 'Upcoming Bootcamp', href: '/UpcomingBootcamp' },
      { label: 'Past BootCamps Videos', href: '/PastBootCampsVideos' },
    ],
  },
]

export default function MultiDropdowns() {
  const router = useRouter()

  const handleNavigation = (href) => {
    router.push(href)
  }

  return (
    <div className="w-full bg-primary_color2 mt-2">
      {/* First row: 5 dropdowns */}
      <div className="flex flex-wrap justify-center sm:justify-between py-2 space-y-2 sm:space-y-0 ">
        {dropdowns.slice(0, 4).map((dropdown, index) => (
          <div key={index} className="dropdown dropdown-hover m-2 sm:m-0 py-1">
            <div
              tabIndex={0}
              role="button"
              className="btn w-full bg-primary_color2 text-black sm:w-auto shadow-lg dark:shadow-gray-300 hover:bg-primary_color1 hover:text-black transition-colors"
            >
              {dropdown.buttonLabel} <ChevronDown></ChevronDown>
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content menu bg-primary_color2 text-black rounded-box z-[1] w-52 p-2 shadow"
            >
              {dropdown.items.map((item, itemIndex) => (
                <li key={itemIndex}>
                  <a
                    className="hover:bg-primary_color1 hover:text-black transition-colors"
                    onClick={() => handleNavigation(item.href)}
                  >
                    {item.label } 
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Second row: 2 dropdowns centered */}
      <div className="flex justify-center space-x-4 ">
        {dropdowns.slice(4, 7).map((dropdown, index) => (
          <div key={index} className="dropdown dropdown-hover m-2 sm:m-0">
            <div
              tabIndex={0}
              role="button"
              className="btn w-full sm:w-auto bg-primary_color2 text-black shadow-lg dark:shadow-gray-300 hover:bg-white hover:text-black transition-colors "
            >
              {dropdown.buttonLabel}<ChevronDown></ChevronDown>
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content menu bg-primary_color2 text-black rounded-box z-[1] w-52 p-2 shadow"
            >
              {dropdown.items.map((item, itemIndex) => (
                <li key={itemIndex}>
                  <a
                    className="hover:bg-white hover:text-black transition-colors "
                    onClick={() => handleNavigation(item.href)}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  )
}
