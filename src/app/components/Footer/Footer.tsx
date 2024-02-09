import Link from 'next/link';
import Image from 'next/image';
import logo from '@/assets/images/group.avif';
import whatsapp from '../../../assets/icons/whatsapp.svg';
import facebook from '../../../assets/icons/facebook.svg';
import instagram from '../../../assets/icons/instagram.svg';
import { LinkProps } from '@/app/types/Props';
import { PropsWithChildren } from 'react';


export const PLink = ({ children, href, classStyle }: PropsWithChildren<LinkProps>) => {
  return (
    <Link href={href} className={`${classStyle} text-slate-300`}>{children}</Link>
  )
}

export const ShortParagraph = ({ children, classStyle }: PropsWithChildren<LinkProps>) => {
  return (
    <p className={`${classStyle} text-slate-300`}>{children}</p>
  )
}

const PHeader = ({ children }: PropsWithChildren) => {
  return (
    <header className="font-bold uppercase text-white mb-4">{children}</header>
  )
}

const Footer = () => {
  return (
    <footer className='bg-purple-clear'>
      <footer className="footer bg-purple-clear min-h-screen md:min-h-full text-lg md:text-base text-white py-20 md:py-10 pl-10 md:px-10 flex flex-col md:flex-row justify-around md:gap-0">
        <nav>
          <PHeader>Mais Informações</PHeader>
          <ShortParagraph href='l'>Segunda a Sexta de 08:00 às 18:00, <br />exceto feriados.</ShortParagraph>
          <ShortParagraph href='l'>Rua Sátiro Dias, N° 387 - Montese -<br /> Fortaleza - CE.</ShortParagraph>
        </nav>
        <nav>
          <PHeader>Empresa</PHeader>
          <PLink href='/'>Home</PLink>
          <PLink href='/#whatis'>O que é</PLink>
          <PLink href='/#advantages'>Vantagens</PLink>
          <PLink href='/#howtodo'>Como funciona</PLink>
        </nav>
        <nav>
          <PHeader>Fale Conosco</PHeader>
          <ShortParagraph href='/mailto:imperial@gmail.com'>imperial@gmail.com</ShortParagraph>
          <ShortParagraph href='/#advantages'>Telefone: (85) 3111-3371</ShortParagraph>
        </nav>
      </footer>
      <footer className="footer py-16 px-10 bg-purple-clear h-[40vh] md:h-auto text-lg md:text-base text-white flex flex-col justify-center items-center md:flex-row md:justify-center gap-6 md:gap-28">
        <aside className='flex flex-col items-center justify-end'>
          <Image
            src={logo}
            alt='Logo'
            width={150}
          />
        </aside>
        <nav className='flex gap-5'>
          <Link href="https://www.instagram.com/imperialconsorcio/?hl=en" target='_blank'>
            <Image 
              src={instagram}
              alt='Logo Instagram'
            />
          </Link>
          <Link href="https://www.facebook.com/imperialconsorcio/" target='_blank'>
            <Image
              src={facebook}
              alt='Logo Facebook'
            />
          </Link>
          <Link href='https://wa.me/5585996667562' target='_blank'>
            <Image
              src={whatsapp}
              alt={"Logo WhatsApp"}
            />
          </Link>
        </nav>
        <p className='flex text-base'>
          Feito com 💙 por
          <Link href='https://www.linkedin.com/in/abner-sousa/' target='_blank' className='hover:underline'>
            Abner Sousa
          </Link>
        </p>
      </footer>
    </footer>
  )
}

export default Footer;