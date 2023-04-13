//import Message from "./Message"
import ListGroup from "./components/ListGroup";

let items = [
  'New York',
  'Austin',
  'Seattle',
  'Round Rock'
];

function App() {
  return <div><ListGroup items={items} heading="Cities"/></div>;
};

export default App;