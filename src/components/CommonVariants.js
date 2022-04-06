
const wordVoiceList = [
    ['06', '08', '11'],
    ['15', '16', '18'],
    ['22', '24', '21'],
    ['30', '27', '28'],
    ['34', '36', '33'],
    ['42', '39', '40'],
    ['48', '46', '45'],
    ['52', '54', '51'],
    ['60', '58', '57'],
    ['66', '64', '63'],
    ['72', '69', '70'],
    ['78', '75', '76'],
    ['81', '84', '82'],
    ['87', '88', '90'],
    ['96', '93', '94'],
    ['98', '102', '100'],
    ['105', '106', '108'],
    ['111', '114', '112'],
    ['117', '120', '118'],
    ['123', '124', '126'],
    ['129', '130', '132'],
    ['135', '136', '138'],
    ['142', '144', '141'],
    ['147', '148', '150'],
    ['153', '156', '154'],
    ['159', '162', '160'],
]

const letterVoiceList = [
    '08', '13',
    '18', '23',
    '28', '33',
    '38', '43',
    '48', '53',
]

const letterTurnList = [
    'A', 'B', 'C', 'D', 'E', 'F', 'G',
    'H', 'I', 'J', 'K', 'L', 'M', 'N',
    'O', 'P', 'Q', 'R', 'S', 'T', 'U',
    'V', 'W', 'X', 'Y', 'Z'
]

export { wordVoiceList, letterVoiceList, letterTurnList }

const maskInfoList = [
    { size: '45.5% 70%', position: '49.2% 54.5%' },
    { size: '44% 70.5%', position: '49.5% 55.2%' },
    { size: '41% 71%', position: '49.6% 55%' },
    { size: '40% 73%', position: '49.2% 55%' },
    { size: '40% 75%', position: '49.2% 55%' }, //E
    { size: '44% 72%', position: '49.5% 55%' }, //F

    { size: '40% 71%', position: '49.3% 55%' },
    { size: '40% 71%', position: '49.3% 55%' },
    { size: '40% 71%', position: '49.3% 55%' },
    { size: '40% 71%', position: '50.5% 55%' },


    { size: '40% 71%', position: '50.6% 55%' }, //K
    { size: '40% 71%', position: '50.6% 55%' }, //L
    { size: '40.5% 71%', position: '50.5% 55%' }, //M
    { size: '41% 71%', position: '50.6% 55%' }, // N

    { size: '40% 71%', position: '50.6% 55%' }, //O
    { size: '40% 71%', position: '50.6% 55%' }, //P
    { size: '40.5% 71%', position: '50.5% 55%' }, //Q
    { size: '40% 71%', position: '50.5% 55%' }, // R
    { size: '40% 71%', position: '50.5% 55%' }, // S
    { size: '40% 71%', position: '50.5% 55%' }, // T

    { size: '40% 71%', position: '50.6% 55%' }, //U
    { size: '40% 71%', position: '50.6% 55%' }, //V
    { size: '40.5% 71%', position: '50.5% 55%' }, //W
    { size: '40% 71%', position: '50.5% 55%' }, // X
    { size: '40% 71%', position: '50.5% 55%' }, // Y
    { size: '40% 71%', position: '50.5% 55%' }, // Z
]

export const lowerMaskInfoList = [
    { size: '39% 39%', position: '49.1% 55%' },
    { size: '60% 60%', position: '49.1% 55%' },
    { size: '42% 42%', position: '49.1% 55%' },
    { size: '60% 60%', position: '49.1% 55%' },
    { size: '60% 60%', position: '49.1% 55%' }, //missed e...

    { size: '55% 55%', position: '49.1% 55%' },
    { size: '54% 54%', position: '49.1% 55%' }, //G
    { size: '54% 54%', position: '49.1% 55%' }, //H
    { size: '54% 54%', position: '49.1% 55%' }, //I
    { size: '54% 54%', position: '42.60% 55%' }, //J
    { size: '54% 54%', position: '49.1% 55%' }, //I
]
export const lowerIconWidth = [
    0.8,
    0.75,
    0.85,
    0.8,
    0.85, //E

    0.7,
    0.7,
    0.7,
    0.8,
    0.55,
    0.7, //k

]

export const lowerLetterPosList = [
    {
        highlight: [
            { s: 0.215, l: 0.387, t: 0.335 },
            { s: 0.215, l: 0.387, t: 0.335 },
            { s: 0.215, l: 0.387, t: 0.335 },
        ],

        layout: { s: 0.215, l: 0.387, t: 0.335 },

    },
    {
        highlight: [
            { s: 0.188, l: 0.4025, t: 0.220 },
            { s: 0.188, l: 0.4025, t: 0.220 },
            { s: 0.188, l: 0.4025, t: 0.220 },
        ],

        layout: { s: 0.188, l: 0.4025, t: 0.220 },

    },
    {
        highlight: [
            { s: 0.216, l: 0.3866, t: 0.319 },
        ],

        layout: { s: 0.216, l: 0.3866, t: 0.319 },
    },
    {
        highlight: [
            { s: 0.188, l: 0.4025, t: 0.220 },
            { s: 0.188, l: 0.4025, t: 0.220 },
        ],

        layout: { s: 0.1885, l: 0.4021, t: 0.222 },

    },
    {
        highlight: [
            { s: 0.188, l: 0.4025, t: 0.220 },
            { s: 0.188, l: 0.4025, t: 0.220 },
        ],

        layout: { s: 0.1885, l: 0.4021, t: 0.222 },

    },
    //F
    {
        highlight: [
            { s: 0.1678, l: 0.412, t: 0.2491 },
            { s: 0.1678, l: 0.412, t: 0.2491 },
        ],

        layout: { s: 0.1678, l: 0.412, t: 0.2491 },

    },
    //G
    {
        highlight: [
            { s: 0.1678, l: 0.412, t: 0.2491 },
            { s: 0.1678, l: 0.412, t: 0.2491 },
        ],

        layout: { s: 0.171, l: 0.410, t: 0.253 },

    },
    //H
    {
        highlight: [
            { s: 0.152, l: 0.4193, t: 0.254 },
            { s: 0.152, l: 0.4193, t: 0.254 },
            { s: 0.152, l: 0.4193, t: 0.254 },
        ],

        layout: { s: 0.152, l: 0.4193, t: 0.254 },

    },

    //I
    {
        highlight: [
            { s: 0.083, l: 0.454, t: 0.254 },
            { s: 0.083, l: 0.454, t: 0.254 },
        ],

        layout: { s: 0.083, l: 0.454, t: 0.254 },

    },
    //J
    {
        highlight: [
            { s: 0.1245, l: 0.4035, t: 0.253 },
            { s: 0.1245, l: 0.4035, t: 0.253 },
        ],

        layout: { s: 0.1245, l: 0.4035, t: 0.253 },

    },
    //k
    {
        highlight: [
            { s: 0.15, l: 0.418, t: 0.27 },
            { s: 0.15, l: 0.418, t: 0.27 }
        ],

        layout: { s: 0.153, l: 0.418, t: 0.261 },

    },

]

