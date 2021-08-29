class InstallPage extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
        <form id="installForm">
            <input type="text" name="name" id="name" placeholder="Enter your name..." autocomplete="off" class="main-input" required />
            <input type="text" name="username" id="username" placeholder="Enter your username..." autocomplete="off" class="main-input" required />
            <input type="password" name="password" id="password" placeholder="Enter your password..." autocomplete="off" class="main-input" required />
            <button class="main-btn">Install Page</button>
        </form>
    `
  }
}

customElements.define('install-page', InstallPage)
