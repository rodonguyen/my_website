import ReactDOM from 'react-dom/client'
import App from './pages/App'
import './stylesheets/index.css'
import reportWebVitals from './pages/reportWebVitals'
import './i18n/config'

const root = ReactDOM.createRoot(document.getElementById('root')!)
root.render(<App />)

reportWebVitals(console.log)
