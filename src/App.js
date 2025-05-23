import "./App.css"
import React, { useState, useRef, useEffect } from "react"
import Navbar from "./components/navbar"
import TypeOne from "./pages/typeOne"
import TypeTwo from "./pages/typeTwo"
import Loading from "./components/Loading"
import { pi } from "./constants"

function App() {
  const [type, setType] = useState(null)
  const keyboard = useRef()

  const changeType = () => {
    if (type === null) {
      return
    }
    setType((type + 1) % 2)
  }
  const handleOSK = () => {
    let d = window.getComputedStyle(keyboard.current).getPropertyValue("display")
    d === "flex" ? (keyboard.current.style.display = "none") : (keyboard.current.style.display = "flex")
  }

  useEffect(() => {
    console.log("Type changed to:", type)

    if (type === 0) {
      localStorage.setItem("type", 0)
    }
    if (type === 1) {
      localStorage.setItem("type", 1)
    }
  }, [type])

  useEffect(() => {
    const storedType = localStorage.getItem("type")
    if (storedType) {
      console.log("Stored type found:", storedType)

      setType(parseInt(storedType))
    } else {
      console.log("No stored type found, defaulting to 0")
      setType(0)
    }
  }, [])

  if (type === null) {
    return <Loading />
  }

  return (
    <>
      <div className="body">{type === 0 ? <TypeOne keyboard={keyboard} handleOSK={handleOSK} pi={pi} changeType={changeType} /> : <TypeTwo keyboard={keyboard} pi={pi} handleOSK={handleOSK} changeType={changeType} />}</div>
    </>
  )
}

export default App
