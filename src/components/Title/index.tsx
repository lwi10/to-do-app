import React from "react";

import styles from "./index.module.scss";

interface IProps {
    title: string;
}

const Title: React.FC<IProps> = ({title}) => {
  return (
    <div>
      <h1 className={styles.title}>{title}</h1>
    </div>
  );
};

export default Title;
