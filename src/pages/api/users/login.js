// Externals
import bcrypt from "bcryptjs";
// Components
import { usersRepo } from "../../../helpers/usersRepo";
import { withSessionRoute } from "../../../lib/withSession";
import { apiHandler } from "../../../lib/handlers";

const login = async (req, res) => {
  const { locale } = req;
  // Destruct user email and password
  const { email, password } = JSON.parse(req.body);

  // Find user by email
  let requestedUser = usersRepo.find((x) => x.email === email);

  // Validate user exist
  if (!requestedUser)
    throw locale === "ar" ? "الايميل غير مسجل" : "This email is not registered";

  // Validate password
  if (!bcrypt.compareSync(password, requestedUser.hash)) {
    throw locale === "ar" ? "كلمة المرور غير صحيحة" : "Wrong password";
  }

  // Get user from database
  req.session.user = requestedUser;
  await req.session.save();

  return res.status(200).json(requestedUser);
};

export default withSessionRoute(
  apiHandler({
    post: login,
  })
);
