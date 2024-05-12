import { appRouter } from '@/server'
import { fetchRequestHandler } from '@trpc/server/adapters/fetch'

const handler = (req: Request) =>
  fetchRequestHandler({
    endpoint: '/api/trpc',
    req,
    router: appRouter,
    createContext: () => ({}),
  })

export {
  handler as GET,
  handler as POST,
  handler as DELETE,
  handler as PUT,
  handler as PATCH,
}
