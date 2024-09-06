'use client';

import * as React from "react";
import { Card } from "../components/ui/card"; // Assuming you have a basic Card component
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../components/ui/carousel"; // Ensure this is a client component that supports looping

export function CarouselSpacing() {
  const cards = [
    {
      imageSrc: "/images/school.png",
      title: "We explore, analyze and support",
      description:
        "We explore, analyze and support technology—on-premises and in the startups and —all in one view.",
    },
    {
      imageSrc: "/images/team.png",
      title: "Transform sparks of new technology",
      description:
        "Transform sparks of new technology into stunning efforts and share them with colleagues and students with peers.",
    },
    {
      imageSrc: "/images/explor.png",
      title: "Collaborate on Tech dominion",
      description:
        "Collaborate on Tech dominion and share among peers the benefits and resources.",
    },
    {
      imageSrc: "/images/tansform.png",
      title: "Scale technological knowledge",
      description:
        "Scale technological knowledge across our organization with built-in governance and security.",
    },
  ];

  return (
    <div className="w-full max-w-screen-xl mx-auto py-8">
      <h2 className="text-center text-2xl text-black font-semibold mb-6">
        What does Tinkering Hub do?
      </h2>

      {/* Display simple cards side by side on md and larger screens */}
      <div className="hidden ml-2 mr-2 lg:flex md:justify-between md:space-x-4">
        {cards.map((card, index) => (
          <Card
            key={index}
            className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-lg w-full md:w-1/4 h-60 md:h-80" // Different heights for mobile and larger screens
          >
            <img
              src={card.imageSrc}
              alt={card.title}
              className="w-20 h-18 mb-4 object-contain"
            />
            <h3 className="text-lg font-medium mb-2">{card.title}</h3>
            <p className="text-sm text-gray-600 overflow-hidden text-ellipsis">
              {card.description}
            </p>
          </Card>
        ))}
      </div>

      {/* Display the carousel on screens smaller than md */}
      <Carousel
        opts={{
          align: "center",
          loop: true,
          gap: "1rem",
          dragFree: false, // Ensure dragFree is disabled for proper button navigation
          autoplay: {
            delay: 3000,
            pauseOnHover: true,
          },
        }}
        className="block lg:hidden w-full relative"
      >
        <CarouselContent className="flex items-center">
          {cards.map((card, index) => (
            <CarouselItem key={index} className="flex-none w-full p-4">
              <Card className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-lg h-64"> {/* Fixed height for mobile */}
                <img
                  src={card.imageSrc}
                  alt={card.title}
                  className="w-16 h-16 mb-4 object-contain"
                />
                <h3 className="text-lg font-medium mb-2">{card.title}</h3>
                <p className="text-sm text-gray-600 overflow-hidden text-ellipsis">
                  {card.description}
                </p>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="absolute left-2 top-1/2 transform -translate-y-1/2 z-10 bg-white rounded-full shadow-lg p-2">
          ‹
        </CarouselPrevious>
        <CarouselNext className="absolute right-2 top-1/2 transform -translate-y-1/2 z-10 bg-white rounded-full shadow-lg p-2">
          ›
        </CarouselNext>
      </Carousel>
    </div>
  );
}
