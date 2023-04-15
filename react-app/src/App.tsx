//import Message from "./Message"
import { Alert } from "./components/Alert";
import ListGroup from "./components/ListGroup";
import Button from "./components/Button"
import { useState } from "react";

let items = [
  'New York',
  'Austin',
  'Seattle',
  'Round Rock'
];

function App() {
  /**const handleSelectItem = (item: string) => {
    console.log(item);
  };
  return <div><ListGroup items={items} heading="Cities" onSelectItem={handleSelectItem}/></div>;
  **/

 //return (<div><Alert>Hello <b>World</b></Alert></div>)

 const [alertVisible, setAlertVisible] = useState(false);

 return (
 <div>
  {alertVisible && <Alert onClose={() => setAlertVisible(false)}>My alert</Alert>}
  <Button onClick={() => setAlertVisible(true)}>Press me</Button></div>
  )
};

export default App;