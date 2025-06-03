/**
 * App.tsx
 *
 * xxxxxxxxxxxxxxxxx
 * xxxxxxxxxxxxxxxxx
 * xxxxxxxxxxxxxxxxx
 */

// -------------------------------------
// IMPORTS
// -------------------------------------
// React, RTK and base Imports
// -------------------------------------
import {
  Routes, Route
} from 'react-router-dom'


// Common Components
// -------------------------------------
import { ModeToggle } from "@/components/mode-toggle.tsx"
import { LangToggle } from "@/components/lang-toggle.tsx"
import { AppSidebar } from "@/components/app-sidebar.tsx"
import { ThemeProvider } from "@/components/theme-provider.tsx"
// import {
//   Breadcrumb,
//   BreadcrumbItem,
//   BreadcrumbLink,
//   BreadcrumbList,
//   BreadcrumbPage,
//   BreadcrumbSeparator,
// } from "@/components/ui/breadcrumb"
import { Separator } from "@/components/ui/separator.tsx"
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar.tsx"


// Pages
// -------------------------------------
// Statics
import Home from '@/features/Home.tsx'
import ConstructionPage from '@/features/page-construction.tsx'

// -- Academics
// ---- CV
import { CurriculumVitae } from '@/features/cv/curriculum-vitae.tsx'

// ---- Aca. projs
import AcademicsStaticAstragale   from '@/features/academics/project-astragale.jsx'
import AcademicsStaticReperage    from '@/features/academics/project-reperage.jsx'
import AcademicsStaticNdstruct    from '@/features/academics/project-ndstruct.jsx'
// import AcademicsStaticCarthothem  from '@/features/academics/project-cartothem.jsx'
// import AcademicsStaticUrbania    from '@/features/academics/project-urbania.jsx'
import AcademicsStaticCamillo  from '@/features/academics/project-camillo.jsx'

// ---- Courses
import AcademicsCourseStructuralDesign from '@/features/academics/course-conceptru.jsx'

// -- Projects
import ProjectPrairiePage from '@/features/project-prairie/prairie-page.jsx'
import PrairieHousePage from '@/features/project-prairie/prairie-house-page.jsx'

export default function Page() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <SidebarProvider>
        <AppSidebar />
        <SidebarInset>
          <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
            <div className="flex items-center gap-2 px-4">
              <SidebarTrigger className="-ml-1" />
              <Separator orientation="vertical" className="mr-2 h-4" />
            </div>
            <div className="flex flex-auto justify-end gap-2 px-4">
              <LangToggle />
              <ModeToggle />
            </div>
          </header>
        
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="cv" element={<CurriculumVitae />} />
            <Route path="*" element={<ConstructionPage />} />
            <Route path="academics">
              <Route index />
              <Route path="astragale"  element={<AcademicsStaticAstragale />} />
              <Route path="reperage"   element={<AcademicsStaticReperage />} />
              <Route path="ndstruct"   element={<AcademicsStaticNdstruct />} />
              <Route path="cartothem"  element={<ConstructionPage />} />
              <Route path="camillo"    element={<AcademicsStaticCamillo />} />
              <Route path="urbania"    element={<ConstructionPage />} />
            </Route>
            <Route path="courses">
              <Route index />
              {/* <Route path="built-heritage-digital-humanities"  element={<AcademicsCourseStructuralDesign />} /> */}
              {/* <Route path="architectural-survey"               element={<AcademicsCourseStructuralDesign />} /> */}
              <Route path="structural-design"                  element={<AcademicsCourseStructuralDesign />} />
              {/* <Route path="light-structures"                   element={<AcademicsCourseStructuralDesign />} /> */}
            </Route>
            <Route path="more/prairie/houses/:id" element={<PrairieHousePage />} />
            <Route path="more">
              <Route index />
              <Route path="prairie" element={<ProjectPrairiePage />} />   
            </Route>
          </Route>
        </Routes>
        </SidebarInset>
      </SidebarProvider>
    </ThemeProvider>
  )
}
