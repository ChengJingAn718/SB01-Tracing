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
    const rainRefList = [useRef(), useRef(), useRef(), useRef()]

    useEffect(
        () => {

            audioList.bodyAudio1.src = returnVoicePath(0, '01') //explain voice
            // audioList.bodyAudio2.src = returnVoicePath(0, '02')   //clap voice    

            setTimeout(() => {
                rainRefList.map(rain => rain.current.play())
            }, 2000);
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
                backgroundRef.current.style.transform = ' translate(-10%, -45%) scale(2)'

                setTimeout(() => {
                    // nextFunc();
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
                    scale={2.3}
                    posInfo={{ r: -0.5, b: -0.05 }}
                    url={"SB01/SB01_BG/Elxsi_SB01_Y01_English_Trace_U_BG.svg"} />

                <BaseDiv ref={aniObjectRef}>
                    <Player
                        ref={characterRef}
                        loop
                        speed={0.0}
                        keepLastFrame={true}
                        src={prePathUrl() + 'lottieFiles/main/scale/jeep with character wheels.json'}
                        style={{
                            position: 'absolute',
                            width: '35%',
                            left: '10%',
                            bottom: '20%',
                            transform: 'rotate(-4deg)',
                            pointerEvents: 'none',
                            overflow: 'visible'
                        }}
                    >
                    </Player>
                </BaseDiv>
                <Player
                    ref={objectRef}
                    // keepLastFrame={true}
                    speed={0.6}
                    src={prePathUrl() + 'lottieFiles/main/scale/U_boy_girl_umbrella.json'}
                    style={{
                        position: 'absolute',
                        width: '15%',
                        left: '50%',
                        bottom: '10%',
                        pointerEvents: 'none',
                        overflow: 'visible'
                    }}
                >
                </Player>
                {
                    [0, 1].map(value => {
                        return [0, 1].map(index =>

                            <Player
                                ref={rainRefList[value * 2 + index]}
                                loop
                                src={prePathUrl() + 'lottieFiles/main/scale/SB01_Rain_animation_1.json'}
                                style={{
                                    position: 'absolute',
                                    width: '50%',
                                    left: 50 * value + '%',
                                    bottom: index * 50 + '%',
                                    pointerEvents: 'none',
                                    overflow: 'visible'
                                }}
                            >
                            </Player>)
                    })
                }


            </div>

        </div>
    );
})
