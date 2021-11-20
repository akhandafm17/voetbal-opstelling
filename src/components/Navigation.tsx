import { Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import BoardsIcon from "@mui/icons-material/Dashboard";
import AboutIcon from "@mui/icons-material/InfoOutlined";
import "./Navigation.css"

type NavigationProps = { isOpen: boolean; onClose: () => void };

 function Navigation({ isOpen, onClose }: NavigationProps) {

  return (
    <div>
      <Drawer PaperProps={{ sx: { backgroundColor: "#F77C64", color: "black", borderBottomRightRadius: 50, borderTopRightRadius: 50 }}} open={isOpen} onClose={onClose}>
        <List sx={{ width: 200 }}>
          {[
            { label: "Overzicht", href: "/", icon: <BoardsIcon /> },
            { label: "About", href: "/about", icon: <AboutIcon /> },
          ].map((item) => (
            <ListItem disableGutters key={item.href}>
              <ListItemButton component="a" href={item.href}>
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.label} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </div>
  );
}
export default Navigation;
