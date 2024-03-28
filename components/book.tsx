import Image from "next/image";
import styles from "../styles/book.module.css";

interface IProps {
  book_image: string;
  title: string;
  author: string;
  description: string;
  amazon_product_url: string;
}

export default function Book({
  book_image,
  title,
  author,
  description,
  amazon_product_url
}: IProps) {
  return (
    <div className={styles.book}>
      <img src={book_image} alt={title} />
      <div>
        <h1>{title}</h1>
        <p>{author}</p>
        <div>{description}</div>
        <a href={amazon_product_url} target="_blank">
          Buy now
        </a>
      </div>
    </div>
  );
}
