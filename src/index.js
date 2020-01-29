import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

const rootElement = document.getElementById("root");

let list = [];
fetch("https://www.googleapis.com/books/v1/volumes?q=flowers")
  .then(res => res.json())
  .then(data => {
    for (var i = 0; i < 10; i++) {
      var tit = data["items"][i]["volumeInfo"]["title"];
      var lin = data["items"][i]["volumeInfo"]["imageLinks"]["thumbnail"];
      //Do something with the data. Hint: Pass it as props to the App component
      list.push(<App key={i} title={tit} link={lin} />);
    }
    ReactDOM.render(<div>{list}</div>, rootElement);
  });

//Replace with your API here the data. Hint: Pass it as props to the App component
