import cinsoft from '../assets/eventos/cinsoft.jpg';
import aiweek from '../assets/eventos/ai weekend.jpg';
import BoxReveal from './magicui/box-reveal';

export const Proximamente = () => {
  return (
    <section className='flex flex-col mt-12 mb-32' id='soon'>
        <div className='flex flex-col items-center lg:items-start lg:ml-60'>
        <BoxReveal boxColor={'#0371a4'} duration={0.3}>
            <h1 className='text-7xl lg:text-9xl text-[#0371a4] font-bold font-bebas'>
                PROXIMAMENTE
            </h1>
        </BoxReveal>

        <BoxReveal boxColor={'#0371a4'} duration={0.4}>
            <p className="text-sm lg:text-xl text-center font-jetbrains mt-4 max-w-6xl whitespace-normal break-words px-6 lg:px-0 text-black">    
                ¡Prepárate para sumergirte en una serie emocionante de eventos que están a punto de llegar a la Rama Estudiantil IEEE - ESTl! Aquí hay un vistazo a lo que te espera en el futuro cercano.
            </p>
        </BoxReveal>

            <div className='flex flex-col lg:flex-row items-center justify-center gap-6 mt-8 lg:ml-20'>
                <BoxReveal boxColor={'#0371a4'} duration={0.5}>
                    <img src={cinsoft} alt="" className='rounded-xl lg:w-[500px] w-[300px] hover:scale-90 transition-all duration-300'/>
                </BoxReveal>
                <BoxReveal boxColor={'#0371a4'} duration={0.5}>
                    <img src={aiweek} alt="" className='rounded-xl lg:w-[500px] w-[300px] hover:scale-90 transition-all duration-300' />
                </BoxReveal>
                
            </div>
        </div>
    </section>
  )
}
