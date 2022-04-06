
import { useRef, useEffect, useState } from "react";
import loadSound from "../utils/loadSound"
import "../stylesheets/styles.css";
import "../stylesheets/button.css";
import App from "./App";
import { isMobile } from "react-device-detect";
import { LoadingCircleBar } from "./CommonButtons";
import { wordVoiceList, letterVoiceList, letterTurnList } from "./CommonVariants"
import { setLoop, initialAudio, onOffSound } from "./CommonFunctions";
import { prePathUrl } from "./CommonFunctions";

var oldBackgroundImage = 'SB_04_intro_BG_01';

let backAudio = loadSound('bMusic', true)
backAudio.loop = true;
backAudio.volume = .1;

const currentSceneNumber = 9;

// let primaryAudio = loadSound('SB03_01')
// let titleAudio = loadSound('SB03_02')

document.title = "Trace Letter " + letterTurnList[currentSceneNumber]

let bodyAudio1 = loadSound('A/SB01_01') //explain voice
let bodyAudio2 = loadSound('A/SB01_02')   //clap voice

let wordAudio1 = loadSound(letterTurnList[currentSceneNumber] + '/SB01_' + wordVoiceList[currentSceneNumber][0])  //word voice
let wordAudio2 = loadSound(letterTurnList[currentSceneNumber] + '/SB01_' + wordVoiceList[currentSceneNumber][1])  //word voice
let wordAudio3 = loadSound(letterTurnList[currentSceneNumber] + '/SB01_' + wordVoiceList[currentSceneNumber][2])  //word voice

let letterAudio = loadSound(letterTurnList[currentSceneNumber] + '/SB01_' + letterVoiceList[currentSceneNumber])

let audioYeah = loadSound('yeah', true)
let audioWoo = loadSound('woo', true)
let audioBuzz = loadSound('buzz', true)
let audioClap = loadSound('clap', true)
let audioSuccess = loadSound('success', true)
let audioClick = loadSound('click', true)
let audioTing = loadSound('ting', true)
let replayAudio = loadSound('replay', true);

audioBuzz.volume = 0.4
audioClap.volume = 0.2
audioYeah.volume = 0.25
audioWoo.volume = 0.5
audioClick.volume = 0.0
audioSuccess.volume = 0.5

let audioList = {
    backAudio, bodyAudio1, bodyAudio2,
    wordAudio1, wordAudio2, wordAudio3,
    audioYeah, audioWoo, audioSuccess,
    letterAudio, audioBuzz, audioClap,
    audioClick, audioTing, replayAudio,
}

var isOff = false;

var _isBackSoundPlaying = true;
let backgroundSize = { width: 0, height: 0, left: 0, bottom: 0 }

const animationColorList = [
    ['#51c9b5', '#cc55d9', '#f55185'],
    ['#43c9e0', '#15ed76', '#f2e01d'],
    ['#f2e01d', '#0269b8', '#a6074c'],
    ['#a6074c', '#361394', '#eb2f80'],
    ['#1e70eb', '#880a91', '#f0a11a'],
    ['#51c9b5', '#cc55d9', '#dfeb88']
]

let isGameLoaded = false;
var isGameStarted = false;