export const lowerFirstPosList = [
    [
        { x: 683, y: 298, firstObj: 0 },
        { x: 638, y: 478, letter_start: true },
        { x: 725, y: 239, letter_start: true },
    ],
    [
        { x: 555, y: 158 },
        { x: 551, y: 592, letter_start: true },
        { x: 558, y: 423, letter_start: true },
    ],
    [
        { x: 751, y: 363 },
    ],
    [
        { x: 717, y: 155 },


        { x: 720, y: 485, letter_start: true },

    ],
    //E
    [
        { x: 717, y: 155 },
        { x: 720, y: 485, letter_start: true },

    ],
    //F
    [
        { x: 725, y: 276 },
        { x: 519, y: 382, letter_start: true },
    ],
    //G
    [
        { x: 669, y: 226, firstObj: 1 },
        { x: 706, y: 181, letter_start: true },
    ],
    //H
    [
        { x: 570, y: 181 },
        { x: 570, y: 570, letter_start: true },
        { x: 578, y: 405, letter_start: true },
    ],
    //I
    [
        { x: 634, y: 304 },
        { x: 634, y: 150, letter_start: true, p: true },
    ],
    //J
    [
        { x: 644, y: 258 },
        { x: 644, y: 182, letter_start: true, p: true },

    ],
    //k
    [
        { x: 569, y: 164 },
        { x: 709, y: 368 },
    ],
]
export const lowerMovePath = [
    [
        [

            { x: 665, y: 293 },
            { x: 623, y: 282 },
            { x: 592, y: 290 },
            { x: 572, y: 302 },
            { x: 557, y: 317 },
            { x: 545, y: 337 },
            { x: 536, y: 370 },
            { x: 536, y: 385 },
            { x: 542, y: 407 },
            { x: 550, y: 429 },
            { x: 564, y: 448 },
            { x: 581, y: 461 },
            { x: 602, y: 473 },
            { x: 624, y: 477 },
            { x: 640, y: 477 },
            { x: 677, y: 471 },
        ],
        [

            { x: 667, y: 475 },
            { x: 685, y: 469 },
            { x: 699, y: 464 },
            { x: 706, y: 456 },
            { x: 714, y: 446 },
            { x: 720, y: 435 },
            { x: 724, y: 422 },
            { x: 726, y: 405 },
            { x: 725, y: 234 },
        ],
        [

            { x: 727, y: 284 },
            { x: 732, y: 521 },
        ]
    ],
    [
        [


            { x: 555, y: 195 },
            { x: 553, y: 590 },
        ],
        [


            { x: 551, y: 560 },
            { x: 553, y: 430 },
            { x: 562, y: 415 },
            { x: 580, y: 398 },
        ],
        [



            { x: 575, y: 409 },
            { x: 592, y: 395 },
            { x: 620, y: 388 },
            { x: 646, y: 386 },
            { x: 672, y: 396 },
            { x: 693, y: 414 },
            { x: 704, y: 431 },
            { x: 715, y: 454 },
            { x: 713, y: 482 },
            { x: 702, y: 515 },
            { x: 681, y: 539 },
            { x: 656, y: 550 },
            { x: 617, y: 551 },
            { x: 591, y: 544 },
            { x: 568, y: 531 },
        ]
    ],
    [
        [
            { x: 718, y: 317 },
            { x: 690, y: 291 },
            { x: 663, y: 279 },
            { x: 636, y: 279 },
            { x: 609, y: 284 },
            { x: 587, y: 294 },
            { x: 569, y: 311 },
            { x: 555, y: 340 },
            { x: 549, y: 370 },
            { x: 547, y: 404 },
            { x: 558, y: 434 },
            { x: 573, y: 457 },
            { x: 600, y: 472 },
            { x: 631, y: 480 },
            { x: 659, y: 482 },
            { x: 684, y: 475 },
            { x: 708, y: 456 },
            { x: 758, y: 403 },
        ],

    ],
    [
        [
            { x: 717, y: 202 },
            { x: 717, y: 588 },
        ],
        [
            { x: 711, y: 428 },
            { x: 697, y: 405 },
            { x: 683, y: 393 },
            { x: 660, y: 385 },
            { x: 635, y: 383 },
            { x: 613, y: 384 },
            { x: 596, y: 391 },
            { x: 577, y: 406 },
            { x: 567, y: 424 },
            { x: 558, y: 447 },
            { x: 554, y: 477 },
            { x: 561, y: 502 },
            { x: 575, y: 526 },
            { x: 596, y: 535 },
            { x: 619, y: 546 },
            { x: 649, y: 549 },
            { x: 675, y: 542 },
            { x: 710, y: 520 },
        ],

    ],
    //E
    [
        [
            { x: 717, y: 202 },
            { x: 717, y: 588 },
        ],
        [
            { x: 711, y: 428 },
            { x: 697, y: 405 },
            { x: 683, y: 393 },
            { x: 660, y: 385 },
            { x: 635, y: 383 },
            { x: 613, y: 384 },
            { x: 596, y: 391 },
            { x: 577, y: 406 },
            { x: 567, y: 424 },
            { x: 558, y: 447 },
            { x: 554, y: 477 },
            { x: 561, y: 502 },
            { x: 575, y: 526 },
            { x: 596, y: 535 },
            { x: 619, y: 546 },
            { x: 649, y: 549 },
            { x: 675, y: 542 },
            { x: 710, y: 520 },
        ],

    ],
    [
        [


            { x: 708, y: 242 },
            { x: 701, y: 228 },
            { x: 687, y: 219 },
            { x: 670, y: 215 },
            { x: 652, y: 216 },
            { x: 639, y: 220 },
            { x: 626, y: 230 },
            { x: 619, y: 240 },
            { x: 609, y: 255 },
            { x: 606, y: 271 },
            { x: 605, y: 287 },
            { x: 605, y: 572 },
        ],

        [

            { x: 567, y: 382 },
            { x: 685, y: 381 },
        ]
    ],
    //G
    [
        [



            { x: 657, y: 221 },
            { x: 648, y: 218 },
            { x: 637, y: 217 },
            { x: 622, y: 218 },
            { x: 609, y: 220 },
            { x: 595, y: 227 },
            { x: 584, y: 235 },
            { x: 574, y: 245 },
            { x: 569, y: 256 },
            { x: 565, y: 268 },
            { x: 561, y: 287 },
            { x: 566, y: 306 },
            { x: 574, y: 325 },
            { x: 586, y: 341 },
            { x: 597, y: 351 },
            { x: 608, y: 356 },
            { x: 623, y: 360 },
            { x: 638, y: 358 },
            { x: 667, y: 352 },
            { x: 683, y: 345 },
            { x: 691, y: 337 },
            { x: 696, y: 330 },
            { x: 699, y: 323 },
            { x: 705, y: 310 },
            { x: 707, y: 295 },
            { x: 707, y: 278 },
            { x: 704, y: 183 },
        ],

        [


            { x: 705, y: 221 },
            { x: 707, y: 477 },
            { x: 706, y: 489 },
            { x: 701, y: 501 },
            { x: 696, y: 510 },
            { x: 686, y: 518 },
            { x: 672, y: 526 },
            { x: 657, y: 530 },
            { x: 641, y: 534 },
            { x: 626, y: 531 },
            { x: 610, y: 528 },
            { x: 600, y: 523 },
            { x: 588, y: 515 },
            { x: 553, y: 482 },
        ]
    ],
    //H
    [
        [
            { x: 570, y: 215 },
            { x: 570, y: 568 },
        ],

        [
            { x: 570, y: 535 },
            { x: 570, y: 428 },
            { x: 574, y: 409 },
            { x: 588, y: 397 },
        ],
        [
            { x: 597, y: 395 },
            { x: 607, y: 391 },
            { x: 620, y: 389 },
            { x: 633, y: 388 },
            { x: 646, y: 388 },
            { x: 662, y: 390 },
            { x: 676, y: 396 },
            { x: 684, y: 401 },
            { x: 691, y: 409 },
            { x: 696, y: 418 },
            { x: 700, y: 431 },
            { x: 700, y: 441 },
            { x: 701, y: 568 },
        ]
    ],
    //I
    [

        [
            { x: 634, y: 344 },
            { x: 634, y: 568 },
        ],
        [
            { x: 634, y: 234 },
            { x: 634, y: 300 },
        ],
    ],
    //J
    [
        [
            { x: 645, y: 292 },
            { x: 645, y: 491 },
            { x: 643, y: 505 },
            { x: 639, y: 518 },
            { x: 631, y: 528 },
            { x: 618, y: 538 },
            { x: 602, y: 541 },
            { x: 587, y: 542 },
            { x: 572, y: 540 },
            { x: 553, y: 532 },
            { x: 523, y: 500 },
        ],
        [
            { x: 643, y: 216 },
            { x: 643, y: 250 },
        ],

    ],
    //k
    [
        [
            { x: 569, y: 220 },
            { x: 569, y: 570 },
        ],

        [
            { x: 675, y: 388 },

            { x: 568, y: 464 },
            { x: 724, y: 554 },
        ]
    ],


]

