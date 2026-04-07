import { createFileRoute } from "@tanstack/react-router"
import { Button } from "@/components/ui/button"

export const Route = createFileRoute("/")({ component: LandingPage })

function LandingPage() {
  return (
    <div className="flex min-h-svh items-center justify-center">
      <Button>Sorry, this webpage is under active development!</Button>
    </div>
  )
}
