// Components
import { withSessionRoute } from "../../../lib/withSession";

const login = async (req, res) => {
  // split out password from user details
  const { password, email } = await JSON.parse(req.body);
  // requested user
  let requestedUser = usersRepo.find((x) => x.email === email);

  // validate
  if (!requestedUser) {
    throw `This email is not registered`;
  }

  if (!bcrypt.compareSync(password, requestedUser.hash)) {
    throw `Wrong password`;
  }
  // get user from database then:
  req.session.user = requestedUser;
  await req.session.save();

  return res.status(200).json(requestedUser);
};

export default withSessionRoute(
  apiHandler({
    post: login,
  })
);