const letterPosList = [
    {
        base: { x: 635, y: 370 },
        highlight: [
            { s: 0.38, l: 0.24, t: 0.2 },
            { s: 0.38, l: 0.38, t: 0.2 },
            { s: 0.38, l: 0.31, t: 0.23 },
        ],

        layout: { s: 0.391, l: 0.300, t: 0.1665 },

    },
    {
        base: { x: 620, y: 370 },
        highlight: [
            { s: 0.38, l: 0.23, t: 0.19 },
            { s: 0.38, l: 0.32, t: 0.07 },
            { s: 0.38, l: 0.32, t: 0.28 },
        ],

        layout: { s: 0.398, l: 0.2975, t: 0.1615 },

    },

    {
        base: { x: 620, y: 370 },
        highlight: [
            { s: 0.39, l: 0.305, t: 0.17 },
        ],

        layout: { s: 0.4, l: 0.2975, t: 0.159 },

    },

    {
        base: { x: 620, y: 370 },
        highlight: [
            { s: 0.39, l: 0.205, t: 0.17 },
            { s: 0.39, l: 0.31, t: 0.167 },
        ],

        layout: { s: 0.4, l: 0.295, t: 0.157 },
    },
    {
        base: { x: 620, y: 370 },
        highlight: [
            { s: 0.39, l: 0.215, t: 0.17 },
            { s: 0.39, l: 0.32, t: -0.05 },
            { s: 0.39, l: 0.30, t: 0.162 },
            { s: 0.39, l: 0.32, t: 0.38 },
        ],

        layout: { s: 0.4, l: 0.295, t: 0.157 },
    },
    {
        base: { x: 620, y: 370 },
        highlight: [
            { s: 0.39, l: 0.215, t: 0.17 },
            { s: 0.39, l: 0.32, t: -0.05 },
            { s: 0.39, l: 0.30, t: 0.162 },
        ],

        layout: { s: 0.4, l: 0.295, t: 0.1561 },
    },
    //G
    {
        base: { x: 620, y: 370 },
        highlight: [
            { s: 0.39, l: 0.29, t: 0.17 },
            { s: 0.39, l: 0.35, t: 0.165 },
            { s: 0.39, l: 0.42, t: 0.292 },
        ],

        layout: { s: 0.398, l: 0.2965, t: 0.1605 },
    },
    //H
    {
        base: { x: 620, y: 370 },
        highlight: [
            { s: 0.39, l: 0.207, t: 0.17 },
            { s: 0.39, l: 0.395, t: 0.165 },
            { s: 0.39, l: 0.30, t: 0.17 },
        ],

        layout: { s: 0.398, l: 0.2965, t: 0.1605 },
    },

    //I
    {
        base: { x: 620, y: 370 },
        highlight: [
            { s: 0.39, l: 0.30, t: 0.17 },
            { s: 0.39, l: 0.3, t: -0.05 },
            { s: 0.39, l: 0.30, t: 0.385 },
        ],

        layout: { s: 0.398, l: 0.2965, t: 0.1605 },
    },
    //J
    {
        base: { x: 620, y: 370 },
        highlight: [
            { s: 0.39, l: 0.27, t: 0.17 },
            { s: 0.39, l: 0.31, t: -0.05 },
        ],

        layout: { s: 0.398, l: 0.304, t: 0.1605 },
    },
    //K
    {
        base: { x: 620, y: 370 },
        highlight: [
            { s: 0.39, l: 0.222, t: 0.17 },
            { s: 0.39, l: 0.33, t: 0.03 },
            { s: 0.39, l: 0.33, t: 0.298 },
        ],

        layout: { s: 0.398, l: 0.304, t: 0.1605 },
    },
    //L
    {
        base: { x: 620, y: 370 },
        highlight: [
            { s: 0.39, l: 0.222, t: 0.17 },
            { s: 0.39, l: 0.33, t: 0.385 },
        ],

        layout: { s: 0.398, l: 0.304, t: 0.1605 },
    },
    //M
    {
        base: { x: 620, y: 370 },
        highlight: [
            { s: 0.39, l: 0.195, t: 0.17 },
            { s: 0.39, l: 0.26, t: 0.19 },
            { s: 0.39, l: 0.365, t: 0.18 },
            { s: 0.39, l: 0.42, t: 0.18 },
        ],

        layout: { s: 0.398, l: 0.3043, t: 0.1607 },
    },
    //N
    {
        base: { x: 620, y: 370 },
        highlight: [
            { s: 0.39, l: 0.215, t: 0.17 },
            { s: 0.39, l: 0.32, t: 0.19 },
            { s: 0.39, l: 0.4, t: 0.16 },
        ],

        layout: { s: 0.398, l: 0.3043, t: 0.1607 },
    },
    //O
    {
        base: { x: 620, y: 370 },
        highlight: [
            { s: 0.39, l: 0.307, t: 0.17 },
        ],

        layout: { s: 0.399, l: 0.304, t: 0.160 },
    },
    //P
    {
        base: { x: 620, y: 370 },
        highlight: [
            { s: 0.39, l: 0.232, t: 0.17 },
            { s: 0.39, l: 0.325, t: 0.06 },
        ],

        layout: { s: 0.399, l: 0.304, t: 0.160 },
    },
    //Q
    {
        base: { x: 620, y: 370 },
        highlight: [
            { s: 0.39, l: 0.305, t: 0.167 },
            { s: 0.39, l: 0.375, t: 0.35 },
        ],

        layout: { s: 0.399, l: 0.3038, t: 0.160 },
    },
    //R
    {
        base: { x: 620, y: 370 },
        highlight: [
            { s: 0.39, l: 0.235, t: 0.167 },
            { s: 0.39, l: 0.325, t: 0.06 },
            { s: 0.39, l: 0.32, t: 0.30 },
        ],

        layout: { s: 0.399, l: 0.3035, t: 0.160 },
    },
    //S
    {
        base: { x: 620, y: 370 },
        highlight: [
            { s: 0.39, l: 0.305, t: 0.167 },
        ],

        layout: { s: 0.399, l: 0.3035, t: 0.160 },
    },
    //T
    {
        base: { x: 620, y: 370 },
        highlight: [
            { s: 0.39, l: 0.31, t: -0.047 },
            { s: 0.39, l: 0.31, t: 0.19 }
        ],

        layout: { s: 0.399, l: 0.3035, t: 0.160 },
    },
    //U
    {
        base: { x: 620, y: 370 },
        highlight: [
            { s: 0.39, l: 0.31, t: 0.157 },
        ],

        layout: { s: 0.399, l: 0.3039, t: 0.160 },
    },
    //V
    {
        base: { x: 620, y: 370 },
        highlight: [
            { s: 0.39, l: 0.265, t: 0.157 },
            { s: 0.39, l: 0.35, t: 0.157 },
        ],

        layout: { s: 0.399, l: 0.3039, t: 0.160 },
    },
    //W
    {
        base: { x: 620, y: 370 },
        highlight: [
            { s: 0.39, l: 0.185, t: 0.157 },
            { s: 0.39, l: 0.272, t: 0.157 },
            { s: 0.39, l: 0.345, t: 0.157 },
            { s: 0.39, l: 0.43, t: 0.157 },
        ],

        layout: { s: 0.399, l: 0.3038, t: 0.160 },
    },
    //X
    {
        base: { x: 620, y: 370 },
        highlight: [
            { s: 0.39, l: 0.31, t: 0.177 },
            { s: 0.39, l: 0.302, t: 0.179 },
        ],

        layout: { s: 0.399, l: 0.3035, t: 0.1595 },
    },
    //Y
    {
        base: { x: 620, y: 370 },
        highlight: [
            { s: 0.39, l: 0.25, t: 0.037 },
            { s: 0.39, l: 0.375, t: 0.03 },
            { s: 0.39, l: 0.312, t: 0.279 },
        ],

        layout: { s: 0.399, l: 0.3035, t: 0.1595 },
    },
    //Z
    {
        base: { x: 620, y: 370 },
        highlight: [
            { s: 0.39, l: 0.3, t: -0.05 },
            { s: 0.39, l: 0.302, t: 0.179 },
            { s: 0.39, l: 0.312, t: 0.385 },
        ],

        layout: { s: 0.399, l: 0.3036, t: 0.1598 },
    },
]

