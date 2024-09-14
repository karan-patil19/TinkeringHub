import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../../components/ui/table"

export function InternAssignments() {
  // This would typically come from an API or database
  const assignments = [
    { id: 1, internName: "Charlie Brown", labName: "Lab C", desktopNumber: "PC001" },
    { id: 2, internName: "Diana Prince", labName: "Lab A", desktopNumber: "PC002" },
    // Add more assignments as needed
  ]

  return (
    <div className="text-black bg-primary_color2 rounded-md">
      <h2 className="text-2xl  flex justify-center font-bold mb-6">Intern Assignments</h2>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Intern Name</TableHead>
            <TableHead>Lab Name</TableHead>
            <TableHead>Desktop Number</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {assignments.map((assignment) => (
            <TableRow key={assignment.id}>
              <TableCell>{assignment.internName}</TableCell>
              <TableCell>{assignment.labName}</TableCell>
              <TableCell>{assignment.desktopNumber}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}