"use client"

import { useMemo, useState } from "react"
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart.tsx"
import { Button } from "@/components/ui/button.tsx"
import { ChevronLeft, ChevronRight } from "lucide-react"

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

interface RadarRoomsProps {
  data: Room[]
}

const quantities = [
  { key: "area", label: "Area", unit: "m²" },
  { key: "rectangularity", label: "Rectangularity", unit: "" },
  { key: "compactness", label: "Compactness", unit: "" },
  { key: "perimeter", label: "Perimeter", unit: "m" },
  { key: "aspect_ratio", label: "Aspect Ratio", unit: "" },
] as const

export function RadarRooms({ data }: RadarRoomsProps) {
  const [currentQuantityIndex, setCurrentQuantityIndex] = useState(0)
  const currentQuantity = quantities[currentQuantityIndex]

  const chartData = useMemo(() => {
    // Group rooms by type and calculate average for the selected quantity
    const roomTypes = data.reduce(
      (acc, room) => {
        if (!acc[room.label]) {
          acc[room.label] = { total: 0, count: 0 }
        }
        acc[room.label].total += room[currentQuantity.key as keyof Room] as number
        acc[room.label].count += 1
        return acc
      },
      {} as Record<string, { total: number; count: number }>,
    )

    return Object.entries(roomTypes).map(([label, { total, count }]) => ({
      room: label,
      value: Math.round((total / count) * 1000) / 1000,
    }))
  }, [data, currentQuantity.key])

  const chartConfig = {
    value: {
      label: currentQuantity.label,
      // color: "hsl(var(--chart-1))",
      color: "#60a5fa",
    },
  }

  const goToPrevious = () => {
    setCurrentQuantityIndex((prev) => (prev - 1 + quantities.length) % quantities.length)
  }

  const goToNext = () => {
    setCurrentQuantityIndex((prev) => (prev + 1) % quantities.length)
  }

  return (
    <div className="w-full h-full flex flex-col">
      <h3 className="text-lg font-semibold mb-4">Room Comparison</h3>
      <ChartContainer config={chartConfig} className="flex-1">
        <ResponsiveContainer width="100%" height="100%">
          <RadarChart data={chartData}>
            <ChartTooltip
              content={<ChartTooltipContent />}
              formatter={(value: any) => [`${value} ${currentQuantity.unit}`, currentQuantity.label]}
            />
            <PolarGrid />
            <PolarAngleAxis dataKey="room" tick={{ fontSize: 10 }} />
            <PolarRadiusAxis angle={90} domain={[0, "dataMax"]} tick={{ fontSize: 8 }} />
            <Radar
              dataKey="value"
              stroke="var(--color-value)"
              fill="var(--color-value)"
              fillOpacity={0.3}
              strokeWidth={2}
            />
          </RadarChart>
        </ResponsiveContainer>
      </ChartContainer>

      {/* Quantity selector */}
      <div className="flex items-center justify-center gap-4 mt-4 p-2">
        <Button variant="outline" size="sm" onClick={goToPrevious} className="h-8 w-8 p-0">
          <ChevronLeft className="h-4 w-4" />
        </Button>

        <div className="text-center min-w-[120px]">
          <div className="font-medium text-sm">{currentQuantity.label}</div>
          {currentQuantity.unit && <div className="text-xs text-muted-foreground">({currentQuantity.unit})</div>}
        </div>

        <Button variant="outline" size="sm" onClick={goToNext} className="h-8 w-8 p-0">
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  )
}
