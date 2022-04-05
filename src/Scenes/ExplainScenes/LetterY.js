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
            audioList.bodyAudio2.src = returnVoicePath(24, '151')   //clap voice    

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
            aniObjectRef.current.style.transform = ' translate(87% ,-21%)  rotate(-11deg)'

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
                audioList.bodyAudio1.play();

            }, 7500);

            setTimeout(() => {


                carRef.current.stop();
                cycleRef.current.stop()

                backgroundRef.current.style.transition = '3s'
                backgroundRef.current.style.transform = ' translate(-190%, -30%) scale(2)'

                audioList.bodyAudio2.play();
                
                setTimeout(() => {
                    nextFunc();
                }, audioList.bodyAudio2.duration * 1000 + 3000);

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
        <div className="aniObject">
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
                    posInfo={{ l: -0.15, b: -0.15 }}
                    url={"SB01/SB01_BG/Elxsi_SB01_Y01_English_Trace_Y_BG.svg"} />

                <BaseDiv ref={aniObjectRef}
                    style={{ transform: 'rotate(-5deg)' }}
                >
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
                            bottom: '28%',
                            pointerEvents: 'none',
                            overflow: 'visible',

                        }}
                    >
                    </Player>
                    <Player
                        ref={cycleRef}
                        loop
                        speed={0.0}
                        keepLastFrame={true}
                        src={prePathUrl() + 'lottieFiles/main/scale/C_bicycle.json'}
                        style={{
                            position: 'absolute',
                            width: '28%',
                            left: '15%',
                            bottom: '23%',
                            pointerEvents: 'none',

                            overflow: 'visible'
                        }}
                    >
                    </Player>
                </BaseDiv>
                <Player
                    autoplay
                    loop
                    keepLastFrame={true}
                    src={prePathUrl() + 'lottieFiles/main/scale/SB01_Character-Eye-Blink_02_yak.json'}
                    style={{
                        position: 'absolute',
                        width: '30%',
                        left: '130%',
                        bottom: '15%',
                        pointerEvents: 'none',
                        overflow: 'visible'
                    }}
                >
                </Player>

            </div>
        </div>
    );
})
