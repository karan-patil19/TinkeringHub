import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../../components/ui/table"

export function WebinarParticipants() {
  // This would typically come from an API or database
  const participants = [
    { id: 1, name: "John Doe", email: "john@example.com", webinar: "Introduction to React" },
    { id: 2, name: "Jane Smith", email: "jane@example.com", webinar: "Advanced TypeScript" },
    // Add more participants as needed
  ]

  return (
    <div className="bg-primary_color2 p-5 rounded-md text-black">
      <h2 className="text-2xl font-bold mb-4">Webinar Participants</h2>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Webinar</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {participants.map((participant) => (
            <TableRow key={participant.id}>
              <TableCell>{participant.name}</TableCell>
              <TableCell>{participant.email}</TableCell>
              <TableCell>{participant.webinar}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}