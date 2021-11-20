import { Button } from "@mui/material";
import "./ImageButton.css"

interface imageButtonProps {
    id: number;
    x: string;
    y: string;
    src: string;
    alt: string;
    playerposition: string;
    onClick: () => void;
  }

function ImageButton({id,x,y,src,alt,playerposition,onClick}: imageButtonProps){
    
    return (
        <Button key={id} value={playerposition} style={{position:"absolute",top:x,left:y}}>
            <img className="imgrounded" height="70px" width="70px" src={src} alt={alt} onClick={onClick}/>
        </Button>
    )
}

export default ImageButton;