import { Card, CardContent } from "../../components/ui/card";
import { Button } from "../../components/ui/button";
import ExampleNavbarThree from "../../components/Navigation";

function WebinarCard({ title, presenter, date, description, imageSrc }) {
  return (
    <Card className="max-w-xs w-full flex flex-col rounded-lg overflow-hidden">
      {/* Image fits inside the card, centered and covering the container */}
      <div className="w-full h-48"> {/* Reduced height to h-48 */}
        <img
          src={imageSrc}
          alt="Webinar thumbnail"
          className="w-full h-full object-cover object-center"
        />
      </div>
      {/* Content below the image */}
      <CardContent className="p-3 space-y-2 flex-grow"> {/* Reduced padding */}
        <h2 className="text-lg font-bold text-primary">{title}</h2> {/* Slightly reduced font size */}
        <p className="text-sm font-semibold text-secondary">Presenter: {presenter}</p>
        <p className="text-xs text-muted-foreground">Date: {date}</p> {/* Reduced text size */}
        <p className="text-sm">{description}</p>
        <Button className="w-full bg-black hover:bg-gray-600 text-white text-sm py-2">
          Register
        </Button>
      </CardContent>
    </Card>
  );
}

export default function WebinarCards() {
  return (
    <main className="flex min-h-screen flex-col items-center p-8 justify-between bg-primary_color1">
      <div className="w-full max-w-screen-xl bg-primary_color2 rounded-lg border border-primary_color3 shadow-lg">
        <ExampleNavbarThree />
        {/* Added bold and centered text */}
        <h1 className="text-2xl font-bold text-center text-white py-6">
          Upcoming Webinars & Expert Session
        </h1>
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-stretch">
            <WebinarCard
              title="Introduction to Next.js"
              presenter="Jane Doe"
              date="June 15, 2023"
              description="Join us for an exciting webinar where we'll explore the fundamentals of Next.js, a powerful React framework for building modern web applications. Learn about server-side rendering, routing, and more!"
              imageSrc="/images/pic1.png"
            />
            <WebinarCard
              title="Advanced React Patterns"
              presenter="John Smith"
              date="July 20, 2023"
              description="Join us for an exciting webinar where we'll explore the fundamentals of Next.js, a powerful React framework for building modern web applications. Learn about server-side rendering, routing, and more!"
              imageSrc="/images/pic1.png"
            />
            <WebinarCard
              title="State Management with Redux"
              presenter="Emily Clark"
              date="August 10, 2023"
              description="Join us for an exciting webinar where we'll explore the fundamentals of Next.js, a powerful React framework for building modern web applications. Learn about server-side rendering, routing, and more!"
              imageSrc="/images/pic1.png"
            />
          </div>
        </div>
      </div>
    </main>
  );
}
