import React, { useEffect, useState } from 'react'
import Book from '../components/Book'
import axios from 'axios'

export default function Home() {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    const getAllBooks = async () => {
      try {
        const res = await axios.get("http://localhost:3000/books");
      if(res.status === 200) {
        // console.log(res.data);
        setBooks(res.data);
      }
      } catch(e) {
        console.error("error happend fetching books");
      }
      
    }
    getAllBooks();
  }, [])
  return (
    
    <div className='d-flex w-100 flex-wrap flex-row m-auto'>
      
      {books.length > 0 ? books.map(book => <Book book={book}/>) : <h1>No books availabe</h1>}
    </div>
  )
}
