'use client'
import { IStepCardProps } from '@/app/types/Props'

const StepCard = ({ stepDescription, stepTitle, stepCount, isSmallScreen, classStyle }: IStepCardProps) => {

  return (
    <section className={`${isSmallScreen ? 'border-y-2 border-y-solid border-y-[#570DF8] h-60 relative carousel-item w-full flex flex-col justify-center py-5' : 'relative w-56 h-auto text-center flex flex-col justify-start'}`}>
      <section className='mb-6 lg:mb-12'>
        <span className={`${classStyle} bg-[#570DF8] text-2xl lg:text-lg text-white px-5 py-1 rounded-full`}>
          {stepCount}
        </span>
      </section>
      <section className='flex flex-col'>
        <h4 className='text-[#42B4EE] text-2xl font-light lg:text-xl mb-4'>{stepTitle}</h4>
        <p className='text-xl font-light lg:text-[1.1rem]'>{stepDescription}</p>
      </section>
    </section>
  )
}

export default StepCard