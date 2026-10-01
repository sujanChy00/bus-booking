import { ArrowRight, Ticket } from 'lucide-react'
import { Container } from './container'

const popularRoutes = [
  { from: 'Kathmandu', to: 'Pokhara', duration: '7h 30m', price: 'रु 850' },
  { from: 'Kathmandu', to: 'Chitwan', duration: '5h 30m', price: 'रु 750' },
  { from: 'Pokhara', to: 'Lumbini', duration: '8h 00m', price: 'रु 1,200' },
]

export const PopularRoutes = () => {
  return (
    <Container id="routes" className="px-6 pb-24 lg:px-10">
      <div className="mb-8 flex items-end justify-between">
        <div>
          <p className="mb-2 text-sm font-semibold uppercase tracking-[0.18em] text-[#2d9c6b]">
            Get inspired
          </p>
          <h2 className="font-serif text-3xl font-bold tracking-tight">
            Popular routes
          </h2>
        </div>
      </div>
      <div className="grid gap-4 md:grid-cols-3">
        {popularRoutes.map((route) => (
          <a
            href="#book"
            key={`${route.from}-${route.to}`}
            className="group rounded-2xl border border-[#e2e8e3] bg-white p-5 transition hover:-translate-y-1 hover:shadow-lg"
          >
            <div className="mb-6 flex items-center justify-between text-[#19704e]">
              <Ticket aria-hidden="true" />
              <span className="rounded-full bg-[#f2f6f3] px-3 py-1 text-xs font-semibold">
                from {route.price}
              </span>
            </div>
            <p className="font-serif text-xl font-bold">
              {route.from}{' '}
              <ArrowRight
                className="mx-1 inline size-4 text-[#89928e]"
                aria-hidden="true"
              />{' '}
              {route.to}
            </p>
            <p className="mt-2 text-sm text-[#89928e]">
              {route.duration} · Daily departures
            </p>
          </a>
        ))}
      </div>
    </Container>
  )
}
