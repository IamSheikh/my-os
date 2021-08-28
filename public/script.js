import './InstallPage.js'
import './LoginPage.js'

function speak(textForSpeak) {
  var synth = window.speechSynthesis
  var textToSpeak = new window.SpeechSynthesisUtterance(textForSpeak)
  synth.speak(textForSpeak)
}

function Response(response, element) {
  this.response = response
  this.element = element
  this.element.style.margin = '1rem'
  this.element.append(this.response)
}

const app = document.getElementById('app')

app.innerHTML = '<install-page></install-page>'

const installForm = document.getElementById('installForm')

installForm.addEventListener('submit', (e) => {
  e.preventDefault()
  window.name = document.getElementById('name').value
  window.username = document.getElementById('username').value
  window.password = document.getElementById('password').value
  app.innerHTML = '<login-page></login-page>'
  const loginForm = document.getElementById('loginForm')
  loginForm.addEventListener('submit', (e) => {
    e.preventDefault()
    window.userpassword = document.getElementById('userpassword').value
    if (window.password == window.userpassword) {
      console.log('Successfully Logged In')
    } else {
      console.log('Please enter correct password')
    }
  })
})
