import React from "react";

import styles from "./NotFoundBlock.module.scss";

const NotFoundBlock = () => {
  return (
    <>
      <div className={styles.notFound}>
        <span>&#128533;</span>
        <h2>Ничего не найдено</h2>
      </div>
    </>
  );
};

export default NotFoundBlock;
