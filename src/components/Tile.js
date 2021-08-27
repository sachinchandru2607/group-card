const Tile = ({name,imgUrl}) => {

    const onDragStart = (e) => {
        e.dataTransfer.setData("text", e.target.id);
    };

    return  (
        <div draggable = "true"  onDragStart = {onDragStart} id = "main-tile" className = "tile">
            <div className = "tile-header">
                <label>{name}</label>
            </div>
            <div className = "tile-content">
               <img src = {imgUrl} alt = {name} />
            </div>
        </div>
    );
};

export default Tile;    