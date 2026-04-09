import { Link } from "@tanstack/react-router"
import { Button } from "@/components/ui/button"

export function Header() {
  return (
    <header className="flex items-center justify-between p-4">
      <Link to="/">
        <img src="" alt="" />
        <h1 className="text-2xl font-semibold">TODO</h1>
      </Link>
      <nav>
        <Link to="/auth/login">
          <Button variant={"link"}>Log In</Button>
        </Link>
        <Link to="/auth/signup">
          <Button variant={"default"}>Sign Up</Button>
        </Link>
      </nav>
    </header>
  )
}
