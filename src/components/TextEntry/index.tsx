import React, { useRef } from "react";
import { TListItem } from "../../App";

import styles from "./index.module.scss";

interface IProps {
  listItems: TListItem[] | [];
  updateListItems: React.Dispatch<React.SetStateAction<TListItem[] | []>>;
}

const TextEntry: React.FC<IProps> = ({ listItems, updateListItems }) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const checkIfValid = (value: string | undefined) => {
    if (value !== undefined && value !== "") {
      updateListItems([...listItems, { content: value, id: listItems.length }]);
      return inputRef.current!.value = "";
    }
    alert("Please enter a valid to do item");
  };

  return (
    <div>
      <form
      className={styles.form}
        onSubmit={(e) => {
          e.preventDefault();
          checkIfValid(inputRef.current?.value);
        }}
      >
        <label htmlFor="textEntry" className={styles.label}>Enter to do item here:</label>
        <input type="text" name="textEntry" ref={inputRef} className={styles.input}/>
        <input type="submit" value="+" className={styles.btn}/>
      </form>
    </div>
  );
};

export default TextEntry;
