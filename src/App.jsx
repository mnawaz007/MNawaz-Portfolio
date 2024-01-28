// import { useState } from 'react'
import './App.css'
import Header from './Components/header'
import Main from './Components/body'
import Projects from './Components/projects'
import Contact from './Components/contact'
import Accordion from './Components/accordion'
import Pricing from './Components/pricing'
import Footer from './Components/footer'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>     
      <div className="">
      <Header/>
      <Main/>
      <Projects/>
      <Contact/>
      <Pricing/>
      <Accordion/>
      <Footer/> 
        </div>     
     
    </>
  )
}

export default App
