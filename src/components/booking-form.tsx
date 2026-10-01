import {
  ArrowRight,
  CalendarDays,
  CheckCircle2,
  Mail,
  MapPin,
  Minus,
  Phone,
  Plus,
  User,
} from 'lucide-react'
import { useState } from 'react'
import { Field } from './field'

export function BookingForm() {
  const [passengers, setPassengers] = useState(1)
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(event: React.SubmitEvent<HTMLFormElement>) {
    event.preventDefault()
    setSubmitted(true)
  }
  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center rounded-2xl bg-[#e3f2eb] px-6 py-14 text-center shadow-[0_24px_70px_rgba(38,63,51,0.12)]">
        <CheckCircle2 className="mb-4 size-12 text-[#19704e]" />
        <h3 className="font-serif text-3xl font-bold">Request received</h3>
        <p className="mt-2 max-w-md text-[#66716d]">
          Thanks for booking with wayfare. We&apos;ll send your trip details to
          your email shortly.
        </p>
        <button
          type="button"
          onClick={() => setSubmitted(false)}
          className="mt-6 font-semibold text-[#19704e] underline underline-offset-4 cursor-pointer"
        >
          Book another trip
        </button>
      </div>
    )
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6  bg-white p-6 rounded-2xl shadow-[0_24px_70px_rgba(38,63,51,0.12)]"
    >
      <Field
        Icon={User}
        label="Full name"
        name="name"
        type="text"
        placeholder="Your full name"
        required
      />
      <div className="grid grid-cols-2 items-center gap-6">
        <Field
          Icon={Phone}
          label="Phone number"
          name="phone"
          type="number"
          placeholder="98XXXXXXXX"
          required
        />
        <Field
          Icon={Mail}
          label="Email"
          name="email"
          type="email"
          placeholder="alex@example.com"
        />
        <Field
          Icon={CalendarDays}
          label="Travel date"
          required
          name="date"
          type="date"
        />
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
        <Field
          Icon={MapPin}
          label="From"
          required
          name="from"
          type="text"
          placeholder="e.g. Kathmandu Bus Park"
        />
        <Field
          Icon={MapPin}
          label="To"
          required
          name="to"
          type="text"
          placeholder="e.g. Pokhara Tourist Bus Park"
        />
      </div>

      <button
        type="submit"
        className="mt-2 ml-auto md:w-auto w-full flex h-13 items-center justify-center gap-2 rounded-xl bg-[#19704e] px-6 text-base font-bold text-white transition hover:bg-[#145a3f] focus:outline-none focus:ring-4 focus:ring-[#2d9c6b]/30 lg:col-span-2"
      >
        Find my trip <ArrowRight aria-hidden="true" />
      </button>
    </form>
  )
}
