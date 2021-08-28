import './script.js'

class LoginPage extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
            <form id="loginForm">
                <img src="./img/avatar.png" alt=${window.name} class="login-form-img" />
                <h3 class="main-text">${window.name}</h3>
                <div id="main-form">
                  <input type="password" name="userpassword" id="userpassword" placeholder="Enter your password..." class="main-input" required />
                  <button class="main-btn">Login</button>
                </div>
            </form>
    `
  }
}

customElements.define('login-page', LoginPage)
