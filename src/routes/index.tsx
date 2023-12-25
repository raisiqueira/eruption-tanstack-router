import { RootRoute, Router } from '@tanstack/react-router'

import { App } from '@/App'
import { HomeRoute } from '@/features/Home'
import { repositoriesRoute } from '@/features/Repositories'

const rootRoute = new RootRoute({
  component: App,
})

const routeTree = rootRoute.addChildren([HomeRoute, repositoriesRoute])

const router = new Router({ routeTree })

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}

export { rootRoute, router }
