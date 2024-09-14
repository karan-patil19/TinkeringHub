"use client";

import React from 'react';
import { useRouter } from 'next/navigation';
import { ChevronDown } from 'lucide-react';

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
  {
    buttonLabel: 'Futurestic Labs',
    items: [
      { label: 'Book The Lab', href: '/Lab' },
    ],
  },
];

export default function MultiDropdowns() {
  const router = useRouter();

  const handleNavigation = (href) => {
    router.push(href);
  };

  return (
    <div className="w-full bg-primary_color2 mt-2">
      {/* Container to align all dropdowns in one line */}
      <div className="flex flex-wrap justify-center gap-4 py-2">
        {dropdowns.map((dropdown, index) => (
          <div key={index} className="dropdown dropdown-hover">
            <div
              tabIndex={0}
              role="button"
              className="btn bg-primary_color2 text-black shadow-lg dark:shadow-gray-300 hover:bg-primary_color1 hover:text-black transition-colors"
            >
              {dropdown.buttonLabel} <ChevronDown />
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
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
