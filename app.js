const express = require('express');
const exphbs = require('express-handlebars');

// App
const app = express();

// View Engine
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

// Routing
app.get('/', (req, res) => res.render('index', {
    title: 'Savage Ipsum',
    subtitle: 'Ohhhh yeeeeah!!!'
}));
app.use('/api/generate', require('./routes/api/generate.route'));


// Port
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server started on ${PORT}`));