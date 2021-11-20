import MediaCard from "./MediaCard"
import { Item} from "./opOverzicht"
import '../opOverzicht.css';

interface opOverzichtItemProps{
    item: Item
}
function OpOverzichtItem({item}: opOverzichtItemProps){
 return <div className="opOvItem" key={item.id}><MediaCard  item={item}/></div>
}

export default OpOverzichtItem;