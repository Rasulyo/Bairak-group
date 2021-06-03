import React from 'react'
import Add from '../Text/Add'
import Alykul from '../videos/Alykul'
import PhotoProjects from './PhotoProjects'
import { ProjectOurP, ProjectsContain,ProjectOurText } from './ProjectsElements'

function Projects({id}) {
    return (
        

                <ProjectsContain id={id}>
               <Add />
               <ProjectOurP>
                    Наши проекты
               </ProjectOurP>
               <ProjectOurText>
               Серия исторических роликов , 
                   рассказывающие р выдаюшихся личностях Кыргызстана
               </ProjectOurText>
               <Alykul /> 
               

               <PhotoProjects/>
                </ProjectsContain>
            
      
    )
}

export default Projects
