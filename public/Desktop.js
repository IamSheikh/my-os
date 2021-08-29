class DesktopPage extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
            <div id="apps">
                <div id="app-1">
                    <i class="fa fa-terminal"></i>
                    <h3>Terminal</h3>
                </div>
            </div>
        `
  }
}

customElements.define('desktop-page', DesktopPage)