const iconPathList = [
    ['SB01_Ant_Icon', 'SB01_Alligator_Icon', 'SB01_Apple_Icon'],
    ['SB01_Ball_Icon', 'SB01_Banana_Icon', 'SB01_Butterfly_Icon'],
    ['SB01_Cat_Icon', 'SB01_Carrot_Icon', 'SB01_Cupicream_Icon'],
    ['SB01_Duck_Icon', 'SB01_Dog_Icon', 'SB01_Doll Icon'],
    ['SB01_Elephant_Icon', 'SB01_Engine_Icon', 'SB01_Egg_Icon'],
    ['SB01_Frog_Icon', 'SB01_Fish_Icon', 'SB01_Flower_Icon'],
    ['SB01_Goat_Icon', 'SB01_Gift_Icon', 'SB01_Gate_Icon'],
    ['SB01_Horse_Icon', 'SB01_House_Icon', 'SB01_Hen_Icon'],
    ['SB01_Insect_Icon', 'SB01_Ink_Icon', 'SB01_Igloo_Icon'],
    ['SB01_Juice_Icon', 'SB01_Jug_Icon', 'SB01_Jam_Icon'],
    ['SB01_Kite_Icon', 'SB01_Kangroo_Icon', 'SB01_Key_Icon'],
    ['SB01_Lion_Icon', 'SB01_Leaf_Icon', 'SB01_Lemon_Icon'],
    ['SB01_Monkey_Icon', 'SB01_Mug_Icon', 'SB01_Moon_Icon'],

    ['SB01_Nest_Icon', 'SB01_Napkin_Icon', 'SB01_Net_Icon'],

    ['SB01_Orange_Icon', 'SB01_Octopus_Icon', 'SB01_Omlet_Icon'],
    ['SB01_Parrot_Icon', 'SB01_Pineapple_Icon', 'SB01_Pencil_Icon'],
    ['SB01_Queen_Icon', 'SB01_Question_mark_Icon', 'SB01_Quilt_Icon'],
    ['SB01_Rainbow_Icon', 'SB01_Rope_Icon', 'SB01_Rocket_Icon'],
    ['SB01_Sun_Icon', 'SB01_Soap_Icon', 'SB01_Sandwich_Icon'],
    ['SB01_Tiger_Icon', 'SB01_Toothbrush_Icon', 'SB01_Top_Icon'],
    ['SB01_Umbrella-1_Icon', 'SB01_Umbrella-2_Icon', 'SB01_Umbrella-3_Icon'],
    ['SB01_Van_Icon', 'SB01_Vase_Icon', 'SB01_Vegetables_Icon'],
    ['SB01_Watermelon_Icon', 'SB01_Wool_Icon', 'SB01_Watch_Icon'],
    ['SB01_X-Box_Icon', 'SB01_X-Fox_Icon', 'SB01_X-Ox_Icon'],
    ['SB01_Yak_Icon', 'SB01_Yoyo_Icon', 'SB01_Yellow_Icon'],
    ['SB01_Zebra_Icon', 'SB01_Zip_Icon', 'SB01_Zero_Icon'],
]
const animtionList = [
    { scale: 0.32, left: 0.335, top: 0.225 }, //A
    { scale: 0.23, left: 0.38, top: 0.24 },  //B
    { scale: 0.27, left: 0.37, top: 0.245 },//C
    { scale: 0.27, left: 0.365, top: 0.235 }, //D
    { scale: 0.24, left: 0.375, top: 0.235 }, //E
    { scale: 0.24, left: 0.375, top: 0.235 },
    { scale: 0.38, left: 0.305, top: 0.175 },
    { scale: 0.26, left: 0.365, top: 0.235 },
    { scale: 0.24, left: 0.375, top: 0.235 },
    { scale: 0.23, left: 0.385, top: 0.235 },
    { scale: 0.24, left: 0.385, top: 0.235 }, //K
    { scale: 0.24, left: 0.385, top: 0.235 }, //L
    { scale: 0.29, left: 0.355, top: 0.235 },
    { scale: 0.26, left: 0.375, top: 0.235 },
    { scale: 0.28, left: 0.365, top: 0.235 },
    { scale: 0.23, left: 0.385, top: 0.235 },  //L
    { scale: 0.28, left: 0.365, top: 0.235 },
    { scale: 0.23, left: 0.385, top: 0.235 },
    { scale: 0.24, left: 0.385, top: 0.235 },
    { scale: 0.27, left: 0.365, top: 0.235 },
    { scale: 0.4, left: 0.305, top: 0.17 },
    { scale: 0.4, left: 0.305, top: 0.17 },
    { scale: 0.4, left: 0.305, top: 0.22 },  //W
    { scale: 0.26, left: 0.375, top: 0.235 },
    { scale: 0.26, left: 0.375, top: 0.235 },
    { scale: 0.24, left: 0.375, top: 0.235 },
]
const showingLayoutList = [

    [
        {
            wPath: 'SB_01_PI_Ant',
            s: 1.5, r: -0.25, b: 0.1
        },
        {
            wPath: 'SB_01_PI_Alligator',
            s: 1.5, r: -0.25, b: 0.1
        },
        {
            wPath: 'SB_01_PI_Apple',
            s: 1.5, r: -0.25, b: 0.1
        }
    ],
    [
        {
            wPath: 'SB_01_PI_Ball',
            s: 1.5, r: -0.25, b: 0.1
        },

        {
            wPath: 'SB_01_PI_Banana',
            s: 1.5, r: -0.25, b: 0.0
        },

        {
            wPath: 'SB_01_PI_Butterfly',
            s: 1.5, r: -0.25, b: 0.1
        }
    ],
    [
        {
            wPath: 'SB_01_PI_Cat',
            s: 1.5, r: -0.25, b: 0.1
        },

        {
            wPath: 'SB_01_PI_Cupcake',
            s: 1.4, r: -0.2, b: 0.1
        },

        {
            wPath: 'SB_01_PI_Carrot',
            s: 1.2, r: -0.15, b: 0.3
        }
    ],
    //D
    [
        {
            wPath: 'SB_01_PI_Duck',
            s: 1.5, r: -0.25, b: 0.1
        },

        {
            wPath: 'SB_01_PI_Dog',
            s: 1.5, r: -0.25, b: 0.1
        },

        {
            wPath: 'SB_01_PI_Doll',
            s: 1.5, r: -0.25, b: 0.1
        }
    ],
    //E
    [
        {
            wPath: 'SB_01_PI_Elephant',
            s: 3, r: -0.9, b: 0.1
        },
        {
            wPath: 'SB_01_PI_Engine',
            s: 1.4, r: -0.2, b: 0.28
        },
        {
            wPath: 'SB_01_PI_Egg',
            s: 1.2, r: -0.1, b: 0.1
        }
    ],
    //F
    [
        {
            wPath: 'SB_01_PI_Frog',
            s: 1.2, r: -0.1, b: 0.2
        },
        {
            wPath: 'SB_01_PI_Fish',
            s: 2.5, r: -0.55, b: 0.15
        },
        {
            wPath: 'SB_01_PI_Flower',
            s: 1.2, r: -0.1, b: 0.3
        }
    ],
    //G
    [
        {
            wPath: 'SB_01_PI_Goat',
            s: 1.5, r: -0.25, b: 0.18
        },
        {
            wPath: 'SB_01_PI_Gift',
            s: 1.5, r: -0.25, b: 0.1
        },
        {
            wPath: 'SB_01_PI_Gate',
            s: 2.2, r: -0.6, b: 0.1
        }
    ],
    //H
    [
        {
            wPath: 'SB_01_PI_Horse',
            s: 1.5, r: -0.25, b: 0.25
        },
        {
            wPath: 'SB_01_PI_House',
            s: 1.5, r: -0.25, b: 0.1
        },
        {
            wPath: 'SB_01_PI_Hen',
            s: 1.5, r: -0.25, b: 0.1
        }
    ],
    //I
    [
        {
            wPath: 'SB_01_PI_Insect',
            s: 1.2, r: -0.05, b: 0.1
        },
        {
            wPath: 'SB_01_PI_Ink',
            s: 1.5, r: -0.25, b: 0.1
        },
        {
            wPath: 'SB_01_PI_Igloo',
            s: 2.5, r: -0.75, b: 0.12
        }
    ],
    //J
    [
        {
            wPath: 'SB_01_PI_Juice',
            s: 1.5, r: -0.3, b: 0.35
        },
        {
            wPath: 'SB_01_PI_Jug',
            s: 1.5, r: -0.35, b: 0.28
        },
        {
            wPath: 'SB_01_PI_Jam',
            s: 1.5, r: -0.25, b: 0.30
        }
    ],
    //K
    [
        {
            wPath: 'SB_01_PI_Kite',
            s: 1.5, r: -0.3, b: 0.15
        },
        {
            wPath: 'SB_01_PI_Kangaroo',
            s: 1.8, r: -0.6, b: 0.2
        },
        {
            wPath: 'SB_01_PI_Key',
            s: 1.2, r: -0.1, b: 0.20
        }
    ],
    //L
    [
        {
            wPath: 'SB_01_PI_Lion',
            s: 2.5, r: -0.9, b: 0.25
        },
        {
            wPath: 'SB_01_PI_Leaf',
            s: 1.4, r: -0.2, b: 0.15
        },
        {
            wPath: 'SB_01_PI_Lemon',
            s: 1.4, r: -0.25, b: 0.10
        }
    ],
    //M
    [
        {
            wPath: 'SB_01_PI_Monkey',
            s: 1.8, r: -0.6, b: 0.05
        },
        {
            wPath: 'SB_01_PI_Mug',
            s: 1.4, r: -0.3, b: -0.15
        },
        {
            wPath: 'SB_01_PI_Moon',
            s: 3, r: -1.1, b: -0.15
        }
    ],
    //N
    [
        {
            wPath: 'SB_01_PI_Nest',
            s: 1.5, r: -0.25, b: -0.15
        },
        {
            wPath: 'SB_01_PI_Napkin',
            s: 1.8, r: -0.4, b: 0.1
        },
        {
            wPath: 'SB_01_PI_Net',
            s: 1.8, r: -0.5, b: -0.3
        }
    ],
    //O
    [
        {
            wPath: 'SB_01_PI_Orange',
            s: 1.4, r: -0.2, b: 0.0
        },
        {
            wPath: 'SB_01_PI_Octopus',
            s: 1.6, r: -0.3, b: 0.2
        },
        {
            wPath: 'SB_01_PI_Omlette',
            s: 1.4, r: -0.2, b: -0.2
        }
    ],
    //p
    [
        {
            wPath: 'SB_01_PI_Parrot',
            s: 1.6, r: -0.3, b: 0.2
        },
        {
            wPath: 'SB_01_PI_Pineapple',
            s: 1.6, r: -0.3, b: 0.2
        },
        {
            wPath: 'SB_01_PI_Pencil',
            s: 1.2, r: -0.1, b: 0.1
        }
    ],
    //Q
    [
        {
            wPath: 'SB_01_PI_Queen',
            s: 1.8, r: -0.4, b: 0.3
        },
        {
            wPath: 'SB_01_PI_Question-Mark',
            s: 1.6, r: -0.3, b: 0.35
        },
        {
            wPath: 'SB_01_PI_Quilt',
            s: 1.4, r: -0.2, b: 0.25
        }
    ],

    //R
    [
        {
            wPath: 'SB_01_PI_Rinebow',
            s: 1.8, r: -0.4, b: 0.1
        },
        {
            wPath: 'SB_01_PI_Rope',
            s: 1.6, r: -0.3, b: -0.3
        },
        {
            wPath: 'SB_01_PI_Rocket',
            s: 1.4, r: -0.2, b: 0.4
        }
    ],

    //S
    [
        {
            wPath: 'SB_01_PI_Sun',
            s: 1.4, r: -0.2, b: 0.1
        },
        {
            wPath: 'SB_01_PI_Soap',
            s: 1.2, r: -0.1, b: 0.0
        },
        {
            wPath: 'SB_01_PI_Sandwich',
            s: 1.4, r: -0.2, b: -0.2
        }
    ],
    //T
    [
        {
            wPath: 'SB_01_PI_Tiger',
            s: 1.4, r: -0.2, b: 0.4
        },
        {
            wPath: 'SB_01_PI_Toothbrush',
            s: 1.2, r: -0.1, b: 0.3
        },
        {
            wPath: 'SB_01_PI_Top',
            s: 1.4, r: -0.2, b: 0.3
        }
    ],
    //U
    [
        {
            wPath: 'SB_01_PI_Umbrella-1',
            s: 1.4, r: -0.2, b: 0.3
        },
        {
            wPath: 'SB_01_PI_Umbrella-2',
            s: 1.4, r: -0.2, b: 0.3
        },
        {
            wPath: 'SB_01_PI_Umbrella-3',
            s: 2.8, r: -0.9, b: 0.3
        }
    ],
    //V
    [
        {
            wPath: 'SB_01_PI_Van',
            s: 1.8, r: -0.4, b: 0.2
        },
        {
            wPath: 'SB_01_PI_Vase',
            s: 1.2, r: -0.1, b: 0.3
        },
        {
            wPath: 'SB_01_PI_Vegetables',
            s: 1.4, r: -0.2, b: 0.1
        }
    ],
    //W
    [
        {
            wPath: 'SB_01_PI_Watermelon',
            s: 1.4, r: -0.2, b: 0.1
        },
        {
            wPath: 'SB_01_PI_Woolen-Ball',
            s: 1.4, r: -0.2, b: 0.3
        },
        {
            wPath: 'SB_01_PI_Watch',
            s: 1.4, r: -0.2, b: 0.2
        }
    ],
    //X
    [
        {
            wPath: 'SB_01_PI_O_Box',
            s: 1.2, r: -0.1, b: 0.2
        },
        {
            wPath: 'SB_01_PI_O_Fox',
            s: 2, r: -0.5, b: 0.3
        },
        {
            wPath: 'SB_01_PI_O_Ox',
            s: 1.2, r: -0.1, b: 0.3
        }
    ],
    //Y
    [
        {
            wPath: 'SB_01_PI_Yak',
            s: 1.4, r: -0.2, b: 0.1
        },
        {
            wPath: 'SB_01_PI_Yoyo',
            s: 1.4, r: -0.2, b: 0.2
        },
        {
            wPath: 'SB_01_PI_Yellow',
            s: 2, r: -0.5, b: -0.1
        }
    ],
    //Z
    [
        {
            wPath: 'SB_01_PI_Zebra',
            s: 1.4, r: -0.2, b: 0.2
        },
        {
            wPath: 'SB_01_PI_Zip',
            s: 1.4, r: -0.2, b: 0.2
        },
        {
            wPath: 'SB_01_PI_Zero',
            s: 1.4, r: -0.2, b: 0.1
        }
    ],
]

