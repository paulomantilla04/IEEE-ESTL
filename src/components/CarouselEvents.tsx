
import { useState } from 'react';

import cloudWeekend from '@/assets/eventos/cloudWeekend.jpeg';
import talentLand from '@/assets/eventos/talentLand.jpeg';
import tallerGit from '@/assets/eventos/tallerGit.jpeg';
import tallerSql from '@/assets/eventos/tallerSql.jpeg';
import welcomeBack from '@/assets/eventos/welcomeBack_2024.jpg';

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"



export function CarouselEvents() {

    const [isHovered, setIsHovered] = useState(false);

    // object of images
    const images = [
        {
            id: 1,
            img: cloudWeekend,
            title: 'Cloud Weekend',
            description: 'Conferencia: Cloud Computing',
            alt: 'Cloud Weekend',
        },
        {
            id: 2,
            img: talentLand,
            title: 'Talent Land 2024',
            description: 'Talent World | Conferencia', 
            alt: 'Talent Land',
        },
        {
            id: 3,
            img: tallerGit,
            alt: 'Taller de Git',
            title: 'IEEE - ESTl Student Workshops',
            description: 'Taller: Git desde cero',
        },
        {
            id: 4,
            img: tallerSql,
            title: 'IEEE - ESTl Student Workshops',
            description: 'Taller: PostgreSQL desde cero',
            alt: 'Taller de SQL',
        },
        {
            id: 5,
            img: welcomeBack,
            title: 'Welcome Back 2024',
            description: 'Bienvenida a nuevos miembros',
            alt: 'Welcome Back',
        },
    ];
    
  return (
    <Carousel className="w-full max-w-xs lg:max-w-md select-none" orientation="vertical" opts={{ align: 'start', loop: true}}>
      <CarouselContent className="-mt-1 h-[350px]">
        
        {images.map((image) => (
            <CarouselItem key={image.id} className="">
                <div className="p-1">
                    <Card>
                        <CardContent className="flex items-center justify-center p-6 cursor-pointer transition-all duration-300 ">
                            <div className='relative' onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
                                <img src={image.img} alt={image.alt} className="object-cover rounded-xl w-[300px]" />
                                <div className={`transition-opacity duration-200 ${isHovered ? 'opacity-70' : 'opacity-0'} absolute inset-0 bg-gradient-to-t from-black to-transparent rounded-xl`}></div>
                                <div className={`transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'} absolute bottom-0 left-0 p-4 text-white`}>
                                    <h2 className="text-xl font-bold">{image.title}</h2>
                                    <p className='text-sm font-semibold'>{image.description}</p>
                                </div>
                            </div>
                            
                        </CardContent>
                    </Card>
                </div>
            </CarouselItem>
        ),)}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}
