import { makeStyles } from '@material-ui/core/styles';
import { Avatar } from '@material-ui/core'
import { Link } from 'react-router-dom';
import React from 'react'
import './index.scss'
const useStyles = makeStyles((theme) => ({
    large: {
      width: theme.spacing(7),
      height: theme.spacing(7),
    },
}));
function NavProfile(props) {
    const classes = useStyles();
    return (
        <div className="nav">
            <div className="avatar">
                <Avatar className={classes.large}>H</Avatar>
            </div>
            <ul className="list">
                <li><Link to="/">My Profile</Link></li>
                <li><Link to="/">Favorite</Link></li>
                <li><Link to="/">Change Password</Link></li>
            </ul>
        </div>
    )
}

export default NavProfile
