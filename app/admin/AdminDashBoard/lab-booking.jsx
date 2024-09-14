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
    // Add more bookings as needed
  ]

  return (
    <div className="text-black bg-primary_color2">
      <h2 className="text-2xl  flex justify-center font-bold mb-6">Lab Bookings</h2>
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
          {bookings.map((booking) => (
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
    </div>
  )
}