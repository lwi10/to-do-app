import React, { useEffect } from "react";
import { TListItem } from "../../App";

import { BsFillTrashFill } from "react-icons/bs";

import styles from "./index.module.scss";

interface IProps {
  content: string;
  id: number;
  listItems: TListItem[] | [];
  remove: any;
}

const ToDoItem: React.FC<IProps> = ({ content, id, remove }) => {
  const [isChecked, setIsChecked] = React.useState<boolean>(false);
  const [isLoaded, setIsLoaded] = React.useState<boolean>(false);

  useEffect(() => {
    setTimeout(() => setIsLoaded(true), 500);
  }, []);

  return (
    <div
      className={`${styles.toDoItemWrapper} ${isLoaded ? styles.loaded : ""}`}
      id={id.toString()}
    >
      <div className={`${styles.toDoItem} ${isLoaded ? styles.loaded : ""}`}>
        <input
          type="checkbox"
          checked={isChecked}
          onChange={() => setIsChecked(!isChecked)}
          onClick={() => setIsChecked(!isChecked)}
          className={styles.checkbox}
        />
        <p className={isChecked ? styles.textCrossed : styles.text}>
          {content}
        </p>
        <button onClick={() => remove(id)}>
          <BsFillTrashFill />
        </button>
      </div>
    </div>
  );
};

export default ToDoItem;
