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
import { useNavigate, Link } from 'react-router-dom'

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

// Typography pack
import { H1, H2, H3, H4, P, A, C } from "@/components/ui/typography"
// Icons pack

// Common Components
// -------------------------------------
import SimpleParallax from 'simple-parallax-js';
import { ZoomableImage } from "@/components/ui/zoomable-image"

// Feature-Specific Components
// -------------------------------------
import {AcademicsCard} from "@/features/academics/AcademicsCard"
import {HeroPageTitle} from "@/features/academics/HeroPageTitle"


// -------------------------------------
// DATA
// -------------------------------------
import * as projectData from '@/features/academics/academics-data.json';


const courseCardKeys = [
  "keywords",
]



const ProjectPrairiePage = () => { // : React.FC
  const { t } = useTranslation();
  const courseKey = 'conceptru'
  
  return (
    <div className="flex flex-1 flex-col p-4 pt-0">
      {/* Hero Image + Title */}
       <div className=" flex flex-col justify-end p-6">
         <div className="flex items-center gap-4">
           <H1>{t('more.prairie.title')}</H1>
           <H3>{t('more.prairie.duration')}</H3>
         </div>
         <H2>{t('more.prairie.subtitle')}</H2>
       </div>
      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
      {/* MAIN COLUMN (3/5) */}
        <div className="lg:col-span-3 pt-4 px-4 bg-rose-000 space-y-6">
        <div> {/* head */}
          <P>
            <Trans i18nKey={`more.prairie.head`}
            components={{ strong: <P className="font-semibold tracking-wide"/> }} />
          </P>
        </div>
        
  
        </div>
        {/* SIDE COLUMN (2/5) */}
          <div className="lg:col-span-2 pt-4 px-4 lg:px-8 bg-orange-000">
            <AcademicsCard
              typeEntity="courses"
              entityKey={courseKey}
              rowKeys={courseCardKeys}
              partenaireKeys={['ensal']}
            />
        </div>
      </div>


      <div className=" flex flex-col justify-end p-4">
        <Link to="/more/prairie/houses/e931a0c1" className="underline underline-offset-4">Jacob's House</Link>
      </div>
    </div>
    )
  }
  
  export default ProjectPrairiePage