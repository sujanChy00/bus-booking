import { cn } from 'cn'
import type { LucideIcon } from 'lucide-react'

type FieldProps = React.ComponentProps<'input'> & {
  label: string
  Icon: LucideIcon
}

export function Field({
  label,
  name,
  Icon,
  className,
  children,
  required,
  ...rest
}: FieldProps) {
  return (
    <label htmlFor={name} className="flex flex-col gap-2">
      <span className="text-sm font-semibold">
        {label}
        {required && <span className="text-destructive">*</span>}
      </span>
      <span className="relative">
        <Icon
          aria-hidden="true"
          className="absolute left-4 top-1/2 size-4 -translate-y-1/2 text-[#89928e]"
        />
        {children ?? (
          <input
            required={required}
            {...rest}
            className={cn(
              'h-13 w-full rounded-xl border border-[#dfe5e1] bg-[#fbfcfb] pl-11 pr-4 font-normal outline-none transition placeholder:text-[#a4ada8] focus:border-[#2d9c6b] focus:ring-4 focus:ring-[#2d9c6b]/10',
              className,
            )}
          />
        )}
      </span>
    </label>
  )
}
