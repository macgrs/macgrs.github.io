"use client"

import { useEffect, useRef, useState } from "react"
import { Checkbox } from "@/components/ui/checkbox.tsx"
import { Switch } from "@/components/ui/switch.tsx"
import { Label } from "@/components/ui/label.tsx"

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

interface FunctionalGraphViewerProps {
  data: Room[]
  edges: string[][]
}

// Color mapping for room types
const roomColors: Record<string, string> = {
  bath: "#3b82f6", // blue
  study: "#22c55e", // green
  corridor: "#6b7280", // gray
  bedroom_master: "#a855f7", // purple
  bedroom: "#ec4899", // pink
  dining: "#f97316", // orange
  kitchen: "#eab308", // yellow
  fireplace: "#ef4444", // red
  stair_rdc: "#6366f1", // indigo
  living: "#10b981", // emerald
  entry: "#06b6d4", // cyan
}

const circulationEdges = [
  ["38073145", "66089828"],
  ["38073145", "042cb4cb"],
  ["38073145", "d094c0e0"],
  ["751174b9", "3b45d235"],
  ["cdf140b8", "3b45d235"],
  ["cdf140b8", "ded4c9bd"],
  ["3b45d235", "e67866bb"],
  ["75b2074a", "ded4c9bd"],
  ["83060d2e", "75b2074a"],
]

