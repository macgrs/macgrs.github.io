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

import * as projectData from '@/features/academics/academics-data';

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

const projetCardKeys = [
  "position",
  "duration",
  "keywords",
  "encadrement",
  "partenaires",
  "funding"
]

const AcademicsStaticAstragale = () => {
  const { t, i18n } = useTranslation();
  const projectKey = 'astragale'
  
  let citationLibrary = null
  try {
    citationLibrary = new Cite(bibFile);
    } catch(err) {
      console.error(err)
    }

    const biblioHtml = [
      getClickableHTMLCitation({library:citationLibrary, key:'grosSurveysSimulationsIntegrating2025a'}),
      getClickableHTMLCitation({library:citationLibrary, key:'grosDecrireHypotheseAu2023'}),
      getClickableHTMLCitation({library:citationLibrary, key:'guillemRCC8CIDOCCRM2023'})
    ]

  return (
    <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
      {/* Hero Image + Title */}
      <div className="mb-4">
        {/* <ProjectHeroImageTitle projectKey={projectKey} projectData={projectData} heroTextClassName={"text-white drop-shadow-[0_0.2px_3.2px_rgba(0,0,0,0.8)]"}/> */}
        <ProjectHeroImageTitle projectKey={projectKey} projectData={projectData} heroTextClassName={"text-black drop-shadow-[0_0.3px_0.3px_rgba(255,255,255,0.8)]"}/>
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
                src="https://sharedocs.huma-num.fr/wl/?id=223gvAIlXhCdmTLwlvN9NzVy16lqnhq5&download=1"
                title=""
                about={t(`academics.${projectKey}.captions.astragale_archcidoccrm`)}
                className="bg-stone-50 cursor-pointer w-full h-auto object-contain"
              />
              <C>{t(`academics.${projectKey}.captions.astragale_archcidoccrm`)}</C>
            </div>
            <P>{t(`academics.${projectKey}.body.p_para11`)}</P>
          </div>

          <div>
            <H3>{t(`academics.${projectKey}.body.h_para2`)}</H3>
            <P>{t(`academics.${projectKey}.body.p_para20`)}</P>
            <div className="w-full md:w-4/5 mx-auto pt-4">
              <ZoomableImage
                src="https://sharedocs.huma-num.fr/wl/?id=FGHnVj2IxXXRawrQT1BGKkSBH5KeJqxC&download=1"
                title=""
                about={t(`academics.${projectKey}.captions.astragale_grapheclustering`)}
                className="cursor-pointer w-full h-auto object-contain"
              />
              <C>{t(`academics.${projectKey}.captions.astragale_grapheclustering`)}</C>
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
            <div className="w-full md:w-4/5 mx-auto pt-4">
              <ZoomableImage
                src="https://sharedocs.huma-num.fr/wl/?id=tUkGgd8cWLQHNWRI884R3oyBfzCKgS7Q&download=1"
                title=""
                about={t(`academics.${projectKey}.captions.astragale_sysarch`)}
                className="cursor-pointer w-full h-auto object-contain"
              />
              <C>{t(`academics.${projectKey}.captions.astragale_sysarch`)}</C>
            </div>

            <P className='italic'>
              <Trans
                i18nKey={`academics.${projectKey}.body.p_para30`}
                components={{
                  link_Github: <A href="https://www.youtube.com/watch?v=ztQ_g2Ix7ws" />,
                }}
              />
            </P>
          </div>
        </div>

        {/* SIDE COLUMN (2/5) */}
        <div className="lg:col-span-2 pt-4 px-4 lg:px-8 bg-orange-000">
          <ProjectCard
            projectKey={projectKey}
            rowKeys={projetCardKeys}
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
          <div className="mt-12 w-full center">
            <ZoomableImage
              src="https://sharedocs.huma-num.fr/wl/?id=s56IUlZO49UwQb8EVXtzbYwUks1qcnW9&download=1"
              title=""
              about="description longue"
              className="cursor-pointer w-full h-auto object-contain"
            />
          <C>{t(`academics.${projectKey}.captions.astragale_simulationsysml`)}</C>
          </div>
        </div>
        {/* Publication Card */}
        <div className="lg:col-span-3 pt-4 px-4 lg:px-8 bg-orange-000">
          <H4>{t(`academics.global.biblio`)}</H4>
          <ul className="list-disc font-[PPNeueMontrealRegular] mt-4">
            <li dangerouslySetInnerHTML={{ __html: biblioHtml[0], }}/>
            <li dangerouslySetInnerHTML={{ __html: biblioHtml[1], }}/>
            <li dangerouslySetInnerHTML={{ __html: biblioHtml[2], }}/>
          </ul> 
      </div>
      </div>
    </div>

  )
}

export default AcademicsStaticAstragale