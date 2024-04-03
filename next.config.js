module.exports = env => {
  if (env == "phase-development-server") {
    return {
      env: {
        MONGODB_CLIENT: process.env.MONGODB_CLIENT,
        MONGODB_DATABASE: process.env.MONGODB_DATABASE,
        NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET,
        NEXTAUTH_URL: process.env.NEXTAUTH_URL
      }
    }
  } else {
    return {
      env: {
        MONGODB_CLIENT: process.env.MONGODB_CLIENT,
        MONGODB_DATABASE: process.env.MONGODB_DATABASE,
        NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET,
        NEXTAUTH_URL: process.env.NEXTAUTH_URL
      }
    }
  }
}
