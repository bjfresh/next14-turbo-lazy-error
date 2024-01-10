import { clsx } from 'clsx'

import { Test1 } from '@/components'

export default function FPHome() {
  return (
    <main className={clsx('flex flex-col gap-5 flex-1 justify-center items-center')}>
      <Test1 />
    </main>
  )
}
