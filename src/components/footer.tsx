import { User } from 'lucide-react'
import { Container } from './container'

export const Footer = () => {
  return (
    <footer id="why-us" className="border-t border-[#e2e8e3] bg-white">
      <Container className="flex flex-col gap-4 px-6 py-8 text-sm text-[#89928e] sm:flex-row sm:items-center sm:justify-between lg:px-10">
        <span className="font-serif text-lg font-bold text-[#17231f]">
          Himal Yatra
        </span>
        <span className="flex items-center gap-2">
          <User aria-hidden="true" className="size-4" /> Reliable service, every
          mile.
        </span>
        <span>© {new Date().getFullYear()} Himal Yatra</span>
      </Container>
    </footer>
  )
}
