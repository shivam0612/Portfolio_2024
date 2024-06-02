import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Shivam Patel - Portfolio',
  description: 'Explore the portfolio of Shivam Patel, showcasing a collection of projects and experiences in web development and design.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
