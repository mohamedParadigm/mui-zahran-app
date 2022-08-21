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
  const { password, currentPassword, ...user } = await JSON.parse(req.body);

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

  let currentUser = usersRepo.getById(userID);
  
  if (!bcrypt.compareSync(currentPassword, currentUser.hash)) {
    throw locale === "ar" ? "كلمة المرور الحالية غير صحيحة" : "Current Password is Wrong";
  }
  // hash password
  currentUser.hash = bcrypt.hashSync(password, 10);

  usersRepo.update(userID, currentUser);
  // set user as in database:
  req.session.user = currentUser;
  await req.session.save();

  return res.status(200).json({ ...currentUser });
};

export default withSessionRoute(
  apiHandler({
    put: update,
  })
);

