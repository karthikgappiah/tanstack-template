import { Header } from "@/components/blocks/header"
import { SignupForm } from "@/components/blocks/signup-form"
import { createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute("/auth/signup")({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className="flex min-h-svh flex-1 flex-col">
      <Header />
      <main className="flex flex-1 items-center justify-center">
        <SignupForm />
      </main>
    </div>
  )
}
