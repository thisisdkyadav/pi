import React from "react"
import { useEffect, useRef, useState } from "react"
import Navbar from "../components/navbar"
import Keyboard from "../components/Keyboard"

const TypeTwo = ({ pi, handleOSK, changeType, keyboard }) => {
  const [displayResult, setDisplayResult] = useState(false)

  const info = useRef()
  const show = useRef()
  const digitsDisplay = useRef()
  const resultDiv = useRef()
  const html = useRef("")

  const showResult = () => {
    console.log(displayResult)

    if (displayResult) {
      setDisplayResult(false)
    } else {
      let a = 0
      let s = digitsDisplay.current.innerHTML
      let count_a = true
      html.current = ""

      for (let i = 0; i < s.length; i++) {
        if (pi[i] == s[i]) {
          count_a && a++
          html.current += `<span>${s[i]}</span>`
        } else {
          count_a = false
          html.current += `<span class='red'>${s[i]}</span>`
        }
      }
      show.current.innerHTML = a

      setDisplayResult(true)
    }
  }
  const keySet = (event) => {
    console.log(displayResult, event.key)

    if (displayResult) {
      setDisplayResult(false)
    } else {
      if (event.key == "Backspace" || event.key == "Delete" || event.key == "X" || event.key == "x") {
        digitsDisplay.current.innerHTML = digitsDisplay.current.innerHTML.slice(0, -1)
      } else {
        digitsDisplay.current.innerHTML += event.key
      }
    }
  }
  const handleKey = (e) => {
    keySet({ key: e.target.id })
  }
  const reset = () => {
    if (displayResult) {
      setDisplayResult(false)
    } else {
      digitsDisplay.current.innerHTML = ""
      show.current.innerHTML = " "
    }
  }
  const keyPress = (event) => {
    console.log(displayResult)
    document.removeEventListener("keydown", keyPress, false)
    let a = event.key
    if (a in [0, 1, 2, 3, 4, 5, 6, 7, 8, 9] || a == "Backspace" || a == "Delete" || a == "X" || a == "x") {
      keySet(event)
    } else if (event.key == "Enter") {
      showResult()
    } else if (event.key == "Escape" || event.key == "Esc" || event.key == "R" || event.key == "r") {
      reset()
    }
    document.addEventListener("keydown", keyPress, false)
  }

  useEffect(() => {
    console.log(displayResult)

    if (displayResult) {
      resultDiv.current.innerHTML = html.current
    } else {
      reset()
    }
  }, [displayResult])
  useEffect(() => {
    document.addEventListener("keydown", keyPress, false)
    return () => {
      document.removeEventListener("keydown", keyPress, false)
    }
  }, [])

  return (
    <>
      <Navbar handleOSK={handleOSK} reset={reset} changeType={changeType} />

      <div className="main">
        <div className="content type-two">
          <div className="value input-area">3.{displayResult ? <div ref={resultDiv}></div> : <div ref={digitsDisplay}></div>}</div>

          <div className="show" ref={info}>
            <span ref={show}></span>
            <button onClick={showResult}>{displayResult ? "Reset" : "Show result"}</button>
          </div>
        </div>
        <Keyboard handleKey={handleKey} keyboard={keyboard} />
      </div>
    </>
  )
}

export default TypeTwo