const textInfoList = [
    [
        { text: 'Ant', left: 5 },
        { text: 'Alligator', left: -7 },
        { text: 'Apple', left: 0 }
    ],

    [
        { text: 'Ball', left: -6 },
        { text: 'Banana', left: -2 },
        { text: 'Butterfly', left: -12 }
    ],

    [
        { text: 'Cat', left: -17 },
        { text: 'Cupicream', left: -9 },
        { text: 'Carrot', left: -3 }
    ],
    [
        { text: 'Duck', left: -3 },
        { text: 'Dog', left: -6 },
        { text: 'Doll', left: 3 }
    ],
    [
        { text: 'Elephant', left: -3 },
        { text: 'Engine', left: 0 },
        { text: 'Egg', left: 0 }
    ],
    [
        { text: 'Frog', left: -10 },
        { text: 'Fish', left: -7 },
        { text: 'Flower', left: -3 }
    ],
    [
        { text: 'Goat', left: -3 },
        { text: 'Gift', left: -7 },
        { text: 'Gate', left: -3 }
    ],
    [
        { text: 'Horse', left: -3 },
        { text: 'House', left: -3 },
        { text: 'Hen', left: -3 }
    ],
    [
        { text: 'Insect', left: -3 },
        { text: 'Ink', left: -3 },
        { text: 'Igloo', left: -3 }
    ],
    [
        { text: 'Juice', left: -3 },
        { text: 'Jug', left: -3 },
        { text: 'Jam', left: -3 }
    ],
    [
        { text: 'Kite', left: -8 },
        { text: 'Kangaroo', left: -3 },
        { text: 'Key', left: 10 }
    ],
    [
        { text: 'Lion', left: -8 },
        { text: 'Leave', left: -3 },
        { text: 'Orange', left: 10 }
    ],
    [
        { text: 'Monkey', left: 8 },
        { text: 'Mug', left: -3 },
        { text: 'Moon', left: 10 }
    ],
    [
        { text: 'Nest', left: 0 },
        { text: 'Napkin', left: 0 },
        { text: 'Net', left: -15 }
    ],
    [
        { text: 'Orange', left: -5 },
        { text: 'Octopus', left: -3 },
        { text: 'Omlette', left: 0 }
    ],
    [
        { text: 'Parrot', left: -5 },
        { text: 'Pineapple', left: 0 },
        { text: 'Pencil', left: 5 }
    ],

    [
        { text: 'Queen', left: -5 },
        { text: 'Question-Mark', left: 3 },
        { text: 'Quilt', left: 0 }
    ],

    [
        { text: 'Rainbow', left: 3 },
        { text: 'Rope', left: 3 },
        { text: 'Rocket', left: 1 }
    ],

    [
        { text: 'Sun', left: 0 },
        { text: 'Soap', left: 0 },
        { text: 'Sandwich', left: 0 }
    ],


    [
        { text: 'Tiger', left: 0 },
        { text: 'Toothbrush', left: 0 },
        { text: 'Top', left: 0 }
    ],
    [
        { text: 'Umbrella', left: 0 },
        { text: 'Umbrella', left: 0 },
        { text: 'Umbrella', left: 0 }
    ],

    [
        { text: 'Van', left: 0 },
        { text: 'Vase', left: 0 },
        { text: 'Vegetables', left: 0 }
    ],

    [
        { text: 'Watermelon', left: 0 },
        { text: 'Wollen-ball', left: 0 },
        { text: 'Watch', left: 0 }
    ],

    [
        { text: 'Box', left: 0, isLast: true },
        { text: 'Fox', left: -15, isLast: true },
        { text: 'Ox', left: 5, isLast: true }
    ],

    [
        { text: 'Yak', left: 0 },
        { text: 'Yoyo', left: 0 },
        { text: 'Yellow', left: 0 }
    ],

    [
        { text: 'Zebra', left: 0 },
        { text: 'Zip', left: 0 },
        { text: 'Zero', left: 0 }
    ],
]

