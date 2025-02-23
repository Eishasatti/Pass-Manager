import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Eye, Trash2 } from "lucide-react"

// Sample data (replace with actual data from your backend)
const cards = [
  { id: 1, cardNumber: "**** **** **** 1234", cardName: "John Doe", expiryDate: "12/25" },
  { id: 2, cardNumber: "**** **** **** 5678", cardName: "Jane Smith", expiryDate: "06/24" },
  { id: 3, cardNumber: "**** **** **** 9012", cardName: "Alice Johnson", expiryDate: "09/23" },
]

export default function YourCards() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Card Number</TableHead>
          <TableHead>Name on Card</TableHead>
          <TableHead>Expiry Date</TableHead>
          <TableHead>Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {cards.map((card) => (
          <TableRow key={card.id}>
            <TableCell>{card.cardNumber}</TableCell>
            <TableCell>{card.cardName}</TableCell>
            <TableCell>{card.expiryDate}</TableCell>
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

