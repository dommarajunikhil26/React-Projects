import { Link } from "react-router-dom";
import { ListItem } from "@mui/material";
import { logoutHandler } from "../../Helper/tools";
import { useNavigate } from "react-router-dom";

const AdminNav = () => {

    const navigate = useNavigate();

    const links = [
        {
            title: 'Matches',
            linkTo: '/admin_matches'
        },
        {
            title: 'Players',
            linkTo: '/admin_players'
        }
    ]

    const renderItems = () => (
        links.map(link => (
            <Link to={link.linkTo} key={link.title}>
                <ListItem button className="admin_nav_link">
                    {link.title}
                </ListItem>
            </Link>
        ))
    )

    return(
        <div>
            {renderItems()}
            <ListItem className="admin_nav_link" onClick={() => logoutHandler(navigate)}>
                Log out
            </ListItem>
        </div>
    )
}

export default AdminNav;