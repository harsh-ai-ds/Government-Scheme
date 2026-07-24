// Validate Full Name
export const validateName = (name: string): string => {
  if (!name.trim()) {
    return "Full Name is required.";
  }

  if (name.trim().length < 3) {
    return "Name must be at least 3 characters.";
  }

  return "";
};

// Validate Email
export const validateEmail = (email: string): string => {
  if (!email.trim()) {
    return "Email is required.";
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailRegex.test(email.trim())) {
    return "Please enter a valid email address.";
  }

  return "";
};

// Validate Password
export const validatePassword = (password: string): string => {
  if (!password) {
    return "Password is required.";
  }

  if (password.length < 8) {
    return "Password must be at least 8 characters.";
  }

  if (!/[A-Z]/.test(password)) {
    return "Password must contain at least one uppercase letter.";
  }

  if (!/[a-z]/.test(password)) {
    return "Password must contain at least one lowercase letter.";
  }

  if (!/[0-9]/.test(password)) {
    return "Password must contain at least one number.";
  }

  if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
    return "Password must contain at least one special character.";
  }

  return "";
};

// Validate Confirm Password
export const validateConfirmPassword = (
  password: string,
  confirmPassword: string
): string => {
  if (!confirmPassword) {
    return "Please confirm your password.";
  }

  if (password !== confirmPassword) {
    return "Passwords do not match.";
  }

  return "";
};