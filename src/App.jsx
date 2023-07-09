import { BrowserRouter, Routes, Route } from "react-router-dom"

import Header from "./components/Header"
import Footer from "./components/Footer"
import HomePage from "./pages/HomePage"
import ShowsPage from "./pages/ShowsPage"


const App = () => {

  return (
   <BrowserRouter>
   <Header />
   <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/comments" element={<HomePage />} />
    <Route path="/shows" element={<ShowsPage />} />
   </Routes>
   <Footer />
   </BrowserRouter>
  )
}

export default App
