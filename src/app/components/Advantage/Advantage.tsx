import AdvantageCard from "./AdvantageCard/AdvantageCard";

import rh from "@/assets/icons/rh.svg";
import handshake from "@/assets/icons/handshake.svg";
import chat from "@/assets/icons/speech-bubble-5.svg";
import checked from "@/assets/icons/check.svg";
import unlock from "@/assets/icons/unlock.svg";
import money from "@/assets/icons/money.svg";

import './advantage.scss'


const Advantage = () => {
  return (
    <section id="advantages" className="advantage__bg-white min-h-screen flex flex-col justify-center items-center py-52">
      <section className="text-center mb-20">
        <h2 className="text-[#42B4EE] sm:text-5xl text-4xl font-bold mb-5">
          As vantagens de ter uma consultoria Imperial
        </h2>
        <h3 className="text-[#6b7280] text-2xl font-light">Isso e muito mais.</h3>
      </section>
      <ul className="flex flex-wrap justify-center gap-4">
        <AdvantageCard
          title="Melhor Taxa Administrativa"
          description="Nossa consultoria encontra a melhor opção para seu investimento ter a maior lucratividade!"
          src={checked}
          alt="Sinal de check."
        />
        <AdvantageCard
          title="Descontos nas Parcelas"
          description="Temos parcelas reduzidas pela metade do preço até a contemplação.
          Não comprometendo o seu orçamento até estar com o seu sonho realizado!"
          src={money}
          alt="Sinal de check."
        />
        <AdvantageCard
          title="Consultores Especializados"
          description="Temos uma equipes de vendedores treinadas para encontrar o melhor negócio pra você, sua família ou empresa."
          src={unlock}
          alt="Porquinho de guardar dinheiro."
        />
        <AdvantageCard
          title="Flexibilidade de Uso"
          description="Pode ser usado para adquirir diversos bens, como imóveis, automóveis, motocicletas, eletrodomésticos, eletrônicos, e mais."
          src={chat}
          alt="Sinal de check."
        />
        <AdvantageCard
          title="Planos com Prazos Flexíveis"
          description="Nossos planos têm prazos definidos para quitação, variando conforme o tipo e valor do consórcio."
          src={handshake}
          alt="Sinal de check."
        />
        <AdvantageCard
          title="Consórcio Sem Juros"
          description="Ao contrário de financiamentos, o consórcio não tem juros, tornando-o uma opção 
          financeiramente mais vantajosa com apenas a taxa administrativa a ser considerada."
          src={rh}
          alt="Porquinho de guardar dinheiro."
        />
      </ul>
    </section>
  )
}

export default Advantage