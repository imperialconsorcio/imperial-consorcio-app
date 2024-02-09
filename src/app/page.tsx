import Advantage from "./components/Advantage/Advantage";
import InitialPage from "./components/InitialPage/InitialPage";
import ReachUs from "./components/ReachUs/ReachUs";
import StepsHowItWorks from "./components/StepsHowItWorks/StepsHowItWorks";
import Testimony from "./components/Testimony/Testimony";
import WhatIs from "./components/WhatIs/WhatIs";

export default function Home() {
  return (
    <section>
      <InitialPage />
      <Advantage />
      <WhatIs />
      <StepsHowItWorks />
      <ReachUs />
      <Testimony />
    </section>
  )
}
