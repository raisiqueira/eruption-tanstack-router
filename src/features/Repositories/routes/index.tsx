import { Route } from '@tanstack/react-router'

import { getRepositories } from '@/features/Repositories/api/getRepositories'
import { Repositories } from '@/features/Repositories/routes/Repositories'
import { rootRoute } from '@/routes'

const repositoriesRoute = new Route({
  getParentRoute: () => rootRoute,
  path: 'repositories',
  component: Repositories,
  loader: ({ abortController }) => getRepositories({ signal: abortController.signal }),
})

export { repositoriesRoute }
