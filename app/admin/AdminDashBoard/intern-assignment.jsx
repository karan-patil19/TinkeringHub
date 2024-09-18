import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../../components/ui/table"

export function InternAssignments() {
  const assignments = [
    { id: 1, internName: "John Doe", project: "Web Development", mentor: "Alice Johnson", startDate: "2023-06-01", endDate: "2023-08-31" },
    { id: 2, internName: "Jane Smith", project: "Mobile App", mentor: "Bob Williams", startDate: "2023-06-15", endDate: "2023-09-15" },
    // Add more assignments as needed
  ]

  return (
    <div className="bg-primary_color2 rounded-lg text-black p-6">
      <h1 className="text-2xl font-bold mb-6">Intern Assignments</h1>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Intern Name</TableHead>
            <TableHead>Project</TableHead>
            <TableHead>Mentor</TableHead>
            <TableHead>Start Date</TableHead>
            <TableHead>End Date</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {assignments.map((assignment) => (
            <TableRow key={assignment.id}>
              <TableCell>{assignment.internName}</TableCell>
              <TableCell>{assignment.project}</TableCell>
              <TableCell>{assignment.mentor}</TableCell>
              <TableCell>{assignment.startDate}</TableCell>
              <TableCell>{assignment.endDate}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}