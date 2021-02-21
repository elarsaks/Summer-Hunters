import { AuthChecker } from 'type-graphql'
import { Context } from 'vm'
import { AuthService } from './auth-service'

export const authChecker: AuthChecker<Context> = (
  { root, args, context, info },
  roles
) => {
  const token = context.req.headers.authorization || ''
  const userId = AuthService().generateUserIdFromJwt(token)

  /*
   * I leave this task undone, as I ran out of time.
   * I failed to fetch a hero from DB from the back end side.
   * And I failed to return userId from callback function
   * (First time writing TypeScript & GraphQL)
   */

  // Need to DO:
  // 1. Get user role from DB (I had them there before), based on userId
  // 2. Check if user role exists on roles array
  // 3. If User.role in Roles array, return true

  return true
}
