// // REACT // //
import React from "react"
import { useTranslation, withTranslation, Trans } from 'react-i18next';
import { H1, H2, H3, H4, P, A, C } from "@/components/ui/typography"
import { ZoomableImage } from "@/components/ui/zoomable-image"
import SimpleParallax from 'simple-parallax-js';

import {ProjectCard} from "@/features/static-academics/ProjectCard"
import {ProjectHeroImageTitle} from "@/features/static-academics/ProjectHeroImageTitle"
import { Cite } from '@citation-js/core'
import "@citation-js/plugin-bibtex"
import "@citation-js/plugin-ris"
import "@citation-js/plugin-csl"

import * as projectData from '@/features/static-academics/project-data';

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


const AcademicsStaticReperage = () => {
  const { t, i18n } = useTranslation();
  const projectKey = 'reperage'
  
  let citationLibrary = null
  try {
    citationLibrary = new Cite(bibFile);
    } catch(err) {
      console.error(err)
    }

    const biblioHtml = [
      getClickableHTMLCitation({library:citationLibrary, key:'grosFacetingPostdisasterBuilt2023'}),
      getClickableHTMLCitation({library:citationLibrary, key:'guillemReconstructionRepresentationNotreDame2023'}),
      getClickableHTMLCitation({library:citationLibrary, key:'guillemFaireParlerClaveaux2023'}),
      getClickableHTMLCitation({library:citationLibrary, key:'baillieulClaveauPhysiqueAux2024'})
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
          {/* <P className="font-medium">{t(`academics.${projectKey}.head`)}</P> */}
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
            <H3>{t(`academics.${projectKey}.body.h_para1`)}</H3>
            <P>{t(`academics.${projectKey}.body.p_para10`)}</P>
            <div className="w-full md:w-4/5 mx-auto pt-4">
              <ZoomableImage
                src="https://sharedocs.huma-num.fr/wl/?id=0dpk23v0rPi5kNT7tx2ygDJ5iYG64fuA&download=1"
                title="TITRE"
                about={t(`academics.${projectKey}.captions.reperage_4moments`)}
                className="bg-stone-50 cursor-pointer w-full h-auto object-contain"
              />
              <C>{t(`academics.${projectKey}.captions.reperage_4moments`)}</C>
            </div>
            <P>{t(`academics.${projectKey}.body.p_para11`)}</P>
          </div>

          <div>
            <H3>{t(`academics.${projectKey}.body.h_para2`)}</H3>
            <P>{t(`academics.${projectKey}.body.p_para20`)}</P>
            <div className="w-full md:w-4/5 mx-auto pt-4">
              <ZoomableImage
                src="https://sharedocs.huma-num.fr/wl/?id=SJR6PmCuwHUNt7k7trUWtXpnOesU1w9d&download=1"
                title="TITRE"
                about={t(`academics.${projectKey}.captions.reperage_humanistica`)}
                className="cursor-pointer w-full h-auto object-contain"
              />
              <C>{t(`academics.${projectKey}.captions.reperage_humanistica`)}</C>
            </div>
            <P>
            <Trans
              i18nKey={`academics.${projectKey}.body.p_para21`}
              components={{
                link_ERC: <A href="https://cordis.europa.eu/project/id/101055423" />,
                link_Astra: <A href="https://hal.science/hal-04790092v1" />,
              }}
            />
          </P>
          </div>
        </div>

        {/* SIDE COLUMN (2/5) */}
        <div className="lg:col-span-2 pt-4 px-4 lg:px-8 bg-orange-000">
          <ProjectCard
            projectKey={projectKey}
            partenaireKeys={['mapupr', 'lmgc', 'lispen', 'mapurm']}
          />

          {/* <div className="mt-12">
            <ZoomableImage
              src="https://sharedocs.huma-num.fr/wl/?id=Kw2lnlPCIKeZsLeEvvNieDHMIMBtEytc&download=1"
              title="TITRE"
              about="description longue"
              className="cursor-pointer w-full h-auto object-contain"
            />
            <C>{t(`academics.${projectKey}.captions.reperage_remains`)}</C>
          </div> */}
          <div className="mt-12 w-2/3 center">
            <ZoomableImage
              src="https://sharedocs.huma-num.fr/wl/?id=ciPgOjbQnZEguasNTdJQJR2SPXfU9Bfc&download=1"
              title="TITRE"
              about="description longue"
              className="cursor-pointer w-full h-auto object-contain"
            />
          <C>{t(`academics.${projectKey}.captions.reperage_prefclaveau`)}</C>
          </div>
        </div>
        {/* Publication Card */}
        <div className="lg:col-span-3 pt-4 px-4 lg:px-8 bg-orange-000">
          <H4>{t(`academics.global.biblio`)}</H4>
          <ul className="list-disc font-[PPNeueMontrealRegular] mt-4">
            <li dangerouslySetInnerHTML={{ __html: biblioHtml[0], }}/>
            <li dangerouslySetInnerHTML={{ __html: biblioHtml[1], }}/>
            <li dangerouslySetInnerHTML={{ __html: biblioHtml[2], }}/>
            <li dangerouslySetInnerHTML={{ __html: biblioHtml[3], }}/>
          </ul> 
      </div>
      </div>
    </div>

  )
}

export default AcademicsStaticReperage
