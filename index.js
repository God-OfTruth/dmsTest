const express = require('express');
const app = express();
const http = require('http');
const port = process.env.PORT || 8082;
const userRoutes = require('./routes/userRoutes')
const accountRoutes = require('./routes/accountsRoutes')
const adminRoutes = require('./routes/adminRoutes');
const { json } = require('express');
const cors = require('cors');

app.use(cors({
}))

app.use(express.json())
app.get('/ping', (req, res) => {
    res.status(200).send({
        message: 'pong'
    });
})

app.use('/admin/user', userRoutes)
app.use('/account', accountRoutes)
app.use('/admin', adminRoutes)

app.listen(port, () => {
    console.log(`Server is Listening on http://localhost:${port}`);
})