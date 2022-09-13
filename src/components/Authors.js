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

  const changeHandler = (x) => {
    props.click(document.getElementById("myInput").value = x );
    document.getElementById("search").click();
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
            const clickAction = () => {
              changeHandler(x);
            }
            return (
              <tr>
                <td
                  className="tbody-rows"
                  style={{ textAlign: "center" }}
                  onClick={clickAction }
                  
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