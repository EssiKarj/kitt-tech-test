import React from 'react'

//Components
import Calculator from './components/Calculator'

//Images
import kittLogo from './images/kitt-logo.svg'

const App = () => {

  return (
    <div className='main-container'>
      <div className='section'>

        <div className='logo-container'>
          <img src={kittLogo} alt='kitt logo'></img>
        </div>

        <Calculator />
      </div>

    </div>
  )
}

export default App
