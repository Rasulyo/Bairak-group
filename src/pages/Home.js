import React, {useState} from 'react'
import Clients from '../components/Clients/Clients'
import Footer from '../components/Footer/Footer'
import Founders from '../components/Founders/Founders'
import Navbar from '../components/Navbar/Navbar'
import { HomeObjFour, HomeObjOne, HomeObjThree } from '../components/Projects/Data'
import Projects from '../components/Projects/Projects'
import SideBar from '../components/Sidebar/SideBar'
 import Show from '../components/videos/Show'


function Home() {
    const [isOpen , setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }
    return (
        <>
            <SideBar isOpen={isOpen} toggle={toggle} />
            <Navbar toggle={toggle} /> 
            <Show />
            <Projects {...HomeObjOne} />

            <Founders {...HomeObjThree} />
            <Clients {...HomeObjFour} />
            <Footer />
        </>
    )
}

export default Home
