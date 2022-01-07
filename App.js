import "./App.css"
import { useState } from "react";
export default function App() {
  return (
    <>
      <MyComponent />
    </>
  );
}

function MyComponent() {
  const [message, setMessage] = useState("Chathere...");
  const [List, setList] = useState(["Chathere"]);
  const Chathere = () => {
    const newList=[...List,message];
    setList(newList);
    setMessage("");
  };
  const changeMessage = (e) => {
    const newMessage = e.target.value;
    setMessage(newMessage);
  };
  return (
    <div>
      <header class="red">
       <h1> MyChatApp by Ankit_Singh 210940320023</h1>

      </header>

      <input type="button" vlaue="Send"  OnClick={Chathere} />
      <div id="parent">
        {List.map((item, index) => (
          <div key={index}>{item}</div>
        ))}
      </div>
    </div>
  );
}
