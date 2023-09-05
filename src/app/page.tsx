import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div>
      Tela de login
      <Link href={'/home'}>
      Entre na home
      </Link>
    </div>
  )
}
