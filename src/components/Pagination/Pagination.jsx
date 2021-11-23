import React from "react";

function Pagination(props) {
  return (
      <div className="pagination">
          <a href="#" className="arrow"></a>
          <div className="pagination-bg">
              <a href="#">1</a>
              <a href="#" className="active">2</a>
              <a href="#">3</a>
              <a href="#">4</a>
              <a href="#">5</a>
              <a href="#">6</a>
              <a href="#">7</a>
              <a href="#">8</a>
              <a href="#">9</a>
              <a href="#">10</a>
          </div>
          <a href="#" className="arrow"></a>
      </div>
  );
}

export default Pagination;
