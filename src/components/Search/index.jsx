import IconButton from '@material-ui/core/IconButton';
import InputBase from '@material-ui/core/InputBase';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { SearchItem } from '../../Slice/productSlice';
import './index.scss';
const useStyles = makeStyles((theme) => ({
    root: {
      padding: '2px 4px',
      display: 'flex',
      alignItems: 'center',
      width: 300,
    },
    input: {
      marginLeft: theme.spacing(1),
      flex: 1,
    },
    iconButton: {
      padding: 10,
    },
}));
const Search = () => {
    const classes = useStyles();
    const history = useHistory();
    const [searchTerm , setSearchTerm] = useState("")
    const dispatch = useDispatch()
    const handleSubmitSearch = (e) => {
        e.preventDefault()
        if(searchTerm === "") {
            return
        }
        history.push('/search')
        setSearchTerm("")
        dispatch(SearchItem(searchTerm))
    }
    return (
        <div className="search">
            <Paper component="form" className={classes.root} onSubmit={ handleSubmitSearch }>
                <InputBase
                    className={classes.input}
                    placeholder="Search....."
                    value={ searchTerm }
                    onChange = { (e) => setSearchTerm(e.target.value) }
                />
                <IconButton type="submit" className={classes.iconButton} aria-label="search">
                    <SearchIcon />
                </IconButton>
            </Paper>
        </div>
    )
}

export default Search