export default {
  secret: process.env.JWT_SECRET || "b1c421ee38a557dd2eeb777b9c627a14",
  expiresIn: "3d",
  refreshSecret:
    process.env.JWT_REFRESH_SECRET || "6ac022c53be4cecbf497f60c864e8a62",
  refreshExpiresIn: "7d"
};
