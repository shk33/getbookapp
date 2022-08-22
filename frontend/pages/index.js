import axios from "axios";
import Hero from "../components/Hero";
import BookList from "../components/BookList";
import AuthorList from "../components/AuthorList";
import { server } from "../config";

export default function Home({ books, authors }) {
  return (
    <div className="bg-gray-700">
      <Hero />
      <BookList books={books} />
      <AuthorList authors={authors}/>
    </div>
  )
}

export async function getStaticProps() {
  const booksPromise = await axios(`${server}/books`);
  const authorPromise = await axios(`${server}/authors`);

  const results = await Promise.all([booksPromise, authorPromise]);
  const books = results[0].data;
  const authors = results[1].data;

  return {
    props: { books, authors }
  }
}

