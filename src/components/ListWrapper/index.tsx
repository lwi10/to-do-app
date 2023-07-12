import React from "react";
import { TListItem } from "../../App";
import ToDoItem from "../ToDoItem";

import styles from "./index.module.scss";

interface IProps {
  listItems: TListItem[] | [];
  updateListItems: React.Dispatch<React.SetStateAction<TListItem[] | []>>;
  remove: any;
}

const ListWrapper: React.FC<IProps> = ({ listItems, remove }) => {
  return (
    <div className={styles.listWrapper}>
      <div className="listCount">
        {listItems?.length === 1
          ? `${listItems.length} thing to do`
          : listItems?.length > 5 
          ? `too many things to do`
          : listItems?.length
          ? `${listItems.length} things to do`
          : "Nothing to do here!"}
      </div>

      <div className={styles.listWrapperInner}>
        {listItems.map((item: any, key) => {
          return item.content ? (
            <ToDoItem
              content={item.content}
              key={key}
              id={item.id}
              remove={remove}
              listItems={listItems}
            />
          ) : null;
        })}
      </div>
    </div>
  );
};

export default ListWrapper;
