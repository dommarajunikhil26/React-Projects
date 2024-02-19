import { AppBar, Toolbar, Typography, Box, Tab, Tabs, Menu, MenuItem, Tooltip, IconButton, Avatar } from "@mui/material"
import { Link } from "react-router-dom";
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import { getAuth, signOut, onAuthStateChanged } from "firebase/auth";
import { useState, useEffect } from "react";

const Header = () => {

    const [value, setValue] = useState('Home');
    const [anchorElUser, setAnchorElUser] = useState(null);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

    const handleTabChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    useEffect(() => {
        const auth = getAuth();
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setIsAuthenticated(!!user);
        });

        return () => unsubscribe();
    }, []);

    const handleLogout = () => {
        const auth = getAuth();
        signOut(auth).then(() => {
            setAnchorElUser(null);
            console.log("Sign out successfull");
        }).catch((error) => {
            console.log(error);
        });
    }
    return (
        <AppBar position="fixed">
            <Toolbar>
                <VisibilityOutlinedIcon sx={{ display: {xs: 'none', md: 'flex'}, mr: 1, fontSize: '3em'}}/>
                <Typography
                    variant="h6"
                    noWrap
                    component={Link}
                    to="/"
                    sx={{
                        mr: 2,
                        fontFamily: 'monospace',
                        fontWeight: 700,
                        letterSpacing: '.3rem',
                        color: 'inherit',
                        textDecoration: 'none',
                    }}
                >
                    Lenscart
                </Typography>
                {isAuthenticated && (
                    <>
                        <Box sx={{flexGrow: 1, display: {xs: 'none', md: 'flex'}}}>
                            <Tabs
                                value={value}
                                onChange={handleTabChange}
                                textColor="white"
                                TabIndicatorProps={{
                                    style: {
                                        backgroundColor: 'black',
                                        height: 3
                                    }
                                }}
                                aria-label="secondary tabs example"
                            >
                                <Tab value="Home" label="Home" component={Link} to="/" />
                                <Tab value="Shop" label="Shop" component={Link} to="/Shop" />
                                <Tab value="Featured" label="Featured" component={Link} to="/Featured" />
                                <Tab value="Recommended" label="Recommended" component={Link} to="/Recommended" />
                            </Tabs>
                        </Box>

                        <Box sx={{ flexGrow: 0 }}>
                            <Tooltip title="Open settings">
                                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                    <Avatar sx={{backgroundColor: '#00008B', color: 'white'}}>N</Avatar>
                                </IconButton>
                            </Tooltip>
                            <Menu
                                sx={{ mt: '45px' }}
                                id="menu-appbar"
                                anchorEl={anchorElUser}
                                anchorOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                open={Boolean(anchorElUser)}
                                onClose={handleCloseUserMenu}
                            >
                                {settings.map((setting) => (
                                    <MenuItem key={setting} onClick={setting === 'Logout' ? handleLogout : handleCloseUserMenu} >
                                        <Typography textAlign="center">{setting}</Typography>
                                    </MenuItem>
                                ))}
                            </Menu>
                        </Box>
                    </>
                )}
            </Toolbar>
        </AppBar>
    )
}

export default Header;