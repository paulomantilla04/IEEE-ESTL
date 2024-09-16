import Navbar from "./components/Navbar"
import { Inicio } from "./components/Inicio"
import { Carousel } from "./components/Carousel"

function App() {

  return (
    <>
      <Navbar/>

      <main className="flex flex-col items-center justify-center mt-32">
        <Inicio/>
        <Carousel/>
      </main>
    </>
  )
}

export default App
