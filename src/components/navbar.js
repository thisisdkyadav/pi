import React from 'react'

const navbar = ({handleOSK,reset,changeType,help}) => {
  return (
    
    <div className="nav">
    <img className='logo' src="logo.png" alt="" />
    <div className="navigation">
        <ul className='large-menu'>
            {/* <li>Home</li> */}
            <li onClick={reset}>Reset</li>
            <li onClick={handleOSK}>onScreenKeyboard</li>
            <li onClick={changeType}>ChangeType</li>
            <li onClick={help}>Help</li>
        </ul>
        <ul className='mini-menu'>
            {/* <li>Home</li> */}
            <li onClick={reset}><img src="reset.svg"/></li>
            <li onClick={handleOSK}><img src="numpad.svg"/></li>
            <li onClick={changeType}><img src="change.svg" alt="" /></li>
            <li onClick={help}><img src="help.svg" alt="" /></li>
        </ul>
    </div>
  </div>
  )
}

export default navbar