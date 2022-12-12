import React from "react";
import { MBookList } from "./MBookList";
import MBookItem from "./MBookItem";
import "../book.css";

function MBook() {
  return (
    <div className="bbook">
        <h1 className="bbookTitle">Mystery</h1>
      <div className="bbookList">
        {MBookList.map((bookItem, key) => {
          return (
            <MBookItem
              key={key}
              image={bookItem.image}
              name={bookItem.name}
              name1={bookItem.name1}
            
            />
          );
        })}
      </div>
      </div>
       
  );
}

export default MBook;