import { AppBar, Toolbar, IconButton } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import { useEffect, useState } from "react";
import SideDrawer from "./SideDrawer";

const Header = () => {

    const [openDrawer, setOpenDrawer] = useState(false);
    const [showHeader, setShowHeader] = useState(false);

    const toggleDrawer = () => {
        setOpenDrawer(!openDrawer)
    }

    const handleScroll = () => {
        if (window.scrollY > 0) {
            setShowHeader(true);
        } else {
            setShowHeader(false);
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", handleScroll)
    }, []);

    return (
        <AppBar
            position="fixed"
            className="shadow-none text-white"
            style={{
                backgroundColor: showHeader ? '#2f2f2f' : 'transparent',
                boxShadow: 'none'
            }}
        >
            <Toolbar className="flex justify-between">
                <div className="flex flex-col">
                    <div className="font-righteous text-xl md:text-2xl lg:text-4xl">The Venue</div>
                    <div className="text-base md:text-lg lg:text-xl">Musical Events</div>
                </div>
                <IconButton
                    color="inherit"
                    aria-label="menu"
                    onClick={toggleDrawer}
                >
                    <MenuIcon />
                </IconButton>
                <SideDrawer open={openDrawer} close={() => toggleDrawer(openDrawer)} />
            </Toolbar>
        </AppBar>
    )
}

export default Header;