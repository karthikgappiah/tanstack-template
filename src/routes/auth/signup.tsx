import { SignupForm } from "@/components/blocks/signup-form"
import { createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute("/auth/signup")({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className="flex min-h-svh items-center justify-center">
      <SignupForm />
    </div>
  )
}
