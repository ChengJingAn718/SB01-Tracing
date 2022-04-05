import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components'
import { prePathUrl } from "../../components/CommonFunctions";
import { Player } from '@lottiefiles/react-lottie-player';

import "../../stylesheets/styles.css";
import BaseImage from '../../components/BaseImage';
import { returnVoicePath } from "../../components/CommonFunctions"

export default React.forwardRef(function LetterExplain({ nextFunc, audioList, _geo, _baseGeo }, ref) {


    const carRef = useRef();
    const cycleRef = useRef();
    const backgroundRef = useRef();
    const aniObjectRef = useRef();
    const objectRef = useRef();


    useEffect(
        () => {

            audioList.bodyAudio1.src = returnVoicePath(0, '01') //explain voice
            // audioList.bodyAudio2.src = returnVoicePath(0, '02')   //clap voice    

            return () => {
            }
        }, []
    )

    React.useImperativeHandle(ref, () => ({
        playGame: () => {


            let carSpeed = 0

            backgroundRef.current.style.transition = '8s'
            backgroundRef.current.style.transform = ' translate(-70%)'

            aniObjectRef.current.style.transition = '9s'
            aniObjectRef.current.style.transform = ' translate(90% ,-10%) '

            let interval = setInterval(() => {
                if (carSpeed < 0.7) {
                    carSpeed += 0.05
                }
                else {
                    carSpeed = 0.7
                    clearInterval(interval)
                }

                carRef.current.setPlayerSpeed(carSpeed)
                cycleRef.current.setPlayerSpeed(carSpeed * 2)
            }, 70);


            setTimeout(() => {

                objectRef.current.play();
                audioList.bodyAudio1.play();

            }, 4500);

            setTimeout(() => {
                let interval = setInterval(() => {
                    if (carSpeed > 0) {
                        carSpeed -= 0.07
                    }
                    else {
                        carSpeed = 0
                        clearInterval(interval)
                    }
                    carRef.current.setPlayerSpeed(carSpeed)
                    cycleRef.current.setPlayerSpeed(carSpeed * 2)
                }, 50);


            }, 7500);

            setTimeout(() => {
                // audioList.bodyAudio2.play();
                carRef.current.stop();
                cycleRef.current.stop()
                backgroundRef.current.style.transition = '3s'
                backgroundRef.current.style.transform = ' translate(-170%, -5%) scale(2)'

                setTimeout(() => {
                    nextFunc();
                }, 4000);
            }, 9000);

            carRef.current.play();
            cycleRef.current.play();
        },
    }))

    const BaseDiv = styled.div`
    position: absolute;
    height: 100%;
    width: 100%;
    left : 0%;
    top : 0%;
  `

    return (
        <div className="aniObject"
        >

            <div

                ref={backgroundRef}
                style={{
                    position: "fixed", width: _baseGeo.width + "px",
                    height: _baseGeo.height + "px",
                    left: _baseGeo.left + "px"
                    , bottom: 0 + 'px',
                    pointerEvents: 'none'
                }}>
                <BaseImage
                    scale={2.1}
                    posInfo={{ l: -0.25, b: -0.05 }}
                    url={"SB01/SB01_BG/Elxsi_SB01_Y01_English_Trace_K_BG.svg"} />

                <BaseDiv ref={aniObjectRef}>
                    <Player
                        ref={carRef}
                        loop
                        speed={0.0}
                        keepLastFrame={true}
                        src={prePathUrl() + 'lottieFiles/main/scale/jeep with character wheels.json'}
                        style={{
                            position: 'absolute',
                            width: '35%',
                            left: '-35%',
                            bottom: '-2%',
                            pointerEvents: 'none',
                            overflow: 'visible',
                            transform: 'rotate(-5deg)'
                        }}
                    >
                    </Player>

                    <Player
                        ref={cycleRef}
                        loop
                        speed={0.0}
                        keepLastFrame={true}
                        src={prePathUrl() + 'lottieFiles/main/scale/k,R,s_bicycle.json'}
                        style={{
                            position: 'absolute',
                            width: '28%',
                            left: '10%',
                            bottom: '0%',
                            pointerEvents: 'none',
                            transform: 'rotate(-5deg)',
                            overflow: 'visible'
                        }}
                    >
                    </Player>
                </BaseDiv>
                <Player
                    ref={objectRef}
                    speed={0.6}
                    autoplay
                    loop
                    src={prePathUrl() + 'lottieFiles/main/scale/SB01_Character-Eye-Blink_02_kites_1.json'}
                    style={{
                        position: 'absolute',
                        width: '50%',
                        left: '100%',
                        bottom: '5.5%',
                        pointerEvents: 'none',
                        overflow: 'visible'
                    }}
                >
                </Player>
            </div>

        </div>
    );
})
