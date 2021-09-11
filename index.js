
import './node_modules/blissfuljs/bliss.shy.js'
import './node_modules/prismjs/prism.js'
import './prism-live/src/prism-live.js'

export default class PrismLiveElement extends HTMLElement {
    constructor() {
        super()
        this.attachShadow({ mode: 'open' })

        this.childNodes.forEach(node => 
            this.shadowRoot.append(node.cloneNode(true)))

        this.shadowRoot.append(...document.querySelectorAll(
            '[data-prism-live-stylesheet], ' + 
            '[data-prism-theme], ' + 
            'link[rel="stylesheet"][href$="prism-live.css"]'))
        
        this.shadowRoot.querySelectorAll('textarea, pre').forEach(
            el => new Prism.Live(el))
    }
    
    connectedCallback() {
        Prism.Live
    }
}

customElements.define('prism-live', PrismLiveElement)
