import { Inicio } from "@/components/Inicio"
import { Carousel } from "@/components/Carousel"
import { FAQ } from '@/components/FAQ'
import { Unete } from "@/components/Unete"
import { Eventos } from "@/components/Eventos"
import { Proximamente } from "@/components/Proximamente"

function App() {

  return (
    <>
      <main className="mt-32 bg-white">
        <Inicio/>
        <Carousel/>
        <Eventos/>
        <Proximamente/>
        <Unete/>
        <FAQ/>
      </main>
    </>
  )
}

export default App
