import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngular, faAws, faCss3, faGitAlt, faHtml5, faJsSquare, faReact } from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'
import { faCircle, faVial, faVialVirus, faVials } from '@fortawesome/free-solid-svg-icons'

const TheLab = () => {

    const [letterClass, setLetterClass] = useState('text-animate')
    const titleArray= ['T','h','e','','L','a','b',]
    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)
    }, [])

    return (
        <>
            <div className='container about-page'>
                <div className='text-zone'>
                    <h1>
                        <AnimatedLetters
                            strArray={titleArray}
                            idx={15}
                            letterClass={letterClass}
                        />
                    </h1>
                    <p>
                        Weclome to my secret lab. Here you can find all my projects!
                    </p>
                    <a href="/the-lab/chainlist" className="cool-link-box">Chainlist ( like Craigslist but on Arbitrum! )</a>
                    <a href="/the-lab/css-grid" className="cool-link-box">Fun with CSS Grid</a>
                    <a href="/the-lab/django-app" className="cool-link-box">Django App</a>
                    <a href="/the-lab/chatgpt-plugin" className="cool-link-box">ChatGPT Plugin</a>
                </div>

                <div className='stage-vial-cont'>
                    <div className='bubble1'>
                        <FontAwesomeIcon icon={faCircle} color="#FFD601" />
                    </div>
                    <div className='bubble2'>
                        <FontAwesomeIcon icon={faCircle} color="#FFD601" />
                    </div>
                    <div className='bubble3'>
                        <FontAwesomeIcon icon={faCircle} color="#FFD601" />
                    </div>
                    <div className='vial'>
                        <FontAwesomeIcon icon={faVial} color="#FFD601" />
                    </div>
                </div>
            </div>
            <Loader type="pacman" />

        </>
    )
    
}

export default TheLab