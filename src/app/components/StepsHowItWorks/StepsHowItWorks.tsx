'use client'
import './stepsHowItWorks.scss';
import StepCard from "./StepCard/StepCard"
import { useEffect, useState } from 'react';


const StepsHowItWorks = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(true);
  const checkScreenSize = () => {
    setIsSmallScreen(window.innerWidth < 1040);
  };

  useEffect(() => {
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => {
      window.removeEventListener('resize', checkScreenSize);
    };
  }, []);

  return (
    <section id="howtodo" className="advantage__bg-white min-h-screen py-52 w-full flex flex-col justify-center items-center">

      <section className="text-center w-[95%] mb-10 lg:mb-32">
        <h2 className="text-[#42B4EE] sm:text-5xl text-4xl font-bold mb-5">Entenda o consórcio em 4 passos</h2>
        <p className='text-[#6b7280] font-light text-2xl'>Veja quais são as etapas de um consórcio desde o início até o fim.</p>
      </section>

      <section className={`${isSmallScreen ? 'w-full h-[80vh] text-center carousel rounded-box flex items-center' : 'flex flex-wrap justify-center w-full gap-12 md:gap-6 lg:gap-12'}`}>
        <StepCard
          classStyle='indicator-p'
          stepTitle='Consultoria Exclusiva'
          stepCount='1º passo'
          stepDescription='Cuidamos dos seus interesses te oferecendo o melhor parcelamento pra você.'
          isSmallScreen={isSmallScreen}
        />
        <StepCard
          classStyle='indicator-p'
          stepTitle='Fechamento de Contrato'
          stepCount='2º passo'
          stepDescription="Contrato assegurado pelo Banco Central do Brasil para maior segurança do cliente."
          isSmallScreen={isSmallScreen}
        />
        <StepCard
          classStyle='indicator-p'
          stepTitle='Contemplação'
          stepCount='3º passo'
          stepDescription="Após crédito liberado através de sorteio ou lance, você contará com uma assessoria qualificada para sua maior comodidade. Te acompanhamos em todo o processo."
          isSmallScreen={isSmallScreen}
        />
        <StepCard
          stepTitle='Compra do bem'
          stepCount='4º passo'
          stepDescription="Seja feliz em posse de seu bem, pagando parcelas que se adequam ao seu bolso, e conte conosco para novas conquistas!"
          isSmallScreen={isSmallScreen}
        />
      </section>
    </section>
  )
}

export default StepsHowItWorks