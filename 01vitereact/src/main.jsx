import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

function MyApp()
{ 
  
  return (
    <div>
      <h1>CUstom App hh {username}</h1>
    </div>
  )
}

// const reactElement = {
//   type: 'a',
//   props: {
//       href: 'https://google.com',
//       target: '_blank'
//   },
//   children: 'Click me to visit google'
// } 


const anotherElement =(
  <a href="https://google.com" target='_blank'>Visit Google</a>
)

const username="Arpit"
const reactElement = React.createElement(
  'a',
  {href: 'https://google.com',target: "_blank"  },
  'click me google',
  username
)
ReactDOM.createRoot(document.getElementById('root')).render(
  //<React.StrictMode>
  reactElement
  //</React.StrictMode>,
)
