
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Signup from "./pages/Signup"
import Dashboard from "./pages/Dashboard"
import Sendmoney from "./pages/Sendmoney"
import Signin from "./pages/Signin"
function App() {

  return (
    <div className="bg-black">
      <BrowserRouter>

        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/sendmoney" element={<Sendmoney />} />


        </Routes>
      </BrowserRouter>

    </div>
  )
}

export default App
