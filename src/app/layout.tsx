import './globals.css'
import Navbar from'../components/navbar/Navbar'
import Footer from'../components/footer/Footer'

import ReduxProvider from "../store/provider"
export const metadata = {
  title: 'Ecommerce app in next js',
  description: 'ecommerce app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body >
  
<ReduxProvider>

        <Navbar />
        {children}
        <Footer />
</ReduxProvider>

          </body>
    </html>
  )
}
