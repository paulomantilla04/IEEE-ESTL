import { Inicio } from "@/components/Inicio"
import { Carousel } from "@/components/Carousel"

function App() {

  return (
    <>
      <main className="flex flex-col items-center justify-center mt-32 bg-white">
        <Inicio/>
        <Carousel/>
      </main>
    </>
  )
}

export default App
