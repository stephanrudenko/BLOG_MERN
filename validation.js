import { body } from "express-validator";

export const registerValidation = [
  body("email", "Некорректний формат пошти").isEmail(),
  body("password", "Мінімальна довжина паролю складає 5 символів").isLength({
    min: 5,
  }),
  body("fullName", "Мінімальна довжина - 3 символи").isLength({ min: 3 }),
  body("avatarUrl", "Некоректний лінк фбо некоректний аватар")
    .optional()
    .isURL(),
];

export const loginValidation = [
  body("email", "Некорректний формат пошти").isEmail(),
  body("password", "Мінімальна довжина паролю складає 5 символів").isLength({
    min: 5,
  }),
];

export const postCreateValidation = [
  body("title", "Вкажіть заголовок статті")
    .isLength({
      min: 5,
    })
    .isString(),
  body("text", "Введіть текст статті")
    .isLength({
      min: 10,
    })
    .isString(),
  body("tags", "Неправильний формат тегів (вкажіть масив, розділяючи комами")
    .optional()
    .isArray(),
  body("imageUrl", "Неправильний лінк на зображення").optional().isString(),
];
