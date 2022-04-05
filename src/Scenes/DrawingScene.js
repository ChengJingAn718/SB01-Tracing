import "../stylesheets/styles.css";
import "../stylesheets/button.css";

import { useEffect, useRef, useState } from "react";
import { prePathUrl, returnVoicePath } from "../components/CommonFunctions";
import Phaser from "phaser"
import BaseImage from "../components/BaseImage";
import { Player } from '@lottiefiles/react-lottie-player';

import { isFirefox } from "react-device-detect";
import { startRepeatAudio, setRepeatAudio, stopRepeatAudio, isRepeating } from "../components/CommonFunctions";
import {
    maskInfoList, iconPathList, animtionList, showingLayoutList, titleList, letterPosList,
    lineWidthList, firstPosList, movePath, subObjectList, brushColorList, letterTurnList, lowerLineWidthList,
    sparkPosLeft, textInfoList, lowerMaskInfoList, lowerLetterPosList,
    lowerMovePath, lowerFirstPosList
} from "../components/CommonVariants"

const moveObjList = []

var HeavyLengthList = [
]

var repeatStep = 0;
const firstPos = { x: 380, y: 255 }
//state variants
let stepCount = 0;

// drawing variants

let isFirst = true;
var curves = [];
var curve = null;


var subCurves = [];
var subCurve = null;

// lemming varients
var graphics
var subGraphics
var subObject
var nearestStepNum = 0;
var circleObj

// var yOutLine, wOutLine

var highlightList = []
var highCurrentNum = 0;

var currentImgNumOriginal = 0;
var currentLingLength = 40

let posList = []
var path
var isSubExist = false;
let prePath

var timerList = []
var isTracingStarted = false;

var rememberX = 0;
var rememberIsLeft = false;

let geometryInfo = null


let lastObjectList = []
let firstObjectList = []
let completedIndex = 0;
let isLowerCaseShow = true
let isLowerDrawing = false;

let currentMovePath
let currentFirstPosList
let currentPath
let currentlineWidthList

