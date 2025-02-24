import { Route, Routes, useLocation } from "react-router-dom"
import Home from "./pages/Home"
import Courses from "./pages/Courses"
import { useEffect } from "react"
import About from "./pages/About"
import { useState } from "react"


function App() {
  let location = useLocation()
  const [isDesktop, setIsDesktop] = useState(false)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location])
  useEffect(() => {
    const checkDevice = () => {
      setIsDesktop(window.innerWidth > 1230)
    }

    checkDevice();
    window.addEventListener("resize", checkDevice);

    return () => window.removeEventListener("resize", checkDevice)
  }, [])
  return(
    <div>
      {isDesktop ? (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/about" element={<About />} />
        </Routes>
      ) : (
        <div className="text-red-500 text-xl font-bold text-center p-4">
          <p>Designer didn't give me an adaptive design so use from Laptop/Desktop.</p>
        </div>
      )}
    </div>
  )
}

export default App