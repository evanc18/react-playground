import { Fragment, useState } from "react";
//import { MouseEvent } from "react";

interface props {
    items: string[];
    heading: string;
    onSelectItem: (item: string) => void;
}

function ListGroup({items, heading, onSelectItem}: props) {
    
    //let selectedIndex = 0;
    //items = [] 

    const [selectedIndex, setSelectedIndex] = useState(-1);

    const getMessage = () => {
         return items.length === 0 ? <p>No items found!</p> : null;
    }

    return (
        <Fragment>
            <h1>{heading}</h1>
            {getMessage()}
            <ul className="list-group">
                {items.map((item,index) => <li 
                className={selectedIndex === index ? 'list-group-item active' : 'list-group-item'} 
                onClick={() => {setSelectedIndex(index); onSelectItem(item)}} 
                key={item}>{item}</li>)}
            </ul>
        </Fragment>
    );
}

export default ListGroup;