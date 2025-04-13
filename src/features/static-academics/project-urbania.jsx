// // REACT // //
import React from "react"
import { useTranslation, withTranslation, Trans } from 'react-i18next';
import { H1, H2, H3, P, A } from "@/components/ui/typography"
import SimpleParallax from 'simple-parallax-js';

import {ProjectCard} from "@/features/static-academics/ProjectCard"
import {ProjectHeroImageTitle} from "@/features/static-academics/ProjectHeroImageTitle"

import * as projectData from '@/features/static-academics/project-data';


const AcademicsStaticUrbania = () => {
  const { t, i18n } = useTranslation();
  const projectKey = 'urbania'

  return (
      <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
        <ProjectHeroImageTitle projectKey={projectKey} projectData={projectData} />
        <P>{t(`academics.${projectKey}.head`)}</P>
        <ProjectCard projectKey={projectKey} partenaireKeys={['mapupr', 'lmgc', 'lispen', 'mapurm']}/>
      </div>
  )
}

export default AcademicsStaticUrbania