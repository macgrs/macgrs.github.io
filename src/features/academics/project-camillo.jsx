// // REACT // //
import React from "react"
import { useTranslation, withTranslation, Trans } from 'react-i18next';
import { H1, H2, H3, H4, P, A, C } from "@/components/ui/typography"
import { ZoomableImage } from "@/components/ui/zoomable-image"
import SimpleParallax from 'simple-parallax-js';

import {ProjectCard} from "@/features/academics/ProjectCard"
import {ProjectHeroImageTitle} from "@/features/academics/ProjectHeroImageTitle"
import { Cite } from '@citation-js/core'
import "@citation-js/plugin-bibtex"
import "@citation-js/plugin-ris"
import "@citation-js/plugin-csl"

import * as projectData from '@/features/academics/academics-data.json';

import bibFile from "@/assets/example.bib?raw"

const getClickableHTMLCitation = ({library, key}) => {
  const citeHTML = library.format('bibliography', {
    entry: key,
    format: 'html',
    template: "apa",
    lang: 'en-US'
  })
  return citeHTML.replace(
    /(10\.\d{4,9}\/[-._;()\/:A-Z0-9]+(?:[A-Z0-9])?)/gi,
    '<a href="https://doi.org/$1" target="_blank">$1</a>'
  )
}


const AcademicsStaticCamillo = () => { // : React.FC
  const { t } = useTranslation();
  const projectKey = 'camillo'
  
  let citationLibrary = null
  try {
    citationLibrary = new Cite(bibFile);
    } catch(err) {
      console.error(err)
    }

  const biblioHtml = [
    getClickableHTMLCitation({library:citationLibrary, key:'grosTheatreGiulioCamillo2018'}),
  ]

  return (
    <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
      {/* Hero Image + Title */}
      <div className="mb-4">
        <ProjectHeroImageTitle projectKey={projectKey} projectData={projectData} />
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
        {/* MAIN COLUMN (3/5) */}
        <div className="lg:col-span-3 pt-4 px-4 bg-rose-000 space-y-6">
          <P>
            <Trans
              i18nKey={`academics.${projectKey}.head`}
              components={{
                strong: <P className="font-semibold tracking-wide"/>,
                del: <del className="line-through font-semibold" />,
              }}
            />
          </P>

          <div>
            <H3>{t(`academics.${projectKey}.body.h_regards`)}</H3>
            <P >{t(`academics.${projectKey}.body.p_regards`)}</P>
          </div>

          <div className="w-full md:w-4/5 mx-auto pt-4">
            <ZoomableImage
              src="https://sharedocs.huma-num.fr/wl/?id=YxfSeFTNWdQcdl4Drq74cekan95VF3YF&download=1"
              title="TITRE"
              about={t(`academics.${projectKey}.captions.ndp_model_gsa`)}
              className="cursor-pointer w-full h-auto object-contain"
            />
            <C>{t(`academics.${projectKey}.captions.camillo_theatre`)}</C>
          </div>
          <div>
            <P >{t(`academics.${projectKey}.body.p_finish`)}</P>
            <P className="italic">{t(`academics.${projectKey}.body.p_award`)}</P>
          </div>
        </div>

        {/* SIDE COLUMN (2/5) */}
        <div className="lg:col-span-2 pt-4 px-4 lg:px-8 bg-orange-000">
          <ProjectCard
            projectKey={projectKey}
            partenaireKeys={['ensal']}
          />

          <div className="mt-12 w-1/2 center">
            <ZoomableImage
              src="https://sharedocs.huma-num.fr/wl/?id=Mke5cOMmxtXG5tNOx0mhFzZZsIHX3FB0&download=1"
              title="TITRE"
              about="description longue"
              className="cursor-pointer w-full h-auto object-contain"
            />
            <C>{t(`academics.${projectKey}.captions.camillo_jupimnem`)}</C>
          </div>
        </div>

        {/* Publication Card */}
        <div className="lg:col-span-3 pt-4 px-4 lg:px-8 bg-orange-000">
          <H4>{t(`academics.global.biblio`)}</H4>
          <ul className="list-disc font-[PPNeueMontrealRegular] mt-4">
            <li dangerouslySetInnerHTML={{ __html: biblioHtml[0], }}/>
          </ul> 
      </div>
      </div>
    </div>

  )
}

export default AcademicsStaticCamillo