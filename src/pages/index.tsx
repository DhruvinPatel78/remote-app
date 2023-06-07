import { Inter } from 'next/font/google'
import Counter from '../components/Counter'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
      <main className="flex min-h-screen flex-col items-center justify-center p-24 gap-10">
        <p className={'m-0 p-0'}>Remote App</p>
        <Counter defaultCount={0} />
      </main>
  )
}
