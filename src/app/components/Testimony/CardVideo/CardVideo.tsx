'use client'
import { useState } from 'react'
import './cardVideo.scss'

const CardVideo = ({ nameWitness, src, isSmallScreen }: { nameWitness: string, src: string, isSmallScreen: boolean }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <section className={`${isSmallScreen && 'carousel-item flex flex-col'} bg-white relative rounded-lg card-video__container p-4`}>
        <iframe className='w-[23rem] h-[13rem] md:w-[20rem] md:h-[11.5rem] rounded-box mb-3' src={src} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
        <section className='flex justify-between items-center'>
          <h3 className='text-gray-800 font-medium pl-2'>{nameWitness} | Cliente</h3>
          <button className='btn btn-primary btn-sm glass text-[#7F3CE0] hover:text-white' onClick={() => setShowModal(true)}>Assistir</button>
        </section> 

        {showModal && <dialog open className='card-video__modal fixed z-10 top-0 left-0 w-screen h-screen flex flex-col items-center justify-center gap-4'>
          <button className='btn btn-primary glass text-[#7F3CE0] hover:text-white' onClick={() => setShowModal(false)}>Fechar</button>
          <iframe className='rounded-box w-[25rem] h-[16rem] sm:w-[34rem] sm:h-[20rem] md:w-[46rem] md:h-[26rem]' src={src} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
        </dialog>}
    </section>
  )
}

export default CardVideo