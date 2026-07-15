import { Outlet } from 'react-router-dom'
import Nav from './Nav'
import Footer from './Footer'
import PixelDivider from './PixelDivider'
import ScrollToTop from './ScrollToTop'

export default function Layout() {
  return (
    <div className="flex min-h-screen flex-col">
      <ScrollToTop />
      <Nav />
      <main className="flex-1">
        <Outlet />
      </main>
      <PixelDivider />
      <Footer />
    </div>
  )
}
