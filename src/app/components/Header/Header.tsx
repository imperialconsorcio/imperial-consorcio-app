'use client'
import './header.scss';
import { useState } from 'react';
import RouterLink from '../RouterLink';
import Link from 'next/link';
import Image from 'next/image';
import logo from '@/assets/images/logocir.avif';

const Header = () => {
  const [isToggle, setIsToggle] = useState(false);

  return (
    <header className='header xl:px-[9%] md:px-[1%] px-[5%] text-white h-[15vh] flex items-center'>
      <Link href='/' className='lg:text-[2rem] text-[1.5rem] text-purple-500 font-bold'>
        <Image
          src={logo}
          alt='Logo'
          width={200}
        />
      </Link>


      <nav className={`${isToggle && 'header__nav--open-menu'} header__navbar`}>
        <ul className='flex flex-col justify-center md:flex-row  items-center lg:gap-8 gap-7 h-full'>
          <RouterLink title='O que é' route='/#whatis' />
          <RouterLink title='Vantagens' route='/#advantages' />
          <RouterLink title='Como funciona' route='/#howtodo' />
          <RouterLink
            title='Fale Conosco'
            route='/#reachus'
            classStyle='bg-[#7F3CE0] glass md:text-xs text-sm lg:py-3 lg:px-7 py-3 px-3 rounded-[5px] uppercase'
          />
        </ul>
      </nav>

      <div className="text-[3.5rem] md:hidden flex items-center">
        {isToggle
          ? <i className='bx bx-x' onClick={() => setIsToggle(!isToggle)} />
          : <i className='bx bx-menu-alt-right' onClick={() => setIsToggle(!isToggle)} />}
      </div>

    </header>
  )
}

export default Header