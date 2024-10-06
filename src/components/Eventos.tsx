import { FadeText } from "@/components/magicui/fade-text";
import BoxReveal from "./magicui/box-reveal";
import { useState, useEffect } from "react";
 
import { CarouselEvents } from "./CarouselEvents";


export const Eventos = () => {

  const [activeIndex, setActiveIndex] = useState(0); 

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % 3);
    }, 1500);

    return () => {
      clearInterval(interval);
    };
  },[]);

  const getTextColor = (index: number) => 
    index === activeIndex ? 'text-ieee' : 'text-black dark:text-white';

  return (
    <section className='flex flex-col mt-12 mb-32' id='events'>
        <div className='flex flex-col items-center lg:items-start lg:ml-60'>
        <BoxReveal boxColor={'#0371a4'} duration={0.4}>   
            <h1 className='text-7xl lg:text-9xl text-ieee font-bold font-bebas'>
                EVENTOS
            </h1>
        </BoxReveal>

        <BoxReveal boxColor={'#0371a4'} duration={0.6}>   
            <p className="text-sm lg:text-xl text-center font-jetbrains mt-4 max-w-6xl whitespace-normal break-words px-6 lg:px-0 text-black">
                Nos esforzamos por ofrecer una amplia gama de actividades diseñadas para enriquecer la experiencia educativa de nuestros miembros, así como para fomentar el crecimiento profesional y personal.
            </p>
        </BoxReveal>


        </div>

        <div className="flex lg:flex-row flex-col items-center justify-center lg:gap-x-20 gap-y-10">

        <div className="flex flex-col items-center space-y-8 text-center mt-12">

            <FadeText
              className={`text-4xl lg:text-5xl font-black transition-colors duration-500 ${getTextColor(0)}`}
              direction="up"
              framerProps={{
                show: { transition: { delay: 0.2 } },
              }}
              text="CONFERENCIAS"
            />

            <FadeText
              className={`text-4xl lg:text-5xl font-black transition-colors duration-500 ${getTextColor(1)}`}
              direction="right"
              framerProps={{
                show: { transition: { delay: 0.4 } },
              }}
              text="TALLERES"
            />

            <FadeText
              className={`text-4xl lg:text-5xl font-black transition-colors duration-500 ${getTextColor(2)}`}
              direction="down"
              framerProps={{
                show: { transition: { delay: 0.6 } },
              }}
              text="HACKATHON"
            />
        </div>

        <div className="mt-20">

          <CarouselEvents/>
        </div>

        </div>
    </section>
  )
}
