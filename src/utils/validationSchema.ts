import * as Yup from "yup";
export const loginValidation = Yup.object({
  email: Yup.string()
    .required("Email is Required")
    .matches(
      /^[\w-]+(\.[\w-]+)*@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*(\.[a-zA-Z]{3,})$/,
      "Please enter a valid email address"
    ),
  password: Yup.string()
    .min(8, "Minimum 8 characters is required")
    .required("Password is Required")
    .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
    .matches(/[a-z]/, "Password must contain at least one lowercase letter")
    .matches(/[0-9]/, "Password must contain at least one digit")
    .matches(
      /[!@#\$&*~]/,
      "Password must contain at least one special character (!@#$&*~)"
    ),
});

export const signUpValidation = Yup.object({
  firstname: Yup.string()
    .matches(/^[A-Za-z]+$/, "First Name must contain only alphabets")
    .max(25, "First Name must not exceed 25 characters")
    .required("First Name is Required"),
  lastname: Yup.string()
    .matches(/^[A-Za-z]+$/, "Last Name must contain only alphabets")
    .max(25, "Last Name must not exceed 25 characters")
    .required("Last Name is Required"),
  email: Yup.string()
    .required("Email is Required")
    .matches(
      /^[\w-]+(\.[\w-]+)*@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*(\.[a-zA-Z]{3,})$/,
      "Please enter a valid email address"
    ),
  phoneNumber: Yup.string()
    .required("Phone number is required")
    .matches(/^[0-9]{10}$/, "Please enter a valid phone number"),
  password: Yup.string()
    .min(8, "Minimum 8 characters is required")
    .required("Password is Required")
    .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
    .matches(/[a-z]/, "Password must contain at least one lowercase letter")
    .matches(/[0-9]/, "Password must contain at least one digit")
    .matches(
      /[!@#\$&*~]/,
      "Password must contain at least one special character (!@#$&*~)"
    ),

  confirmPassword: Yup.string()
    .required("Please re-enter your password")
    .test("passwords-match", "Passwords must match", function (value) {
      return this.parent.password === value;
    }),
});

export const personalInfoValidation = Yup.object({
  firstname: Yup.string()
    .matches(/^[A-Za-z]+$/, "First Name must contain only alphabets")
    .max(25, "First Name must not exceed 25 characters")
    .required("First Name is Required"),
  lastname: Yup.string()
    .matches(/^[A-Za-z]+$/, "Last Name must contain only alphabets")
    .max(25, "Last Name must not exceed 25 characters")
    .required("Last Name is Required"),
  email: Yup.string()
    .required("Email is Required")
    .matches(
      /^[\w-]+(\.[\w-]+)*@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*(\.[a-zA-Z]{3,})$/,
      "Please enter a valid email address"
    ),
  number: Yup.string()
    .required("Phone number is required")
    .matches(/^[0-9]{10}$/, "Please enter a valid phone number"),
  nationalId: Yup.string()
    .matches(/^[A-Za-z]+$/, "National ID must contain only alphabets")
    .max(50, "National ID must not exceed 50 characters")
    .required("National ID is Required"),
  address: Yup.string()
    .max(200, "Address must not exceed 200 characters")
    .required("Address is Required"),
  githubUrl: Yup.string().max(200, "Github URl must not exceed 200 characters"),
  linkedInUrl: Yup.string().max(
    200,
    "LinkedIn URl must not exceed 200 characters"
  ),
});

export const resetPasswordValidation = Yup.object({
  password: Yup.string()
    .min(8, "Minimum 8 characters is required")
    .required("Password is Required")
    .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
    .matches(/[a-z]/, "Password must contain at least one lowercase letter")
    .matches(/[0-9]/, "Password must contain at least one digit")
    .matches(
      /[!@#\$&*~]/,
      "Password must contain at least one special character (!@#$&*~)"
    ),

  confirmPassword: Yup.string()
    .required("Please re-enter your password")
    .test("passwords-match", "Passwords must match", function (value) {
      return this.parent.password === value;
    }),
});
