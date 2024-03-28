import Link from "next/link";
import { API_URL } from "../../constants";
import BookCategory from "../../components/book-catetory";
import styles from "./home.module.css";

const getBookCategoryList = async () => {
  const res = await fetch(`${API_URL}/lists`);
  const json = await res.json();
  return json;
};

export default async function Home() {
  const bookCagetoryList = await getBookCategoryList();
  console.log(bookCagetoryList);
  return (
    <div className={styles.container}>
      <h1>THE NEW YORK TIMES BEST SELLER EXPLORER</h1>
      {bookCagetoryList.results.map((book) => {
        return (
          <BookCategory
            key={book.list_name_encoded}
            display_name={book.display_name}
            list_name_encoded={book.list_name_encoded}
          />
        );
      })}
    </div>
  );
}
