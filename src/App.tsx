import Navbar from "./components/Navbar"
import { Inicio } from "./components/Inicio"

function App() {

  return (
    <>
      <Navbar/>

      <main className="flex flex-col items-center justify-center mt-32">
        <Inicio/>
      </main>
    </>
  )
}

export default App
