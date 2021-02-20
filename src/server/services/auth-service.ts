import * as jwt from 'jsonwebtoken'

const JWT_SIGNING_SECRET =
  'this_secret_should_come_from_hidden_env_files_and_never_committed_to_repo'

const generateJwtForUserId = (userId: string) =>
  jwt.sign({ userId }, JWT_SIGNING_SECRET)

/*
const authChecker: AuthChecker<ContextType> = (
	{ root, args, context, info },
	roles,
  ) => {
	// here you can read user from context
	// and check his permission in db against `roles` argument
	// that comes from `@Authorized`, eg. ["ADMIN", "MODERATOR"]
  
	return true; // or false if access denied
  };
*/
export const AuthService = () => ({
  generateJwtForUserId,
})
