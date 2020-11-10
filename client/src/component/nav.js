import React from 'react';

const Menu = () => {
return ( 
    <Box>   
        <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
        Open Menu
        </Button>
        <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
        >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
        </Menu>
    </Box>
    )

}

export default Menu;