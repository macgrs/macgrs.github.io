import { useTranslation } from 'react-i18next';
import { H1, H2, H3, P, A } from "@/components/ui/typography"
import { useState, useEffect } from "react";

import SimpleParallax from 'simple-parallax-js';



const ProjectBiblioItem = ({bibtexEntry}) => {
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
            <H3 className="" >{t(`academics.${projectKey}.duration`)}</H3>
          </div>
            <H2>{t(`academics.${projectKey}.subtitle`)}</H2>
        </div>
      </div>
    )
  }

export { 
    ProjectBiblioItem
};