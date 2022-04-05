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
            // audioList.bodyAudio2.src = returnVoicePath(0, '02')   //clap voice    

            return () => {
            }
        }, []
    )

    React.useImperativeHandle(ref, () => ({
        playGame: () => {

            setTimeout(() => {
                audioList.bodyAudio1.play();

                backgroundRef.current.style.transition = '4s'
                backgroundRef.current.style.transform = ' translate(-35%, -30%) scale(2)'

                setTimeout(() => {
                    nextFunc();
                }, 5000);
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
                    scale={2.2}
                    posInfo={{ l: -0.22, b: -0.1 }}
                    url={"SB01/SB01_BG/Elxsi_SB01_Y01_English_Trace_G_BG.svg"} />

                <BaseDiv ref={aniObjectRef}>
                    <Player
                        ref={characterRef}
                        loop
                        speed={0.0}
                        keepLastFrame={true}
                        src={prePathUrl() + 'lottieFiles/main/scale/jeep with character wheels.json'}
                        style={{
                            position: 'absolute',
                            width: '30%',
                            left: '10%',
                            bottom: '24%',
                            pointerEvents: 'none',
                            overflow: 'visible'
                        }}
                    >
                    </Player>
                </BaseDiv>

                <BaseImage
                    url={'SB01/SB01_FG/SB01_FG_JUICE.svg'}
                    scale={0.8}
                    posInfo={{ r: 0, b: 0.00 }}
                />

                <BaseImage
                    url={'SB01/SB01_FG/SB01_FG_JUICE_charecter.svg'}
                    scale={0.5}
                    posInfo={{ r: 0.1, b: 0.05 }}
                />
            </div>

        </div>
    );
})
