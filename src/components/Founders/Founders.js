import React from 'react'
import './Founders.css'
import Maksat from '../../assets/Maksat.png'
import ruslan from '../../assets/ruslan.png'

import { Found, MemberOne, MemberPhoto, MemberSpan, MemberText, MemberTextTwo, FounderContain } from './FoundersElements'
function Founders({id}) {
    return (
        <FounderContain id={id}>
            <Found>
                <MemberOne>
                    <MemberText>
                    Максат Болотбек - известный художником,
                     дизайнер и иллюстратор. Максат является
                     обладателем троих статуэток Ак Илбирс -
                     Национальной кинопремии Кыргызстана.
                    </MemberText>
                    <MemberPhoto>
                    <img src={Maksat} alt="maksat" />
                    </MemberPhoto>
                    <MemberTextTwo>
                    Максат Болотбек
                    </MemberTextTwo>
                    <MemberSpan>
                    Главный продюсер
                    </MemberSpan>
                </MemberOne>
                <MemberOne>
                    <MemberText>
                    Руслан Акун - самый кассово успешный
                    кинорежиссер и сценарист Кыргызстана,
                    выпускник одной из лучших киношкол мира -
                    Школа кинематографических искусства Южнокалифорнийского Университета (USC)
                    </MemberText>
                    <MemberPhoto>
                    <img  src={ruslan} alt="ruslan" />
                    </MemberPhoto>
                    <MemberTextTwo>
                    Руслан Акун
                    </MemberTextTwo>
                    <MemberSpan>
                    Режиссёр
                    </MemberSpan>
                </MemberOne>
            </Found>
        </FounderContain>
        // <div className="founder">
        //     <div className="founder-container">
        //         <div className="founder-members">
        //             <p>Максат Болотбек - известный художником,
        //             дизайнер и иллюстратор. Максат является
        //             обладателем троих статуэток Ак Илбирс -
        //             Национальной кинопремии Кыргызстана.
        //         </p>
        //             <div className="member-items">
        //                 <img className='founder-maksat' src={Maksat} alt="maksat" />
        //                 <p>Максат Болотбек</p>
        //             </div>
        //         <span>Генеральный прод</span>

        //         </div>

        //         <div className="founder-members">
                    // <p>Руслан Акун - самый кассово успешный
                    // кинорежиссер и сценарист Кыргызстана,
                    // выпускник одной из лучших киношкол мира -
                    // Школа кинематографических искусства Южнокалифорнийского Университета (USC)
                    // </p>
        //             <div className="member-items">
        //                 <img className='founder-maksat' src={ruslan} alt="ruslan" />
        //                 <p>Руслан Акун</p>
        //             </div>
        //         <span>реж</span>

        //         </div>
        //     </div>
        // </div>
    )
}

export default Founders
