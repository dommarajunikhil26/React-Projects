/* eslint-disable react/prop-types */
import { Drawer, List, ListItem, ListItemButton } from "@mui/material";
import { scroller } from "react-scroll";

const SideDrawer = (props) => {
    const links = [
        { where: 'featured', value: 'To Top' },
        { where: 'venueInfo', value: 'Venue Info' },
        { where: 'highlights', value: 'Highlights' },
        { where: 'pricing', value: 'Pricing' },
        { where: 'location', value: 'Location' }
    ]

    const scrollToElement = (element) => {
        scroller.scrollTo(element, {
            duration: 1500,
            delay: 100,
            smooth: true,
            offset: -150
        });
        props.close(false);
    }

    const renderItem = (item) => {
        return (
            <ListItem key={item.where}>
                <ListItemButton key={item.where} onClick={() => scrollToElement(item.where)} >
                    {item.value}
                </ListItemButton>
            </ListItem>
        )
    }
    console.log(props.open);
    return (
        <Drawer
            anchor="right"
            open={props.open}
            onClose={() => props.close(false)}
        >
            <List component="nav">
                {links.map((item) => renderItem(item))}
            </List>
        </Drawer>
    )
}

export default SideDrawer;