import Link from "next/link";
import { API_URL } from "../../../constants";
import Book from "../../../components/book";
import styles from "./list.module.css";

interface IParams {
  id: string;
}

const getBookList = async (id) => {
  const res = await fetch(`${API_URL}/list?name=${id}`);
  const json = await res.json();
  return json;
};

export default async function List({ params: { id } }: { params: IParams }) {
  const bookList = await getBookList(id);
  console.log(bookList);
  return (
    <div className={styles.container}>
      <h1>{`${bookList.results.display_name} Books`}</h1>
      {bookList.results.books.map((book) => {
        return (
          <Book
            key={book.primary_isbn10}
            book_image={book.book_image}
            title={book.title}
            author={book.author}
            description={book.description}
            amazon_product_url={book.amazon_product_url}
          />
        );
      })}
    </div>
  );
}
