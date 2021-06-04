import React from 'react'
import './Founders.css'
import Maksat from '../../assets/Maksat.png'
import ruslan from '../../assets/ruslan.png'
// import { Found, MemberOne, MemberPhoto, MemberSpan, MemberText, MemberTextTwo, FounderContain } from './FoundersElements'

function Founders({id}) {
    return (
        // <FounderContain id={id}>
        //     <Found>
        //         <MemberOne>
        //             <MemberPhoto>
        //             <img src={Maksat} alt="maksat" className="maksat" />
        //             </MemberPhoto>
        //             <MemberText>
        //             Максат Болотбек - известный художником,
        //              дизайнер и иллюстратор. Максат является
        //              обладателем троих статуэток Ак Илбирс -
        //              Национальной кинопремии Кыргызстана.
        //             </MemberText>
        //             <MemberTextTwo>
        //             Максат Болотбек
        //             </MemberTextTwo>
        //             <MemberSpan>
        //             Главный продюсер
        //             </MemberSpan>
        //         </MemberOne>
        //         <MemberOne>
        //             <MemberText>
        //             Руслан Акун - самый кассово успешный
        //             кинорежиссер и сценарист Кыргызстана,
        //             выпускник одной из лучших киношкол мира -
        //             Школа кинематографических искусства Южнокалифорнийского Университета (USC)
        //             </MemberText>
        //             <MemberPhoto>
        //             <img  src={ruslan} alt="ruslan" className="ruslan" />
        //             </MemberPhoto>
        //             <MemberTextTwo>
        //             Руслан Акун
        //             </MemberTextTwo>
        //             <MemberSpan>
        //             Режиссёр
        //             </MemberSpan>
        //         </MemberOne>
        //     </Found>
        // </FounderContain>
        <div className="founder"  id={id}>
            <div className="founder-container">
                <div className="founder-members">
                    <div className="member-items">
                        <img className='founder-maksat' src={Maksat} alt="maksat" />
                        <p>Максат Болотбек</p>
                    </div>
                    <p>Максат Болотбек - известный художником,
                    дизайнер и иллюстратор. Максат является
                    обладателем троих статуэток Ак Илбирс -
                    Национальной кинопремии Кыргызстана.
                </p>
                        {/* <span>Генеральный прод</span> */}

                </div>

                <div className="founder-members">
                    <div className="member-items">
                        <img className='founder-maksat' src={ruslan} alt="ruslan" />
                        <p>Руслан Акун</p>
                        {/* <span>реж</span> */}
                    </div>
                    <p>Руслан Акун - самый кассово успешный
                    кинорежиссер и сценарист Кыргызстана,
                    выпускник одной из лучших киношкол мира -
                    Школа кинематографических искусства Южнокалифорнийского Университета (USC)
                    </p>

                </div>
            </div>
        </div>
    )
}

export default Founders
