import React, { useState } from "react";

export default function Authors(props) {
  const [author, setAuthor] = useState([]);

  let url = "https://quote-api-app.herokuapp.com/author";
  try {
    fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      setAuthor(data);
    });
  } catch (error) {
    console.log(error)
    
  }
  

  return (
    <>
      <table className="table table-hover">
        <thead>
          <tr>
            <th scope="col" style={{ textAlign: "center" }}>
              Authors
            </th>
          </tr>
        </thead>
        <tbody>
          {author.map((x) => {
            
            return (
              <tr>
                <td
                  className="tbody-rows"
                  style={{ textAlign: "center" }}
                  onClick={({target}) => console.log(target.textContent)} //props.click
                  
                >
                  {x}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}