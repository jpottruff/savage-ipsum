const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');

// App
const app = express();

// View Engine
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');
app.use(express.static(path.join(__dirname, 'public')))

// Routing
app.get('/', (req, res) => res.render('index'));
app.use('/api/generate', require('./routes/api/generate.route'));


// Port
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server started on ${PORT}`));