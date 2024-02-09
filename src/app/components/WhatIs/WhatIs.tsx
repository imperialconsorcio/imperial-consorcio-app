
const WhatIs = () => {
  return (
    <section id='whatis' className="bg-purple-p min-h-[70vh] lg:min-h-screen flex justify-center items-center py-20">
      <section className="flex flex-col lg:flex-row justify-around items-center md:w-[90%] w-[95%] text-white">

        <h3 className="text-left sm:text-5xl text-4xl font-bold lg:mb-0 mb-12">
          O que é consórcio?
        </h3>
        
        <section className="w-full text-lg md:text-2xl lg:text-xl leading-7 flex flex-col justify-between gap-10">
          <p className="border-l-4 border-white border-solid pl-3">
            O consórcio é uma modalidade de investimento segura e mais econômica para programar compra 
            de bens de forma parcelada.
          </p>
          <p className="border-l-4 border-white border-solid pl-3">
            Abrange públicos como famílias e empresas que se autofinanciam em grupos com o mesmo objetivo. 
            Sejam carros, motos, imóveis, pesados, maquinário agrícola, e serviços diversos.
          </p>
          <p className="border-l-4 border-white border-solid pl-3">
            No consórcio, todos os participantes têm a mesma chance de adquirir seu bem por sorteio ou lance, 
            encontre um de nossos consultores e tire suas dúvidas!
          </p>
        </section>
      </section>
    </section>
  )
}

export default WhatIs