import {React, useEffect, useState} from 'react'
import {useNavigate} from 'react-router-dom';
import axios from 'axios';

const BookCard = ({bookId}) => {

    const navigate = useNavigate();
    const [bookResults, setBookResults ] = useState('');

    useEffect(() => {
    
        axios.get(`https://openlibrary.org${bookId}.json`)
        .then((response) => {
          setBookResults(response);
        
        })
      }, [bookId]);

        

    const handleClick = () =>{
        navigate(`/book/:${bookId}`);
    }

  return (
    <div onClick={handleClick}>
        <p>BookCard {bookId}</p>
        <p>{bookResults.title}</p>
        <p>{bookResults.subtitle}</p>
        </div>
  )
}

export default BookCard