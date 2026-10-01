import { Bus } from 'lucide-react'
import { Container } from './container'

export const Header = () => {
  return (
    <Container className="flex items-center justify-between px-6 py-6 lg:px-10">
      <a
        href="#top"
        className="flex items-center gap-3"
        aria-label="Himal Yatra home"
      >
        <span className="flex size-10 items-center justify-center rounded-xl bg-[#e3f2eb] text-[#19704e]">
          <Bus aria-hidden="true" />
        </span>
        <span className="font-serif text-2xl font-bold tracking-tight">
          Himal Yatra
        </span>
      </a>
    </Container>
  )
}
