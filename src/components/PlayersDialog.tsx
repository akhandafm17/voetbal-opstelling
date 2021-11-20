import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import addIcon from "../assets/img/addicon.png";
import ImageButton from './ImageButton';
import useGetCollection from '../hooks/useGetCollection';
import { PlayerItem } from './PlayerItem';
import { useState } from 'react';
import { useParams } from 'react-router';


export interface SimpleDialogProps {
  id: number;
  open: boolean;
  selectedValue: number;
  onClose: (value: number) => void;
  playerposition: string;
  playerDialogClicked: (value: any) => void;
}

interface dialogProps {
  id: number,
  x:string,
  y:string,
  alt:string,
  playerposition:string,
  player?: PlayerItem,
  updatePlayerInOpstelling: (value: any) => void
}

function SimpleDialog(props: SimpleDialogProps) {
  const { id } = useParams<{ id: string }>();
  const { onClose, selectedValue, open } = props;
  const {
    data: items,
  } = useGetCollection(`/opItems/${id}/players`);
  const handleClose = () => {
    onClose(selectedValue);
  };


  return (
    <Dialog onClose={handleClose} open={open}>
      <DialogTitle>Kies een speler ?</DialogTitle>
      <List sx={{ pt: 0 }}>
        {items.map((item : PlayerItem) => (
          item.position === props.playerposition ?
          <ListItem button onClick={() => props.playerDialogClicked(item)} key={item.id}>
            <ListItemAvatar>
            <Avatar
                  alt={item.firstname+" "+item.lastname}
                  src={item.profileImage}
                />
            </ListItemAvatar>
            <ListItemText primary={item.firstname+" "+item.lastname} />
          </ListItem>
          : null
        ))}
      </List>
    </Dialog>
  );
}

export default function SimpleDialogDemo({id,x,y,alt,playerposition,player,updatePlayerInOpstelling}: dialogProps) {
  const [open, setOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState(0);

  const handleClickOpen = () => {
    console.log("open")
    setSelectedValue(id)
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const playerDialogClicked = (player: PlayerItem) => {
    var playerWithUpdatedPositions = {
      ...player,
      x: x,
      y: y
    }
    updatePlayerInOpstelling(playerWithUpdatedPositions);
    handleClose();
  }

  const removeFromField = () => {
    var playerWithUpdatedPositions = {
      ...player,
      x: "0px",
      y: "0px"
    }
    updatePlayerInOpstelling(playerWithUpdatedPositions);
  }

  return (
    <div>
     
      {player != null ? <ImageButton id={id} x={x} y={y} alt={alt} playerposition={playerposition} src={player.profileImage} onClick={removeFromField}/>:
      <ImageButton id={id} x={x} y={y} alt={alt} playerposition={playerposition} src={addIcon} onClick={handleClickOpen}/>}
        
        {/*player != null && <ImageButton id={id} x={x} y={y} alt={alt} playerposition={playerposition} src={player.profileImage} onClick={() => console.log("ok")}/>*/}
        {/*player == null && <ImageButton id={id} x={x} y={y} alt={alt} playerposition={playerposition} src={addIcon} onClick={handleClickOpen}/>*/}
     
      <SimpleDialog
        id={id}
        selectedValue={selectedValue}
        open={open}
        onClose={handleClose}
        playerposition={playerposition}
        playerDialogClicked={playerDialogClicked}
      />
    </div>
  );
}