const sparkPosLeft = [
    [-0.05, 0.24, 0.55],
    [-0.05, 0.26, 0.55],
    [-0.1, 0.24, 0.55],
    [-0.05, 0.24, 0.55],
    [-0.05, 0.26, 0.55],
    [-0.05, 0.24, 0.55],
    [-0.04, 0.24, 0.55],
    [-0.04, 0.24, 0.55],
    [-0.04, 0.24, 0.55],
    [-0.04, 0.24, 0.55],
    [-0.04, 0.24, 0.55],
    [-0.04, 0.24, 0.55],
    [-0.04, 0.24, 0.55],
    [-0.04, 0.24, 0.55],
    [-0.04, 0.24, 0.55],
    [-0.04, 0.24, 0.55],
    [-0.04, 0.24, 0.55],
    [-0.04, 0.24, 0.55],
    [-0.04, 0.24, 0.55],
    [-0.04, 0.24, 0.55],
    [-0.04, 0.24, 0.55],
    [-0.04, 0.24, 0.55],
    [-0.04, 0.24, 0.55],
    [-0.04, 0.24, 0.55],
    [-0.04, 0.24, 0.55],
    [-0.04, 0.24, 0.55],
]

const titleList = [
    { path: 'SB_03_NT_TI_01' },
    { path: 'SB_03_NT_TI_02' },
    { path: 'SB_03_NT_TI_03' },
    { path: 'SB_03_NT_TI_04' },
    { path: 'SB_03_NT_TI_05' },
    { path: 'SB_03_NT_TI_06' },
    { path: 'SB_03_NT_TI_07' },
    { path: 'SB_03_NT_TI_08' },
    { path: 'SB_03_NT_TI_09' },
    { path: 'SB_03_NT_TI_10' },
]

export const lineWidthList =
    [
        75, 75, 87, 75,//D
        75, 73,//F
        81, 73, 70, 75, 70, //K
        75, 80, 75, 80, 75, 73 //Q
        , 72, 80, //S
        70, 75, //V
        70, 75, //W,X
        70, 75, //Z
        80,
    ];
export const lowerLineWidthList =
    [
        75, 62, 75, 60,//D
        75, 50,//F
        60, 55, 70, 75, 53, //K
        75, 80, 75, 80, 75, 73 //Q
        , 72, 80, //S
        70, 75, //V
        70, 75, //W,X
        70, 75, //Z
        80,
    ];

