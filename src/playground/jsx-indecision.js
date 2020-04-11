console.log("APP.js is running!");

//NOTE: this is from the app.js when before lecture 26

const app = {
  title: "Indecision App",
  subtitle: "This is my subtitle",
  options: [],
};

const onFormSubmit = (e) => {
  e.preventDefault();

  const option = e.target.elements.option.value;

  if (option){
    app.options.push(option);
    e.target.elements.option.value = ' ';
    renderFormApp();

  }

};

const removeAll = () =>{
  app.options = [];
  renderFormApp();
};
//JSX - JavaScript XML

const onMakeDecision =() => {
  const randomNum = Math.floor(Math.random() * app.options.length);
  const option = app.options[randomNum];
  alert(option);
}


const appRoot = document.getElementById('app');

const renderFormApp = () => {
  const template = (
    <div>
      <h1>{app.title}</h1>
      {app.subtitle && <p> Subtitle: {app.subtitle}</p>}
      <p>{app.options.length > 0 ? "Here are your options" : "no option"}</p>
      
      <button disabled={app.options.length === 0} onClick={onMakeDecision}> What should I do?</button>

      <button onClick={removeAll}>Remove all</button>
    
      <ol>
        {
          app.options.map((option) => {
            return <li key={option}> List: {option}</li>
          })
        }
      </ol>
  
    <form onSubmit={onFormSubmit}>
      <input type="text" name="option"/>
      <button > Add Option</button>
    </form>
  
  
    </div>
  );
  ReactDOM.render(template,appRoot);

};

renderFormApp();
