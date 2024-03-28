import Link from "next/link";
import { API_URL } from "../../constants";

const getBookCategoryList = async () => {
  const res = await fetch(`${API_URL}/lists`);
  const json = await res.json();
  return json;
};

export default async function Home() {
  const bookCagetoryList = await getBookCategoryList();
  console.log(bookCagetoryList);
  return (
    <div>
      <h1>THE NEW YORK TIMES BEST SELLER EXPLORER</h1>
      {bookCagetoryList.results.map((book) => {
        return (
          <div key={book.list_name}>
            <Link href={`/list/${book.list_name_encoded}`}>
              <div>{book.display_name}</div>
            </Link>
          </div>
        );
      })}
    </div>
  );
}
