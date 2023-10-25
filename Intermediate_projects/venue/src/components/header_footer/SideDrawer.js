import { Drawer, List, ListItem, ListItemButton} from '@mui/material';

const SideDrawer = (props) => {
    const links = [
        {where : 'fetured', value: 'To Top'},
        {where : 'venuenfo', value: 'Venue Info'},
        {where : 'highlights', value: 'Highlights'},
        {where : 'pricing', value: 'Pricing'},
        {where : 'location', value: 'Location'}
    ]

    const renderItem = (item) => {
        return(
            <ListItem key={item.where} >
                <ListItemButton onClick={() => alert(item.where)}>
                    {item.value}
                </ListItemButton>
            </ListItem>
        )
    }
    return (
        <Drawer
            anchor={"right"}
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