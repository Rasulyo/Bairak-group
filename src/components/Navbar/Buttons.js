import React from 'react'
import { BtnCon, ButtonsEn, ButtonsRus } from './ButtonsElements'

function Buttons() {
    return (
        <BtnCon>
            <ButtonsRus>
                RU
            </ButtonsRus>
            /
            <ButtonsEn>
                EN    
            </ButtonsEn>   
        </BtnCon>
    )
}

export default Buttons
