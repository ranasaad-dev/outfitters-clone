import React from "react";
import './cart.css';
class Cartbar extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      items: [],
    }
  }
render(){
    return (
      <>
     <h3>ADDED TO YOUR BASKET</h3>
     <p>YOUR BASKET IS CURRENTLY EMPTY</p>
     <button>CONTINUE SHOPPING</button>
     <p>YOU MAY ALSO LIKE</p>
     <div>

      <p>items goes here</p>
     </div>

 
      </>
    );
  }
}

export default Cartbar;
