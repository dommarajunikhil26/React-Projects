/* eslint-disable react/prop-types */

import { AppBar, Toolbar, Button } from '@mui/material';

import { Link } from 'react-router-dom';
import { CityLogo } from '../Helper/tools';

import { firebase } from '../../firebase';
import { signOut } from 'firebase/auth';

import { useNavigate } from 'react-router-dom';

import { showToastError, showToastSuccess } from '../Helper/tools';

const Header = ({user}) => {

    const navigate = useNavigate();

    const logoutHandler = () => {
        signOut(firebase).then(() => {
            showToastSuccess("Sign out successfull");
            navigate("/sign_in");
        }).catch((error) => {
            showToastError(error.message);
        });
    }

    return(
        <AppBar
            position="fixed"
            style={{
                backgroundColor:'#98c5e9',
                boxShadow:'none',
                padding:'10px 0',
                borderBottom:'2px solid #00285e'
            }}
        >
            <Toolbar style={{ display:'flex' }}>
                <div style={{ flexGrow: 1 }}>
                    <div className="header_logo">
                        <CityLogo
                            link={true}
                            linkTo={'/'}
                            width="70px"
                            height="70px"
                        />
                    </div>
                </div>

                <Link to="/the_team">
                    <Button color="inherit">The team</Button>
                </Link>
                <Link to="/the_matches">
                    <Button color="inherit">Matches</Button>
                </Link>
                {user ?
                    <>
                        <Link to="/dashboard">
                            <Button color="inherit">Dashboard</Button>
                        </Link>

                        <Button color='inherit' onClick={() => logoutHandler()}>Log Out</Button>
                    </>
                :
                    null
                }

            </Toolbar>
        </AppBar> 
    )
}

export default Header;