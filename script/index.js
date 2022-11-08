import { Timer } from "./timer.js"
import { Controls } from "./controls.js"
import { Events } from "./events.js"
import {
    playButton,
    pauseButton,
    stopButton,
    setButton,
    muteOnButton,
    muteOffButton,
    minutesDisplay,
    secondsDisplay,
} from "./elements.js"

let minutes = Number(minutesDisplay.textContent)


const controls = Controls({
    setButton,
    playButton,
    pauseButton,
    stopButton,
})

const timer = Timer({
    minutesDisplay,
    secondsDisplay,
    resetControls: controls.reset,
    minutes,
})

Events({controls, timer})
   
