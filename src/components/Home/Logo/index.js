// import gsap from 'gsap-trial';
import { gsap } from 'gsap';
// import DrawSVGPlugin from 'gsap-trial/DrawSVGPlugin';
import DrawSVGPlugin from 'gsap/DrawSVGPlugin';
// import { DrawSVGPlugin } from 'gsap/DrawSVGPlugin.js';
import './index.scss';
import LogoD from '../../../assets/images/LetterD.png'
import {useEffect, useRef} from 'react';

const Logo = () => {

    const bgRef = useRef()
    const outlineLogoRef = useRef()
    const solidLogoRef = useRef()
    const tl = useRef(gsap.timeline());


    useEffect(() => {
        // setTimeout(2000)
        gsap.registerPlugin(DrawSVGPlugin)

        // gsap
        //     .timeline()
        tl.current
            .to(bgRef.current, {
                duration: 1,
                opacity: 1
            })
            .from(outlineLogoRef.current, {
                drawSVG: 0,
                duration: 6
            })
            
        gsap.fromTo(
            solidLogoRef.current,
            // outlineLogoRef.current,
            {
                opacity: 0,
            },
            {
                opacity: 1,
                delay: 2,
                duration: 2.5,
            }
        )
        }, [])

    return (
        <div className='logo-container' ref={bgRef}>
            <img 
                className='solid-logo' 
                ref={solidLogoRef} 
                src={LogoD} 
                alt="React, Javascript, Developer"
            />

            <svg
                width="500pt"
                height="500pt"
                version="1.0"
                viewBox="0 0 375 374.999991"
                xmlns="http://www.w3.org/2000/svg"
                // xmlnsXlink="http://www.w3.org/1999/xlink"
                zoomAndPan="magnify"
                preserveAspectRatio="xMidYMid meet"
            >
                <g 
                    className='svg-container'
                    // transform='translate(0 450) scale (.1, -.1)'
                    fill='none'
                >
                    <path
                        ref={outlineLogoRef}
                        strokeLinecap="butt"
                        transform="matrix(8.37071, 0, 0, 8.37071, 37.500002, -99.928601)"
                        fill="none"
                        strokeLinejoin="miter"
                        d="M 34.606346 35.150806 C 34.606346 41.186547 32.944581 45.836783 29.621984 49.101982 C 26.298919 52.367181 21.627683 54.000014 15.608742 54.000014 L 3.908252 54.000014 L 3.908252 17.835499 L 16.424925 17.835499 C 22.229671 17.835499 26.710977 19.319468 29.869312 22.287873 C 33.027179 25.256278 34.606346 29.543922 34.606346 35.150806 Z M 24.464024 35.497065 C 24.464024 32.182401 23.808838 29.725452 22.497532 28.125752 C 21.186692 26.526052 19.195467 25.726202 16.523856 25.726202 L 13.679115 25.726202 L 13.679115 45.985647 L 15.85607 45.985647 C 18.824475 45.985647 21.000963 45.123732 22.386467 43.400367 C 23.771505 41.677003 24.464024 39.042725 24.464024 35.497065 Z M 24.464024 35.497065 "
                        stroke="#ffd700"
                        strokeWidth="0.05"
                        strokeOpacity="1"
                        strokeMiterlimit="4"
                    />
                </g>
            </svg>

        </div>
    )
}

export default Logo