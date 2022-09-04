import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/AddWatermark'
import Layout from './layout'
import './style.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Layout>
      <App />
    </Layout>
  </React.StrictMode>
)
