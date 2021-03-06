var express = require('express');
var app = express();


app.set('port', process.env.PORT || 3000 );
app.set('view engine', 'ejs');
app.set('views', 'app/views');

app.locals.siteTitle = "The Signal"
app.locals.productName = "The Signal"

app.use(express.static('app/public'));

app.use(require('./routes/index'));
app.use(require('./routes/loginpage'));

var server = app.listen(app.get('port'), function() {
  console.log('Listening on port ' + app.get('port'));
}
)
