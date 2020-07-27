import React from "react";
import {useDispatch, useSelector} from "react-redux";
import BookForm from "./BookForm";
import BookList from "./BookList";
import {addBook, allBooks, deleteBook} from "../modules/books";
import UserService from "../services/UserService";
import Meeting from "./Meeting";

export default function BookBox() {

  const dispatch = useDispatch();
  const books = useSelector((state) => state.books);

  React.useEffect(() => {
    dispatch(allBooks())
  }, [dispatch]);

  return (
    <div className="bookBox row">
      <h1>
        Welcome {UserService.getUsername()}&nbsp;
        <button className="btn btn-success" onClick={UserService.doLogout}>Logout</button>
      </h1>
      
      <a href={"http://meet.evacloud.io/" + UserService.getRoomName() + '?jwt=' + UserService.getToken()}>Start meeting</a>
    </div>
  );
}
