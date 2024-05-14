import { Footer, Navbar } from "./components"
import { RouterApp } from "./router/RouterApp"

export const App = () => {
  return (
    <div>
      <Navbar />
      <RouterApp />
      <Footer />
    </div>
  )
}


