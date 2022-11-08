import { Sounds } from "./sounds.js"
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

const sounds = Sounds()

export function Events ({controls, timer, }) {
    playButton.addEventListener('click', function() {
        controls.play()
        timer.countDown()
        sounds.pressButton()
    })
    
    pauseButton.addEventListener('click', function() {
        controls.pause()
        timer.hold()
        sounds.pressButton()
    })
    
    stopButton.addEventListener('click', function() {
        controls.reset()
        timer.reset()
        sounds.pressButton()
    })
    
    setButton.addEventListener('click', function() {
        sounds.pressButton()
        let newMinutes = controls.getMinutes()
    
        if (!newMinutes) {
            timer.reset()
            return
        }
    
        timer.updateDisplay(newMinutes, 0)
        timer.updateMinutes(newMinutes)
    })
    
    muteOnButton.addEventListener('click', function (){
        muteOnButton.classList.add('hide')
        muteOffButton.classList.remove('hide')
        sounds.bgSoundOff()
        
    })
    
    muteOffButton.addEventListener('click', function (){
        muteOnButton.classList.remove('hide')
        muteOffButton.classList.add('hide')
        sounds.pressButton()
        sounds.bgSoundOn()
        
    })
}