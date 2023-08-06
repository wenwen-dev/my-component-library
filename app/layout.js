import StyledComponentsRegistry from './lib/registry'


import './globals.css'
import { inter } from '@/utils/fonts'



export const metadata = {
  title: 'My Component Library',
  description: '',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <StyledComponentsRegistry>
          {children}
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}
