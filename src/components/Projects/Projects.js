import React from 'react'
import Add from '../Text/Add'
import Alykul from '../videos/Alykul'
import Sayakbai from '../videos/Sayakbai'
import PhotoProjects from './PhotoProjects'
import { Button} from 'react-scroll'
import { BtnWrap, ProjectsContain } from './ProjectsElements'

function Projects({id}) {
    return (
        

                <ProjectsContain id={id}>
               <Add />
                <BtnWrap>
                    <Button to="home"/>
                </BtnWrap>
               <h2>Наши проекты</h2>
               <p  style={{textAlign: "justify", fontSize: "24px" }}>Серия исторических роликов , 
                   рассказывающие р выдаюшихся личностях Кыргызстана</p>
               <Sayakbai />
               <Alykul /> 
               

               <PhotoProjects/>
                </ProjectsContain>
            
      
    )
}

export default Projects
