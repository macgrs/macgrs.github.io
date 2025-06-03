"use client"

import { useState, useMemo } from "react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table.tsx"
import { Button } from "@/components/ui/button.tsx"
import { ArrowUpDown, ArrowUp, ArrowDown } from "lucide-react"

interface Room {
  id: string
  label: string
  centroid: number[]
  compactness: number
  perimeter: number
  area: number
  aspect_ratio: number
  rectangularity: number
}

interface RoomsTableProps {
  data: Room[]
}

type SortField = keyof Room | "none"
type SortDirection = "asc" | "desc"

export function RoomsTable({ data }: RoomsTableProps) {
  const [sortField, setSortField] = useState<SortField>("none")
  const [sortDirection, setSortDirection] = useState<SortDirection>("asc")

  const sortedData = useMemo(() => {
    if (sortField === "none") return data

    return [...data].sort((a, b) => {
      let aValue = a[sortField as keyof Room]
      let bValue = b[sortField as keyof Room]

      // Handle array values (centroid)
      if (Array.isArray(aValue)) aValue = aValue[0]
      if (Array.isArray(bValue)) bValue = bValue[0]

      if (typeof aValue === "string" && typeof bValue === "string") {
        return sortDirection === "asc" ? aValue.localeCompare(bValue) : bValue.localeCompare(aValue)
      }

      if (typeof aValue === "number" && typeof bValue === "number") {
        return sortDirection === "asc" ? aValue - bValue : bValue - aValue
      }

      return 0
    })
  }, [data, sortField, sortDirection])

  const handleSort = (field: SortField) => {
    if (sortField === field) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc")
    } else {
      setSortField(field)
      setSortDirection("asc")
    }
  }

  const getSortIcon = (field: SortField) => {
    if (sortField !== field) return <ArrowUpDown className="h-4 w-4" />
    return sortDirection === "asc" ? <ArrowUp className="h-4 w-4" /> : <ArrowDown className="h-4 w-4" />
  }

  return (
    <div className="w-full h-full flex flex-col">
      <h3 className="text-lg font-semibold mb-4">Rooms Details</h3>
      <div className="flex-1 overflow-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>
                <Button variant="ghost" onClick={() => handleSort("label")} className="h-auto p-0 font-semibold">
                  Room Type {getSortIcon("label")}
                </Button>
              </TableHead>
              <TableHead>
                <Button variant="ghost" onClick={() => handleSort("area")} className="h-auto p-0 font-semibold">
                  Area (m²) {getSortIcon("area")}
                </Button>
              </TableHead>
              <TableHead>
                <Button variant="ghost" onClick={() => handleSort("perimeter")} className="h-auto p-0 font-semibold">
                  Perimeter {getSortIcon("perimeter")}
                </Button>
              </TableHead>
              <TableHead>
                <Button variant="ghost" onClick={() => handleSort("compactness")} className="h-auto p-0 font-semibold">
                  Compactness {getSortIcon("compactness")}
                </Button>
              </TableHead>
              <TableHead>
                <Button variant="ghost" onClick={() => handleSort("aspect_ratio")} className="h-auto p-0 font-semibold">
                  Aspect Ratio {getSortIcon("aspect_ratio")}
                </Button>
              </TableHead>
              <TableHead>
                <Button
                  variant="ghost"
                  onClick={() => handleSort("rectangularity")}
                  className="h-auto p-0 font-semibold"
                >
                  Rectangularity {getSortIcon("rectangularity")}
                </Button>
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {sortedData.map((room) => (
              <TableRow key={room.id}>
                <TableCell className="font-medium capitalize">{room.label.replace("_", " ")}</TableCell>
                <TableCell>{room.area.toFixed(2)}</TableCell>
                <TableCell>{room.perimeter.toFixed(1)}</TableCell>
                <TableCell>{room.compactness.toFixed(3)}</TableCell>
                <TableCell>{room.aspect_ratio.toFixed(2)}</TableCell>
                <TableCell>{room.rectangularity.toFixed(3)}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}
