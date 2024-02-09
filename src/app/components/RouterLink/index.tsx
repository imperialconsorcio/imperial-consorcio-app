import Link from 'next/link'

type RouterProps = {
    route: string
    title: string
    classStyle?: string 
}

const RouterLink = ({ route, title, classStyle }: RouterProps) => {
  return (
    <li>
      <Link href={route} className={`${classStyle} text-white font-bold md:text-base text-lg md:inline block`}>
          {title}
      </Link>
    </li>
  )
}

export default RouterLink