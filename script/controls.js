
export function Controls ({
    setButton,
    playButton,
    pauseButton,
    stopButton,
}){

    function reset() {
        stopButton.classList.add('hide')
        setButton.classList.remove('hide')
        pauseButton.classList.add('hide')
        playButton.classList.remove('hide')
    }
    
    function play() {
        playButton.classList.add('hide')
        pauseButton.classList.remove('hide')
        
        setButton.classList.add('hide')
        stopButton.classList.remove('hide')
    }
    
    function pause() {
        pauseButton.classList.add('hide')
        playButton.classList.remove('hide')
    }

    function getMinutes() {
        let newMinutes = prompt('Quantos minutos?') || 0

        if (!newMinutes) {
            return false
        }
    
        return newMinutes
    }

    return {
        reset,
        play,
        pause,
        getMinutes,
    }
}
