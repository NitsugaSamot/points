const { verifyToken } = require("../helpers/generateToken.js");
const userSchema = require("../models/user.model.js");

module.exports = {
  AuthMiddleware: async (req, res, next) => {
    try {
      // Verificar si la ruta es pública (accesible sin autenticación)
      const isPublicRoute =
        req.path === "/" ||
        req.path === "/registerUser" ||
        req.path === "/loginUser";

      // Si es una ruta pública, permitir acceso sin verificar el token
      if (isPublicRoute) {
        next();
        return;
      }

      // Check if the Authorization header is present
      const token = req.headers.authorization?.split(" ").pop();
      if (!token) {
        res.status(401).send({ error: "Debes estar logueado" });
        return;
      }

      // Verify the token
      const tokenData = await verifyToken(token);
      //comparara si la id del token es igual al id del user
      const user = await userSchema.findById(tokenData._id);
      req.user = user;
      console.log(tokenData);
      next();
    } catch (e) {
      console.error(e);
      res.status(500).send({ error: "Internal server error" });
    }
  },

};
