type user = {
  name: string;
  surname: string;
  email: string;
  password: string;
};

function createOrUpdateUser(initialValues: Partial<user>) {
  // Оновлення користувача
  console.log("User updated:", initialValues);
}

createOrUpdateUser({
  email: "user@mail.com",
  password: "password123",
});
