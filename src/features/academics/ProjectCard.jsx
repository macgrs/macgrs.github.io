import { useTranslation, withTranslation, Trans } from 'react-i18next';
import { H1, H2, H3, P, A } from "@/components/ui/typography"

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
      <div className="flex flex-col sm:flex-row sm:items-start sm:gap-6 font-[PPNeueMontrealRegular] text-base">
        <p className="sm:w-1/3 text-left sm:text-right shrink-0">{t(`academics.global.${rowKey}`)}</p>
        <p className="sm:w-2/3 sm:pl-0 mt-2 sm:mt-0" >{t(`academics.${projectKey}.${rowKey}`)}</p>
      </div>
    )
  } 
  
  const { t, i18n } = useTranslation();
  const data = partenaireKeys //['mapupr', 'lmgc', 'lispen', 'mapurm']
  return (
    <div className=''>
      <div className="border sm:border-none space-y-6 w-full">
        <ProjectCardRow rowKey='duration' />
        <ProjectCardRow rowKey='position' />
        {/* Map the partenaires */}
        <div className="flex flex-col sm:flex-row sm:items-start sm:gap-6 font-[PPNeueMontrealRegular] text-base">
        <p className="sm:w-1/3 text-left sm:text-right shrink-0">{t(`academics.global.partenaires`)}</p>
          <div className="sm:w-2/3 sm:pl-0 mt-2 sm:mt-0">
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

export { 
    ProjectCard
};