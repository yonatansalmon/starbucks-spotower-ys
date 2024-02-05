import React from 'react';
import styles from '../styles/StarBucksItem.module.css';
import Image from 'next/image';
interface StarBucksItemProps {
  bgColor: string;
  title: string;
  text: string;
  imgUrl: string;
  order: Order;
}
interface Order {
  first: number;
  second: number;
}
const StarBucksItem = ({ bgColor, title, text, imgUrl, order }: StarBucksItemProps) => {
  return (
    <div className={styles.ItemContainer} style={{ backgroundColor: bgColor }}>
      <div className={`${styles.FlexOne}`} style={{ order: order.first }}>
        <img className={styles.ItemImage} src={imgUrl} alt='Cup' />
      </div>
      <div className={`${styles.FlexOne} ${styles.AlignJustifyCenter}`} style={{ order: order.second }}>
        <h1 className={`${styles.CenterText}`}>{title}</h1>
        <p className={`${styles.Description}`}>{text}</p>
        <button className={styles.ItemBtn}>Download to order</button>
      </div>
    </div>
  );
};

export default StarBucksItem;
