// Externals
import bcrypt from "bcryptjs";
// Components
import { usersRepo } from "../../../helpers/usersRepo";
import { withSessionRoute } from "../../../lib/withSession";
import { apiHandler } from "../../../lib/handlers";

const update = async (req, res) => {
  const { locale } = req;
  // split out password from user details
  const { userID } = req.query;
  const { password, ...user } = await JSON.parse(req.body);

  if (!password) {
    // validate
    if (!usersRepo.getById(userID)) return;
    // if (!usersRepo.find((x) => x.email === user.email))
    //   throw locale === "ar" ? "الايميل غير موجود" : "Email is not exist";

    usersRepo.update(userID, user);

    // set user as in database:
    req.session.user = user;
    await req.session.save();

    return res.status(200).json({ ...user });
  }

  console.log("User ", user)
  // hash password
  user.hash = bcrypt.hashSync(password, 10);

  // set user as in database:
  req.session.user = user;
  await req.session.save();

  return res.status(200).json({ ...user });
};

export default withSessionRoute(
  apiHandler({
    put: update,
  })
);

