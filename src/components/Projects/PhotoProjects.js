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

function PhotoProjects() {
    return (
        <div className="project-photos">
            <Contain>
                <h2>ТВ проекты</h2>
                А также мы умеем снимать длинние истории для разной аудитории
                <p>Детский сериал "Аманат"</p>
                <span>Серия документальных фильиов о неизвестных героях</span>
                <h2>Полнометражные фильмы</h2>
                <p>Самыми сильными сторонами является то , что фильмы мы снимали становились самыми кассовыми в Кыргызстане и Казахстане, а 
                а также пользуются огромной популярностью на территории всего СНГ.
                </p>
                <h3>Наши проекты</h3>
            </Contain>
            <Contain>
               <img src={alykul} alt="alykul" />
               <img src={eki} alt="eki-baatyr" />
               <img src={herding} alt="herding" />
               <img src={jusup} alt="jusup" />
               <img src={kokboru} alt="kokboru" />
               <img src={salam} alt="salam" />
               <img src={sayakbai} alt="sayakbai" />
               <img src={suimonkul} alt="suimonkul" />
               <img src={vpoisk1} alt="vpoisk1" />
               <img src={vpoisk2} alt="vpoisk2" />
               <img src={web} alt="web" />
               <img src={web2} alt="web2" />

            </Contain>
            
        </div>
    )
}

export default PhotoProjects