const firstPosList = [
    [
        { x: 671, y: 154 },
        { x: 644, y: 210, letter_start: true },
        { x: 540, y: 409, letter_start: true },
    ],

    [
        { x: 535, y: 150 },

        { x: 536, y: 220, letter_start: true },
        { x: 555, y: 374, letter_start: true },
    ],

    [
        { x: 803, y: 308 },
    ],

    [
        { x: 504, y: 151 },
        { x: 509, y: 209, letter_start: true },
    ],
    //E
    [
        { x: 526, y: 159 },
        { x: 523, y: 212, letter_start: true },
        { x: 525, y: 367, letter_start: true },
        { x: 527, y: 526, letter_start: true },
    ],
    //F
    [
        { x: 525, y: 150 },
        { x: 522, y: 211, letter_start: true },
        { x: 523, y: 367, letter_start: true },
    ],
    //G
    [
        { x: 775, y: 307, lastObj: 0 },
        { x: 553, y: 375, letter_start: true },
        { x: 785, y: 318, letter_start: true },
    ],
    //H
    [
        { x: 514, y: 164 },
        { x: 514, y: 373, letter_start: true },
        { x: 756, y: 158, letter_start: true },
    ],
    //I
    [
        { x: 634, y: 170 },
        { x: 454, y: 212, letter_start: true },
        { x: 463, y: 529, letter_start: true },
    ],
    //J
    [
        { x: 655, y: 168 },
        { x: 489, y: 215, letter_start: true },
    ],
    //K
    [

        { x: 534, y: 164 },


        { x: 804, y: 187, letter_start: true },


        { x: 532, y: 366, letter_start: true },

    ],
    //L
    [
        { x: 534, y: 168 },
        { x: 473, y: 529, letter_start: true },
    ],
    //M
    [
        { x: 501, y: 168 },
        { x: 471, y: 171, letter_start: true },
        { x: 622, y: 575, letter_start: true },
        { x: 790, y: 164, letter_start: true },
    ],
    //N
    [
        { x: 523, y: 167 },
        { x: 487, y: 177, letter_start: true },
        { x: 767, y: 573, letter_start: true },
    ],
    //O
    [
        { x: 657, y: 215 },
    ],
    //P
    [
        { x: 550, y: 162 },


        { x: 541, y: 216, letter_start: true },



    ],
    //Q
    [
        { x: 657, y: 215 },
        { x: 662, y: 414, letter_start: true },
    ],
    //R
    [
        { x: 553, y: 165 },
        { x: 549, y: 214, letter_start: true },
        { x: 555, y: 373, letter_start: true },
    ],
    //S
    [
        { x: 753, y: 293 },
    ],
    //T
    [
        { x: 409, y: 216 },
        { x: 645, y: 163, letter_start: true },
    ],
    //U
    [
        { x: 535, y: 164 },
    ],
    //V
    [
        { x: 522, y: 170 },
        { x: 626, y: 576, letter_start: true },

    ],
    //W
    [
        { x: 420, y: 165 },


        { x: 526, y: 573, letter_start: true },


        { x: 622, y: 169, letter_start: true },


        { x: 732, y: 570, letter_start: true },


    ],
    //X
    [
        { x: 476, y: 165 },
        { x: 801, y: 178, letter_start: true },
    ],
    //Y
    [
        { x: 479, y: 180, lastObj: 1 },
        { x: 808, y: 183, letter_start: true },
        { x: 647, y: 290, letter_start: true },
    ],
    //Z
    [
        { x: 480, y: 213 },
        { x: 781, y: 165, letter_start: true },
        { x: 485, y: 528, letter_start: true },
    ],

]
const movePath = [
    [
        [

            { x: 638, y: 222 },
            { x: 453, y: 572 },
        ],
        [

            { x: 646, y: 224 },
            { x: 810, y: 567 },
        ],
        [
            { x: 571, y: 409 },
            { x: 715, y: 407 },
        ]
    ],
    [
        [

            { x: 535, y: 218 },
            { x: 535, y: 574 },
        ],
        [


            { x: 572, y: 220 },
            { x: 680, y: 220 },
            { x: 708, y: 234 },
            { x: 726, y: 256 },
            { x: 734, y: 288 },
            { x: 728, y: 320 },
            { x: 717, y: 342 },
            { x: 696, y: 360 },
            { x: 678, y: 367 },
            { x: 640, y: 369 },
            { x: 566, y: 369 },
        ],
        [
            { x: 590, y: 371 },
            { x: 685, y: 367 },
            { x: 705, y: 380 },
            { x: 726, y: 407 },
            { x: 734, y: 439 },
            { x: 734, y: 468 },
            { x: 723, y: 490 },
            { x: 705, y: 508 },
            { x: 672, y: 524 },
            { x: 629, y: 526 },
            { x: 555, y: 524 },
        ]
    ],
    [
        [

            { x: 761, y: 262 },
            { x: 703, y: 222 },
            { x: 654, y: 213 },
            { x: 613, y: 221 },
            { x: 570, y: 249 },
            { x: 531, y: 290 },
            { x: 515, y: 339 },
            { x: 511, y: 383 },
            { x: 521, y: 431 },
            { x: 542, y: 473 },
            { x: 570, y: 501 },
            { x: 611, y: 522 },
            { x: 660, y: 528 },
            { x: 703, y: 518 },
            { x: 732, y: 501 },
            { x: 798, y: 447 },
        ],

    ],
    //D
    [
        [

            { x: 506, y: 218 },
            { x: 509, y: 580 },
        ],
        [
            { x: 564, y: 211 },
            { x: 619, y: 215 },
            { x: 664, y: 227 },
            { x: 698, y: 245 },
            { x: 723, y: 271 },
            { x: 743, y: 298 },
            { x: 754, y: 329 },
            { x: 760, y: 363 },
            { x: 758, y: 401 },
            { x: 746, y: 437 },
            { x: 727, y: 466 },
            { x: 704, y: 490 },
            { x: 667, y: 511 },
            { x: 626, y: 521 },
            { x: 587, y: 525 },
            { x: 521, y: 526 },
        ],

    ],
    //E
    [
        [

            { x: 526, y: 214 },
            { x: 526, y: 576 },
        ],
        [

            { x: 568, y: 212 },
            { x: 802, y: 212 },
        ],
        [

            { x: 572, y: 367 },
            { x: 756, y: 367 },
        ],
        [

            { x: 563, y: 526 },
            { x: 792, y: 526 },
        ]

    ],
    //F
    [
        [
            { x: 525, y: 216 },
            { x: 525, y: 575 },
        ],
        [


            { x: 567, y: 211 },
            { x: 805, y: 211 },
        ],
        [


            { x: 558, y: 367 },
            { x: 741, y: 367 },
        ],
    ],
    //G
    [
        [
            { x: 750, y: 267 },
            { x: 722, y: 245 },
            { x: 699, y: 232 },
            { x: 670, y: 223 },
            { x: 642, y: 219 },
            { x: 611, y: 222 },
            { x: 574, y: 232 },
            { x: 544, y: 248 },
            { x: 517, y: 271 },
            { x: 495, y: 307 },
            { x: 480, y: 350 },
            { x: 484, y: 396 },
            { x: 499, y: 443 },
            { x: 525, y: 478 },
            { x: 560, y: 503 },
            { x: 605, y: 520 },
            { x: 648, y: 521 },
            { x: 691, y: 511 },
            { x: 720, y: 496 },
        ],
        [


            { x: 636, y: 375 },
            { x: 844, y: 373 },
        ],
        [



            { x: 785, y: 376 },
            { x: 785, y: 573 },
        ],
    ],
    //H
    [
        [
            { x: 514, y: 213 },
            { x: 514, y: 571 },
        ],
        [
            { x: 548, y: 373 },
            { x: 720, y: 373 },
        ],
        [
            { x: 756, y: 206 },
            { x: 756, y: 573 },
        ],
    ],
    //I
    [
        [
            { x: 634, y: 211 },
            { x: 634, y: 571 },
        ],
        [
            { x: 527, y: 212 },
            { x: 797, y: 212 },
        ],
        [
            { x: 519, y: 529 },
            { x: 795, y: 529 },
        ],
    ],
    //J
    [
        [
            { x: 655, y: 211 },
            { x: 655, y: 495 },
            { x: 639, y: 513 },
            { x: 621, y: 528 },
            { x: 605, y: 532 },
            { x: 587, y: 532 },
            { x: 570, y: 526 },
            { x: 557, y: 516 },
            { x: 544, y: 503 },
            { x: 540, y: 483 },
            { x: 530, y: 416 },
        ],
        [

            { x: 545, y: 215 },
            { x: 798, y: 215 },
        ]
    ],
    //K
    [
        [
            { x: 534, y: 211 },
            { x: 534, y: 569 },
        ],
        [
            { x: 758, y: 213 },
            { x: 552, y: 363 },
        ],
        [
            { x: 579, y: 401 },
            { x: 792, y: 552 },
        ]
    ],
    //L
    [
        [
            { x: 535, y: 216 },
            { x: 535, y: 574 },
        ],
        [
            { x: 560, y: 528 },
            { x: 804, y: 531 },
        ],
    ],
    //M
    [
        [
            { x: 501, y: 213 },
            { x: 501, y: 571 },
        ],
        [
            { x: 502, y: 217 },
            { x: 662, y: 570 },

        ],
        [
            { x: 645, y: 525 },
            { x: 808, y: 170 },

        ],
        [
            { x: 790, y: 213 },
            { x: 790, y: 572 },
        ]
    ],
    //N
    [
        [
            { x: 524, y: 217 },
            { x: 526, y: 569 },
        ],
        [
            { x: 524, y: 218 },
            { x: 795, y: 566 },

        ],
        [
            { x: 764, y: 526 },
            { x: 765, y: 168 },
        ],
    ],
    //O
    [
        [
            { x: 617, y: 215 },
            { x: 597, y: 219 },
            { x: 585, y: 225 },
            { x: 579, y: 230 },
            { x: 561, y: 243 },
            { x: 543, y: 262 },
            { x: 528, y: 284 },
            { x: 518, y: 307 },
            { x: 510, y: 334 },
            { x: 508, y: 362 },
            { x: 508, y: 389 },
            { x: 511, y: 413 },
            { x: 519, y: 438 },
            { x: 532, y: 462 },
            { x: 549, y: 487 },
            { x: 566, y: 503 },
            { x: 589, y: 516 },
            { x: 610, y: 522 },
            { x: 638, y: 526 },
            { x: 665, y: 525 },
            { x: 687, y: 519 },
            { x: 708, y: 511 },
            { x: 725, y: 500 },
            { x: 740, y: 486 },
            { x: 756, y: 467 },
            { x: 764, y: 451 },
            { x: 775, y: 427 },
            { x: 782, y: 403 },
            { x: 783, y: 379 },
            { x: 783, y: 356 },
            { x: 782, y: 336 },
            { x: 777, y: 318 },
            { x: 769, y: 300 },
            { x: 758, y: 281 },
            { x: 745, y: 263 },
            { x: 728, y: 249 },
            { x: 710, y: 236 },
            { x: 691, y: 224 },
            { x: 640, y: 200 },

        ]
    ],
    //P
    [
        [
            { x: 550, y: 214 },
            { x: 550, y: 573 },
        ],
        [
            { x: 587, y: 214 },
            { x: 683, y: 216 },
            { x: 707, y: 226 },
            { x: 726, y: 242 },
            { x: 738, y: 267 },
            { x: 743, y: 294 },
            { x: 740, y: 316 },
            { x: 731, y: 335 },
            { x: 717, y: 353 },
            { x: 694, y: 366 },
            { x: 666, y: 374 },
            { x: 566, y: 374 },

        ],
    ],
    //Q
    [
        [

            { x: 617, y: 215 },
            { x: 594, y: 218 },
            { x: 581, y: 228 },
            { x: 568, y: 237 },
            { x: 545, y: 261 },
            { x: 535, y: 279 },
            { x: 523, y: 302 },
            { x: 515, y: 328 },
            { x: 511, y: 358 },
            { x: 512, y: 391 },
            { x: 520, y: 428 },
            { x: 533, y: 458 },
            { x: 552, y: 482 },
            { x: 574, y: 500 },
            { x: 598, y: 513 },
            { x: 625, y: 520 },
            { x: 657, y: 522 },
            { x: 679, y: 517 },
            { x: 701, y: 509 },
            { x: 725, y: 495 },
            { x: 742, y: 474 },
            { x: 760, y: 448 },
            { x: 771, y: 418 },
            { x: 776, y: 393 },
            { x: 777, y: 361 },
            { x: 774, y: 331 },
            { x: 768, y: 304 },
            { x: 755, y: 277 },
            { x: 737, y: 254 },
            { x: 713, y: 237 },
            { x: 690, y: 221 },
            { x: 662, y: 211 },
            { x: 622, y: 204 },
        ],
        [

            { x: 691, y: 454 },
            { x: 788, y: 566 },

        ],
    ],
    //R
    [
        [
            { x: 553, y: 212 },
            { x: 553, y: 571 },
        ],
        [
            { x: 587, y: 215 },
            { x: 671, y: 214 },
            { x: 695, y: 219 },
            { x: 713, y: 230 },
            { x: 723, y: 242 },
            { x: 733, y: 261 },
            { x: 737, y: 280 },
            { x: 733, y: 303 },
            { x: 730, y: 323 },
            { x: 721, y: 339 },
            { x: 703, y: 354 },
            { x: 685, y: 364 },
            { x: 659, y: 367 },
            { x: 631, y: 368 },
            { x: 557, y: 367 },
        ],
        [
            { x: 590, y: 401 },
            { x: 756, y: 560 },
        ]
    ],
    //S
    [
        [

            { x: 746, y: 265 },
            { x: 738, y: 248 },
            { x: 725, y: 234 },
            { x: 704, y: 220 },
            { x: 685, y: 213 },
            { x: 665, y: 211 },
            { x: 646, y: 211 },
            { x: 629, y: 214 },
            { x: 609, y: 218 },
            { x: 594, y: 224 },
            { x: 582, y: 232 },
            { x: 573, y: 242 },
            { x: 566, y: 259 },
            { x: 563, y: 277 },
            { x: 566, y: 297 },
            { x: 572, y: 310 },
            { x: 581, y: 322 },
            { x: 601, y: 336 },
            { x: 618, y: 343 },
            { x: 640, y: 354 },
            { x: 672, y: 365 },
            { x: 702, y: 376 },
            { x: 722, y: 390 },
            { x: 745, y: 411 },
            { x: 756, y: 430 },
            { x: 758, y: 449 },
            { x: 756, y: 466 },
            { x: 751, y: 478 },
            { x: 746, y: 490 },
            { x: 733, y: 504 },
            { x: 717, y: 517 },
            { x: 699, y: 523 },
            { x: 671, y: 527 },
            { x: 653, y: 527 },
            { x: 628, y: 524 },
            { x: 603, y: 519 },
            { x: 583, y: 509 },
            { x: 561, y: 499 },
            { x: 548, y: 487 },
            { x: 493, y: 441 },
        ]
    ],
    //T
    [
        [
            { x: 517, y: 216 },
            { x: 816, y: 216 },
        ],
        [
            { x: 645, y: 224 },
            { x: 645, y: 571 },
        ]
    ],
    //U
    [
        [
            { x: 535, y: 211 },
            { x: 535, y: 420 },
            { x: 538, y: 446 },
            { x: 547, y: 469 },
            { x: 561, y: 492 },
            { x: 577, y: 504 },
            { x: 597, y: 515 },
            { x: 621, y: 521 },
            { x: 648, y: 523 },
            { x: 675, y: 519 },
            { x: 701, y: 511 },
            { x: 719, y: 501 },
            { x: 731, y: 487 },
            { x: 746, y: 466 },
            { x: 758, y: 429 },
            { x: 756, y: 166 },
        ],
    ],

    //V
    [
        [
            { x: 540, y: 211 },
            { x: 660, y: 573 },
        ],
        [
            { x: 644, y: 527 },
            { x: 767, y: 168 },
        ],
    ],
    //W
    [
        [
            { x: 440, y: 217 },
            { x: 554, y: 574 },
        ],
        [
            { x: 542, y: 529 },
            { x: 659, y: 168 },
        ],
        [
            { x: 644, y: 211 },
            { x: 756, y: 574 },
        ],
        [
            { x: 746, y: 524 },
            { x: 869, y: 166 },
        ],
    ],
    //X
    [
        [
            { x: 523, y: 219 },
            { x: 795, y: 565 },
        ],
        [
            { x: 767, y: 216 },
            { x: 488, y: 567 },
        ],
    ],
    //Y
    [
        [
            { x: 516, y: 216 },
            { x: 620, y: 336 },
        ],
        [
            { x: 777, y: 210 },
            { x: 666, y: 341 },
        ],
        [
            { x: 647, y: 345, w: 100 },
            { x: 647, y: 575 },
        ],
    ],
    //Z
    [
        [
            { x: 535, y: 213 },
            { x: 798, y: 213 },
        ],
        [
            { x: 749, y: 219 },
            { x: 510, y: 573 },
        ],
        [
            { x: 541, y: 528 },
            { x: 812, y: 528 },
        ],
    ],
]

const subObjectList = [
]

const brushColorList = [
    0x8436ff,
    0xdd35ef,
    0xe84f4f
]

export {
    maskInfoList, iconPathList, animtionList, showingLayoutList, titleList, letterPosList,
    firstPosList, movePath, subObjectList, brushColorList, textInfoList, sparkPosLeft
}