import { BrowserRouter, Routes, Route } from "react-router-dom"

import HomePage from "./pages/HomePage"
import Header from "./components/Header"

const App = () => {

  return (
   <BrowserRouter>
   <Header />
   <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/comments" element={<HomePage />} />
   </Routes>
   </BrowserRouter>
  )
}

export default App
