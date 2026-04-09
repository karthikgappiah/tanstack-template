import { Header } from "@/components/blocks/header"
import { ModeToggle } from "@/components/blocks/mode-toggle"
import { createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute("/")({ component: LandingPage })

function LandingPage() {
  return (
    <div className="flex min-h-svh flex-col">
      {/* HEADER */}
      <Header />
      <main className="flex flex-1 items-center justify-center">
        <ModeToggle />
      </main>
    </div>
  )
}
