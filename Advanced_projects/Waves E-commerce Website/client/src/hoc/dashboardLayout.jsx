/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export const links = [
    {
        name: 'My Account',
        linkTo: '/dashboard'
    },
    {
        name: 'User Information',
        linkTo: '/dashboard/user/user_info'
    },
    {
        name: 'My Cart',
        linkTo: '/dashboard/user/user_cart'
    },
];

export const admin = [
    {
        name: 'Products',
        linkTo: '/dashboard/admin/admin_products'
    },
    {
        name: 'Manage Site',
        linkTo: '/dashboard/admin/manage_site'
    }
];

const DashboardLayout = (props) => {

    const users = useSelector(state => state.users);

    const generateLinks = (links) => {
        return links.map((item, i) => (
            <Link to={item.linkTo} key={`${item.name}${i}`}>
                {item.name}
            </Link>
        ));
    };
    return (
        <div className="container">
            <div className="user_container page_container">
                <div className="user_left_nav">
                    <h2>My Account</h2>
                    <div className="links">
                        {generateLinks(links)}
                    </div>
                    {users.data.role === 'admin' ?
                        <div>
                            <h2>Admin</h2>
                            <div className="links">
                                {generateLinks(admin)}
                            </div>
                        </div>
                        : null}
                </div>
                <div className="user_rights">
                    <div className="dashboard_title">
                        <h1>{props.title}</h1>
                    </div>
                    {props.children}
                </div>
            </div>
        </div>
    )
};

export default DashboardLayout;