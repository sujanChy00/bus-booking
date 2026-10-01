import { BookingForm } from '#/components/booking-form'
import { Container } from '#/components/container'
import { Footer } from '#/components/footer'
import { Header } from '#/components/header'
import { HeroContent } from '#/components/hero-content'
import { PopularRoutes } from '#/components/popular-routes'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({ component: Home })

function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#f8f7f4] text-[#17231f]">
      <Header />
      <Container
        id="top"
        className="grid gap-y-12 lg:gap-x-10 px-6 pb-20 pt-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:px-10 lg:pb-28 lg:pt-16"
      >
        <HeroContent />
        <BookingForm />
      </Container>

      <PopularRoutes />
      <Footer />
    </main>
  )
}
