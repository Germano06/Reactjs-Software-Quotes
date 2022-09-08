import React, { useState } from 'react';
import { Link } from "react-router-dom";
export default function Authors() {

   const [author, setAuthor] = useState([]);
    //const [disp,setDisplay]=useState("none");
    //const [toggle,setToggle]=useState("1");
       
    let url = "https://quote-api-app.herokuapp.com/author";
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        
           setAuthor(data)
      });

  return (
    <>



     <center><h1><Link to="/quotes">Authors</Link></h1></center>
      <table className="table table-hover" >
        <thead>
          <tr>
            <th scope="col" style={{textAlign:"center"}} >Authors</th>
          </tr>
        </thead>
          {
             author.map(x=>{
              return (
                <tbody>
                    <tr><td className="tbody-rows" style={{textAlign:"center"}}>{x}</td></tr>
                </tbody>
                 )
            })
          }

      </table>
        
    </>
  )
}
