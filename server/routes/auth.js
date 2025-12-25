const express = require('express');
const router = express.Router();
const User = require('../models/User'); // Переконайтеся, що шлях правильний

// @route   POST api/auth/register
// @desc    Register user
router.post('/register', async (req, res, next) => {
  try {
    const { username, email, password } = req.body;

    // 1. Перевірка чи прийшли дані
    if (!username || !email || !password) {
      return res.status(400).json({ error: "Будь ласка, заповніть усі поля" });
    }

    // 2. Перевірка чи є вже такий користувач
    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ error: "Користувач з таким email вже існує" });
    }

    // 3. Створення нового користувача
    // (Пароль захешується автоматично завдяки UserSchema.pre у вашій моделі)
    user = new User({
      username,
      email,
      password
    });

    await user.save();

    res.status(201).json({
      message: "User registered successfully",
      user: { id: user._id, username: user.username, email: user.email }
    });

  } catch (error) {
    // ОСЬ ЦЕ виведе помилку в консоль сервера, якщо щось піде не так
    console.error("ПОМИЛКА РЕЄСТРАЦІЇ:", error.message);
    next(error); // Передаємо помилку далі
  }
});

// @route   GET api/auth/users
// @desc    Get all users
// @access  Public (for now, will be protected later)
/**
 * @swagger
 * /users:
 *   get:
 *     summary: Retrieve a list of all users
 *     description: Retrieve a list of all users from the database, excluding their passwords.
 *     responses:
 *       200:
 *         description: A list of users.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   _id:
 *                     type: string
 *                     description: The user ID.
 *                     example: 60d0fe4f5311236168a109ca
 *                   username:
 *                     type: string
 *                     description: The user's name.
 *                     example: john_doe
 *                   email:
 *                     type: string
 *                     description: The user's email.
 *                     example: john.doe@example.com
 *       500:
 *         description: Server error
 */
router.get('/users', async (req, res, next) => {
  try {
    const users = await User.find().select('-password');
    res.json(users);
  } catch (error) {
    console.error("ПОМИЛКА ОТРИМАННЯ КОРИСТУВАЧІВ:", error.message);
    next(error);
  }
});

module.exports = router;