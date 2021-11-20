import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';

import Avatar from '@mui/material/Avatar';
import useGetCollection from "../hooks/useGetCollection";
import {
    CircularProgress,
    Paper,
  } from "@mui/material";
import { PlayerItem } from './PlayerItem';
import { useHistory } from 'react-router-dom';
import Oops from './oops';

export default function PlayersList() {
  const history = useHistory();
  const {
    loading,
    error,
    data: items,
  } = useGetCollection(`/players`);


  if (loading)
    return (
      <CircularProgress sx={{ display: "block", mt: "10em", mx: "auto" }} />
    );
  if (error)
  return <Oops/>

  return (
    <Paper sx={{ boxShadow: 0 }} style={{maxHeight: 645, overflow: 'auto',width: "500px",backgroundColor: '#F1EFE3'}}>
    <List className="list" dense sx={{ width: '100%', maxWidth: 300, bgcolor: 'transparant' }}>
      {items.map((value: PlayerItem) => {
        const labelId = `checkbox-list-secondary-label-${value}`;
        console.log("Value"+value);
        return (
              <ListItem 
              style={{ borderRadius: "10px", backgroundColor: "#F77C64", marginTop: "10px", marginLeft: "40px"}}
            key={value.id}
            disablePadding>
            <ListItemButton onClick={() => history.push(`/players/${value.id}`)}>
              <ListItemAvatar>
                <Avatar
                  alt={value.firstname+" "+value.lastname}
                  src={value.profileImage}
                />
              </ListItemAvatar>
              <ListItemText id={labelId} primary={value.firstname+" "+value.lastname} secondary={value.position}/>
            </ListItemButton>
          </ListItem>
        );
      })}
    </List>
    </Paper>
  );
}
