import { Inicio } from "@/components/Inicio"
import { Carousel } from "@/components/Carousel"
import { FAQ } from '@/components/FAQ'
import { Unete } from "@/components/Unete"
import { Eventos } from "@/components/Eventos"

function App() {

  return (
    <>
      <main className="mt-32 bg-white">
        <Inicio/>
        <Carousel/>
        <Eventos/>
        <Unete/>
        <FAQ/>
      </main>
    </>
  )
}

export default App
