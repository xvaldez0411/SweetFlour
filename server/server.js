const express = require('express');
const app = express();
const port=8000;
const cors = require('cors');

app.use(cors({origin:"http://localhost:3000"}))
app.use(express.json())
app.use(express.urlencoded({extended:true}))

require('./config/mongoose.config')

require('./routes/signature.route')(app)


app.listen(port, () => console.log(`Locked and loaded on port: ${port}`))