// // REACT // //
import React from "react"
import { useTranslation, withTranslation, Trans } from 'react-i18next';
import { H1, H2, H3, P, A, C } from "@/components/ui/typography"
import { ZoomableImage } from "@/components/ui/zoomable-image"
import SimpleParallax from 'simple-parallax-js';

import {ProjectCard} from "@/features/static-academics/ProjectCard"
import {ProjectHeroImageTitle} from "@/features/static-academics/ProjectHeroImageTitle"

import * as projectData from '@/features/static-academics/project-data';


const AcademicsStaticNdpVaults = () => {
  const { t, i18n } = useTranslation();
  const projectKey = 'ndpvaults'

  return (
    <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
      <ProjectHeroImageTitle projectKey={projectKey} projectData={projectData} />
      
      <div className="flex flex-row">
        {/* MAIN COLUMN */}
        <div className="basis-3/5 pt-4 px-4 bg-rose-000">
          <P className="font-medium">{t(`academics.${projectKey}.head`)}</P>

          <H3>{t(`academics.${projectKey}.body.h_abstract`)}</H3>
          <P>{t(`academics.${projectKey}.body.p_abstract`)}</P>
          <div className="w-4/5 mx-auto pt-4">
            <ZoomableImage 
              src="https://sharedocs.huma-num.fr/wl/?id=yjtxXqk5krDaB4QA1zBto0VHEQEXmAtI&download=1"
              title="TITRE"
              about="description longue"
              className="cursor-pointer"/>
              <C>Déplacements subis par l’ensemble voûte/arcs-boutants lors d’une sollicitation horizontale</C>
          </div>

          <H3>{t(`academics.${projectKey}.body.h_contrib`)}</H3>
          <P>{t(`academics.${projectKey}.body.p_contrib`)}</P>
        </div>

        {/* SIDE COLUMN */}
        <div className="basis-2/5 pt-4 px-8 bg-orange-000">
          <ProjectCard projectKey={projectKey} partenaireKeys={['mapupr', 'lmgc', 'lispen', 'mapurm']}/>
          <div className="mt-12">
            <ZoomableImage 
            src="https://sharedocs.huma-num.fr/wl/?id=0Z22UL8AJfojZZmI2FL0Lop1QR8zoYXs&download=1"
            title="TITRE"
            about="description longue"
            className="cursor-pointer"/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AcademicsStaticNdpVaults