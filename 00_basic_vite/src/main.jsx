import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

const reactElement = {
    type: "a",
    props: {
        href: "https://google.com",
        target: "_blank"
    },
    children: "Click me to visit google!"
}

function Myapp(){
    return(
        <div>
            <h1>Veerasiva</h1>
        </div>
    )
}

const AnotherElement = (
    <a href="https://google.com" target='_blank'>Visit google</a>
)

const anotherReactElement = React.createElement(
    "a",
    {href: "https:google.com", target: "_blank"},
    "Google is here"
)

createRoot(document.getElementById('root')).render(
    <App />
)
