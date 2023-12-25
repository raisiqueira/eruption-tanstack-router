import { Route } from '@tanstack/react-router'

import { Home } from '@/features/Home/routes/Home'
import { rootRoute } from '@/routes'

const HomeRoute = new Route({ getParentRoute: () => rootRoute, path: '/', component: Home })

export { HomeRoute }
