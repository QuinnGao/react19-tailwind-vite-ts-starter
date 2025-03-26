import { createRootRouteWithContext, Outlet } from "@tanstack/react-router"
import { QueryClient } from "@tanstack/react-query"
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools"
import { Toaster } from "@/components/ui/sonner"
import GeneralError from "@/features/errors/general-error"
import NotFoundError from "@/features/errors/not-found-error"

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()(
  {
    component: () => (
      <>
        <Outlet />
        <Toaster />
        {import.meta.env.MODE === "development" && <TanStackRouterDevtools />}
      </>
    ),
    notFoundComponent: NotFoundError,
    errorComponent: GeneralError,
  }
)
