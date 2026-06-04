import "./App.css";
import ToDo from "./Todo";
import Act from './Actor'
import Bk from './Books'

function App() {
   const actors=['ads','ddd','fasdf'];
   const Books=[
    {name:'Physics',price:2000},
    {name:'Math',price:2100},
    {name:'English',price:1500},
   ]
  return (
    <>
      <h1>Vite & React</h1>
      <ToDo task="learn React"></ToDo>
      <Show name="Ziad" tech="js" income="40k"></Show>
      <Show name="Hasib" tech="next.js"></Show>
      {
        actors.map((actor,i)=><Act key={i} actor={actor}></Act>)
      }
      <Bk Books={Books}></Bk>
    </>
  );
}
function Show({ name, tech, income = 0 }) {
  const age = 23;
  return (
    <p
      style={{
        padding: "20px",
        borderRadius: "5px",
        border: "1px solid green",
      }}
    >
      My name is: {age}, name is {name} and I know {tech} and also income is:{" "}
      {income}
    </p>
  );
}
export default App;
