import { useTranslation, withTranslation, Trans } from 'react-i18next';
import { H1, H2, H3, P, A } from "@/components/ui/typography"
import { ZoomableImage } from "@/components/ui/zoomable-image"
import { useState, useEffect } from "react";

import { getSignedImageUrl } from "@/features/s3-utils/s3io.tsx"
import SimpleParallax from 'simple-parallax-js';


const ProjectHeroImageTitle = ({projectKey, projectData}) => {
    const { t, i18n } = useTranslation();
    const [imageUrl, setImageUrl] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
  
    const heroImgUrl = projectData[projectKey].heroImgUrl

    useEffect(() => {
      const fetchImage = async () => {
        try {
          if ( heroImgUrl.substring(0,2) === 's3') {
            const heroImgUrlArray = heroImgUrl.split('/')   // parsing the url for s3://<bucket>/<key>
            setImageUrl('http://example.org')
            // console.log(signedUrl)
            // const signedUrl = await getSignedImageUrl(heroImgUrlArray[2], heroImgUrlArray[3]);
            // setImageUrl(signedUrl);
          } else {
            // http image, no fetch
            setImageUrl(heroImgUrl);
          } 
          
        } catch (err) {
          setError("Error loading image");
          console.log(err)
        } finally {
          setLoading(false);
        }
      };
  
      fetchImage();
    }, []);
    return (
      <div className="relative w-full max-h-[40vh] h-[40vh] overflow-hidden">
        {loading && <p className="text-gray-500">Loading image...</p>}
        {error && <p className="text-red-500">{error}</p>}
        <SimpleParallax delay={0.5} 
                        // transition="cubic-bezier(0,0,0,1)"
                        // maxTransition={60}
                        scale={1.4} >
            {imageUrl && (
            <img
                src={imageUrl}
                alt="S3 Image"
                className="w-full h-auto rounded-lg shadow-lg"
            />
            )}
        </SimpleParallax>
        <div className="absolute inset-0 flex flex-col justify-end p-6">
          <div className="flex items-center gap-4">
            <H1>{t(`academics.${projectKey}.title`)}</H1>
            <H3>{t(`academics.${projectKey}.duration`)}</H3>
          </div>
            <H2>{t(`academics.${projectKey}.subtitle`)}</H2>
        </div>
      </div>
    )
  }



const ProjectCardListElementLabLine = (items) => {
  return (
    <>
      <A href={items.href}>{items.nom} {items.acronymage}</A>
      <br />
    </>
  )
}


const ProjectCard = ({projectKey, partenaireKeys, additionalCardKeys}) => {
  const ProjectCardRow = ({rowKey}) => {
    return (
      // <div className="flex items-start">
      //   <div className="w-1/5 text-right pr-4 font-semibold">{t(`academics.global.${rowKey}`)}</div>
      //   <div className="w-4/5"                              >{t(`academics.${projectKey}.${rowKey}`)}</div>
      // </div>
      <div className="flex items-start">
        <p className="w-1/5 text-right pr-4 font-[PPNeueMontrealRegular] leading-8 lg:text-lg">{t(`academics.global.${rowKey}`)}</p>
        <p className="w-4/5 font-[PPNeueMontrealRegular] leading-8 lg:text-lg" >{t(`academics.${projectKey}.${rowKey}`)}</p>
      </div>
    )
  } 
  
  const { t, i18n } = useTranslation();
  const data = partenaireKeys //['mapupr', 'lmgc', 'lispen', 'mapurm']
  return (
    <div className='flex flex-row'>
      <div className="flex flex-col w-full space-y-4">
        <ProjectCardRow rowKey='duration' />
        <ProjectCardRow rowKey='position' />
        {/* Map the partenaires */}
        <div className="flex items-start">
        <p className="w-1/5 text-right pr-4 font-[PPNeueMontrealRegular] leading-8 lg:text-lg">{t(`academics.global.partenaires`)}</p>
          <div className="w-4/5 font-[PPNeueMontrealRegular] leading-8 lg:text-lg">
            {data.map((partenaireKey) => (              
                <ProjectCardListElementLabLine key={partenaireKey}
                                    nom=        {t(`academics.global.zooPartenaires.${partenaireKey}.name`)}
                                    href=       {t(`academics.global.zooPartenaires.${partenaireKey}.href`)} 
                                    acronymage= {t(`academics.global.zooPartenaires.${partenaireKey}.acronym`)}/>
            ))}
            </div>
          </div>
        <ProjectCardRow rowKey='collaborateurs' />
        <ProjectCardRow rowKey='funding' />
      </div>  
    </div>
  )
}

// const ProjectCardListElementLabLine_OLD = (items) => {
//   return (
//     <>
//       {"\n"}{/* {"\nLab. "} {"\nLab. "} */}
//       <A href={items.href}>{items.nom} </A>
//       {items.acronymage}
//     </>
//   )
// }

// const ProjectCard_OLD = ({projectKey, partenaireKeys, additionalCardKeys}) => {
//   const { t, i18n } = useTranslation();
//   const data = partenaireKeys //['mapupr', 'lmgc', 'lispen', 'mapurm']
//   return (
//     <>
//     <H3>{t('academics.global.card')}</H3>
//         <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
//           <li><b>{t('academics.global.duration')}: </b>2022-2025</li>
//           <li><b>{t('academics.global.position')}: </b>: {t(`academics.${projectKey}.position`)}</li>
//           {/* <li><b>{t(`academics.global.acronym`)}: </b>ASTRAGALE</li> */}
//           <li className="whitespace-pre-wrap"><b>{t(`academics.global.partenaires`)}: </b>
//           {data.map((partenaireKey) => (              
//               <ProjectCardListElementLabLine key={partenaireKey}
//                                   nom=        {t(`academics.global.zooPartenaires.${partenaireKey}.name`)}
//                                   href=       {t(`academics.global.zooPartenaires.${partenaireKey}.href`)} 
//                                   acronymage= {t(`academics.global.zooPartenaires.${partenaireKey}.acronym`)}/>
//           ))}
//           </li>
//           {/* <li><b>{t(`academics.global.encadrement`)}: </b>{t(`academics.${projectKey}.encadrement`)}</li> */}
//           <li><b>{t(`academics.global.collaborateurs`)}: </b>{t(`academics.${projectKey}.collaborateurs`)}</li>
//           <li><b>{t(`academics.global.funding`)}: </b>{t(`academics.${projectKey}.funding`)}</li>
//         </ul>
//       </>
//   )
// }

export { 
    ProjectCard,
    ProjectHeroImageTitle
};