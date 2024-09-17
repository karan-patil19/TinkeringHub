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

export function BootcampParticipants() {
  const allParticipants = [
    { id: 1, name: "John Doe", email: "john@example.com", bootcamp: "React Fundamentals" },
    { id: 2, name: "Jane Smith", email: "jane@example.com", bootcamp: "Advanced JavaScript" },
    { id: 3, name: "Alice Johnson", email: "alice@example.com", bootcamp: "React Fundamentals" },
    { id: 4, name: "Bob Williams", email: "bob@example.com", bootcamp: "Advanced JavaScript" },
    { id: 5, name: "Charlie Brown", email: "charlie@example.com", bootcamp: "Vue.js Basics" },
    { id: 6, name: "Diana Prince", email: "diana@example.com", bootcamp: "Angular Essentials" },
    { id: 7, name: "Ethan Hunt", email: "ethan@example.com", bootcamp: "React Native" },
    { id: 8, name: "Fiona Apple", email: "fiona@example.com", bootcamp: "Node.js Fundamentals" },
  ]

  const [searchTerm, setSearchTerm] = useState('')
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 5

  const filteredParticipants = allParticipants.filter(participant => 
    participant.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    participant.bootcamp.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const indexOfLastItem = currentPage * itemsPerPage
  const indexOfFirstItem = indexOfLastItem - itemsPerPage
  const currentParticipants = filteredParticipants.slice(indexOfFirstItem, indexOfLastItem)

  const totalPages = Math.ceil(filteredParticipants.length / itemsPerPage)

  return (  
    <div className="text-black p-5 rounded-md">
      <h2 className="text-2xl font-bold mb-4">Bootcamp Participants</h2>
      <div className="mb-4">
        <Input
          type="text"
          placeholder="Search by email or bootcamp name"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="max-w-sm"
        />
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Bootcamp</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {currentParticipants.map((participant) => (
            <TableRow key={participant.id}>
              <TableCell>{participant.name}</TableCell>
              <TableCell>{participant.email}</TableCell>
              <TableCell>{participant.bootcamp}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
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
