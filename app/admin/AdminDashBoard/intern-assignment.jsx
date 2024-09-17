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

export  function InternAssignments() {
  // This would typically come from an API or database
  const assignments = [
    { id: 1, internId: "INT001", internName: "Charlie Brown", labName: "Lab C", desktopNumber: "PC001" },
    { id: 2, internId: "INT002", internName: "Diana Prince", labName: "Lab A", desktopNumber: "PC002" },
    { id: 3, internId: "INT003", internName: "Ethan Hunt", labName: "Lab B", desktopNumber: "PC003" },
    { id: 4, internId: "INT004", internName: "Fiona Apple", labName: "Lab C", desktopNumber: "PC004" },
    { id: 5, internId: "INT005", internName: "George Lucas", labName: "Lab A", desktopNumber: "PC005" },
    { id: 6, internId: "INT006", internName: "Hannah Montana", labName: "Lab B", desktopNumber: "PC006" },
    { id: 7, internId: "INT007", internName: "Ian McKellen", labName: "Lab C", desktopNumber: "PC007" },
    { id: 8, internId: "INT008", internName: "Julia Roberts", labName: "Lab A", desktopNumber: "PC008" },
    { id: 9, internId: "INT009", internName: "Kevin Bacon", labName: "Lab B", desktopNumber: "PC009" },
    { id: 10, internId: "INT010", internName: "Lara Croft", labName: "Lab C", desktopNumber: "PC010" },
    // Add more assignments as needed
  ]

  const [searchTerm, setSearchTerm] = useState('')
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 5

  const filteredAssignments = assignments.filter(assignment => 
    assignment.internName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    assignment.internId.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const indexOfLastItem = currentPage * itemsPerPage
  const indexOfFirstItem = indexOfLastItem - itemsPerPage
  const currentAssignments = filteredAssignments.slice(indexOfFirstItem, indexOfLastItem)

  const totalPages = Math.ceil(filteredAssignments.length / itemsPerPage)

  return (
    <div className="text-black bg-primary_color2 rounded-md p-6">
      <h2 className="text-2xl flex justify-center font-bold mb-6">Intern Assignments</h2>
      <div className="mb-4">
        <Input
          type="text"
          placeholder="Search by intern name or ID"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="max-w-sm"
        />
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Intern ID</TableHead>
            <TableHead>Intern Name</TableHead>
            <TableHead>Lab Name</TableHead>
            <TableHead>Desktop Number</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {currentAssignments.map((assignment) => (
            <TableRow key={assignment.id}>
              <TableCell>{assignment.internId}</TableCell>
              <TableCell>{assignment.internName}</TableCell>
              <TableCell>{assignment.labName}</TableCell>
              <TableCell>{assignment.desktopNumber}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      {filteredAssignments.length === 0 && (
        <div className="text-center py-4 text-gray-500">
          No assignments found matching your search.
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
            disabled={currentPage === totalPages || filteredAssignments.length === 0}
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  )
}