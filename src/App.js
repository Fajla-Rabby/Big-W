import logo from './logo.svg';
import './App.css';
import Shop from './Components/Shop/Shop';



function App() {
  return (
    <div className="App">
     <Shop></Shop>
     <h5>How Reacts Work?</h5>
     <p>Let’s say one of your friends posted a photograph on Facebook. Now you go and like the image and then you started checking out the comments too. Now while you are browsing over comments you see that the likes count has increased by 100, since you liked the picture, even without reloading the page. This magical count change is because of Reactjs. </p>
     <h5>How useState Work?</h5>
     <p> useState is a Hook that allows you to have state variables in functional components. You pass the initial state to this function and it returns a variable with the current state value and another function to update this value.</p>
    </div>
  );
}

export default App;
