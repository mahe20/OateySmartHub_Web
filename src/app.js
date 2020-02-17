console.log('APP.js is running!');

var app = {
    title:'Indecision App',
    subtitle:'This is my subtitle',
    options: ['one', 'two']
};



//JSX - JavaScript XML
var template = (
    <div>
        <h1>{app.title}</h1>
        {app.subtitle && <p> Subtitle: {app.subtitle}</p>}
        <p>{app.options.length > 0 ? 'Here are your options' : 'no option'}</p>

        
    </div>
);

var user = {
    name: 'Mahi',
    age: 23,
    Location: 'OH'
}

function getLocation(Location){

    if (Location){
        return <p> Location: {Location}</p>
    } 
}

var templateTwo = (
    <div>
        <h1> {user.name ? user.name : 'Anonymous'}</h1>
        {(user.age && user.age >= 18) && <p>Age: {user.age}</p>}
        {getLocation(user.Location)}  
    </div>
); //if there is no location then it returns nth^^

//babeljs to convert to react

var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
