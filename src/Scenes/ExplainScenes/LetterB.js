import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components'
import { prePathUrl } from "../../components/CommonFunctions";
import { Player } from '@lottiefiles/react-lottie-player';

import "../../stylesheets/styles.css";
import BaseImage from '../../components/BaseImage';
import { returnVoicePath } from "../../components/CommonFunctions"

export default React.forwardRef(function LetterExplain({ nextFunc, audioList, _geo, _baseGeo }, ref) {


    const characterRef = useRef();
    const backgroundRef = useRef();
    const aniObjectRef = useRef();
    const objectRef = useRef();
    const basketBoys = [useRef(), useRef()]

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

            backgroundRef.current.style.transition = '6s'
            backgroundRef.current.style.transform = ' translateX(-50%)'

            aniObjectRef.current.style.transition = '7s'
            aniObjectRef.current.style.transform = ' translateX(80%)'

            let interval = setInterval(() => {
                if (carSpeed < 0.7) {
                    carSpeed += 0.05
                }
                else {
                    carSpeed = 0.7
                    clearInterval(interval)
                }
                characterRef.current.setPlayerSpeed(carSpeed)
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
                    characterRef.current.setPlayerSpeed(carSpeed)
                }, 50);
            }, 5500);


            setTimeout(() => {
                basketBoys[0].current.setClass('hideObject')
                basketBoys[1].current.setClass('showObject')
                audioList.bodyAudio1.play();
            }, 6000);
            setTimeout(() => {
                audioList.bodyAudio1.play();
                characterRef.current.stop();

                backgroundRef.current.style.transition = '3s'
                backgroundRef.current.style.transform = ' translate(-110%, 15%) scale(1.5)'

                setTimeout(() => {
                    nextFunc();
                }, 5500);
            }, 7000);

            characterRef.current.play();
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
                    scale={2.2}
                    posInfo={{ l: -0.25, t: 0.00 }}
                    url={"SB01/SB01_BG/Elxsi_SB01_Y01_English_Trace_B_BG.svg"} />

                <BaseDiv ref={aniObjectRef}>
                    <Player
                        ref={characterRef}
                        loop
                        speed={0.0}
                        keepLastFrame={true}
                        src={prePathUrl() + 'lottieFiles/main/scale/Jeep_B_blink.json'}
                        style={{
                            position: 'absolute',
                            width: '40%',
                            left: '25%',
                            bottom: '17%',
                            pointerEvents: 'none',
                            overflow: 'visible'
                        }}
                    >
                    </Player>
                </BaseDiv>
                {
                    [0, 1].map(value => <BaseImage
                        scale={0.8}
                        ref={basketBoys[value]}
                        posInfo={{ l: 0.6, b: 0 }}
                        className={value > 0 ? 'hideObject' : ''}
                        url={"SB01/SB01_FG/SB01_FG_BALL_0" + (value + 1) + ".svg"}
                    />)

                }


                {/* <Player
                    ref={objectRef}
                    // keepLastFrame={true}
                    speed={0.6}
                    src={prePathUrl() + 'lottieFiles/main/scale/SB01_Character-Eye-Blink_04_basketball_1.json'}
                    style={{
                        position: 'absolute',
                        width: '40%',
                        left: '100%',
                        top: '30%',
                        pointerEvents: 'none',
                        overflow: 'visible'
                    }}
                >
                </Player> */}
            </div>

        </div>
    );
})
