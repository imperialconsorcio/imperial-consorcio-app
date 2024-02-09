import Link from 'next/link';
import './initialPage.scss';

const InitialPage = () => {
  return (
    <section className="home__bg-image min-h-[100vh] flex justify-center items-center">
        <section className="xl:w-[82%] w-[90%] text-white flex flex-col items-start gap-7">
          <p className="lg:text-[3.5rem] md:w-[80%] lg:w-[60%] text-[3rem] text-left leading-tight">
            Realize seus <span className="font-semibold">sonhos</span> com a <span className="font-semibold">Imperial</span>!
          </p>
          <p className="text-lg">Tem dúvidas sobre o consórcio?</p>
          <Link href='/#whatis' className="bg-[#7F3CE0] btn btn-primary glass font-semibold md:text-sm lg:py-3 lg:px-7 py-3 px-3 rounded-[5px] uppercase">
            Saiba mais
          </Link>
        </section>
      </section>
  )
}

export default InitialPage