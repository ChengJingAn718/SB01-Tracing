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
    const targetObj = useRef();

    useEffect(
        () => {

            audioList.bodyAudio1.src = returnVoicePath(0, '01') //explain voice
            audioList.bodyAudio2.src = returnVoicePath(15, '97')   //clap voice    

            return () => {
            }
        }, []
    )

    React.useImperativeHandle(ref, () => ({
        playGame: () => {
            objectRef.current.play()

            setTimeout(() => {
                audioList.bodyAudio1.play();

                backgroundRef.current.style.transition = '4s'
                backgroundRef.current.style.transform = ' translate(-50%, 40%) scale(2)'

                setTimeout(() => {
                    audioList.bodyAudio2.play();
                    setTimeout(() => {
                        nextFunc();
                    }, audioList.bodyAudio2.duration * 1000 + 3000);
                }, 1500);

            }, 3000);

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
                    scale={2}
                    posInfo={{ r: -0.18, b: -0.05 }}
                    url={"SB01/SB01_BG/Elxsi_SB01_Y01_English_Trace_N_BG.svg"} />


                <Player
                    src={prePathUrl() + 'lottieFiles/main/scale/jeep with character wheels.json'}
                    style={{
                        position: 'absolute',
                        width: '35%',
                        left: '10%',
                        bottom: '20%',
                        pointerEvents: 'none',
                        overflow: 'visible'
                    }}
                >
                </Player>

                <Player
                    ref={objectRef}
                    // keepLastFrame={true}
                    speed={0.6}
                    src={prePathUrl() + 'lottieFiles/main/scale/Q_Girl_boy.json'}
                    style={{
                        position: 'absolute',
                        width: '15%',
                        left: '15%',
                        bottom: '10%',
                        pointerEvents: 'none',
                        overflow: 'visible'
                    }}
                >
                </Player>
                <Player
                    ref={targetObj}
                    loop
                    autoplay
                    // keepLastFrame={true}
                    src={prePathUrl() + 'lottieFiles/main/scale/SB01_Parrot_Animation_1.json'}
                    style={{
                        position: 'absolute',
                        width: '18%',
                        right: '17%',
                        bottom: '50%',
                        pointerEvents: 'none',
                        overflow: 'visible'
                    }}
                >
                </Player>

            </div>

        </div>
    );
})
