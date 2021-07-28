import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import * as paths from "../../utils/paths"
import "../../App.css"
import BookEbook from '../../components/Book/BookEbook'
import { movePublic } from '../../services/shelves.services'

function PublicBookShelf(props) {

    const { publicShelf } = props
    const {updateUser} = props
    console.log(publicShelf)


    const [bookshelfState, setState] = useState(publicShelf)

    useEffect(() => {
        setState(publicShelf)
    }, [publicShelf])


    return (
   	 
         <div className="list-books">
          <div className="list-books-title">
            <h1>MyReads</h1>
              {bookshelfState.shelves && bookshelfState.shelves.length > 0 && bookshelfState.shelves.map(shelf => {
              return(
                <div key={shelf._id} className="bookshelf">
                  <h3>{shelf.name}</h3>
	                <div className="bookshelf-books">
	                  <ol className="books-grid">
                      {shelf.books && shelf.books.map(eachBook => 
                          <BookEbook book={eachBook} user={props.user} bsType="public" updateUser={updateUser} bookshelf={publicShelf} shelf={shelf._id} />
                      )}
                    </ol>
                  </div>
                </div>  
              )
            })}



{/* 


            <h4>Currently Reading</h4>
             {bookshelfState.currentlyReading && bookshelfState.currentlyReading.map(eachBook => {
              return(
                <div key={eachBook._id}>
                  <img src={eachBook.coverUrl} alt="BookImg" />
                  <Link to={`/details/${eachBook._id}`}>{eachBook.title}</Link>
                  <a href={eachBook.olLink} target="_blank" rel="noreferrer">Go to Open Library</a>
                  <div className="open-search">
                  <Link to="/search">Add a book</Link>
                  </div>
                </div>
              )
            })}
            <h4>Want to Read</h4>
              {bookshelfState.wantToRead && bookshelfState.wantToRead.map(eachBook => {
              return(
                <div key={eachBook._id}>
                  <img src={eachBook.coverUrl} alt="BookImg" />
                  <Link to={`/`}>{eachBook.title}</Link>
                  <div className="open-search">
                  <Link to="/search">Add a book</Link>
                  </div>
                </div>
              )
            })}
            <h4>Read</h4>
            {bookshelfState.read && bookshelfState.read.map(eachBook => {
              return(
                <div key={eachBook._id}>
                  <img src={eachBook.coverUrl} alt="BookImg" />
                  <Link to={`/`}>{eachBook.title}</Link>
                  {/* option to review, drop down review 
                  <div className="open-search">
                  <Link to="/search">Add a book</Link>
                  </div>
                </div>
              )
            })}

            {bookshelfState.dynamicShelves && bookshelfState.dynamicShelves.length > 0 && bookshelfState.dynamicShelves.map(shelf => {
              return(
                <div key={shelf._id}>
                  <h3>{shelf.name}</h3>
                  {shelf.books && shelf.books.map(eachBook => {
                  return(
                    <div key={eachBook._id}>
                      <img src={eachBook.coverUrl} alt="BookImg" />
                      <Link to={`/`}>{eachBook.title}</Link>
                    </div>
                )
            })}
                </div>
              )
            })}

 */}
         {/*    <button className = "info-button" onClick = {showForm}>Add a new shelf</button> */}

          </div>

        </div>

     )

}


export default PublicBookShelf;

