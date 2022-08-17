// Externals
import bcrypt from "bcryptjs";
// Components
import { usersRepo } from "../../../helpers/usersRepo";
import { withSessionRoute } from "../../../lib/withSession";
import { apiHandler } from "../../../lib/handlers";

export default withSessionRoute(
  apiHandler({
    post: register,
  })
);

async function register(req, res) {
  const { locale } = req;
  // split out password from user details
  const { password, ...user } = await JSON.parse(req.body);
  // validate
  if (usersRepo.find((x) => x.email === user.email))
    throw locale === "ar"
      ? "هذا الايميل مستخدم بالفعل"
      : "This email already exist";

  // hash password
  user.hash = bcrypt.hashSync(password, 10);

  usersRepo.create(user);
  // set user as in database:
  req.session.user = user;
  await req.session.save();

  return res.status(200).json({ ...user });
}
