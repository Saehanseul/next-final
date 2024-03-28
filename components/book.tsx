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
      <h1>{title}</h1>
      <div>{author}</div>
      <div>{description}</div>
      <a href={amazon_product_url} target="_blank">
        Buy now
      </a>
    </div>
  );
}
