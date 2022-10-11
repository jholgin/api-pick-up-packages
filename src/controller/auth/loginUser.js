const User = require("../../models/user");
const HttpError = require("../../models/http-error");

const loginUser = async (req, res, next) => {
  const { correo, contrasena } = req.body;

  let identifiedUser;
  try {
    identifiedUser = await User.findOne({ correo: correo });
  } catch (err) {
    const error = new HttpError("Login up failed, please try again later", 500);
    return next(error);
  }

  if (!identifiedUser || identifiedUser.contrasena !== contrasena) {
    return next(new HttpError("Please give correct credentials", 401));
  }

  res.json({ user: identifiedUser.toObject({ getters: true }) });
};

exports.loginUser = loginUser;
