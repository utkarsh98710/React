import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.jsx'

function MyApp(){ // function name must be in capital letters 
    return(
        <div>
            <h1>Custom App | chai</h1>
        </div>
    )
}

// const ReactElement={  // myApp ke andar jo bhi he vo convert hota he isme end of the day parse hoke
//     type: 'a',     // this is an object in javascript so call this normally
//     props:{
//         href:'https://google.com',
//         target: '_blank'
//     },
//     children: 'Click me to visit goggle'
// }

const anotherElement=( 
    <a href="https://goggle.com" target="_blank">Visit Goggle</a>
)

const anotheruser="chai aur react"

// Eva
// NOTE:- after tree will make the variabe injection is done at the end
const reactElement=React.createElement(
    'a',
    {href:'https://google.com',target: '_blank'},'Click me to visit google',anotheruser
)


ReactDOM.createRoot(document.getElementById('root')).render // ye jo render he vo expect kar raha he ki jo object(ReactElement)he uska ek particular syntax ho tree wala na ho to vo run nahi kar raha he isliye humne ek naya object banaya he aise syntax me jo react render kare 
(   
    // <App />
    // <myApp />
    // anotherElement
    reactElement
)
