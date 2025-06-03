import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table.tsx"

interface GeneralTableProps {
  totalSurface: number
  verticesCount: number
  edgesCount: number
}

export function GeneralTable({ totalSurface, verticesCount, edgesCount }: GeneralTableProps) {
  return (
    <div className="w-full h-full flex flex-col">
      <h3 className="text-lg font-semibold mb-4">General Statistics</h3>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Metric</TableHead>
            <TableHead>Value</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell className="font-medium">Total Surface</TableCell>
            <TableCell>{totalSurface.toFixed(2)} m²</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">Number of Rooms</TableCell>
            <TableCell>{verticesCount}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">Number of Connections</TableCell>
            <TableCell>{edgesCount}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  )
}
