"use client";

import React from 'react';
import { useRouter } from 'next/navigation';
import { ChevronDown } from 'lucide-react';

// Filtered dropdowns to include only the needed items
const dropdowns = [
  {
    buttonLabel: 'Webinar & Expert Session',
    items: [
      { label: 'Upcoming Webinar', href: '/UpcomingWebinar' },
      { label: 'Past Webinar', href: '/PastWebinar' },
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
    buttonLabel: 'Project Mentoring & Internships',
    items: [
      { label: 'Peach Project', href: '/PeachProject' },
      { label: 'Open Internship', href: '/OpenInternship' },
    ],
  },
  {
    buttonLabel: 'Training & Workshop Session',
    items: [
      { label: 'Upcoming Training', href: '/UpcomingTraining' },
      { label: 'Past Workshops', href: '/PastWorkshops' },
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
      <div className="flex flex-wrap justify-center gap-4 py-2 md:py-4 md:gap-6 lg:gap-8">
        {dropdowns.map((dropdown, index) => (
          <div key={index} className="dropdown dropdown-hover border border-gray-300 rounded-lg w-full md:w-auto">
            <div
              tabIndex={0}
              role="button"
              className="btn bg-primary_color2 text-black shadow-lg dark:shadow-gray-300 hover:bg-primary_color1 hover:text-black transition-colors border border-gray-300 rounded-lg text-sm md:text-base py-2 px-3 md:py-3 md:px-4"
            >
              {dropdown.buttonLabel} <ChevronDown />
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content menu bg-primary_color2 text-black rounded-box z-[1] w-52 p-2 shadow border border-gray-300"
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
