import { createFileRoute } from "@tanstack/react-router"
import Main from "@/layout/main"

export const Route = createFileRoute("/_authenticated/")({
  component: Main,
})
