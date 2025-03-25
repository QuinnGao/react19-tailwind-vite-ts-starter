import { createFileRoute } from "@tanstack/react-router"
import Layout from "@/layout/index"

export const Route = createFileRoute("/_authenticated/")({
  component: Layout,
})
