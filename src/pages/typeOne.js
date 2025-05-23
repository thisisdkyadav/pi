import { useEffect, useRef } from "react"
import Navbar from "../components/navbar"
import Keyboard from "../components/Keyboard"

const TypeOne = ({ handleOSK, changeType, pi, keyboard }) => {
  const currentDigit = useRef("1")
  const displayRef = useRef()
  const nth = useRef(0)
  const lastPress = useRef()
  const isCorrect = useRef()
  const info = useRef()
  const place = useRef()
  const show = useRef()

  const keyPress = (event) => {
    document.removeEventListener("keydown", keyPress, false)
    let a = event.key
    lastPress.current.innerHTML = a
    if (a == currentDigit.current) {
      isCorrect.current.innerHTML = "correct"
      isCorrect.current.style.color = "#12c812"
      nth.current += 1
      displayRef.current.innerHTML = displayRef.current.innerHTML + currentDigit.current
      place.current.innerHTML = nth.current + 1
      show.current.innerHTML = " "
      currentDigit.current = pi[nth.current]
    } else {
      isCorrect.current.innerHTML = "incorrect"
      isCorrect.current.style.color = "red"
    }
    document.addEventListener("keydown", keyPress, false)
  }

  const handleClick = () => {
    show.current.innerHTML = currentDigit.current
  }

  const handleKeyboard = (e) => {
    keyPress({ key: e.target.id })
  }
  const reset = () => {
    displayRef.current.innerHTML = "3."
    place.current.innerHTML = 1
    nth.current = 0
    currentDigit.current = pi[nth.current]
    show.current.innerHTML = " "
    isCorrect.current.innerHTML = "none"
    isCorrect.current.style.color = "#000000"
    lastPress.current.innerHTML = "none"
  }

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
        <div className="content">
          <div className="info" ref={info}>
            <span className="s1">Last pressed key :</span>
            <span className="s2" ref={lastPress}>
              none
            </span>
            <span className="s3" ref={isCorrect}>
              none
            </span>
            <span className="s2" ref={place}>
              1
            </span>
          </div>
          <div className="value" ref={displayRef}>
            3.
          </div>
          <div className="show" ref={info}>
            <span ref={show}></span>
            <button onClick={handleClick}>Show current digit</button>
          </div>
        </div>
        <Keyboard keyboard={keyboard} handleKey={handleKeyboard} />
      </div>
    </>
  )
}

export default TypeOne
