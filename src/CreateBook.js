import React, {useState} from 'react';

function CreateBook(props) {
    const {onCreate} = props;

    const [book, setBook] = useState({
      title:"",
      descriptions: ""   
    });

    const handleChange = (e) => {
      setBook({
        ...book,
        [e.target.name]: e.target.value
      })
    }

    const onSubmit = (e) => {
      e.preventDefault();
      onCreate(book);
    }

    return (
      <form onSubmit={onSubmit}>
        <label>
          NEWTitle:
          <input name ="title" type="text" value={book.title} onChange={(e) => handleChange(e)}/>
        </label>
        <label>
          Description:
          <input name ="description" type="text" value={book.description} onChange={(e) => handleChange(e)}/>
        </label>
        <input type="submit" value="Submit"/>
        </form>
    )
}

export default CreateBook;