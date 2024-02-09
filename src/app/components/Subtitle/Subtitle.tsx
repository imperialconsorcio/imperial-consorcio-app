import { PropsWithChildren } from 'react'

type PersonalProps = {
  classStyle?: string
}

const Subtitle = ({ children, classStyle }: PropsWithChildren<PersonalProps>) => {
  return (
    <h2 className={`text-[#42B4EE] text-center sm:text-5xl text-4xl font-bold mb-5 ${classStyle}`}>
      {children}
    </h2>
  )
}

export default Subtitle