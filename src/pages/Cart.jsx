import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Book from '../components/Book';
import { Button } from 'react-bootstrap';
import { deletFromCart } from '../redux/slices/cartSlice';

export default function Cart() {
  const booksArr = useSelector(state => state.cart.value);
  const dispatch = useDispatch();
  const handelDelete = (book) => {
    dispatch(deletFromCart(book));
  }
  return (
    <div>
      {booksArr.map(book => <Book book={book} addDelete={true} onDelete={handelDelete}/>)}
    </div>
  )
}
