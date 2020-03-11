import React from "react";
import ListItem from "./ListItem";
import styles from "./List.module.scss";

const List = ({ items }) => (
  <>
    {items.length ? (
      <ul className={styles.wrapper}>
        {items.map(item => (
          <ListItem key={item.title} {...item} />
        ))}
      </ul>
    ) : (
        <h1 className={styles.noItems}>Add some items! Here is empty zone</h1>
      )}
  </>
);

export default List;
