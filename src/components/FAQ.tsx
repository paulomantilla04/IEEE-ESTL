import BoxReveal from '@/components/magicui/box-reveal';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

  const accordionData = [
    {
        id: "item-1",
        question: "¿Qué es el IEEE?",
        answer: "IEEE significa 'Institute of Electrical and Electronics Engineers' (Instituto de Ingenieros Eléctricos y Electrónicos), es una organización profesional internacional dedicada al avance de la tecnología en diversas áreas, como la ingeniería eléctrica, la electrónica, las telecomunicaciones, la informática y áreas relacionadas. Nuestra rama es una subdivisión local de esta organización."
    },
    {
        id: "item-2",
        question: "¿Qué es la rama estudiantil IEEE - UAEH Escuela Superior de Tlahuelilpan?",
        answer: "Permite a los estudiantes de la universidad participar en actividades y eventos relacionados con la tecnología, la ingeniería y la ciencia. Además, la rama estudiantil de IEEE en nuestra universidad ofrece oportunidades para que los estudiantes se conecten con profesionales de la industria y otros estudiantes de todo el mundo."
    },
    {
        id: "item-3",
        question: "¿Cuáles son los beneficios de pertenecer a la rama estudiantil?",
        answer: "Participar en actividades del instituto. Descuentos exclusivos para miembros. Formar parte del comité de la rama estudiantil. Correo electrónico con dominio del ieee.org"
    },
    {
        id: "item-4",
        question: "¿Qué tipo de actividades se realizan dentro de la rama estudiantil?",
        answer: "¡Talleres, conferencias, eventos y más! dentro de este sitio web te puedes enterar de las actividades que se realizan.",
    },
  ];

export const FAQ = () => {
  return (
    <section className="flex flex-col mt-12" id='faq'>
        <div className="flex flex-col items-center lg:items-start lg:ml-64">
            <BoxReveal boxColor={'#0371a4'} duration={0.3}>
                <h1 className="text-5xl lg:text-8xl text-[#0371a4] font-black">
                    FAQ    
                </h1>
            </BoxReveal>

            <BoxReveal boxColor={'#0371a4'} duration={0.4}>   
                <p className="text-sm lg:text-xl text-center  mt-8 max-w-6xl whitespace-normal break-words px-6 lg:px-0 text-black">
                    ¿Tienes alguna pregunta sobre la Rama Estudiantil IEEE - ESTl? Consulta nuestras preguntas frecuentes para obtener respuestas a algunas de las preguntas más comunes que recibimos.
                </p>
            </BoxReveal>
        </div>

        
        <div className='flex flex-col items-center text-left mt-16 mb-20'>
            <Accordion type="single" collapsible className="w-[75%] lg:w-[40%] text-black transition-all duration-200 ">
                <BoxReveal boxColor={'#0371a4'} duration={0.4}>
                    <div className=''>
                        {accordionData.map((item) => (
                            <AccordionItem key={item.id} value={item.id}>
                            <AccordionTrigger className='text-sm lg:text-xl text-left'>{item.question}</AccordionTrigger>
                            <AccordionContent className='text-tiny lg:text-lg'>{item.answer}</AccordionContent>
                            </AccordionItem>
                        ))}
                    </div>
                </BoxReveal>

            </Accordion> 
        </div>  
    </section>
  )
}
