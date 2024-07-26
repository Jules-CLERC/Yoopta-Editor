import React from 'react';
import { Drawer, List, ListItem, ListItemText, Select, MenuItem } from '@mui/material';

function Sidebar() {
  const [selectedOption, setSelectedOption] = React.useState('');

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <Drawer
      variant="permanent"
      anchor="left"
    >
      <List>
        <ListItem>
          <ListItemText primary="Sidebar" />
        </ListItem>
        <ListItem>
          <Select
            value={selectedOption}
            onChange={handleSelectChange}
            displayEmpty
            fullWidth
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value="option1">Option 1</MenuItem>
            <MenuItem value="option2">Option 2</MenuItem>
            <MenuItem value="option3">Option 3</MenuItem>
          </Select>
        </ListItem>
      </List>
    </Drawer>
  );
}

export default Sidebar;
