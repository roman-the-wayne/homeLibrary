const express = require('express');
const multer = require('multer');
const cors = require('cors');

const app = express();

app.use(cors());

const upload = multer({ dest: 'uploads/' });

app.post('/upload', upload.single('image'), (req, res) => {
    console.log(req.file);
    console.log(req.body);

    res.json({ message: " Server recieved a file"});
})

app.listen(3000, () => {
    console.log('started');
})