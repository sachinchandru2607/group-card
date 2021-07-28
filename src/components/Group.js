import { useEffect,useRef, useState } from "react";
import Tile from "./Tile";

const Group = ({header}) => {
    const [tile, setTile] = useState(0);
    let tileDisplay = useRef([]);
    const handleAddTile = () => {
        setTile((prevState) => (prevState + 1));
    };
    useEffect(() => {
        tileDisplay.current.push(<Tile />);
    },[tile]);
    return(
        <div className = "group-card">
            <div className = "header">
                {header}
            </div>
            <div className = "content">
             {tile > 0 ? tileDisplay.current : <div className = "no-data-msg">No data found</div>}
            </div>
            <div className = "footer"> 
                <button onClick = {handleAddTile}>Add</button>
            </div>
        </div>
    );
};

export default Group;