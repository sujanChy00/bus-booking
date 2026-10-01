'use client'

import {
  ArrowRight,
  Bus,
  CalendarDays,
  CheckCircle2,
  Clock3,
  Mail,
  MapPin,
  Minus,
  Phone,
  Plus,
  ShieldCheck,
  Ticket,
  User,
} from 'lucide-react'
import { useState } from 'react'

const popularRoutes = [
  { from: 'Kathmandu', to: 'Pokhara', duration: '7h 30m', price: 'रु 850' },
  { from: 'Kathmandu', to: 'Chitwan', duration: '5h 30m', price: 'रु 750' },
  { from: 'Pokhara', to: 'Lumbini', duration: '8h 00m', price: 'रु 1,200' },
]

export default function Page() {
  const [passengers, setPassengers] = useState(1)
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setSubmitted(true)
  }

  return (
    <main className="min-h-screen overflow-hidden bg-[#f8f7f4] text-[#17231f]">
      <header className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-6 lg:px-10">
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
      </header>

      <section
        id="top"
        className="mx-auto grid w-full max-w-7xl gap-12 px-6 pb-20 pt-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:px-10 lg:pb-28 lg:pt-16"
      >
        <div>
          <div className="mb-7 inline-flex items-center gap-2 rounded-full bg-[#e3f2eb] px-4 py-2 text-sm font-semibold text-[#19704e]">
            <span className="size-2 rounded-full bg-[#2d9c6b]" /> Nepal made
            easy
          </div>
          <h1 className="max-w-xl font-serif text-5xl font-bold leading-[1.03] tracking-[-0.04em] text-[#17231f] sm:text-6xl lg:text-7xl">
            Explore Nepal.
            <br />
            <span className="text-[#19704e]">Travel with ease.</span>
          </h1>
          <p className="mt-7 max-w-lg text-lg leading-8 text-[#66716d]">
            Book safe, comfortable bus journeys across Nepal. From the hills of
            Pokhara to the energy of Kathmandu, your next journey starts here.
          </p>
          <div className="mt-9 flex flex-wrap gap-6 text-sm font-medium text-[#66716d]">
            <span className="flex items-center gap-2">
              <ShieldCheck className="text-[#19704e]" aria-hidden="true" /> Safe
              &amp; reliable
            </span>
            <span className="flex items-center gap-2">
              <Clock3 className="text-[#19704e]" aria-hidden="true" /> On-time
              departures
            </span>
          </div>
        </div>
        <div className="relative min-h-[340px] lg:min-h-[440px]">
          <div className="absolute inset-4 rotate-3 rounded-[2.5rem] bg-[#dcebe3] lg:inset-8" />
          <div className="relative flex h-full min-h-[340px] items-end overflow-hidden rounded-[2.5rem] bg-[#204c3d] p-7 lg:min-h-[440px] lg:p-10">
            <div className="absolute -right-10 -top-10 size-56 rounded-full border-[32px] border-[#6ba989]/30" />
            <div className="absolute right-8 top-10 size-4 rounded-full bg-[#e4b35e]" />
            <div className="absolute left-12 top-16 size-2 rounded-full bg-white/50" />
            <div className="absolute bottom-24 left-1/2 h-36 w-56 -translate-x-1/2 rounded-t-[8rem] border-8 border-[#e4b35e]/50" />
            <div className="relative z-10 text-white">
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#b8dfc8]">
                Your Nepal journey starts here
              </p>
              <p className="max-w-sm font-serif text-4xl font-bold leading-tight lg:text-5xl">
                Leave the ordinary behind.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        id="book"
        className="mx-auto -mt-2 w-full max-w-7xl px-6 pb-20 lg:px-10"
      >
        <div className="rounded-[2rem] bg-white p-6 shadow-[0_24px_70px_rgba(38,63,51,0.12)] sm:p-9">
          <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="mb-2 text-sm font-semibold uppercase tracking-[0.18em] text-[#2d9c6b]">
                Plan your journey
              </p>
              <h2 className="font-serif text-3xl font-bold tracking-tight sm:text-4xl">
                Where are you headed?
              </h2>
            </div>
            <p className="text-sm text-[#89928e]">All fields are required</p>
          </div>
          {submitted ? (
            <div className="flex flex-col items-center justify-center rounded-2xl bg-[#e3f2eb] px-6 py-14 text-center">
              <CheckCircle2 className="mb-4 size-12 text-[#19704e]" />
              <h3 className="font-serif text-3xl font-bold">
                Request received
              </h3>
              <p className="mt-2 max-w-md text-[#66716d]">
                Thanks for booking with wayfare. We&apos;ll send your trip
                details to your email shortly.
              </p>
              <button
                type="button"
                onClick={() => setSubmitted(false)}
                className="mt-6 font-semibold text-[#19704e] underline underline-offset-4"
              >
                Book another trip
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="grid gap-5 lg:grid-cols-2">
              <label className="flex flex-col gap-2 text-sm font-semibold">
                Full name
                <input
                  required
                  name="name"
                  type="text"
                  placeholder="Your full name"
                  className="h-13 rounded-xl border border-[#dfe5e1] bg-[#fbfcfb] px-4 font-normal outline-none transition placeholder:text-[#a4ada8] focus:border-[#2d9c6b] focus:ring-4 focus:ring-[#2d9c6b]/10"
                />
              </label>
              <label className="flex flex-col gap-2 text-sm font-semibold">
                Phone number
                <span className="relative">
                  <Phone
                    aria-hidden="true"
                    className="absolute left-4 top-1/2 size-4 -translate-y-1/2 text-[#89928e]"
                  />
                  <input
                    required
                    name="phone"
                    type="tel"
                    placeholder="98XXXXXXXX"
                    className="h-13 w-full rounded-xl border border-[#dfe5e1] bg-[#fbfcfb] pl-11 pr-4 font-normal outline-none transition placeholder:text-[#a4ada8] focus:border-[#2d9c6b] focus:ring-4 focus:ring-[#2d9c6b]/10"
                  />
                </span>
              </label>
              <label className="flex flex-col gap-2 text-sm font-semibold">
                Email address
                <span className="relative">
                  <Mail
                    aria-hidden="true"
                    className="absolute left-4 top-1/2 size-4 -translate-y-1/2 text-[#89928e]"
                  />
                  <input
                    required
                    name="email"
                    type="email"
                    placeholder="alex@example.com"
                    className="h-13 w-full rounded-xl border border-[#dfe5e1] bg-[#fbfcfb] pl-11 pr-4 font-normal outline-none transition placeholder:text-[#a4ada8] focus:border-[#2d9c6b] focus:ring-4 focus:ring-[#2d9c6b]/10"
                  />
                </span>
              </label>
              <label className="flex flex-col gap-2 text-sm font-semibold">
                Travel date
                <span className="relative">
                  <CalendarDays
                    aria-hidden="true"
                    className="absolute left-4 top-1/2 size-4 -translate-y-1/2 text-[#89928e]"
                  />
                  <input
                    required
                    name="date"
                    type="date"
                    className="h-13 w-full rounded-xl border border-[#dfe5e1] bg-[#fbfcfb] pl-11 pr-4 font-normal outline-none transition focus:border-[#2d9c6b] focus:ring-4 focus:ring-[#2d9c6b]/10"
                  />
                </span>
              </label>
              <label className="flex flex-col gap-2 text-sm font-semibold">
                From
                <span className="relative">
                  <MapPin
                    aria-hidden="true"
                    className="absolute left-4 top-1/2 size-4 -translate-y-1/2 text-[#89928e]"
                  />
                  <input
                    required
                    name="from"
                    type="text"
                    placeholder="e.g. Kathmandu Bus Park"
                    className="h-13 w-full rounded-xl border border-[#dfe5e1] bg-[#fbfcfb] pl-11 pr-4 font-normal outline-none transition placeholder:text-[#a4ada8] focus:border-[#2d9c6b] focus:ring-4 focus:ring-[#2d9c6b]/10"
                  />
                </span>
              </label>
              <label className="flex flex-col gap-2 text-sm font-semibold">
                To
                <span className="relative">
                  <MapPin
                    aria-hidden="true"
                    className="absolute left-4 top-1/2 size-4 -translate-y-1/2 text-[#89928e]"
                  />
                  <input
                    required
                    name="to"
                    type="text"
                    placeholder="e.g. Pokhara Tourist Bus Park"
                    className="h-13 w-full rounded-xl border border-[#dfe5e1] bg-[#fbfcfb] pl-11 pr-4 font-normal outline-none transition placeholder:text-[#a4ada8] focus:border-[#2d9c6b] focus:ring-4 focus:ring-[#2d9c6b]/10"
                  />
                </span>
              </label>
              <div className="flex flex-col gap-2 text-sm font-semibold">
                <span>Passengers</span>
                <div className="flex h-13 items-center justify-between rounded-xl border border-[#dfe5e1] bg-[#fbfcfb] px-4">
                  <span className="font-normal text-[#66716d]">
                    {passengers} {passengers === 1 ? 'passenger' : 'passengers'}
                  </span>
                  <span className="flex items-center gap-3">
                    <button
                      type="button"
                      aria-label="Remove passenger"
                      disabled={passengers === 1}
                      onClick={() => setPassengers(Math.max(1, passengers - 1))}
                      className="flex size-7 items-center justify-center rounded-full border border-[#dfe5e1] text-[#66716d] disabled:opacity-40"
                    >
                      <Minus aria-hidden="true" />
                    </button>
                    <button
                      type="button"
                      aria-label="Add passenger"
                      disabled={passengers === 9}
                      onClick={() => setPassengers(Math.min(9, passengers + 1))}
                      className="flex size-7 items-center justify-center rounded-full bg-[#e3f2eb] text-[#19704e]"
                    >
                      <Plus aria-hidden="true" />
                    </button>
                  </span>
                </div>
              </div>
              <button
                type="submit"
                className="mt-2 flex h-13 items-center justify-center gap-2 rounded-xl bg-[#19704e] px-6 text-base font-bold text-white transition hover:bg-[#145a3f] focus:outline-none focus:ring-4 focus:ring-[#2d9c6b]/30 lg:col-span-2"
              >
                Find my trip <ArrowRight aria-hidden="true" />
              </button>
            </form>
          )}
        </div>
      </section>

      <section
        id="routes"
        className="mx-auto w-full max-w-7xl px-6 pb-24 lg:px-10"
      >
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
      </section>
      <footer id="why-us" className="border-t border-[#e2e8e3] bg-white">
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-4 px-6 py-8 text-sm text-[#89928e] sm:flex-row sm:items-center sm:justify-between lg:px-10">
          <span className="font-serif text-lg font-bold text-[#17231f]">
            Himal Yatra
          </span>
          <span className="flex items-center gap-2">
            <User aria-hidden="true" className="size-4" /> Reliable service,
            every mile.
          </span>
          <span>© 2026 Himal Yatra</span>
        </div>
      </footer>
    </main>
  )
}
