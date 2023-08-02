import {React} from 'react'
import {useNavigate} from 'react-router-dom';

const BookCard = ({book}) => {
    const navigate = useNavigate();

    const handleClick = () =>{
        navigate(`/book/:${book}`);
    }

  return (
    <div onClick={handleClick}>
        <img src={`https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`}  alt='loading'/>
        <p>{book.title}</p>
    </div>
  )
}

export default BookCard