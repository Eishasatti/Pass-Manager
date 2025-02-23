import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Eye, Trash2 } from "lucide-react"

// Sample data (replace with actual data from your backend)
const passwords = [
  { id: 1, website: "example.com", username: "johndoe@example.com" },
  { id: 2, website: "google.com", username: "johndoe@gmail.com" },
  { id: 3, website: "github.com", username: "johndoe" },
]

export default function YourPassword() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Website</TableHead>
          <TableHead>Username</TableHead>
          <TableHead>Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {passwords.map((password) => (
          <TableRow key={password.id}>
            <TableCell>{password.website}</TableCell>
            <TableCell>{password.username}</TableCell>
            <TableCell>
              <div className="flex space-x-2">
                <Button variant="outline" size="icon">
                  <Eye className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="icon">
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}

