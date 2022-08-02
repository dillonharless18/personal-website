import emailjs from '@emailjs/browser';
import { useEffect, useRef, useState } from 'react'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'

function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
      width,
      height
    };
}

const Contact = () => {

    const [letterClass, setLetterClass] = useState('text-animate')
    const refForm = useRef()

    const titleArray= ["C","o","n","t","a","c","t"," ","m","e"]
    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)
    }, [])

    const sendEmail = (e) => {
        e.preventDefault()
        emailjs
        .sendForm(
            'service_l4579gr',
            'template_a7yhocq',
            refForm.current,
            'nhUEgXvfw6dhFVQVU'
        )
        .then(
            () => {
                alert('Message sent succesfully')
                window.location.replace('')
            },
            () => {
                alert('Failed to send the message')
            }
        )
    }

  return (
    <>
        <div className='container contact-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters 
                        letterClass={letterClass}
                        strArray={titleArray} 
                        idx={15}

                    />
                </h1>
                <p>
                    I am interested in freelance, consulting, and full-time/part-time opportunites.
                    If you have any questions or would like to connect, use the form below!
                </p>
                <div className='contact-form'>
                    <form ref={refForm} onSubmit={sendEmail}>
                        <ul>
                            <li className='half'>
                                <input type={"text"} name={"name"} placeholder={"Name"} required />
                            </li>
                            <li className='half'>
                                <input type={"email"} name={"email"} placeholder={"Email"} required />
                            </li>
                            <li>
                                <input type={"text"} name={"subject"} placeholder={"Subject"} required />
                            </li>
                            <li>
                                <textarea name={"message"} placeholder={"Message"} required />
                            </li>
                            <li>
                                <input type={"submit"} className={'flat-button'} value={"SEND"}/>
                            </li>
                        </ul>
                    </form>
                </div>
            </div>
            {
                getWindowDimensions().width > 1000 &&
                <div className='info-map'>
                    Dillon Harless
                    <br />
                    Wilmington, NC
                    <br />
                    <span>developer.dillonharless@gmail.com</span>
                </div>
            }
            <div className='map-wrap'>
                <MapContainer center={[34.2105430095953, -77.88820616863114]} zoom={13}>
                    <TileLayer url={"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"} />
                    <Marker position={[34.2105430095953, -77.88820616863114]}>
                        <Popup>
                            Dillon lives here!
                        </Popup>
                    </Marker>
                </MapContainer>
            </div>
        </div>
        <Loader type="pacman"/>
    </>
  )
}

export default Contact