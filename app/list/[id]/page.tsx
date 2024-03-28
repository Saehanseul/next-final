import Link from "next/link";
import { API_URL } from "../../../constants";

interface IParams {
  id: string;
}

const getBookList = async (id) => {
  const res = await fetch(`${API_URL}/list?name=${id}`);
  const json = await res.json();
  return json;
};

export default async function Detail({ params: { id } }: { params: IParams }) {
  const bookList = await getBookList(id);
  console.log(bookList.results.books);
  return (
    <div>
      <h1>{`${id} Books`}</h1>
      {bookList.results.books.map((book) => {
        return (
          <div key={book.primary_isbn10}>
            <img src={book.book_image} alt={book.title} />
            <h1>{book.title}</h1>
            <div>{book.author}</div>
            <div>{book.description}</div>
            <a href={book.amazon_product_url} target="_blank">
              Buy now
            </a>
          </div>
        );
      })}
    </div>
  );
}
