import {React} from 'react'
import {useNavigate} from 'react-router-dom';

const BookCard = ({book}) => {
    const navigate = useNavigate();

    const handleClick = () =>{
        navigate(`/book${book.key}`);
    }

  return (
    <div onClick={handleClick}>
        <p>{book.title}</p>
        <img src={`https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`}  alt='loading'/>
    </div>
  )
}

export default BookCard