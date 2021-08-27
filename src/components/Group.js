import Tile from "./Tile";

const Group = ({usersList,header}) => {

    const getUserDetail = () => {
        const users = getFilterdAccounts();
        const tiles = users.map(({login,avatar_url}) => {
            return <Tile key = {login} name = {login} imgUrl = {avatar_url}/>
        });
        return tiles;
    };

    const getFilterdAccounts = () => {
        if(header === "Even") {
            return usersList.filter((val, index) => {
                return index % 2 === 0;
            });
        }
        else {
            return usersList.filter((val, index) => {
                return index % 2;
            });
        }
    }

    const handleDrop = (e) => {
        e.preventDefault();
        var data = e.dataTransfer.getData("text");
        var element = document.getElementById(data);
        e.target.appendChild(element);
    };

    return(
        <div className = "group-card">
            <div className = "header">
                {header}
            </div>
            <div className = "content">
            <div className = "no-data-msg" onDrop = {handleDrop} onDragOver = {(e) => e.preventDefault()}>{getUserDetail()}</div>
            </div>
            <div className = "footer"> 
                <button>Add</button>
            </div>
        </div>
    );
};

export default Group;