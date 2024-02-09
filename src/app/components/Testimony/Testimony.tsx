'use client';
import Subtitle from '../Subtitle/Subtitle';
import { useEffect, useState } from 'react';
import { InstagramEmbed } from 'react-social-media-embed';

const Testimony = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(true);
  const checkScreenSize = () => {
    setIsSmallScreen(window.innerWidth < 900);
  };

  useEffect(() => {
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => {
      window.removeEventListener('resize', checkScreenSize);
    };
  }, []);

  return (
    <section className="advantage__bg-white min-h-min flex flex-col justify-center items-center py-52">
      <Subtitle classStyle="">
        Confira os depoimentos de quem já realizou seus sonhos
      </Subtitle>

      <section
        className={`
                    ${
                      isSmallScreen
                        ? 'carousel carousel-center max-w-full p-4 space-x-4'
                        : 'flex flex-wrap justify-center'
                    } gap-6 md:gap-14 pt-14`}
      >
        <div>
          <InstagramEmbed
            url="https://www.instagram.com/reel/CxVmHXjrRM9/?utm_source=ig_embed&amp;utm_campaign=loading"
            width={328}
          />
        </div>
        <div>
          <InstagramEmbed
            url="https://www.instagram.com/reel/CklGuhiDXzg/?utm_source=ig_embed&amp;utm_campaign=loading"
            width={328}
          />
        </div>
        <div>
          <InstagramEmbed
            url="https://www.instagram.com/reel/CjQ5IV7Jg0V/?utm_source=ig_embed&amp;utm_campaign=loading"
            width={328}
          />
        </div>
      </section>
    </section>
  );
};

export default Testimony;
