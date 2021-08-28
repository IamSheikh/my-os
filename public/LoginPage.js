import './script.js'

class LoginPage extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
            <form id="loginForm">
                <img src="./img/avatar.png" alt=${window.name} class="login-form-img" />
                <h3 class="main-text">${window.name}</h3>
                <input type="password" name="userpassword" id="userpassword" placeholder="Enter your password..." class="main-input" />
                <button class="main-btn">Login</button>
            </form>
    `
  }
}

customElements.define('login-page', LoginPage)
