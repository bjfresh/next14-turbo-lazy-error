import type { Metadata } from 'next'
import './globals.css'
import './custom.css'
import { FP_APP } from '@/config'

export const metadata: Metadata = {
  title: FP_APP.NAME,
  description: FP_APP.DESCRIPTION,
}

import { Inter, SpaceMono, SourceCodePro400 } from '@/fonts'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
      <style>
        {`
          :root {
            --font-inter: ${Inter.style.fontFamily.replace(/\'/g, "")}, sans-serif;
            --font-space_mono: ${SpaceMono.style.fontFamily.replace(/\'/g, "")}, monospace;
            --font-sourcecode400: ${SourceCodePro400.style.fontFamily.replace(/\'/g, "")}, monospace;  
          }
        `}
      </style>
        {children}
      </body>
    </html>
  )
}
