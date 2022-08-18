import { body } from "express-validator";

export const registerValidation = [
  body("email", "Некорректний формат пошти").isEmail(),
  body("password", "Мінімальна довжина паролю складає 5 символів").isLength({
    min: 5,
  }),
  body("fullName", "Мінімальна довжина - 3 символи").isLength({ min: 3 }),
  body("avatarUrl", "Некорекний лінк фбо некоректний аватар")
    .optional()
    .isURL(),
];
