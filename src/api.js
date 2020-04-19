export const FAKE_USER = {
  firstName: "Kori",
  lastName: "Schneider",
  username: "kori",
  avatar:
    "https://secure.gravatar.com/avatar/acf8586871cc14580be973efd69e1640?s=144"
};

export const login = (username, password) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (username === "kori" && password === "secret") {
        resolve(FAKE_USER);
      } else {
        reject({ message: "Invalid username or password" });
      }
    }, 300);
  });
};
