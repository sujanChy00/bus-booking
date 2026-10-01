import { cn } from 'cn'

export const Container = ({
  className,
  ...rest
}: React.ComponentProps<'div'>) => {
  return <div className={cn('mx-auto w-full max-w-7xl', className)} {...rest} />
}
