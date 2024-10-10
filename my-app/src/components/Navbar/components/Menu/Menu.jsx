import MenuItem from "./components/MenuItem/MenuItem";
import "./Menu.css"

const Menu = ({ items }) => {

    return (
        <div className="menu">
            <ul>
                {items.map((item, index) => (
                    <MenuItem key={index} item={item} />
                ))}
            </ul>
        </div>
    )
}
export default Menu;