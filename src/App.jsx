import { Route, Routes, useLocation } from "react-router-dom"
import Home from "./pages/Home"
import Courses from "./pages/Courses"
import { useEffect } from "react"


function App() {
  let location = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location])
  return(
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/courses" element={<Courses />} />
    </Routes>
  )
}

export default App