import React from 'react'
import alykul from '../../assets/alykul.jpg'
import eki from '../../assets/eki.jpg'
import herding from '../../assets/herding.jpg'
import jusup from '../../assets/jusup.jpg'
import kokboru from '../../assets/kokboru.jpg'
import salam from '../../assets/salam.jpg'
import sayakbai from '../../assets/sayakbai.jpg'
import suimonkul from '../../assets/suimonkul.jpg'
import vpoisk1 from '../../assets/vpoisk1.jpg'
import vpoisk2 from '../../assets/vpoisk2.jpg'
import web from '../../assets/web.jpg'
import web2 from '../../assets/web2.jpg'
import './PhotoProjects.css'
import { Contain } from '../Container'
import { ProjectOurP, ProjectOurText } from './ProjectsElements'

function PhotoProjects() {
    return (
        <div className="project-photos">
            <Contain>
                <ProjectOurP>
                ТВ проекты
                </ProjectOurP>
            <ProjectOurText>
            А также мы умеем снимать длинние истории для разной аудитории
            </ProjectOurText>
            <ProjectOurText>
            Детский сериал "Аманат"
            </ProjectOurText>
            <ProjectOurText>
            Серия документальных фильиов о неизвестных героях
            </ProjectOurText>
            <ProjectOurP>
            Полнометражные фильмы
                </ProjectOurP>
            <ProjectOurText>
            Самыми сильными сторонами является то , что фильмы мы снимали становились самыми кассовыми в Кыргызстане и Казахстане, а 
                а также пользуются огромной популярностью на территории всего СНГ.
            </ProjectOurText>
            <ProjectOurP>           
            Наши проекты
            </ProjectOurP>

{/* 
                <h2></h2>
                
                <p></p>
                <span></span>
                <h2></h2>
                <p>Самыми сильными сторонами является то , что фильмы мы снимали становились самыми кассовыми в Кыргызстане и Казахстане, а 
                а также пользуются огромной популярностью на территории всего СНГ.
                </p>
                <h3></h3> */}
            </Contain>
            <Contain>
               <img className="photo-projects" src={eki} alt="eki-baatyr" />
               <img className="photo-projects" src={herding} alt="herding" />
               <img className="photo-projects" src={alykul} alt="alykul" />
               <img className="photo-projects" src={jusup} alt="jusup" />
               <img className="photo-projects" src={kokboru} alt="kokboru" />
               <img className="photo-projects" src={salam} alt="salam" />
               <img className="photo-projects" src={sayakbai} alt="sayakbai" />
               <img className="photo-projects" src={suimonkul} alt="suimonkul" />
               <img className="photo-projects" src={vpoisk1} alt="vpoisk1" />
               <img className="photo-projects" src={vpoisk2} alt="vpoisk2" />
               <img className="photo-projects" src={web} alt="web" />
               <img className="photo-projects" src={web2} alt="web2" />

            </Contain>
            
        </div>
    )
}

export default PhotoProjects
