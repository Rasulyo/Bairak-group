import React from 'react'
import { AboutContain, AboutP, ContainContext } from './AboutElements'
import Carousel from './Carousel'
import { CarData } from './CarouselData'

const About = ({id, car}) => {
    return (
        <>
        <AboutContain id={id}>
            <ContainContext>
                <AboutP>
                Миссией студии “Байрак” является создание значимых аудиовизуальных проектов
                для продвижения положительных и созидательных ценностей в регионе
                </AboutP>

                <AboutP>
                Компания “Байрак” располагает творческими и материальными ресурсами для
                полного цикла производства социальных роликов, сериалов и кинокартин.
                </AboutP>
                <AboutP>
                “Bairak group” организует и проводит съемки как в Кыргызстане, так и по всей
                Центральной Азии в сотрудничестве с лучшими отечественными и зарубежными
                талантами
                </AboutP>

            </ContainContext>
                <Carousel car={CarData} />
        </AboutContain>

                </>
    )
}

export default About
