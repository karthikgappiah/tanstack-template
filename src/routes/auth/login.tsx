import { LoginForm } from "@/components/blocks/login-form"
import { createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute("/auth/login")({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className="flex min-h-svh items-center justify-center">
      <LoginForm />
    </div>
  )
}
