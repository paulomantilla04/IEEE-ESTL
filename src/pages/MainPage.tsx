import { Inicio } from "@/components/Inicio"
import { Carousel } from "@/components/Carousel"
import { FAQ } from '@/components/FAQ'

function App() {

  return (
    <>
      <main className="mt-32 bg-white">
        <Inicio/>
        <Carousel/>
        <FAQ/>
      </main>
    </>
  )
}

export default App
