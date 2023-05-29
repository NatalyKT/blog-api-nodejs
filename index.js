const express = require('express')
const dotenv = require('dotenv')
const mongoose = require('mongoose')
const multer = require('multer');
const authRouter = require('./controllers/auth')
const blogRouter = require('./controllers/blog')
const userRouter = require('./controllers/user')
const app = express()
dotenv.config()

// В данном тестовом задании была реализована "базовая" загрузка данных на примере 
// Multer (node.js middleware). 
// Код, конечно, можно/нужно отрефакторить, конвертировать в ES6, добавить возможность комментирования, лайков,
// отдельной загрузки видео и т.д., однако на это потребовалось бы еще время, поэтому я предпочла сделать 
// очень базовую и при этом рабочую версию, которую уже можно показать.

// Файл README.md и сообщения в выводе сделаны на английском, так привычнее. Если нужно
// перевести - не проблема.

mongoose.set('strictQuery', true);
mongoose.connect(process.env.MONGO_URL, () => console.log('DB is successfully connected'))

// middlewares and routes
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use('/auth', authRouter)
app.use('/blog', blogRouter)
app.use('/user', userRouter)
app.use('/images', express.static('public/images'))

const storage = multer.diskStorage({
  destination:(req, file, cb) => {
    cb(null, 'public/images')
  },
  filename:(req, file, cb) => {
    cb(null, req.body.filename) 
  }
})

const upload = multer({ storage: storage });

app.post("/upload", upload.single("file"), async(req, res) => {
    return res.status(200).json({msg: "Successfully uploaded"})
});

app.listen(5000, () => console.log("Server is connected successfully"))