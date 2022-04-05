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


    useEffect(
        () => {

            audioList.bodyAudio1.src = returnVoicePath(0, '01') //explain voice
            audioList.bodyAudio2.src = returnVoicePath(16, '103')   //clap voice    

            return () => {
            }
        }, []
    )

    React.useImperativeHandle(ref, () => ({
        playGame: () => {
            objectRef.current.play()

            setTimeout(() => {
                aniObjectRef.current.style.transition = '3s'
                aniObjectRef.current.style.transform = 'translate(-3%,6%) scale(1.15)'

                setTimeout(() => {
                    audioList.bodyAudio1.play();

                    backgroundRef.current.style.transition = '4s'
                    backgroundRef.current.style.transform = ' translate(-20%, -30%) scale(1.6)'

                    setTimeout(() => {
                        audioList.bodyAudio2.play();
                        setTimeout(() => {
                            nextFunc();
                        }, audioList.bodyAudio2.duration * 1000 + 2000);
                    }, 1500);

                }, 3000);

            }, 2000);


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
                    posInfo={{ r: -0.2, b: -0.1 }}
                    url={"SB01/SB01_BG/Elxsi_SB01_Y01_English_Trace_Q_BG.svg"} />

                <BaseDiv ref={aniObjectRef}>
                    <BaseImage
                        url={'SB01/SB01_FG/SB01_FG_QUEEN.svg'}
                        scale={0.25}
                        posInfo={{ r: 0.23, b: 0.12 }}
                    />
                </BaseDiv>
                <div
                    style={{
                        position: 'absolute',
                        width: '15%',
                        height: '20%',
                        left: '15%',
                        bottom: '32.2%',
                        pointerEvents: 'none',
                        overflow: 'hidden',
                    }}
                >
                    <Player
                        ref={objectRef}
                        // keepLastFrame={true}
                        loop
                        speed={0.6}
                        src={prePathUrl() + 'lottieFiles/main/scale/Q_Girl_boy.json'}
                        style={{
                            position: 'absolute',
                            width: '100%',
                            left: '0%',
                            top: '0%',
                            pointerEvents: 'none',
                        }}
                    >
                    </Player>
                </div>
            </div>

        </div>
    );
})
