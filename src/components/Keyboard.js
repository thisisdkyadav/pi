import React from "react"

const Keyboard = ({ keyboard, handleKey }) => {
  return (
    <>
      <div className="keyboard" ref={keyboard}>
        <div id="1" className="key" onClick={handleKey}>
          1
        </div>
        <div id="2" className="key" onClick={handleKey}>
          2
        </div>
        <div id="3" className="key" onClick={handleKey}>
          3
        </div>
        <div id="4" className="key" onClick={handleKey}>
          4
        </div>
        <div id="5" className="key" onClick={handleKey}>
          5
        </div>
        <div id="6" className="key" onClick={handleKey}>
          6
        </div>
        <div id="7" className="key" onClick={handleKey}>
          7
        </div>
        <div id="8" className="key" onClick={handleKey}>
          8
        </div>
        <div id="9" className="key" onClick={handleKey}>
          9
        </div>
        <div id="" className="key" onClick={handleKey}></div>
        <div id="0" className="key" onClick={handleKey}>
          0
        </div>
        <div id="X" className="key" onClick={handleKey}>
          X
        </div>
      </div>
    </>
  )
}

export default Keyboard
