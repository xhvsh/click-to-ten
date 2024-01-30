// counting

let count = 0

document.body.addEventListener('click', () => {
  if (count == 10) {
    window.close()
    document.body.remove
  } else {
    document.body.classList.add('clicked')
    count++
    document.querySelector('.number').innerHTML = count
  }
})

// time update

function formatTime(seconds) {
  const hours = Math.floor(seconds / 3600)
  const minutes = Math.floor((seconds % 3600) / 60)
  const remainingSeconds = seconds % 60
  return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`
}

function updateTimer() {
  timeSpent++
  localStorage.setItem('timeSpent', timeSpent)
  document.querySelector('.time').innerHTML = `${formatTime(timeSpent)}`
}

let timeSpent = parseInt(localStorage.getItem('timeSpent')) || 0

const timerInterval = setInterval(updateTimer, 1000)

window.addEventListener('beforeunload', () => {
  clearInterval(timerInterval)
})