export default function BaseShot() {

    // const standardRate = 1920 / 969;
    // const backRate = 1600 / 900;
    const standardRate = 1600 / 900;
    const [_sizeState, setSizeState] = useState(true);
    const [isBackloaded, setBackLoaded] = useState(false);

    const myImage = useRef();
    const myImage1 = useRef();
    const myBtn = useRef();
    const playGameBtn = useRef();


    const appRef = useRef();
    const loadingBar = useRef();

    const refIntroText = useRef();

    const transitionObject = useRef();
    const coloredObjects = [useRef(), useRef(), useRef()];


    const [geometry, setGeometry] = useState({
        width: window.innerWidth, height: window.innerHeight,
        left: 0, top: 0
    });

    function backgroundLoaded() {
        setTimeout(() => {

            if (!isGameLoaded) {
                isGameLoaded = true
                setTimeout(() => {
                    loadingBar.current.className = 'hide'
                }, 300);
            }

            setBackLoaded(true)
        }, 50);
    }

    function controlBacksound() {
        if (_isBackSoundPlaying) {
            _isBackSoundPlaying = false;
            backAudio.pause();
        }
        else {
            _isBackSoundPlaying = true;
            backAudio.play().catch(error => { });
        }
    }

    function hideIntroTitle() {
        refIntroText.current.className = 'disappear'
        playGameBtn.current.className = 'disappear'
    }

    function starGame() {
        appRef.current.nextFunc();
        if (!isGameStarted)
            initialAudio(audioList)
        isGameStarted = true;
        playBackSound();
    }

    function showIntroTitle() {
        refIntroText.current.className = 'introText'

        setTimeout(() => {
            playGameBtn.current.className = 'introText'
        }, 1000);

        setTimeout(() => {
            playGameBtn.current.className = 'commonButton'
        }, 2500);
    }

    function playGame() {

        showIntroTitle();

        var hidden = "hidden";

        if (hidden in document)
            document.addEventListener("visibilitychange", onOffContrl);
        else if ((hidden = "mozHidden") in document)
            document.addEventListener("mozvisibilitychange", onOffContrl);
        else if ((hidden = "webkitHidden") in document)
            document.addEventListener("webkitvisibilitychange", onOffContrl);
        else if ((hidden = "msHidden") in document)
            document.addEventListener("msvisibilitychange", onOffContrl);

        setLoop(backAudio)
    }

    function playBackSound() {
        setTimeout(() => {
            backAudio.play().catch(error => { });
            backAudio.loop = true;
        }, 400);
    }


    function onOffContrl() {

        let allkeys = Object.keys(audioList)

        if (isOff) {
            allkeys.map(audio => {
                audioList[audio].muted = false;
            })
        }
        else {
            allkeys.map(audio => {
                audioList[audio].muted = true;
            })
        }

        isOff = !isOff
    }

    useEffect(() => {

        setTimeout(() => {
            playGame();

        }, 1000);

        // starGame();

        let timeout;
        transitionObject.current.style.display = 'none'
        setLoop(backAudio)
        // startBtn.current.style.display = 'none'
        playGameBtn.current.className = 'hideObject'
        // refIntroText.current.className = 'hideObject'

        setTimeout(() => {
            setWindowResizing();
        }, 100);

        const handleResize = () => {
            clearTimeout(timeout);
            timeout = setTimeout(() => {
                setWindowResizing();
            }, 100);
        }
        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);


    function setBackground(imgUrl, optionNum = -1) {
        if (imgUrl != oldBackgroundImage) {
            setBackLoaded(false)
            oldBackgroundImage = imgUrl;
            myImage1.current.src = prePathUrl() + "images/BG/" + imgUrl + ".svg";
            if (optionNum != 1)  // transition scenes
                myImage1.current.className = 'background-move'

            setTimeout(() => {
                myImage.current.src = prePathUrl() + "images/BG/" + imgUrl + ".svg";
                if (optionNum != 1)  // transition scenes
                    myImage1.current.className = ''
            }, 1500);
        }

    }

    function startTransition(num = 0) {

        setTimeout(() => {
            audioWoo.play()
        }, 300);
        transitionObject.current.style.display = 'inline-block';
        if (window.innerHeight / window.innerWidth > 700 / 1024) {
            transitionObject.current.className = 'changeTran1';
        }
        else
            transitionObject.current.className = 'changeTran';

        for (let i = 0; i < 3; i++)
            coloredObjects[i].current.style.backgroundColor = animationColorList[num][i]
        setTimeout(() => {
            transitionObject.current.className = '';
            transitionObject.current.style.display = 'none';
        }, 3000);
    }


    function setWindowResizing() {
        let width = window.innerWidth;
        let height = window.innerHeight;
        let suitWidth = width;
        let suitHeight = height;
        let left = 0;
        let top = 0;

        backgroundSize.width = width;
        backgroundSize.height = height;

        backgroundSize.left = 0;
        backgroundSize.bottom = 0;

        if (height * standardRate > width) {
            suitHeight = width / standardRate;
            backgroundSize.width = height * standardRate;
            backgroundSize.left = -1 * (backgroundSize.width - width) / 2;

            top = (height - suitHeight) / 2;
        }
        else if (height * standardRate < width) {
            suitWidth = height * standardRate;
            backgroundSize.height = width / standardRate;;
            backgroundSize.bottom = -1 * (backgroundSize.height - height) / 2;

            left = (width - suitWidth) / 2;
        }

        if (isMobile && window.innerWidth < window.innerHeight)
            setSizeState(false);
        else
            setSizeState(true);

        // if (isIntroTitleShow) {
        //     refIntroText.current.style.transition = '0.0s'
        //     refIntroText.current.style.left = geometry.left + -1 * geometry.width + "px"
        // }


        setGeometry({ width: suitWidth, height: suitHeight, left: left, top: top, first: false })
    }

    // setTimeout(() => {
    //     if (isIntroTitleShow)
    //         showIntroTitle()
    //     else
    //         hideIntroTitle()
    // }, 100);

    return (
        <div
            style={{
                backgroundColor: "black", width: "100%", height: "100%", position: "fixed", left: "0px", top: "0px",
                textAlign: "center"
            }}
        >
            <div style={{
                position: "fixed", width: backgroundSize.width + "px"
                , height: backgroundSize.height + "px", left: backgroundSize.left + "px",
                bottom: backgroundSize.bottom + "px",
                pointerEvents: 'none',
                userSelect: 'none'
            }} >
                <img draggable={false} height={"100%"}
                    ref={myImage}
                    src={prePathUrl() + "images/BG/SB_01_BG_01.svg"}
                />
            </div>
            <div style={{

                position: "fixed", width: backgroundSize.width + "px"
                , height: backgroundSize.height + "px", left: backgroundSize.left + "px",
                bottom: backgroundSize.bottom + "px",
                pointerEvents: 'none',
                userSelect: 'none'
            }} >
                <img draggable={false} height={"100%"}
                    onLoad={backgroundLoaded}
                    ref={myImage1}
                    src={prePathUrl() + "images/BG/SB_01_BG_01.svg"}
                />
            </div>

            <div style={{ background: "transparent" }} >
                <App
                    ref={appRef}
                    key={'appRef'}
                    _startTransition={startTransition}
                    _hideIntroTitle={hideIntroTitle}
                    _showIntroTitle={showIntroTitle}
                    _isBackloaded={isBackloaded}
                    currentSceneNumber={currentSceneNumber}
                    _audioList={audioList}
                    geo={geometry} __controlBacksound={controlBacksound}
                    baseGeo={backgroundSize} _setBackground={setBackground} />
            </div>

            <div
                ref={refIntroText}
                className='hideObject'
                style={{
                    position: "fixed", width: geometry.width * 0.4,
                    left: geometry.width * 0.3+ geometry.left
                    , top: (geometry.height * 0.1 + geometry.top) + "px",
                    pointerEvents: 'none',
                    userSelect: 'none'
                }}>
                <img draggable={false} width={"100%"}
                    src={prePathUrl() + "images/BG/SB01_Intro_Page_Title.svg"}
                />
            </div>


            <div
                ref={playGameBtn}
                className='hide'
                onClick={() => { setTimeout(starGame, 200); audioClick.play().catch(error => { }); }}
                style={{
                    position: "fixed", width: geometry.width * 0.1 + "px",
                    height: geometry.width * 0.1 + "px",
                    right: geometry.width * 0.45 + geometry.left + "px"
                    , top: geometry.height * 0.7 + geometry.top + "px"
                    , cursor: "pointer",
                    userSelect: 'none',
                }}>
                <img
                    width={"100%"}
                    draggable={false}
                    src={prePathUrl() + 'images/Buttons/Play_blue.svg'}
                />
            </div>


            <div
                ref={transitionObject}
                style={{ display: 'none' }}
            >
                <div
                    ref={coloredObjects[0]}
                    style={{
                        backgroundColor: '#7372f2', width: '18000%',
                        height: '500%', bottom: '-0%', right: '-200%', position: 'absolute'
                    }}>
                </div>

                <div
                    ref={coloredObjects[1]}
                    style={{
                        backgroundColor: '#1f77ff', width: '18000%',
                        height: '500%', bottom: '500%', right: '-200%', position: 'absolute'
                    }}>
                </div>

                <div
                    ref={coloredObjects[2]}
                    style={{
                        backgroundColor: '#3334f2', width: '18000%',
                        height: '5000%', bottom: '1000%', right: '-200%', position: 'absolute'
                    }}>
                </div>

            </div>

            <LoadingCircleBar ref={loadingBar} />

            {!_sizeState && <div className="block" style={{
                position: "fixed", left: "0px", top: "0px",
                width: "100%", height: "100%", backgroundColor: "black", opacity: "0.85",
                textAlign: "center"
            }}>
                <h1
                    style={{
                        fontSize: '10vw',
                        color: 'white',
                        position: 'absolute',
                        top: '38%',
                        left: '10%',
                        padding: '0px',
                        fontFamily: 'popin'
                    }}>
                    Rotate your device!
                </h1>
            </div>
            }

        </div>
    )
}