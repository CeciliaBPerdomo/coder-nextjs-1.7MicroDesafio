import Image from 'next/image'
import { Title } from '@/Components/Title'
import { Contador } from '@/Components/Contador.jsx'

export default function Home() {
  return (
      <main className="flex flex-col items-center justify-between">
        {/* <h1>Curso de Next</h1> */}
        <Title texto="Curso de Corder - Next"/>
        <Contador />
    </main>
  )
}
