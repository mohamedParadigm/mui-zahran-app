// Components
import { withSessionRoute } from "../../../lib/withSession";

export default withSessionRoute(async (req, res) => {
  const { locale } = req;
  req.session.user = null;
  await req.session.save();
  res
    .status(200)
    .json({
      message:
        locale === "ar" ? "تم تسجيل الخروج بنجاح" : "Logout Successfully",
    });
});
