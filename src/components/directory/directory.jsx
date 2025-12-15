import React from "react";
import './directory.css';
import data from './data.js';
import MenuItem from '/src/components/menu-item/menu-item.jsx';

class Directory extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            sections: data,
            search: "",
            filtredItems:[]
        }
    }
    render() {
        return (
            <>        
            <div className="directory-menu">
                {this.state.sections.map(({ name, id, price, color, size, gender }) => (
                    <MenuItem key={id} name={name} imgSrc={`/public/pics/set6/${id}.jpg`} price={price} gender={gender} size={size} color={color} />
                ))}
            </div>
           </>
        )
    }
}

export default Directory;