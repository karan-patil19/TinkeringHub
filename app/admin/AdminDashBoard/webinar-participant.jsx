import { useState } from 'react'
import { Input } from "../../../components/ui/input"
import { Button } from "../../../components/ui/button"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../../components/ui/table"

export function WebinarParticipants() {
  // Participants list (could come from an API or database)
  const participants = [
    { id: 1, name: "John Doe", email: "john@example.com", webinar: "Introduction to React" },
    { id: 2, name: "Jane Smith", email: "jane@example.com", webinar: "Advanced TypeScript" },
    { id: 3, name: "Alice Johnson", email: "alice@example.com", webinar: "Introduction to React" },
    { id: 4, name: "Bob Williams", email: "bob@example.com", webinar: "Advanced TypeScript" },
    { id: 5, name: "Charlie Brown", email: "charlie@example.com", webinar: "React Native Essentials" },
    { id: 6, name: "Diana Prince", email: "diana@example.com", webinar: "Node.js Fundamentals" },
    { id: 7, name: "Ethan Hunt", email: "ethan@example.com", webinar: "Introduction to React" },
    { id: 8, name: "Fiona Apple", email: "fiona@example.com", webinar: "Advanced TypeScript" },
    // Add more participants as needed
  ]

  // State for search term, current page, and pagination
  const [searchTerm, setSearchTerm] = useState('')
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 5

  // Filter participants based on the search term
  const filteredParticipants = participants.filter(participant =>
    participant.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    participant.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    participant.webinar.toLowerCase().includes(searchTerm.toLowerCase())
  )

  // Calculate pagination values
  const indexOfLastItem = currentPage * itemsPerPage
  const indexOfFirstItem = indexOfLastItem - itemsPerPage
  const currentParticipants = filteredParticipants.slice(indexOfFirstItem, indexOfLastItem)
  const totalPages = Math.ceil(filteredParticipants.length / itemsPerPage)

  return (
    <div className="bg-primary_color2 p-5 rounded-md text-black">
      <h2 className="text-2xl font-bold mb-4">Webinar Participants</h2>

      {/* Search bar */}
      <div className="mb-4">
        <Input
          type="text"
          placeholder="Search by  email or webinar"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="max-w-sm"
        />
      </div>

      {/* Participants table */}
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Webinar</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {currentParticipants.map((participant) => (
            <TableRow key={participant.id}>
              <TableCell>{participant.name}</TableCell>
              <TableCell>{participant.email}</TableCell>
              <TableCell>{participant.webinar}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      {/* Pagination */}
      <div className="mt-4 flex justify-between items-center">
        <div>
          Page {currentPage} of {totalPages}
        </div>
        <div>
          <Button
            onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className="mr-2"
          >
            Previous
          </Button>
          <Button
            onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
            disabled={currentPage === totalPages}
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  )
}
