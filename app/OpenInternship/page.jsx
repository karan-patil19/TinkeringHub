'use client';

import { useState, useEffect } from 'react';
import { Input } from "../../components/ui/input";
import { Button } from "../../components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "../../components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../../components/ui/select";
import { ChevronLeft, ChevronRight, MapPin, Calendar, DollarSign } from 'lucide-react';
import ExampleNavbarThree from '../../components/Navigation';

// Mock data for internships
const mockInternships = [
  {
    id: 1,
    company: "TechCorp",
    position: "Frontend Developer Intern",
    location: "Onsite",
    stipend: "₹15,000/month",
    duration: "3 months",
    postedDate: "2023-07-10",
    isPaid: true
  },
  {
    id: 2,
    company: "DesignHub",
    position: "UI/UX Design Intern",
    location: "Onsite",
    stipend: "₹10,000/month",
    duration: "6 months",
    postedDate: "2023-07-05",
    isPaid: true
  },
  {
    id: 3,
    company: "DataMinds",
    position: "Data Science Intern",
    location: "Onsite",
    stipend: "Unpaid",
    duration: "4 months",
    postedDate: "2023-07-09",
    isPaid: false
  },
  {
    id: 4,
    company: "CloudSys",
    position: "Cloud Computing Intern",
    location: "Onsite",
    stipend: "₹18,000/month",
    duration: "3 months",
    postedDate: "2023-07-07",
    isPaid: true
  },
  {
    id: 5,
    company: "AITech",
    position: "Machine Learning Intern",
    location: "Onsite",
    stipend: "Unpaid",
    duration: "6 months",
    postedDate: "2023-07-11",
    isPaid: false
  }
];

export default function OpenInternships() {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [durationFilter, setDurationFilter] = useState("all");
  const [paidFilter, setPaidFilter] = useState("all");
  const [sortOrder, setSortOrder] = useState("");
  const [filteredInternships, setFilteredInternships] = useState(mockInternships);
  const internshipsPerPage = 5;

  useEffect(() => {
    let filtered = mockInternships.filter(internship => {
      const matchesSearch = internship.position.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            internship.company.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesDuration = durationFilter === "all" ||
                              (durationFilter === "1-3" && parseInt(internship.duration) <= 3) ||
                              (durationFilter === "3-6" && parseInt(internship.duration) > 3 && parseInt(internship.duration) <= 6) ||
                              (durationFilter === "6+" && parseInt(internship.duration) > 6);

      const matchesPaid = paidFilter === "all" || 
                          (paidFilter === "paid" && internship.isPaid) ||
                          (paidFilter === "unpaid" && !internship.isPaid);

      return matchesSearch && matchesDuration && matchesPaid;
    });

    if (sortOrder === "recent") {
      filtered.sort((a, b) => new Date(b.postedDate).getTime() - new Date(a.postedDate).getTime());
    }

    setFilteredInternships(filtered);
    setCurrentPage(1);
  }, [searchTerm, durationFilter, paidFilter, sortOrder]);

  // Get current internships
  const indexOfLastInternship = currentPage * internshipsPerPage;
  const indexOfFirstInternship = indexOfLastInternship - internshipsPerPage;
  const currentInternships = filteredInternships.slice(indexOfFirstInternship, indexOfLastInternship);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffTime = Math.abs(now.getTime() - date.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    if (diffDays === 1) return "1 day ago";
    if (diffDays <= 7) return `${diffDays} days ago`;
    return `${Math.floor(diffDays / 7)} weeks ago`;
  };

  return (
    <main className="flex min-h-screen flex-col items-center p-8 justify-between bg-primary_color1"> {/* Dark yellow background */}
      <div className="w-full max-w-screen-2xl bg-primary_color2 rounded-lg shadow-lg"> {/* Light yellow inner box */}
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
                      <h3 className="font-semibold mb-2">Duration</h3>
                      <Select value={durationFilter} onValueChange={setDurationFilter}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select duration" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="all">Any duration</SelectItem>
                          <SelectItem value="1-3">1-3 months</SelectItem>
                          <SelectItem value="3-6">3-6 months</SelectItem>
                          <SelectItem value="6+">6+ months</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Paid/Unpaid</h3>
                      <Select value={paidFilter} onValueChange={setPaidFilter}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="all">Any</SelectItem>
                          <SelectItem value="paid">Paid</SelectItem>
                          <SelectItem value="unpaid">Unpaid</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Sort By</h3>
                      <Select value={sortOrder} onValueChange={setSortOrder}>
                        <SelectTrigger>
                          <SelectValue placeholder="Sort order" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="default">Default</SelectItem>
                          <SelectItem value="recent">Most Recent</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Internship Listings */}
            <div className="w-full md:w-3/4">
              {currentInternships.length > 0 ? (
                currentInternships.map(internship => (
                  <Card key={internship.id} className="mb-4">
                    <CardHeader>
                      <CardTitle>{internship.position} at {internship.company}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-col gap-2">
                        <div className="flex items-center gap-2">
                          <MapPin size={16} />
                          <span>{internship.location}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <DollarSign size={16} />
                          <span>{internship.stipend}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Calendar size={16} />
                          <span>{internship.duration}</span>
                        </div>
                        <p className="text-sm text-gray-600">{formatDate(internship.postedDate)}</p>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button className="w-full">Apply Now</Button>
                    </CardFooter>
                  </Card>
                ))
              ) : (
                <p>No internships found.</p>
              )}

              {/* Pagination */}
              <div className="flex justify-between mt-8">
                <Button
                  onClick={() => paginate(currentPage - 1)}
                  disabled={currentPage === 1}
                >
                  <ChevronLeft size={16} />
                </Button>
                <div className="flex gap-2">
                  {Array.from({ length: Math.ceil(filteredInternships.length / internshipsPerPage) }, (_, i) => (
                    <Button
                      key={i + 1}
                      onClick={() => paginate(i + 1)}
                      className={currentPage === i + 1 ? 'bg-blue-500 text-white' : ''}
                    >
                      {i + 1}
                    </Button>
                  ))}
                </div>
                <Button
                  onClick={() => paginate(currentPage + 1)}
                  disabled={currentPage === Math.ceil(filteredInternships.length / internshipsPerPage)}
                >
                  <ChevronRight size={16} />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
