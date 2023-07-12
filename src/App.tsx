import React from "react";
import Title from "./components/Title";
import ListWrapper from "./components/ListWrapper";

import "./App.css";
import TextEntry from "./components/TextEntry";

export type TListItem = {
  content: string;
  id: number;
};

function App() {
  const [listItems, setListItems] = React.useState<TListItem[] | []>([]);

  const removeListItem = (id: number) => {
    const newList = listItems.filter((item) => item.id !== id);
    setListItems(newList);
  }

// a function to edit one of the list items
  const editListItem = (id: number) => {

  }


  return (
    <div className="App">
      <Title title={`Leah's To Do List`} />

      <TextEntry updateListItems={setListItems} listItems={listItems}/>

      <ListWrapper listItems={listItems} updateListItems={setListItems} remove={removeListItem}/>
    </div>
  );
}

export default App;
