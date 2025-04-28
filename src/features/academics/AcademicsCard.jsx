import { useTranslation, withTranslation, Trans } from 'react-i18next';
import { H1, H2, H3, P, A } from "@/components/ui/typography"
import { Badge } from "@/components/ui/badge.tsx"

const AcademicsCardListElementLabLine = (items) => {
  return (
    <>
      <A href={items.href}>{items.nom}{" \n"}{items.acronymage}</A>
      <br />
    </>
  )
}


const AcademicsCard = ({typeEntity, entityKey, rowKeys, partenaireKeys, additionalCardKeys}) => {
  const AcademicsCardRow = ({rowKey}) => {
    return (
      <div className="flex flex-col sm:flex-row sm:items-start sm:gap-6 text-base">
        <p className="sm:w-1/3 text-left sm:text-right shrink-0">{t(`academics.global.${rowKey}`)}</p>
        <p className="sm:w-2/3 sm:pl-0 mt-2 sm:mt-0" >{t(`academics.${typeEntity}.${entityKey}.${rowKey}`)}</p>
      </div>
    )
  }

  const AcademicsCardRowOfKeywords = ({kwordList}) => {
    return (
      <div className="flex flex-col sm:flex-row sm:items-start sm:gap-6 text-base">
        <p className="sm:w-1/3 text-left sm:text-right shrink-0">{t(`academics.global.keywords`)}</p>
        <div className="sm:w-2/3 sm:pl-0 mt-2 sm:mt-0">
          {kwordList.map((kword) => (<Badge key={kword} variant="outline" className="m-0.5 hover:bg-orange-300">{kword}</Badge>))}
        </div>
      </div>
    )
  }
  
  const { t, i18n } = useTranslation();
  const data = partenaireKeys //['mapupr', 'lmgc', 'lispen', 'mapurm']
  return (
    <div className=''>
      <div className="border sm:border-none space-y-6 w-full">
        {rowKeys.map((rowKey) => {
          switch (rowKey) {
            case "partenaires":
              return (
                <div key={rowKey} className="flex flex-col sm:flex-row sm:items-start sm:gap-6 text-base">
                <p className="sm:w-1/3 text-left sm:text-right shrink-0">{t(`academics.global.partenaires`)}</p>
                <div className="sm:w-2/3 sm:pl-0 sm:mt-0">
                  {data.map((partenaireKey) => (              
                      <AcademicsCardListElementLabLine key={partenaireKey}
                        nom=        {t(`academics.global.zooPartenaires.${partenaireKey}.name`)}
                        href=       {t(`academics.global.zooPartenaires.${partenaireKey}.href`)} 
                        acronymage= {t(`academics.global.zooPartenaires.${partenaireKey}.acronym`)}/>
                  ))}
                  </div>
                </div>
              )
              break;
            case "keywords":
              const kwords = (t(`academics.${typeEntity}.${entityKey}.${rowKey}`)).split(", ")
              return (<AcademicsCardRowOfKeywords key={rowKey} kwordList={kwords} />)
            default:
              return (<AcademicsCardRow key={rowKey} rowKey={rowKey} />)
          }
        })
        }
      </div>  
    </div>
  )
}

export { 
    AcademicsCard
};