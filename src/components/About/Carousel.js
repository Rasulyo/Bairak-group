import React,{ useState} from 'react'
import { CarData } from './CarouselData'
import {IoIosArrowDroprightCircle,IoIosArrowDropleftCircle } from 'react-icons/io'
// import {FaArrowAltCircleRight,FaArrowAltCircleLeft } from 'react-icons/fa'
import {Contain} from '../Container.js'

import './About.css'

const Carousel = ({car}) => {
    const [current , setCurrent] = useState(0)
    const length = car.length

    setTimeout(() => {
            setCurrent(current === length -1 ? 0 : current + 1 )
    }, 3000);
    
    const nextCar = () => {
        setCurrent(current === length -1 ? 0 : current +1 )
    }

    const prevCar = () => {
        setCurrent(current === 0 ? length -1 : current -1)
    }


    if(!Array.isArray(car) || car.length <=0){
        return null
    }

    return (
        <Contain>

        <section className="car">
            
            <IoIosArrowDropleftCircle className="left-arrow" onClick={prevCar} />
            <IoIosArrowDroprightCircle className="right-arrow"  onClick={nextCar} />
            {
                CarData.map((car, index) => {
                    return(
                        <div 
                        className={index === current ? 'car active' : "car" } 
                        key={index}
                        >
                            {index === current && (
                                <img src={car.images} alt="carousel" className="image" />
                                )}
                        </div>
                    )
                })
            }
        </section>
         </Contain>
    )
}

export default Carousel
