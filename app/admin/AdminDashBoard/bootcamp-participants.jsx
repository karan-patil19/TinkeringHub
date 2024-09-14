import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../../components/ui/table"

export function BootcampParticipants() {
  // This would typically come from an API or database
  const participants = [
    { id: 1, name: "John Doe", email: "john@example.com", bootcamp: "React Fundamentals" },
    { id: 2, name: "Jane Smith", email: "jane@example.com", bootcamp: "Advanced JavaScript" },
    // Add more participants as needed
  ]

  return (
    <div className="text-black p-5 rounded-md">
      <h2 className="text-2xl font-bold mb-4">Bootcamp Participants</h2>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Bootcamp</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {participants.map((participant) => (
            <TableRow key={participant.id}>
              <TableCell>{participant.name}</TableCell>
              <TableCell>{participant.email}</TableCell>
              <TableCell>{participant.bootcamp}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
