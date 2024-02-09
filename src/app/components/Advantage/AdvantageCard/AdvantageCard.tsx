import Image, { StaticImageData } from 'next/image'

type AdvantageProps = {
  title: string
  description: string
  src: StaticImageData
  alt: string
}

const AdvantageCard = ({ title, description, src, alt }: AdvantageProps) => {
  return (
    <li className="advantage__bg-image flex flex-row md:flex-col justify-start md:gap-0 gap-4 items-center md:items-center w-[90%] md:w-[25rem] h-[15rem] md:h-[17rem] bg-[#F5F6FA] rounded-xl p-4 md:px-3 md:py-4">
      <section className='w-[20%] h-[35%] md:w-auto flex justify-start'>
        <Image
          src={src}
          alt={alt}
          width={45}
          className="mb-0 md:mb-4 text-white"
        />
      </section>
      <section className='w-[80%] md:w-auto'>
        <h4 className="text-white text-center text-xl font-semibold mb-6">{title}</h4>
        <p className='text-white text-center'>{description}</p>
      </section>
    </li>
  )
}

export default AdvantageCard