import { TodosContextProvider } from './common/context'
import './globals.css'
//import ResponsiveAppBar from "./common/appbar"
import Link from 'next/link'
// import { GlobalContextProvider } from './common/context'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <div className='main-header-back'>
          <div>
            <Link href='/'>Home</Link>
          </div>
          <div>
            <Link href='/signup'>SignUp</Link>
          </div>
          <div>
            <Link href='login'>Login</Link>
          </div>
          <div>
            <Link href='jd'>JD</Link>
          </div>
          <div>
            <Link href='search'>Search</Link>
          </div>
        </div>
        <TodosContextProvider>
          {children}
        </TodosContextProvider>
        {/* <GlobalContextProvider>
          {children}
        </GlobalContextProvider> */}

      </body>
    </html>
  )
}