export default function Scene({ nextFunc, _geo, startTransition, audioList, currentLetterNum
}) {

    const letterNum = currentLetterNum;

    currentMovePath = isLowerDrawing ? lowerMovePath : movePath
    currentFirstPosList = isLowerDrawing ? lowerFirstPosList : firstPosList
    currentPath = currentMovePath[letterNum][stepCount]
    currentlineWidthList = isLowerDrawing ? lineWidthList : lowerLineWidthList

    const explainVoices = ['04', '05', '07', '10']

    const preName = prePathUrl() + 'images/SB01/SB01_Letter-Interactive/SB_01_' + letterTurnList[currentLetterNum] + '_'

    prePath = 'SB01/SB01_Letter-Interactive/SB_01_' + letterTurnList[currentLetterNum] + "_"

    const currentLetter = letterTurnList[letterNum].toLowerCase()
    const lowerPrepath = "lowercase/" + currentLetter + "/SB02_LI_" + currentLetter + "_"

    const parentObject = useRef()
    const drawingPanel = useRef();
    const showingImg = useRef();
    const animationRef = useRef();
    const playerRef = useRef();
    const markParentRef = useRef();

    const subObjectsRef = useRef();
    const iconRef = useRef()
    const highlightRefList =
        Array.from({ length: letterPosList[letterNum].highlight.length }, ref => useRef())

    const outLineRefList = [useRef(), useRef(), useRef()]

    const markRefList = [useRef(), useRef(), useRef()]
    const reviewImgList = [useRef(), useRef(), useRef()]
    const markBaseList = [useRef(), useRef(), useRef()]
    const sparkRefList = [useRef(), useRef(), useRef()]
    const sparkBaseRef = useRef();

    const lowerCaseRef = useRef();
    const drawingRef = useRef();
    const lowerHighlightRefList = Array.from({ length: lowerLetterPosList[letterNum].highlight.length }, ref => useRef())
    const lowerOutlineRefList = [useRef(), useRef()]

    const [rendering, setRendering] = useState(0)

    const drawingGaameconfig = {
        type: Phaser.AUTO,
        width: 1280,
        height: 720,
        parent: 'DrawingDiv',
        mipmapFilter: 'LINEAR_MIPMAP_LINEAR',
        transparent: true,
        physics: {
            default: 'matter',
            matter: {
                gravity: {
                    y: 0.8
                },
                enableSleep: true,
                debug: false
            }
        },
        scene: {
            preload: preload,
            create: create,
            update: update

        }
    };

    const highlightGameConfig = {
        type: Phaser.AUTO,
        width: 1280,
        height: 720,
        transparent: true,
        parent: 'highlightDiv',
        scene: {
            preload: highlight_preload,
            create: highlight_create,
        }
    };


    const wordVoiceList = [audioList.wordAudio1, audioList.wordAudio2, audioList.wordAudio3]

    useEffect(() => {

        audioList.bodyAudio1.src = returnVoicePath(0, explainVoices[0])

        drawingPanel.current.className = 'hideObject'
        markParentRef.current.className = 'hideObject'
        subObjectsRef.current.className = 'hideObject'
        // animationRef.current.className = 'hideObject'
        lowerCaseRef.current.className = 'hideObject'

        new Phaser.Game(highlightGameConfig)

        setTimeout(() => {
            new Phaser.Game(drawingGaameconfig);
        }, 500);

        subObjectsRef.current.className = 'appear'

        playAutoAnimation()

        parentObject.current.className = 'aniObject'
        currentLingLength = currentlineWidthList[letterNum]

        // reviewFunc()


        return () => {
            currentImgNumOriginal = 0;
            repeatStep = 0;
            stepCount = 0;
            nearestStepNum = 0;
            highCurrentNum = 0;

            isTracingStarted = false;
            isLowerCaseShow = true;
            isLowerDrawing = false;

            isFirst = true;

            curve = null;
            curves = [];

            subCurves = [];
            subCurve = null;

            highlightList = []

            graphics = null
            subGraphics = null

            stopRepeatAudio();

        }

    }, [])

    const playAutoAnimation = () => {
        setTimeout(() => {
            audioList.bodyAudio1.play();
            setTimeout(() => {
                playerRef.current.play();
                audioList.bodyAudio1.src = returnVoicePath(0, explainVoices[1])
            }, audioList.bodyAudio1.duration * 1000 + 500);

        }, 1500);
    }

    const showingDrawingPanel = () => {
        startTransition(2)

        setTimeout(() => {
            animationRef.current.className = 'hideObject'
            drawingPanel.current.className = 'showObject'
            markParentRef.current.className = 'showObject'
            lowerCaseRef.current.className = 'showObject'

            showingImg.current.className = 'appear'

            isTracingStarted = true;
        }, 300);
        subObjectsRef.current.className = 'appear'

        setRepeatAudio(audioList.bodyAudio1)
        timerList[1] = setTimeout(() => {
            // audioList.letterAudio.play();
            // timerList[2] = setTimeout(() => {
            audioList.bodyAudio1.play();
            // }, audioList.letterAudio.duration * 1000 + 500);

            startRepeatAudio()
        }, 1000);

    }

    const clickLowerCase = () => {
        isLowerDrawing = true;
        isLowerCaseShow = false;

        drawingRef.current.className = 'disappear'
        lowerCaseRef.current.className = 'disappear'
        outLineRefList.map(item => item.current.setClass('disappear'))
        highlightRefList.map(item => item.current.setClass('disappear'))

        if (!isFirefox) {
            moveObjList[repeatStep].visible = false
        }
        else {
            iconRef.current.setClass('disappear')
        }

        currentMovePath = isLowerDrawing ? lowerMovePath : movePath
        currentFirstPosList = isLowerDrawing ? lowerFirstPosList : firstPosList
        currentPath = currentMovePath[letterNum][stepCount]
        currentlineWidthList = isLowerDrawing ? lineWidthList : lowerLineWidthList

        setTimeout(() => {
            drawingRef.current.style.WebkitMaskImage = 'url("./images/' + lowerPrepath + 'Gray.svg")'
            drawingRef.current.style.WebkitMaskPosition = lowerMaskInfoList[letterNum].position
            drawingRef.current.style.WebkitMaskSize = lowerMaskInfoList[letterNum].size

            setTimeout(() => {
                drawingRef.current.className = 'appear'

                lowerHighlightRefList[0].current.setClass('appear')
                lowerOutlineRefList[0].current.setClass('appear')

                curve = new Phaser.Curves.Spline([currentFirstPosList[letterNum][0].x, currentFirstPosList[letterNum][0].y]);
                subCurve = new Phaser.Curves.Spline([currentPath[0].x, currentPath[0].y]);

                circleObj.x = currentMovePath[letterNum][0][0].x
                circleObj.y = currentMovePath[letterNum][0][0].y
                rememberX = currentMovePath[letterNum][0][0].x;

                if (!isFirefox) {
                    setTimeout(() => {
                        moveObjList[repeatStep].visible = true
                        moveObjList[repeatStep].x = circleObj.x;
                        moveObjList[repeatStep].y = circleObj.y
                    }, 150);

                }
                else {
                    iconRef.current.setPosInfo({
                        l: circleObj.x / 1280 - 0.045,
                        t: circleObj.y / 720 - 0.08,
                    })
                    iconRef.current.setClass('appear')
                }
            }, 700);
        }, 300);

        
        audioList.bodyAudio1.pause()
        audioList.bodyAudio1.currentTime = 0;
        timerList.map(timer => clearTimeout(timer))
        stopRepeatAudio();
    }

    geometryInfo = _geo

    function reviewFunc() {
        audioList.bodyAudio1.src = './sounds/main/review.mp3'
        startTransition(2)
        setTimeout(() => {
            drawingPanel.current.className = 'hideObject'
            showingImg.current.className = 'hideObject'
        }, 300);

        setTimeout(() => {
            markBaseList.map((markBase, value) => {
                if (markBase.current != null)
                    setTimeout(() => {
                        markBase.current.style.transition = '1s'
                        markBase.current.style.transform = 'translate(' +
                            (geometryInfo.width * [-0.6, -0.36, -0.16][value] - geometryInfo.left) + 'px,' +
                            (geometryInfo.height * (0.38) + geometryInfo.top)
                            + 'px) rotateZ(-360deg) scale(2)'

                        reviewImgList[value].current.style.transform = 'scale(1.15)'
                        reviewImgList[value].current.style.transition = '0.5s'
                        sparkBaseRef.current.style.left =
                            (geometryInfo.left + geometryInfo.width * (0.15 + sparkPosLeft[letterNum][value])) + 'px'

                        setTimeout(() => {
                            markBase.current.className = 'disapear'
                            setTimeout(() => {
                                reviewImgList[value].current.className = 'appear'
                                let showIndex = 0;
                                audioList.audioSuccess.currentTime = 0;
                                audioList.audioSuccess.play();
                                sparkRefList[showIndex].current.setClass('showObject')
                                let showInterval = setInterval(() => {
                                    sparkRefList[showIndex].current.setClass('hideObject')
                                    if (showIndex < 2) {
                                        showIndex++
                                        sparkRefList[showIndex].current.setClass('showObject')
                                    }
                                    else {
                                        clearInterval(showInterval)
                                    }
                                }, 200);
                            }, 200);
                            setTimeout(() => {
                                reviewImgList[value].current.style.transform = 'scale(1)'

                                if (value == 2)
                                    setTimeout(() => {
                                        subReviewFunc()
                                    }, 1500);

                            }, 2000);
                        }, 600);
                    }, 4000 * value);
            })
        }, 1500);
    }

    function subReviewFunc() {
        audioList.bodyAudio1.play();
        setTimeout(() => {
            reviewImgList.map((value, index) => {
                if (value.current != null)
                    setTimeout(() => {
                        value.current.style.transition = '1.2s'
                        setTimeout(() => {
                            wordVoiceList[index].play();
                            value.current.style.transform = 'scale(1.15)'
                            setTimeout(() => {
                                value.current.style.transform = 'scale(1)'

                                setTimeout(() => {
                                    if (index == 2 && letterNum != 6) {
                                        setTimeout(() => {
                                            parentObject.current.style.transition = '0.5s'
                                            parentObject.current.style.opacity = '0.0'
                                            setTimeout(() => {
                                                nextFunc()
                                            }, 500);
                                        }, 1000);

                                    }

                                    if (index == 0 && letterNum == 6) {
                                        setTimeout(() => {
                                            nextFunc()
                                        }, 1500);
                                    }
                                }, 1000);
                            }, 9000);
                        }, 2000);
                    }, 12000 * index);
            })
        }, audioList.bodyAudio1.duration * 1000 + 500);
    }
    function preload() {
        // this.load.image('letterBase', preName + 'Grey.svg');  //not svg , png

        letterPosList[letterNum].highlight.map((item, index) => {
            this.load.image('letterHighlight' + (index + 1), preName + 'Arrow-' + (index + 1) + '.svg');
        })
    }

    function create() {
        graphics = this.add.graphics();
        subGraphics = this.add.graphics();

        letterPosList[letterNum].highlight.map((item, index) => {
            highlightList[index] = this.add.image(item.x, item.y, 'letterHighlight' + (index + 1))
        })

        highlightList.map((highlight, index) => {
            if (index > 0)
                highlight.visible = false
        })

        curve = new Phaser.Curves.Spline([currentFirstPosList[letterNum][0].x, currentFirstPosList[letterNum][0].y]);
        subCurve = new Phaser.Curves.Spline([currentPath[0].x, currentPath[0].y]);

        circleObj = this.add.circle(currentMovePath[letterNum][0][0].x, currentMovePath[letterNum][0][0].y, 60, 0xffffdd, 0.0)
        rememberX = currentMovePath[letterNum][0][0].x;
        circleObj.setInteractive({ cursor: 'normal' })

        const firstSubPosList = [
            [674, 300, 50, 110, 'rect'],
        ]

        const lastSubPosList = [
            [715, 483, 60, 140, 'rect'],
            [620, 347, 38, 0, 'circle']
        ]

        firstSubPosList.map((obj, index) => {
            firstObjectList[index] = (obj[4] == 'rect' ? this.add.rectangle(
                obj[0], obj[1],
                obj[2], obj[3],
                brushColorList[repeatStep]) :
                this.add.circle(
                    obj[0], obj[1],
                    obj[2],
                    brushColorList[repeatStep], 1))
            firstObjectList[index].visible = false
        })


        lastSubPosList.map((obj, index) => {
            lastObjectList[index] = (obj[4] == 'rect' ? this.add.rectangle(
                obj[0], obj[1],
                obj[2], obj[3],
                brushColorList[repeatStep]) :
                this.add.circle(
                    obj[0], obj[1],
                    obj[2],
                    brushColorList[repeatStep], 1))
            lastObjectList[index].visible = false
        })

        if (currentFirstPosList[letterNum][stepCount].firstObj != null) {
            firstObjectList[currentFirstPosList[letterNum][stepCount].firstObj].visible = true
        }

        let isMoving = false;

        circleObj.on('pointerdown', function (pointer) {
            if (!isMoving) {
                if (isTracingStarted) {

                    if (isLowerCaseShow) {
                        lowerCaseRef.current.className = 'disappear'
                        isLowerCaseShow = false
                    }

                    if (currentFirstPosList[letterNum][stepCount].firstObj != null) {
                        firstObjectList[currentFirstPosList[letterNum][stepCount].firstObj].visible = true
                    }

                    circleObj.on('pointermove', moveFunc, this);
                    curves.push(curve);
                    subCurves.push(subCurve);

                    isMoving = true;

                    audioList.letterAudio.pause();
                    audioList.letterAudio.currentTime = 0;

                    audioList.bodyAudio1.pause()
                    audioList.bodyAudio1.currentTime = 0;
                    timerList.map(timer => clearTimeout(timer))
                    stopRepeatAudio();
                }
            }
        }, this);

        circleObj.on('pointermove', moveFunc, this);

        function moveFunc(pointer) {
            if (pointer.isDown && isMoving && isTracingStarted) {

                var x = Number(pointer.x.toFixed(2));
                var y = Number(pointer.y.toFixed(2));

                let minDistance = 1000;
                let currentMinDisIndex = nearestStepNum;
                let lastIndex = nearestStepNum + 2;
                if (lastIndex > currentPath.length)
                    lastIndex = currentPath.length

                for (let i = nearestStepNum; i < lastIndex; i++) {
                    if (minDistance > Phaser.Math.Distance.Between(x, y, currentPath[i].x, currentPath[i].y)) {
                        minDistance = Phaser.Math.Distance.Between(x, y, currentPath[i].x, currentPath[i].y)
                        currentMinDisIndex = i;
                    }
                }


                let pairIndex;
                if (currentMinDisIndex == 0)
                    pairIndex = 1;
                else if (currentMinDisIndex == currentPath.length - 1)
                    pairIndex = currentMinDisIndex - 1;

                else {
                    if (Phaser.Math.Distance.Between(x, y, currentPath[currentMinDisIndex + 1].x, currentPath[currentMinDisIndex + 1].y) >
                        Phaser.Math.Distance.Between(x, y, currentPath[currentMinDisIndex - 1].x, currentPath[currentMinDisIndex - 1].y))
                        pairIndex = currentMinDisIndex - 1;
                    else
                        pairIndex = currentMinDisIndex + 1;

                    if (completedIndex < currentMinDisIndex - 1)
                        completedIndex = currentMinDisIndex - 1
                    pairIndex = completedIndex;

                    if (pairIndex == currentMinDisIndex)
                        pairIndex += 1
                }

                if (currentMinDisIndex >= nearestStepNum && currentMinDisIndex - nearestStepNum <= 1) {

                    let fromIndex = currentPath[currentMinDisIndex].x > currentPath[pairIndex].x ? pairIndex : currentMinDisIndex
                    let toIndex = currentPath[currentMinDisIndex].x > currentPath[pairIndex].x ? currentMinDisIndex : pairIndex

                    let x1 = currentPath[fromIndex].x
                    let x2 = currentPath[toIndex].x
                    let y1 = currentPath[fromIndex].y
                    let y2 = currentPath[toIndex].y

                    let optimizedPosition = currentPath[currentMinDisIndex]
                    minDistance = 1000

                    if (x1 != x2)
                        for (let i = 0; i <= Math.abs(currentPath[fromIndex].x
                            - currentPath[toIndex].x); i += 0.1) {
                            let currentXPos = x1 + i;
                            let currentYPos = y1 + (y2 - y1) / (x2 - x1) * (currentXPos - x1)

                            if (minDistance > Phaser.Math.Distance.Between(x, y, currentXPos, currentYPos)) {
                                minDistance = Phaser.Math.Distance.Between(x, y, currentXPos, currentYPos)
                                optimizedPosition = { x: currentXPos, y: currentYPos }
                            }
                        }

                    else {
                        let addY = y2 > y1 ? y1 : y2;
                        for (let i = 0; i < Math.abs(y1 - y2); i += 0.1) {
                            let currentXPos = x1;
                            let currentYPos = addY + i

                            if (minDistance > Phaser.Math.Distance.Between(x, y, currentXPos, currentYPos)) {
                                minDistance = Phaser.Math.Distance.Between(x, y, currentXPos, currentYPos)
                                optimizedPosition = { x: currentXPos, y: currentYPos }
                            }
                        }
                    }

                    if (currentMinDisIndex >= nearestStepNum) {
                        if (minDistance < 60) {

                            if (nearestStepNum != currentMinDisIndex && currentMinDisIndex > 0) {
                                subGraphics.lineStyle(currentLingLength, brushColorList[repeatStep]);

                                subCurve.addPoint(
                                    currentPath[currentMinDisIndex - 1].x,
                                    currentPath[currentMinDisIndex - 1].y
                                )

                                subCurves.forEach(function (c) {
                                    c.draw(subGraphics, currentLingLength);
                                });
                            }



                            x = optimizedPosition.x
                            y = optimizedPosition.y

                            let isPassable = true;

                            // if (currentPath.length == 2)
                            //     isPassable = true;

                            // let fIndex = nearestStepNum > pairIndex ? pairIndex : nearestStepNum
                            // let tIndex = nearestStepNum > pairIndex ? nearestStepNum : pairIndex

                            // if (currentPath.length > 2 &&
                            //     currentPath[fIndex] != null && !isPassable
                            //     && currentPath[tIndex] != null) {

                            //     if (currentPath[fIndex].x < currentPath[tIndex].x)
                            //         rememberIsLeft = false
                            //     else if (currentPath[fIndex].x > currentPath[tIndex].x)
                            //         rememberIsLeft = true

                            //     if ((x > rememberX && !rememberIsLeft) ||
                            //         currentPath[fIndex].x == currentPath[tIndex].x
                            //         || (x < rememberX && rememberIsLeft))
                            //         isPassable = true;
                            // }


                            if (isPassable) {
                                nearestStepNum = currentMinDisIndex
                                rememberX = x;
                                let compDistance = Phaser.Math.Distance.Between(x, y, currentPath[currentPath.length - 1].x,
                                    currentPath[currentPath.length - 1].y)

                                if (compDistance < 40 && currentMinDisIndex == currentPath.length - 1) {


                                    isMoving = false;
                                    x = currentPath[currentPath.length - 1].x
                                    y = currentPath[currentPath.length - 1].y

                                    nearestStepNum = 0;
                                    completedIndex = 0
                                    // for (let i = 0; i < currentMinDisIndex; i++)
                                    //     curve.addPoint(currentPath[i])
                                    curve.addPoint(x, y);

                                    if (stepCount == currentMovePath[letterNum].length - 1) {
                                        if (isSubExist)
                                            subObject.visible = false


                                        graphics.lineStyle(100, brushColorList[repeatStep]);
                                        if (isLowerDrawing)
                                            lowerHighlightRefList[lowerHighlightRefList.length - 1].current.setClass('disappear')
                                        else
                                            highlightRefList[highlightRefList.length - 1].current.setClass('disappear')



                                        // alert('finished')
                                        circleObj.y = 10000;
                                        if (!isFirefox) {
                                            moveObjList[repeatStep].y = 10000
                                        }
                                        else {

                                            iconRef.current.setClass('hideObject')
                                            if (repeatStep < 2)
                                                iconRef.current.setUrl('SB01/SB01_Icons/' + iconPathList[letterNum][repeatStep + 1] + '.svg')
                                        }

                                        curves.forEach(function (c) {
                                            c.draw(graphics, 100);
                                        });

                                        subCurves.forEach(function (c) {
                                            c.draw(subGraphics, 100);
                                        });


                                        if (isLowerDrawing) {
                                            lowerOutlineRefList[0].current.setClass('disappear')
                                            lowerOutlineRefList[1].current.setClass('appear')

                                        }

                                        if (isSubExist && currentFirstPosList[letterNum][stepCount].isSub)
                                            subObject.visible = false;

                                        markRefList[repeatStep].current.setUrl("SB01/ProgressBar/SB01_Yellow_Star_Icon.svg")
                                        audioList.audioTing.play();

                                        if (repeatStep < 2)
                                            audioList.bodyAudio1.src = returnVoicePath(0, explainVoices[repeatStep + 2])

                                        showingImg.current.style.transform = 'scale(1.2)'

                                        setTimeout(() => {

                                            let waitTime = wordVoiceList[repeatStep].duration * 1000

                                            wordVoiceList[repeatStep].play();

                                            setTimeout(() => {

                                                showingImg.current.style.transform = 'scale(1)'

                                                if (repeatStep < 2)
                                                    showingImg.current.className = 'disappear'

                                                setTimeout(() => {
                                                    if (repeatStep < 2) {
                                                        let timeDur = 10;
                                                        if (!isFirefox) {
                                                            moveObjList[repeatStep].visible = false
                                                        }
                                                        else {
                                                            iconRef.current.setClass('disappear')
                                                        }

                                                        if (isLowerDrawing) {
                                                            lowerOutlineRefList.map(item =>
                                                                item.current.setClass('disappear'))
                                                            drawingRef.current.className = 'disappear'
                                                            lowerHighlightRefList.map(item =>
                                                                item.current.setClass('disappear'))

                                                            setTimeout(() => {
                                                                drawingRef.current.style.WebkitMaskImage = 'url("' + preName + 'Grey.svg")'
                                                                drawingRef.current.style.WebkitMaskPosition = maskInfoList[letterNum].position
                                                                drawingRef.current.style.WebkitMaskSize = maskInfoList[letterNum].size
                                                                setTimeout(() => {
                                                                    drawingRef.current.className = 'appear'
                                                                }, 700);

                                                            }, 300);
                                                            timeDur = 1000
                                                        }

                                                        setTimeout(() => {
                                                            highlightRefList.map((highlight, index) => {
                                                                if (index > 0)
                                                                    highlight.current.setClass('disappear')
                                                                else
                                                                    highlight.current.setClass('appear')
                                                            })
                                                            lowerCaseRef.current.className = 'appear'
                                                            setTimeout(() => {
                                                                lowerCaseRef.current.className = 'commonButton'
                                                            }, 500);

                                                            outLineRefList[repeatStep].current.setClass('disappear')

                                                            isLowerCaseShow = true
                                                            isLowerDrawing = false;
                                                            currentMovePath = isLowerDrawing ? lowerMovePath : movePath
                                                            currentFirstPosList = isLowerDrawing ? lowerFirstPosList : firstPosList

                                                            // fomart values....

                                                            highCurrentNum = 0
                                                            currentLingLength = currentlineWidthList[letterNum]
                                                            stepCount = 0;

                                                            currentPath = currentMovePath[letterNum][stepCount]

                                                            repeatStep++;
                                                            rememberX = currentPath[0].x

                                                            showingImg.current.className = 'appear'
                                                            outLineRefList[repeatStep].current.setClass('appear')

                                                            isFirst = true;
                                                            nearestStepNum = 0;

                                                            optimizedPosition = currentMovePath[letterNum][0][0]
                                                            //.............

                                                            circleObj.x = optimizedPosition.x;
                                                            circleObj.y = optimizedPosition.y;

                                                            lastObjectList.map(obj => {
                                                                if (obj != null) {
                                                                    obj.visible = false;
                                                                    obj.setFillStyle(brushColorList[repeatStep], 1)
                                                                }
                                                            })
                                                            firstObjectList.map(obj => {
                                                                if (obj != null) {
                                                                    obj.visible = false;
                                                                    obj.setFillStyle(brushColorList[repeatStep], 1)
                                                                }
                                                            })

                                                            if (!isFirefox) {
                                                                setTimeout(() => {
                                                                    moveObjList[repeatStep].visible = true
                                                                    moveObjList[repeatStep].x = optimizedPosition.x;
                                                                    moveObjList[repeatStep].y = optimizedPosition.y
                                                                }, 150);

                                                            }
                                                            else {
                                                                iconRef.current.setPosInfo({
                                                                    l: circleObj.x / 1280 - 0.045,
                                                                    t: circleObj.y / 720 - 0.08,
                                                                })
                                                                iconRef.current.setClass('appear')
                                                            }

                                                            if (isSubExist)
                                                                subObject.visible = true

                                                            graphics.clear();
                                                            subGraphics.clear();

                                                            curve = new Phaser.Curves.Spline([currentFirstPosList[letterNum][0].x, currentFirstPosList[letterNum][0].y]);
                                                            curves = []


                                                            subCurve = new Phaser.Curves.Spline([currentPath[0].x, currentPath[0].y]);
                                                            subCurves = []

                                                            timerList[0] = setTimeout(() => {
                                                                audioList.bodyAudio1.play();
                                                                startRepeatAudio();
                                                            }, 500);
                                                        }, timeDur);


                                                    }
                                                    else {
                                                        setTimeout(() => {
                                                            reviewFunc();
                                                            stopRepeatAudio();
                                                        }, 1000);

                                                    }

                                                    if (currentImgNumOriginal < 2) {
                                                        currentImgNumOriginal++
                                                        setRendering(currentImgNumOriginal);
                                                    }
                                                }, 500);
                                            }, waitTime + 3000);
                                        }, 1000);

                                    }
                                    else {



                                        if (currentFirstPosList[letterNum][stepCount].lastObj != null) {
                                            lastObjectList[currentFirstPosList[letterNum][stepCount].lastObj].visible = true
                                        }

                                        curves.forEach(function (c) {
                                            c.draw(graphics, 100);
                                        });

                                        subCurves.forEach(function (c) {
                                            c.draw(subGraphics, 100);
                                        });

                                        circleObj.off('pointermove', moveFunc, this);

                                        stepCount++

                                        currentPath = currentMovePath[letterNum][stepCount]
                                        rememberX = currentPath[0].x

                                        if (isSubExist && currentFirstPosList[letterNum][stepCount].isSub)
                                            subObject.visible = false;

                                        circleObj.x = currentMovePath[letterNum][stepCount][0].x;
                                        circleObj.y = currentMovePath[letterNum][stepCount][0].y;

                                        if (!isFirefox) {
                                            moveObjList[repeatStep].x = currentMovePath[letterNum][stepCount][0].x;
                                            moveObjList[repeatStep].y = currentMovePath[letterNum][stepCount][0].y;
                                        }

                                        else
                                            iconRef.current.setPosInfo({
                                                l: circleObj.x / 1280 - 0.045,
                                                t: circleObj.y / 720 - 0.08,
                                            })

                                        setTimeout(() => {

                                            if (currentFirstPosList[letterNum][stepCount].letter_start != null
                                                && currentFirstPosList[letterNum][stepCount].letter_start) {

                                                if (isLowerDrawing) {
                                                    lowerHighlightRefList[highCurrentNum].current.setClass('hideObject')
                                                    highCurrentNum++
                                                    lowerHighlightRefList[highCurrentNum].current.setClass('appear')
                                                }
                                                else {
                                                    highlightRefList[highCurrentNum].current.setClass('hideObject')
                                                    highCurrentNum++
                                                    highlightRefList[highCurrentNum].current.setClass('appear')
                                                }
                                            }

                                            curve = new Phaser.Curves.Spline([currentFirstPosList[letterNum][stepCount].x, currentFirstPosList[letterNum][stepCount].y]);
                                            curves = []

                                            subCurve = new Phaser.Curves.Spline([currentPath[0].x, currentPath[0].y]);
                                            subCurves = []

                                            HeavyLengthList.map(value => {
                                                if (value[0] == letterNum && value[1] == stepCount) {
                                                    currentLingLength = 90
                                                }
                                            })

                                            curve.addPoint(circleObj.x, circleObj.y);

                                        }, 200);
                                    }
                                }

                                else {

                                    if (currentPath[currentMinDisIndex].w != null)
                                        currentLingLength = currentPath[currentMinDisIndex].w

                                    graphics.lineStyle(currentLingLength, brushColorList[repeatStep]);
                                    curve.addPoint(x, y);

                                    curves.forEach(function (c) {
                                        c.draw(graphics, 100);
                                    });

                                    circleObj.x = optimizedPosition.x;
                                    circleObj.y = optimizedPosition.y;



                                    if (!isFirefox) {
                                        moveObjList[repeatStep].x = optimizedPosition.x;
                                        moveObjList[repeatStep].y = optimizedPosition.y
                                    }
                                    else {
                                        iconRef.current.setPosInfo({
                                            l: optimizedPosition.x / 1280 - 0.045,
                                            t: optimizedPosition.y / 720 - 0.08,
                                        })
                                    }

                                    if (Phaser.Math.Distance.Between(optimizedPosition.x, optimizedPosition.y,
                                        currentPath[currentMinDisIndex].x, currentPath[currentMinDisIndex].y) < 3)
                                        completedIndex = currentMinDisIndex

                                }
                            }

                        }
                    }

                }
            }
        }


        // var fs = this.add.circle(firstPos.x, firstPos.y, 3, 0x000000, 0.5)
        path = new Phaser.Curves.Path(firstPos.x, firstPos.y);

        this.input.on('pointerdown1', function (pointer) {

            posList.push({ x: pointer.x, y: pointer.y })

            posList.map(pos => {
                path.lineTo(pos.x, pos.y);
            })

            console.log('{x:' + pointer.x.toFixed(0) + ', y:' + pointer.y.toFixed(0) + '},')
            // graphics.clear()

            posList = []


            graphics.lineStyle(2, 0x000000, 1);
            path.draw(graphics);
            graphics.fillStyle(0x000000, 1);

            path = new Phaser.Curves.Path(pointer.x, pointer.y);

        }, this);
    }


    function update() {

    }

    // highlight game

    function highlight_preload() {

        if (!isFirefox)
            for (let i = 0; i < 3; i++)
                this.load.image('icon' + (i + 1), prePathUrl() + 'images/SB01/SB01_Icons/' + iconPathList[letterNum][i] + '.svg');

        // this.load.image('wOutLine', preName + 'White-Highlight.svg');
        // this.load.image('yOutLine', preName + 'Yellow-Highlight.svg');
    }

    function highlight_create() {

        if (!isFirefox) {
            for (let i = 0; i < 3; i++) {
                let obj = this.add.sprite(currentMovePath[letterNum][0][0].x, currentMovePath[letterNum][0][0].y, 'icon' + (i + 1));
                obj.setScale(0.75)
                obj.visible = false

                moveObjList[i] = obj
            }

            moveObjList[0].visible = true
        }
    }



    return (
        <div
            className="hideObject"
            ref={parentObject}
        >
            {/* <BaseImage
                    scale={0.05}
                    posInfo={{ r: 0.03 + 0.075, t: 0.05 }}
                    url="SB_04_hand_tool/hand.svg"
                /> */}

            <div
                ref={showingImg}
                className='hideObject'
                style={{
                    position: 'fixed', width: _geo.width * 0.14 + 'px',
                    height: _geo.height * 0.25 + 'px',
                    right: _geo.left + _geo.width * 0.12 + 'px',
                    bottom: _geo.top + _geo.height * 0.15 + 'px',
                    pointerEvents: 'none',
                    transform: 'scale(1)'
                }}>
                <BaseImage
                    scale={showingLayoutList[letterNum][currentImgNumOriginal].s}
                    posInfo={{
                        b: showingLayoutList[letterNum][currentImgNumOriginal].b,
                        r: showingLayoutList[letterNum][currentImgNumOriginal].r
                    }}
                    url={"SB01/SB01_Prop-Interactive/" + showingLayoutList[letterNum][currentImgNumOriginal].wPath + ".svg"}

                />
            </div>
            {
                [0, 1, 2].map(value =>
                    <div
                        ref={reviewImgList[value]}
                        className='hideObject'
                        style={{
                            position: 'fixed', width: _geo.width * 0.15 + 'px',
                            height: _geo.height * 0.15 + 'px',
                            left: _geo.left + _geo.width * (0.1 + 0.3 * value) + 'px',
                            bottom: _geo.top + _geo.height * 0.24 + 'px',
                            pointerEvents: 'none',
                        }}>
                        <BaseImage
                            scale={showingLayoutList[letterNum][value].s}
                            posInfo={{
                                b: showingLayoutList[letterNum][value].b + 0.4,
                                r: showingLayoutList[letterNum][value].r
                            }}
                            url={"SB01/SB01_Prop-Interactive/" + showingLayoutList[letterNum][value].wPath + ".svg"}
                        />
                        <span
                            style={{
                                position: 'absolute', width: '200%', textAlign: 'center',
                                height: '30%', left: -50 + textInfoList[letterNum][value].left + '%', top: '45%', fontFamily: 'popin',
                                fontSize: '4vw'
                            }}>

                            {
                                !textInfoList[letterNum][value].isLast
                                    ? <span style={{ color: 'red' }}>{textInfoList[letterNum][value].text[0]}
                                        <span style={{ color: 'black' }}>{textInfoList[letterNum][value].text.slice(1)}</span>
                                    </span>
                                    : <span style={{ color: 'black' }}>{textInfoList[letterNum][value].text.slice(0, textInfoList[letterNum][value].text.length - 1)}
                                        <span style={{ color: 'red' }}>{textInfoList[letterNum][value].text.slice(-1)}</span>
                                    </span>
                            }

                        </span>

                    </div>
                )
            }
            {
                <div
                    ref={sparkBaseRef}
                    style={{
                        position: 'fixed', width: _geo.width * 0.15 + 'px',
                        height: _geo.height * 0.15 + 'px',
                        left: _geo.left + _geo.width * (0.1) + 'px',
                        bottom: _geo.top + _geo.height * 0.2 + 'px',
                        pointerEvents: 'none',
                    }}>
                    {[0, 1, 2].map(value =>
                        <BaseImage
                            ref={sparkRefList[value]}
                            className='hideObject'
                            posInfo={{
                                b: 1,
                                l: 0.0
                            }}
                            style={{ transform: 'scale(' + [0.3, 1.7, 2.4][value] + ')' }}
                            url={"Magic/sb_52_magic_wand_sparkels_" + (value + 1) + ".svg"}
                        />
                    )}
                </div>
            }
            <div ref={markParentRef}>
                {
                    [0, 1, 2].map(value =>
                        <div
                            ref={markBaseList[2 - value]}
                            style={{
                                position: 'fixed',
                                width: _geo.width * 0.08 + 'px',
                                height: _geo.width * 0.08 + 'px',
                                right: _geo.width * (0.03 + 0.075 * value) + 'px',
                                top: 0.05 * _geo.height + 'px',
                                pointerEvents: 'none'
                            }}>
                            <BaseImage
                                ref={markRefList[2 - value]}
                                url="SB01/ProgressBar/SB01_Gray_Star_Icon.svg"
                            />
                        </div>
                    )
                }
            </div>

            <div ref={drawingPanel}>
                <div
                    id='DrawingDiv'
                    ref={drawingRef}
                    style={{
                        position: 'fixed', width: _geo.width,
                        height: _geo.height,
                        left: _geo.left, top: _geo.top,
                        WebkitMaskImage: 'url("' + preName + 'Grey.svg")',
                        WebkitMaskPosition: maskInfoList[letterNum].position,
                        WebkitMaskSize: maskInfoList[letterNum].size,

                        WebkitMaskRepeat: "no-repeat",
                        overflow: 'hidden',
                        background: '#999999'
                    }}
                >
                </div>
                <div
                    ref={subObjectsRef}
                    style={{
                        position: 'fixed',
                        width: _geo.width, height: _geo.height,
                        left: _geo.left, top: _geo.top,
                        pointerEvents: 'none',
                    }}
                >
                    {
                        letterPosList[letterNum].highlight.map((value, index) =>
                            <BaseImage
                                ref={highlightRefList[index]}
                                scale={value.s}
                                posInfo={{
                                    t: value.t,
                                    l: value.l
                                }}
                                style={{
                                    transform: 'rotate(' + (letterNum == 24 ? [0, 80, 40][index] : 0) + 'deg)'
                                }}
                                className={index > 0 ? 'hideObject' : ''}
                                url={prePath + 'Arrow-' + (letterNum == 24 ? 1 : (index + 1)) + '.svg'}
                            />
                        )
                    }
                    {
                        lowerLetterPosList[letterNum].highlight.map((value, index) =>
                            <BaseImage
                                ref={lowerHighlightRefList[index]}
                                scale={value.s}
                                posInfo={{
                                    t: value.t,
                                    l: value.l
                                }}
                                className={'hideObject'}
                                url={lowerPrepath + 'Arrow_0' + (index + 1) + '.svg'}
                            />
                        )
                    }

                    <BaseImage ref={lowerOutlineRefList[0]}
                        scale={lowerLetterPosList[letterNum].layout.s}
                        posInfo={{
                            t: lowerLetterPosList[letterNum].layout.t,
                            l: lowerLetterPosList[letterNum].layout.l
                        }}
                        className='hideObject'
                        url={lowerPrepath + 'White_glow.svg'}
                    />
                    <BaseImage ref={lowerOutlineRefList[1]}
                        scale={lowerLetterPosList[letterNum].layout.s}
                        posInfo={{
                            t: lowerLetterPosList[letterNum].layout.t,
                            l: lowerLetterPosList[letterNum].layout.l
                        }}
                        className='hideObject'
                        url={lowerPrepath + 'Yellow_glow.svg'}
                    />
                    <BaseImage
                        ref={outLineRefList[0]}
                        scale={letterPosList[letterNum].layout.s}
                        posInfo={{
                            t: letterPosList[letterNum].layout.t,
                            l: letterPosList[letterNum].layout.l
                        }}
                        url={prePath + 'White-Highlight.svg'}
                    />

                    <BaseImage
                        ref={outLineRefList[1]}
                        scale={letterPosList[letterNum].layout.s}
                        posInfo={{
                            t: letterPosList[letterNum].layout.t,
                            l: letterPosList[letterNum].layout.l
                        }}
                        className='hideObject'
                        url={prePath + 'Green-Highlight.svg'}
                    />

                    <BaseImage
                        ref={outLineRefList[2]}
                        scale={letterPosList[letterNum].layout.s}
                        posInfo={{
                            t: letterPosList[letterNum].layout.t,
                            l: letterPosList[letterNum].layout.l
                        }}
                        className='hideObject'
                        url={prePath + 'Yellow-Highlight.svg'}
                    />
                    {isFirefox &&
                        < BaseImage
                            ref={iconRef}
                            scale={0.09}
                            posInfo={{
                                l: currentMovePath[letterNum][0][0].x / 1280 - 0.045,
                                t: currentMovePath[letterNum][0][0].y / 720 - 0.08
                            }}
                            url={'SB01/SB01_Icons/' + iconPathList[letterNum][0] + '.svg'}
                        />
                    }

                </div>
                <div id='highlightDiv'
                    style={{
                        position: 'fixed',
                        width: _geo.width, height: _geo.height,
                        left: _geo.left, top: _geo.top,
                        pointerEvents: 'none',
                    }}
                >
                </div>

            </div>
            <div
                ref={lowerCaseRef}
                className="commonButton"

                onClick={() => {
                    setTimeout(() => {
                        clickLowerCase();
                    }, 200);
                }}
                style={{
                    position: 'fixed',
                    width: _geo.width * 0.15 + 'px'
                    , height: _geo.width * 0.15 + 'px',
                    left: _geo.left + _geo.width * 0.08 + 'px',
                    top: _geo.top + _geo.height * 0.55 + 'px',
                    borderRadius: '35%'
                }}
            >
                <BaseImage
                    url={"SB01/SB01_Animations/SB01_" + letterTurnList[currentLetterNum].toLowerCase() + "_Button.svg"}
                />
            </div>

            <div
                ref={animationRef}
                style={{ pointerEvents: 'none' }}

            >
                <Player
                    ref={playerRef}
                    onEvent={(e) => {
                        if (e == 'complete')
                            showingDrawingPanel();
                    }}
                    keepLastFrame={true}

                    src={prePathUrl() + 'lottieFiles/main/SB_01_' + letterTurnList[letterNum] + '_1.json'}
                    style={{
                        position: 'fixed',
                        width: _geo.width * animtionList[letterNum].scale,
                        left: _geo.left + _geo.width * animtionList[letterNum].left,
                        top: _geo.top + _geo.height * animtionList[letterNum].top,
                        pointerEvents: 'none',
                        overflow: 'visible'
                    }}
                >
                    {/* <Controls visible={false} buttons={['play', 'frame', 'debug']} /> */}
                </Player>
            </div>
        </div >
    );
}

