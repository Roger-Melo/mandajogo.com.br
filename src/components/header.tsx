import { Logo } from "@/components/logo"

export function Header () {
  return (
    <header className="w-full bg-primary-blue">
      <div className="mx-auto flex items-center justify-center px-4 py-5 sm:px-12 sm:py-6 md:px-10 md:py-6 lg:max-w-site-width xl:px-0">
        <Logo />
      </div>
    </header>
  )
}
