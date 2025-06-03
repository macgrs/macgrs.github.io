/**
 * prairie-page.jsx
 * 
 * xxxxxxxxxxxxxxxxxxxxx
 * xxxxxxxxxxxxxxxxxxxxx
 * xxxxxxxxxxxxxxxxxxxxx
 */

// -------------------------------------
// IMPORTS
// -------------------------------------
// React, RTK and base Imports
// -------------------------------------
import React from "react"
import { useMemo } from "react"
import { useNavigate, Link, useParams } from 'react-router-dom'

// Translations and Citations
// -------------------------------------
import { useTranslation, withTranslation, Trans } from 'react-i18next';
import { Cite } from '@citation-js/core'
import "@citation-js/plugin-bibtex"
import "@citation-js/plugin-ris"
import "@citation-js/plugin-csl"
import bibFile from "@/assets/example.bib?raw"


// UI Layout Components
// -------------------------------------
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

// Typography pack
import { H1, H2, H3, H4, P, A, C } from "@/components/ui/typography"
// Icons pack

// Common Components
// -------------------------------------


// Feature-Specific Components
// -------------------------------------
import { GeneralTable } from "./house-info-table.tsx";
import { FunctionalGraphViewer } from "./house-functional-graph-viewer.tsx";
import { RadarRooms } from "./house-info-rooms-radar.tsx";
import { RoomsTable } from "./house-info-rooms-table.tsx";

// -------------------------------------
// DATA
// -------------------------------------
// Sample data
const sampleData = [
  {
    id: "73db5283",
    label: "bath",
    centroid: [9.3651951759, 31.6918761504, 0.0],
    compactness: 0.7693696295,
    perimeter: 15.4,
    area: 14.52,
    aspect_ratio: 0.75,
    rectangularity: 0.5,
  },
  {
    id: "e67866bb",
    label: "study",
    centroid: [36.4432417964, 34.6147804503, 0.0],
    compactness: 0.6981317008,
    perimeter: 26.4,
    area: 38.72,
    aspect_ratio: 1.0,
    rectangularity: 0.4444444444,
  },
  {
    id: "3b45d235",
    label: "corridor",
    centroid: [22.1432417964, 35.7147804503, 0.0],
    compactness: 0.2416609734,
    perimeter: 57.2,
    area: 62.92,
    aspect_ratio: 5.0,
    rectangularity: 0.325,
  },
  {
    id: "cdf140b8",
    label: "bedroom_master",
    centroid: [26.5432417964, 31.8647804503, 0.0],
    compactness: 0.6981317008,
    perimeter: 33.0,
    area: 60.5,
    aspect_ratio: 1.1428571429,
    rectangularity: 0.4464285714,
  },
  {
    id: "ded4c9bd",
    label: "bedroom",
    centroid: [18.8432417964, 30.2147804503, 0.0],
    compactness: 0.7853981634,
    perimeter: 26.4,
    area: 43.56,
    aspect_ratio: 1.0,
    rectangularity: 0.5,
  },
  {
    id: "751174b9",
    label: "corridor",
    centroid: [13.3432417964, 30.2147804503, 0.0],
    compactness: 0.7539822369,
    perimeter: 22.0,
    area: 29.04,
    aspect_ratio: 0.6666666667,
    rectangularity: 0.5,
  },
  {
    id: "75b2074a",
    label: "dining",
    centroid: [13.8932417964, 23.6147804503, 0.0],
    compactness: 0.6750529669,
    perimeter: 24.2,
    area: 31.46,
    aspect_ratio: 0.8333333333,
    rectangularity: 0.4333333333,
  },
  {
    id: "66089828",
    label: "kitchen",
    centroid: [8.9432417964, 25.8147804503, 0.0],
    compactness: 0.7853981634,
    perimeter: 17.6,
    area: 19.36,
    aspect_ratio: 1.0,
    rectangularity: 0.5,
  },
  {
    id: "042cb4cb",
    label: "fireplace",
    centroid: [8.9432417964, 23.0647804503, 0.0],
    compactness: 0.5026548246,
    perimeter: 11.0,
    area: 4.84,
    aspect_ratio: 4.0,
    rectangularity: 0.5,
  },
  {
    id: "d094c0e0",
    label: "stair_rdc",
    centroid: [8.9432417964, 28.5647804503, 0.0],
    compactness: 0.5026548246,
    perimeter: 11.0,
    area: 4.84,
    aspect_ratio: 4.0,
    rectangularity: 0.5,
  },
  {
    id: "83060d2e",
    label: "living",
    centroid: [10.0432417964, 14.2647804503, 0.0],
    compactness: 0.6735574649,
    perimeter: 55.0,
    area: 162.14,
    aspect_ratio: 0.6666666667,
    rectangularity: 0.4466666667,
  },
  {
    id: "38073145",
    label: "entry",
    centroid: [5.6432417964, 25.8147804503, 0.0],
    compactness: 0.5890486225,
    perimeter: 17.6,
    area: 14.52,
    aspect_ratio: 0.3333333333,
    rectangularity: 0.5,
  },
]

const edgeList = [
  ["38073145", "66089828"],
  ["38073145", "042cb4cb"],
  ["38073145", "d094c0e0"],
  ["d094c0e0", "73db5283"],
  ["73db5283", "751174b9"],
  ["d094c0e0", "751174b9"],
  ["66089828", "d094c0e0"],
  ["66089828", "042cb4cb"],
  ["66089828", "75b2074a"],
  ["042cb4cb", "75b2074a"],
  ["83060d2e", "042cb4cb"],
  ["75b2074a", "751174b9"],
  ["ded4c9bd", "751174b9"],
  ["ded4c9bd", "3b45d235"],
  ["751174b9", "3b45d235"],
  ["cdf140b8", "3b45d235"],
  ["cdf140b8", "ded4c9bd"],
  ["3b45d235", "e67866bb"],
  ["75b2074a", "ded4c9bd"],
  ["83060d2e", "75b2074a"],
]


const ProjectPrairiePage = () => { // : React.FC
  const id = useParams().id
  const { t } = useTranslation();

  const totalSurface = useMemo(() => sampleData.reduce((sum, room) => sum + room.area, 0), [])
  const verticesCount = sampleData.length
  const edgesCount = edgeList.length


  return (
    <div className="flex flex-1 flex-col p-4 pt-0">
      {/* Hero Image + Title */}
      <div className=" flex flex-col justify-end p-6">
        <div className="flex items-center gap-4">
          <H1>Jacobs House</H1>
        </div>
        <H2>Frank Lloyd Wright • 1909 • Chicago, Illinois</H2>
      </div>

      {/* General Building Card */}
      <Card>
        <CardHeader>
          <CardTitle>Building Analysis</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex gap-6 h-96">
            <div className="flex-1">
              <FunctionalGraphViewer data={sampleData} edges={edgeList} />
            </div>
            <div className="flex-[2]">
              <GeneralTable totalSurface={totalSurface} verticesCount={verticesCount} edgesCount={edgesCount} />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Rooms Card */}
        <Card>
          <CardHeader>
            <CardTitle>Room Analysis</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex gap-6 h-96">
              <div className="flex-1">
                <RadarRooms data={sampleData} />
              </div>
              <div className="flex-[3]">
                <RoomsTable data={sampleData} />
              </div>
            </div>
          </CardContent>
        </Card>
    </div>
    )
  }
  
  export default ProjectPrairiePage