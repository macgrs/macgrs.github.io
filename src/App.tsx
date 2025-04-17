// // REACT // //
import {
  Routes, Route
} from 'react-router-dom'

// // UI - BASE // //
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

// // PAGES - COMPONENTS // //
import Home from '@/features/Home.tsx'
import ConstructionPage from '@/features/page-construction.tsx'
import { CurriculumVitae } from '@/features/cv/curriculum-vitae.tsx'

import AcademicsStaticAstragale   from '@/features/academics/project-astragale.jsx'
import AcademicsStaticReperage    from '@/features/academics/project-reperage.jsx'
import AcademicsStaticNdstruct    from '@/features/academics/project-ndstruct.jsx'
// import AcademicsStaticCarthothem  from '@/features/academics/project-cartothem.jsx'
// import AcademicsStaticUrbania    from '@/features/academics/project-urbania.jsx'

import AcademicsStaticCamillo  from '@/features/academics/project-camillo.jsx'

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
              {/* <Breadcrumb>
                <BreadcrumbList>
                  <BreadcrumbItem className="hidden md:block">
                    <BreadcrumbLink href="#">
                      Building Your Application
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator className="hidden md:block" />
                  <BreadcrumbItem>
                    <BreadcrumbPage>Data Fetching</BreadcrumbPage>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb> */}
            </div>
            <div className="flex flex-auto justify-end gap-2 px-4">
              <LangToggle />
              <ModeToggle />
            </div>
          </header>
        
        {/* <Routes>
          <Route index element={<Home />} />
            <Route path="/cv" element={<CurriculumVitae />} />
            <Route path="/academics/astragale"  element={<AcademicsStaticAstragale />} />
            <Route path="/academics/reperage"   element={<AcademicsStaticReperage />} />
            <Route path="/academics/ndstruct"   element={<AcademicsStaticNdstruct />} />
            <Route path="/academics/cartothem"  element={<ConstructionPage />} />
            <Route path="/academics/camillo"    element={<AcademicsStaticCamillo />} />
            <Route path="/academics/urbania"    element={<ConstructionPage />} />

            <Route path="*" element={<ConstructionPage />} />
        </Routes> */}
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
          </Route>
        </Routes>

          {/* <Routes>
            <Route path="/"                       element={<Home />} />
            <Route path="/cv"                   element={<CurriculumVitae />} />
            <Route path="/academics/astragale"  element={<AcademicsStaticAstragale />} />
            <Route path="/academics/reperage"   element={<AcademicsStaticReperage />} />
            <Route path="/academics/ndstruct"   element={<AcademicsStaticNdstruct />} />
            <Route path="/academics/cartothem"  element={<ConstructionPage />} />
            <Route path="/academics/camillo"    element={<AcademicsStaticCamillo />} />
            <Route path="/academics/urbania"    element={<ConstructionPage />} />
          </Routes> */}



            {/* <Route path="about" element={<About />}></Route> */}
              {/* <Route path="about" element={<About />} />

              <Route element={<AuthLayout />}>
                <Route path="login" element={<Login />} />
                <Route path="register" element={<Register />} />
              </Route>

              <Route path="concerts">
                <Route index element={<ConcertsHome />} />
                <Route path=":city" element={<City />} />
                <Route path="trending" element={<Trending />} />
              </Route> */}
          {/* <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
            <div className="grid auto-rows-min gap-4 md:grid-cols-3">
              <div className="aspect-video rounded-xl bg-muted/50" />
              <div className="aspect-video rounded-xl bg-muted/50" />
              <div className="aspect-video rounded-xl bg-muted/50" />
            </div>
            <div className="min-h-[100vh] flex-1 rounded-xl bg-muted/50 md:min-h-min" />
          </div> */}
        </SidebarInset>
      </SidebarProvider>
    </ThemeProvider>
  )
}
