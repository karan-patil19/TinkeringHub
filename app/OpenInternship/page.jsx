'use client';

import { useState, useEffect } from 'react';
import { Input } from "../../components/ui/input";
import { Button } from "../../components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "../../components/ui/card";
import { Checkbox } from "../../components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../../components/ui/select";
import { ChevronLeft, ChevronRight, MapPin, Calendar, DollarSign } from 'lucide-react';
import ExampleNavbarThree from '../../components/Navigation';

// Mock data for internships
const mockInternships = [
  {
    id: 1,
    company: "TechCorp",
    position: "Frontend Developer Intern",
    location: "Remote",
    stipend: "₹15,000/month",
    duration: "3 months",
    postedDate: "2 days ago"
  },
  {
    id: 2,
    company: "DesignHub",
    position: "UI/UX Design Intern",
    location: "Mumbai",
    stipend: "₹10,000/month",
    duration: "6 months",
    postedDate: "1 week ago"
  },
  {
    id: 3,
    company: "DataMinds",
    position: "Data Science Intern",
    location: "Bangalore",
    stipend: "₹20,000/month",
    duration: "4 months",
    postedDate: "3 days ago"
  },
  {
    id: 4,
    company: "CloudSys",
    position: "Cloud Computing Intern",
    location: "Hyderabad",
    stipend: "₹18,000/month",
    duration: "3 months",
    postedDate: "5 days ago"
  },
  {
    id: 5,
    company: "AITech",
    position: "Machine Learning Intern",
    location: "Remote",
    stipend: "₹22,000/month",
    duration: "6 months",
    postedDate: "1 day ago"
  }
];

export default function OpenInternships() {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [locationFilters, setLocationFilters] = useState({
    Remote: false,
    Mumbai: false,
    Bangalore: false,
    Hyderabad: false
  });
  const [durationFilter, setDurationFilter] = useState("none");
  const [filteredInternships, setFilteredInternships] = useState(mockInternships);
  const internshipsPerPage = 5;

  useEffect(() => {
    const filtered = mockInternships.filter(internship => {
      const matchesSearch = internship.position.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            internship.company.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesLocation = Object.values(locationFilters).every(v => v === false) ||
                              locationFilters[internship.location];

      const matchesDuration = durationFilter === "none" ||
                              (durationFilter === "1-3" && parseInt(internship.duration) <= 3) ||
                              (durationFilter === "3-6" && parseInt(internship.duration) > 3 && parseInt(internship.duration) <= 6) ||
                              (durationFilter === "6+" && parseInt(internship.duration) > 6);

      return matchesSearch && matchesLocation && matchesDuration;
    });

    setFilteredInternships(filtered);
    setCurrentPage(1);
  }, [searchTerm, locationFilters, durationFilter]);

  // Get current internships
  const indexOfLastInternship = currentPage * internshipsPerPage;
  const indexOfFirstInternship = indexOfLastInternship - internshipsPerPage;
  const currentInternships = filteredInternships.slice(indexOfFirstInternship, indexOfLastInternship);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const handleLocationFilterChange = (location) => {
    setLocationFilters(prev => ({
      ...prev,
      [location]: !prev[location]
    }));
  };

  const handleDurationFilterChange = (value) => {
    setDurationFilter(value);
  };

  return (
    <div className="flex min-h-screen flex-col items-center p-8 justify-between bg-primary_color1">
      <div className="w-full max-w-screen-lg bg-primary_color2 rounded-lg shadow-lg p-6">
        <ExampleNavbarThree />
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-8">Open Internships</h1>
      
      {/* Search Bar */}
      <div className="mb-6">
        <Input
          type="text"
          placeholder="Search for internships..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="max-w-md"
        />
      </div>

      <div className="flex flex-col md:flex-row gap-6">
        {/* Filters */}
        <div className="w-full md:w-1/4">
          <Card>
            <CardHeader>
              <CardTitle>Filters</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold mb-2">Location</h3>
                  <div className="space-y-2">
                    {Object.keys(locationFilters).map((location) => (
                      <div key={location} className="flex items-center">
                        <Checkbox
                          id={location}
                          checked={locationFilters[location]}
                          onCheckedChange={() => handleLocationFilterChange(location)}
                        />
                        <label htmlFor={location} className="ml-2">{location}</label>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Duration</h3>
                  <Select value={durationFilter} onValueChange={handleDurationFilterChange}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select duration" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="none" disabled>Select duration</SelectItem>
                      <SelectItem value="1-3">1-3 months</SelectItem>
                      <SelectItem value="3-6">3-6 months</SelectItem>
                      <SelectItem value="6+">6+ months</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Internship Listings */}
        <div className="w-full md:w-3/4">
          {currentInternships.map(internship => (
            <Card key={internship.id} className="mb-4">
              <CardHeader>
                <CardTitle>{internship.position}</CardTitle>
                <p className="text-sm text-muted-foreground">{internship.company}</p>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center">
                    <MapPin className="mr-2 h-4 w-4" />
                    <span>{internship.location}</span>
                  </div>
                  <div className="flex items-center">
                    <Calendar className="mr-2 h-4 w-4" />
                    <span>{internship.duration}</span>
                  </div>
                  <div className="flex items-center">
                    <DollarSign className="mr-2 h-4 w-4" />
                    <span>{internship.stipend}</span>
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Posted {internship.postedDate}
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button>View Details</Button>
              </CardFooter>
            </Card>
          ))}

          {/* Pagination */}
          <div className="flex justify-center mt-6">
            <Button
              variant="outline"
              onClick={() => paginate(currentPage - 1)}
              disabled={currentPage === 1}
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <span className="mx-4 flex items-center">
              Page {currentPage} of {Math.ceil(filteredInternships.length / internshipsPerPage)}
            </span>
            <Button
              variant="outline"
              onClick={() => paginate(currentPage + 1)}
              disabled={currentPage === Math.ceil(filteredInternships.length / internshipsPerPage)}
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
    </div>
    </div>
  );
}
