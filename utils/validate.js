export const validateRegisterInput = ({
  firstName,
  lastName,
  email,
  password,
}) => {
  const errors = {};

  if (!firstName || firstName.trim() === "") {
    errors.firstName = "First name is required";
  }

  if (!lastName || lastName.trim() === "") {
    errors.lastName = "Last name is required";
  }

  if (!email) {
    errors.email = "Email is required";
  } else if (!/^\S+@\S+\.\S+$/.test(email)) {
    errors.email = "Invalid email format";
  }

  // Password validation
  if (!password) {
    errors.password = "Password is required";
  } else {
    if (password.length < 6) {
      errors.password = "Password must be at least 6 characters long";
    }

    if (!/[0-9]/.test(password)) {
      errors.password = "Password must contain at least one number";
    }

    if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
      errors.password = "Password must contain at least one special character";
    }
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
};
