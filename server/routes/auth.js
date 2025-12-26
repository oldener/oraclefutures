const express = require('express');
const router = express.Router();
const User = require('../models/User'); 
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// @route   POST api/auth/register
// @desc    Register user
router.post('/register', async (req, res, next) => {
  try {
    const { username, email, password } = req.body;

    // 1. Перевірка чи прийшли дані
    if (!username || !email || !password) {
      return res.status(400).json({ error: "Будь ласка, заповніть усі поля" });
    }

    // Validation
    if (password.length < 8) {
      return res.status(400).json({ error: "Пароль має бути не менше 8 символів" });
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ error: "Неправильний формат email" });
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

// @route   POST api/auth/login
// @desc    Login user
router.post('/login', async (req, res, next) => {
  try {
    const { email, password } = req.body;

    // 1. Перевірка чи прийшли дані
    if (!email || !password) {
      return res.status(400).json({ error: "Будь ласка, заповніть усі поля" });
    }

    // 2. Перевірка чи існує користувач
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ error: "Неправильний email або пароль" });
    }

    // 3. Порівняння паролів
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ error: "Неправильний email або пароль" });
    }

    // 4. Створення та відправка токена
    const payload = {
      user: {
        id: user.id
      }
    };

    jwt.sign(
      payload,
      process.env.JWT_SECRET,
      { expiresIn: '5h' },
      (err, token) => {
        if (err) throw err;
        res.json({
          token,
          user: { id: user._id, username: user.username, email: user.email }
        });
      }
    );

  } catch (error) {
    console.error("ПОМИЛКА ВХОДУ:", error.message);
    next(error);
  }
});

module.exports = router;