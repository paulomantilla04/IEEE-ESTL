import { Inicio } from "@/components/Inicio"
import { Carousel } from "@/components/Carousel"
import { FAQ } from '@/components/FAQ'
import { Unete } from "@/components/Unete"

function App() {

  return (
    <>
      <main className="mt-32 bg-white">
        <Inicio/>
        <Carousel/>
        <Unete/>
        <FAQ/>
      </main>
    </>
  )
}

export default App
