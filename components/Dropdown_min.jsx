import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { ChevronDown } from "lucide-react";

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
    buttonLabel: 'Workshops',
    items: [
      { label: 'Upcoming Workshop', href: '/UpcomingWorkshop' },
      { label: 'Past Workshops Videos', href: '/PastWorkshopsVideos' },
    ],
  },
  {
    buttonLabel: 'Project Mentoring & InternShips',
    items: [
      { label: 'Peach Project', href: '/PeachProject' },
      { label: 'Open Internship', href: '/OpenInternship' },
      { label: 'Past InternShip Experience', href: '/PastInternShipExperience' },
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
    buttonLabel: 'Funding Proposal',
    items: [
      { label: 'Upcoming Bootcamp', href: '/UpcomingBootcamp' },
      { label: 'Past BootCamps Videos', href: '/PastBootCampsVideos' },
    ],
  },
  {
    buttonLabel: 'Demonstration',
    items: [
      { label: 'Upcoming Workshop', href: '/UpcomingWorkshop' },
      { label: 'Past Workshops Videos', href: '/PastWorkshopsVideos' },
    ],
  },
  // {
  //   buttonLabel: 'Training & Workshop Session',
  //   items: [
  //     { label: 'Upcoming Bootcamp', href: '/UpcomingBootcamp' },
  //     { label: 'Past BootCamps Videos', href: '/PastBootCampsVideos' },
  //   ],
  // },
];

export default function MultiDropdowns() {
  const router = useRouter();
  const [openDropdown, setOpenDropdown] = useState(null);

  const handleNavigation = (href) => {
    router.push(href);
  };

  const toggleDropdown = (index) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };

  return (
    <div className="w-full flex flex-col gap-4">
      {dropdowns.map((dropdown, index) => (
        <div key={index} className="w-full">
          <div
            tabIndex={0}
            role="button"
            className="btn w-full bg-primary_color2 text-black shadow-lg dark:shadow-gray-300 hover:bg-primary_color1 hover:text-black transition-colors flex justify-between items-center"
            onClick={() => toggleDropdown(index)}
          >
            {dropdown.buttonLabel} <ChevronDown />
          </div>
          {openDropdown === index && (
            <ul className="w-full bg-primary_color2 text-black rounded-box z-[1] p-2 shadow">
              {dropdown.items.map((item, itemIndex) => (
                <li key={itemIndex}>
                  <a
                    className="hover:bg-primary_color1 hover:text-black transition-colors block"
                    onClick={() => handleNavigation(item.href)}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  );
}
