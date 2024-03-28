import Link from "next/link";
import styles from "../styles/book-category.module.css";

export default function BookCategory({ display_name, list_name_encoded }) {
  return (
    <Link href={`/list/${list_name_encoded}`} prefetch>
      <div className={styles.bookCategory}>
        <div>{display_name}</div>
      </div>
    </Link>
  );
}
