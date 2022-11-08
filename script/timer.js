import { Sounds } from "./sounds.js"
export function Timer({
    minutesDisplay,
    secondsDisplay,
    resetControls,
    minutes,
}) {


    const sounds = Sounds()
    let timerTimeOut

    function updateDisplay(minutes, seconds) {
        minutesDisplay.textContent = String(minutes).padStart(2, "0")
        secondsDisplay.textContent = String(seconds).padStart(2, "0")
    }
    
    function reset() {
        updateDisplay(minutes, 0)
        clearTimeout(timerTimeOut)
    }

    function updateMinutes (newMinutes) {
        minutes = newMinutes
    }
    
    function countDown() {
        timerTimeOut = setTimeout(function () {
            let seconds = Number(secondsDisplay.textContent)
            let minutes = Number(minutesDisplay.textContent)
            
    
            updateDisplay(minutes, 0)
    
            if (minutes <= 0 && seconds <= 0) {
                resetControls()
                updateDisplay()
                sounds.timeEnd()
                return
            }
    
            if (seconds <= 0) {
                seconds = 3
                --minutes
            }
    
            updateDisplay(minutes, String(seconds - 1)) 
    
            countDown()
    
        }, 1000)
    }

    function hold(){
        clearTimeout(timerTimeOut)
    }

    return {
        countDown,
        reset,
        updateDisplay,
        updateMinutes,
        hold
    }
}

