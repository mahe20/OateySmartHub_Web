'use strict';

console.log('APP.js is running!');

var app = {
    title: 'Indecision App',
    subtitle: 'This is my subtitle',
    options: ['one', 'two']
};

//JSX - JavaScript XML
var template = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        app.title
    ),
    app.subtitle && React.createElement(
        'p',
        null,
        ' Subtitle: ',
        app.subtitle
    ),
    React.createElement(
        'p',
        null,
        app.options.length > 0 ? 'Here are your options' : 'no option'
    )
);

var user = {
    name: 'Mahi',
    age: 23,
    Location: 'OH'
};

function getLocation(Location) {

    if (Location) {
        return React.createElement(
            'p',
            null,
            ' Location: ',
            Location
        );
    }
}

var templateTwo = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        ' ',
        user.name ? user.name : 'Anonymous'
    ),
    user.age && user.age >= 18 && React.createElement(
        'p',
        null,
        'Age: ',
        user.age
    ),
    getLocation(user.Location)
); //if there is no location then it returns nth^^

//babeljs to convert to react

var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
