'use client'

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

export function LabBookings() {
  // This would typically come from an API or database
  const bookings = [
    { id: 1, projectId: "PROJ001", teamName: "Alpha Team", teamLeader: "Alice Johnson", startDate: "2023-07-01", endDate: "2023-07-07", labName: "Lab A" },
    { id: 2, projectId: "PROJ002", teamName: "Beta Team", teamLeader: "Bob Smith", startDate: "2023-07-08", endDate: "2023-07-14", labName: "Lab B" },
    { id: 3, projectId: "PROJ003", teamName: "Gamma Team", teamLeader: "Charlie Brown", startDate: "2023-07-15", endDate: "2023-07-21", labName: "Lab C" },
    { id: 4, projectId: "PROJ004", teamName: "Delta Team", teamLeader: "Diana Prince", startDate: "2023-07-22", endDate: "2023-07-28", labName: "Lab A" },
    { id: 5, projectId: "PROJ005", teamName: "Epsilon Team", teamLeader: "Ethan Hunt", startDate: "2023-07-29", endDate: "2023-08-04", labName: "Lab B" },
    { id: 6, projectId: "PROJ006", teamName: "Zeta Team", teamLeader: "Fiona Apple", startDate: "2023-08-05", endDate: "2023-08-11", labName: "Lab C" },
    { id: 7, projectId: "PROJ007", teamName: "Eta Team", teamLeader: "George Lucas", startDate: "2023-08-12", endDate: "2023-08-18", labName: "Lab A" },
    { id: 8, projectId: "PROJ008", teamName: "Theta Team", teamLeader: "Hannah Montana", startDate: "2023-08-19", endDate: "2023-08-25", labName: "Lab B" },
    // Add more bookings as needed
  ]

  const [searchTerm, setSearchTerm] = useState('')
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 5

  const filteredBookings = bookings.filter(booking => 
    booking.projectId.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const indexOfLastItem = currentPage * itemsPerPage
  const indexOfFirstItem = indexOfLastItem - itemsPerPage
  const currentBookings = filteredBookings.slice(indexOfFirstItem, indexOfLastItem)

  const totalPages = Math.ceil(filteredBookings.length / itemsPerPage)

  return (
    <div className="text-black bg-primary_color2 p-6 rounded-lg">
      <h2 className="text-2xl flex justify-center font-bold mb-6">Lab Bookings</h2>
      <div className="mb-4">
        <Input
          type="text"
          placeholder="Search by Project ID"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="max-w-sm"
        />
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Project ID</TableHead>
            <TableHead>Team Name</TableHead>
            <TableHead>Team Leader</TableHead>
            <TableHead>Start Date</TableHead>
            <TableHead>End Date</TableHead>
            <TableHead>Lab Name</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {currentBookings.map((booking) => (
            <TableRow key={booking.id}>
              <TableCell>{booking.projectId}</TableCell>
              <TableCell>{booking.teamName}</TableCell>
              <TableCell>{booking.teamLeader}</TableCell>
              <TableCell>{booking.startDate}</TableCell>
              <TableCell>{booking.endDate}</TableCell>
              <TableCell>{booking.labName}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      {filteredBookings.length === 0 && (
        <div className="text-center py-4 text-gray-500">
          No bookings found matching your search.
        </div>
      )}
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
            disabled={currentPage === totalPages || filteredBookings.length === 0}
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  )
}