

import './globals.css'
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'ROS AI',
  description: 'We unite communication by converting sentences to ASL',
}

export default function RootLayout({ children }) {
  return (
    
    <html lang="en">
      
      <body className={inter.className}>{children}</body>
    </html>
  )
}
