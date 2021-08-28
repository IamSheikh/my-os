import './InstallPage.js'
import './LoginPage.js'

const app = document.getElementById('app')

app.innerHTML = '<install-page></install-page>'

const installForm = document.getElementById('installForm')

installForm.addEventListener('submit', (e) => {
  e.preventDefault()
  window.name = document.getElementById('name').value
  window.username = document.getElementById('username').value
  window.password = document.getElementById('password').value
  app.innerHTML = '<login-page></login-page>'
})
