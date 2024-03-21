import { useState, useEffect } from 'react';
import { AppBar, Toolbar, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import SideDrawer from './SlideDrawer';

const Header = () => {
    const [drawerOpen, setDrawerOpen] = useState(false);
    const [headerShow, setHeaderShow] = useState(false);

    const toggleDrawer = (value) => {
        setDrawerOpen(value);
    };

    const handleScroll = () => {
        if (window.scrollY > 0) {
            setHeaderShow(true);
        } else {
            setHeaderShow(false);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <AppBar
            position="fixed"
            className={`fixed top-0 w-full z-10 bg-transparent shadow-none transition-all ease-in-out duration-300 ${headerShow ? 'bg-gray-800' : 'bg-transparent'} shadow-none py-2`}
        >
            <Toolbar className="flex justify-between items-center">
                <div className="logo">
                    <div className="text-lg font-bold">The Venue</div>
                    <div className="text-sm">Musical Events</div>
                </div>
                <IconButton
                    edge="end"
                    color="inherit"
                    aria-label="menu"
                    onClick={() => toggleDrawer(true)}
                >
                    <MenuIcon />
                </IconButton>
                <SideDrawer open={drawerOpen} close={toggleDrawer} />
            </Toolbar>
        </AppBar>
    );
};

export default Header;
