import './InstallPage.js'
import './LoginPage.js'
import './Desktop.js'

function speak(textForSpeak) {
  var synth = window.speechSynthesis
  var textToSpeak = new window.SpeechSynthesisUtterance(textForSpeak)
  synth.speak(textToSpeak)
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
      speak('Successfully Logged In')
      app.innerHTML = '<desktop-page></desktop-page>'
      const app1 = document.getElementById('app-1')
      app1.addEventListener('click', () => openTerminal())
      function openTerminal() {
        let cli = window.prompt(
          `${window.username}${window.name.split(' ').join('')}-TurtleOS$`
        )
        const responseDiv = document.createElement('div')
        responseDiv.style.fontSize = '1rem'
        document.body.append(responseDiv)
        switch (cli) {
          case 'pwd':
            document.querySelector('desktop-page').style.display = 'none'
            speak(`Current Directory is slash Users slash ${window.username}`)
            new Response(`/Users/${window.username}`, responseDiv)
            openTerminalBtn()
            break
          default:
            document.querySelector('desktop-page').style.display = 'none'
            speak(`turtle c l i: ${cli} command not founded`)
            new Response(`turtlecli: ${cli} command not founded`, responseDiv)
            openTerminalBtn()
            break
        }
        console.log(cli)
      }
      function openTerminalBtn() {
        const openTerminalBtn = document.createElement('button')
        openTerminalBtn.className = 'openTerminalBtn'
        openTerminalBtn.style.padding = '1rem'
        openTerminalBtn.style.border = 'none'
        openTerminalBtn.style.marginLeft = '0.5rem'
        openTerminalBtn.style.marginRight = '0.5rem'
        openTerminalBtn.style.cursor = 'pointer'
        openTerminalBtn.textContent = 'Open Terminal'
        openTerminalBtn.addEventListener('click', () => {
          openTerminal()
        })
        document.body.append(openTerminalBtn)
      }
      console.log('Successfully Logged In')
    } else {
      speak('Please enter correct password')
      console.log('Please enter correct password')
    }
  })
})