export function FunctionalGraphViewer({ data, edges }: FunctionalGraphViewerProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const animationRef = useRef<number>()
  const [showAllEdges, setShowAllEdges] = useState(true)
  const [showCirculationEdges, setShowCirculationEdges] = useState(false)
  const [useForceDirected, setUseForceDirected] = useState(false)
  const [nodes, setNodes] = useState<any[]>([])

  // Initialize nodes
  useEffect(() => {
    const initialNodes = data.map((room) => {
      // Normalize centroid positions to fit in our viewport
      const x = (room.centroid[0] / 40) * 360 + 20
      const y = (room.centroid[1] / 40) * 260 + 20

      return {
        id: room.id,
        label: room.label,
        x: Math.max(20, Math.min(380, x)),
        y: Math.max(20, Math.min(280, y)),
        originalX: Math.max(20, Math.min(380, x)),
        originalY: Math.max(20, Math.min(280, y)),
        vx: 0,
        vy: 0,
        color: roomColors[room.label] || "#6b7280",
      }
    })
    setNodes(initialNodes)
  }, [data])

  // Force-directed simulation
  useEffect(() => {
    if (!useForceDirected || nodes.length === 0) return

    const simulate = () => {
      const newNodes = [...nodes]
      const alpha = 0.1
      const centerX = 200
      const centerY = 150

      // Apply forces
      newNodes.forEach((node, i) => {
        let fx = 0
        let fy = 0

        // Repulsion between nodes
        newNodes.forEach((other, j) => {
          if (i !== j) {
            const dx = node.x - other.x
            const dy = node.y - other.y
            const distance = Math.sqrt(dx * dx + dy * dy) || 1
            const force = 500 / (distance * distance)
            fx += (dx / distance) * force
            fy += (dy / distance) * force
          }
        })

        // Attraction to center
        const centerDx = centerX - node.x
        const centerDy = centerY - node.y
        fx += centerDx * 0.01
        fy += centerDy * 0.01

        // Edge attraction
        const activeEdges = showAllEdges ? edges : []
        const circEdges = showCirculationEdges ? circulationEdges : []
        const allActiveEdges = [...activeEdges, ...circEdges]

        allActiveEdges.forEach(([source, target]) => {
          if (node.id === source || node.id === target) {
            const other = newNodes.find((n) => n.id === (node.id === source ? target : source))
            if (other) {
              const dx = other.x - node.x
              const dy = other.y - node.y
              const distance = Math.sqrt(dx * dx + dy * dy) || 1
              const force = distance * 0.02
              fx += (dx / distance) * force
              fy += (dy / distance) * force
            }
          }
        })

        // Update velocity and position
        node.vx = (node.vx + fx) * 0.8
        node.vy = (node.vy + fy) * 0.8
        node.x = Math.max(20, Math.min(380, node.x + node.vx * alpha))
        node.y = Math.max(20, Math.min(280, node.y + node.vy * alpha))
      })

      setNodes(newNodes)
      animationRef.current = requestAnimationFrame(simulate)
    }

    animationRef.current = requestAnimationFrame(simulate)

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [useForceDirected, nodes, edges, showAllEdges, showCirculationEdges])

  // Reset to original positions when switching back to static
  useEffect(() => {
    if (!useForceDirected && nodes.length > 0) {
      const resetNodes = nodes.map((node) => ({
        ...node,
        x: node.originalX,
        y: node.originalY,
        vx: 0,
        vy: 0,
      }))
      setNodes(resetNodes)
    }
  }, [useForceDirected])

  // Render the graph
  useEffect(() => {
    if (!containerRef.current || nodes.length === 0) return

    const container = containerRef.current
    const svgContainer = container.querySelector(".svg-container")
    if (!svgContainer) return

    svgContainer.innerHTML = ""

    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg")
    svg.setAttribute("width", "100%")
    svg.setAttribute("height", "100%")
    svg.setAttribute("viewBox", "0 0 400 300")

    // Draw all edges if enabled
    if (showAllEdges) {
      edges.forEach(([source, target]) => {
        const sourceNode = nodes.find((n) => n.id === source)
        const targetNode = nodes.find((n) => n.id === target)

        if (sourceNode && targetNode) {
          const line = document.createElementNS("http://www.w3.org/2000/svg", "line")
          line.setAttribute("x1", sourceNode.x.toString())
          line.setAttribute("y1", sourceNode.y.toString())
          line.setAttribute("x2", targetNode.x.toString())
          line.setAttribute("y2", targetNode.y.toString())
          line.setAttribute("stroke", "#e5e7eb")
          line.setAttribute("stroke-width", "1")
          svg.appendChild(line)
        }
      })
    }

    // Draw circulation edges if enabled
    if (showCirculationEdges) {
      circulationEdges.forEach(([source, target]) => {
        const sourceNode = nodes.find((n) => n.id === source)
        const targetNode = nodes.find((n) => n.id === target)

        if (sourceNode && targetNode) {
          const line = document.createElementNS("http://www.w3.org/2000/svg", "line")
          line.setAttribute("x1", sourceNode.x.toString())
          line.setAttribute("y1", sourceNode.y.toString())
          line.setAttribute("x2", targetNode.x.toString())
          line.setAttribute("y2", targetNode.y.toString())
          line.setAttribute("stroke", "#f97316")
          line.setAttribute("stroke-width", "2")
          line.setAttribute("stroke-dasharray", "5,5")
          svg.appendChild(line)
        }
      })
    }

    // Draw nodes
    nodes.forEach((node) => {
      const circle = document.createElementNS("http://www.w3.org/2000/svg", "circle")
      circle.setAttribute("cx", node.x.toString())
      circle.setAttribute("cy", node.y.toString())
      circle.setAttribute("r", "8")
      circle.setAttribute("fill", node.color)
      circle.setAttribute("stroke", "#ffffff")
      circle.setAttribute("stroke-width", "2")

      // Add hover effect
      circle.addEventListener("mouseenter", () => {
        circle.setAttribute("r", "12")
      })
      circle.addEventListener("mouseleave", () => {
        circle.setAttribute("r", "8")
      })

      svg.appendChild(circle)

      // Add labels
      const text = document.createElementNS("http://www.w3.org/2000/svg", "text")
      text.setAttribute("x", (node.x + 12).toString())
      text.setAttribute("y", (node.y + 4).toString())
      text.setAttribute("font-size", "10")
      text.setAttribute("fill", "#374151")
      text.textContent = node.label
      svg.appendChild(text)
    })

    svgContainer.appendChild(svg)
  }, [nodes, edges, showAllEdges, showCirculationEdges])

  return (
    <div className="w-full h-full flex flex-col">
      {/* Controls */}
      <div className="flex flex-wrap gap-4 p-3 border-b bg-muted/50">
        <div className="flex items-center space-x-2">
          <Checkbox id="all-edges" checked={showAllEdges} onCheckedChange={setShowAllEdges} />
          <Label htmlFor="all-edges" className="text-sm">
            All edges
          </Label>
        </div>
        <div className="flex items-center space-x-2">
          <Checkbox id="circulation-edges" checked={showCirculationEdges} onCheckedChange={setShowCirculationEdges} />
          <Label htmlFor="circulation-edges" className="text-sm">
            Circulation edges
          </Label>
        </div>
        <div className="flex items-center space-x-2">
          <Switch id="force-directed" checked={useForceDirected} onCheckedChange={setUseForceDirected} />
          <Label htmlFor="force-directed" className="text-sm">
            Force-directed layout
          </Label>
        </div>
      </div>

      {/* Graph container */}
      <div className="flex-1 border rounded-lg bg-white">
        <div ref={containerRef} className="w-full h-full">
          <div className="svg-container w-full h-full" />
        </div>
      </div>
    </div>
  )
}
