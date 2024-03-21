/* eslint-disable react/prop-types */
import { Drawer, List, ListItem, ListItemButton } from '@mui/material';
import { scroller } from 'react-scroll';

const SideDrawer = (props) => {
    const links = [
        { where: 'featured', value: 'To Top' }, // Corrected typo: 'fetured' to 'featured'
        { where: 'venuenfo', value: 'Venue Info' },
        { where: 'highlights', value: 'Highlights' },
        { where: 'pricing', value: 'Pricing' },
        { where: 'location', value: 'Location' }
    ];

    const scrollToElement = (element) => {
        scroller.scrollTo(element, {
            duration: 1500,
            delay: 100, // Corrected typo: 'delat' to 'delay'
            smooth: true,
            offset: -150
        });
        props.close(false);
    }

    const renderItem = (item) => (
        <ListItem key={item.where} className="text-gray-700 hover:text-gray-900">
            <ListItemButton onClick={() => scrollToElement(item.where)}>
                {item.value}
            </ListItemButton>
        </ListItem>
    );

    return (
        <Drawer
            anchor="right"
            open={props.open}
            onClose={() => props.close(false)}
            className="text-lg"
        >
            <List component="nav" className="bg-white">
                {links.map(renderItem)}
            </List>
        </Drawer>
    );
};

export default SideDrawer;
