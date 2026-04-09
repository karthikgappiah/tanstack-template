import { Header } from "@/components/blocks/header"
import { Button } from "@/components/ui/button"
import { createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute("/")({ component: LandingPage })

function LandingPage() {
  return (
    <div className="flex min-h-svh flex-col">
      {/* HEADER */}
      <Header />
      <main className="flex flex-1 items-center justify-center">
        <Button>Sorry, this webpage is under active development</Button>
      </main>
    </div>
  )
}
