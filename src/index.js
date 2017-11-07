import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './container/App'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import registerServiceWorker from './utilities/registerServiceWorker'

import WebFontLoader from 'webfontloader'

WebFontLoader.load({
  google: {
    families: ['Roboto:300,400,500,700', 'Material Icons']
  }
})

const RoutedApp = () => (
  <Router>
    <div>
      <Route exact path="/" component={App}/>
      <Route path="/:offerId" component={App}/>
    </div>
  </Router>
)

ReactDOM.render(<RoutedApp />, document.getElementById('root'))
registerServiceWorker()
