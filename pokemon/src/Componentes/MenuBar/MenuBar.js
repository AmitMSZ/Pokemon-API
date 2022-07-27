import React, { useState } from "react";
import {AppBar, Button, IconButton, InputBase, Menu, MenuItem, Toolbar, Typography} from "@mui/material"
import { Box, Container } from "@mui/system";
import MenuIcon from '@mui/icons-material/Menu';
import CatchingPokemonIcon from '@mui/icons-material/CatchingPokemon';
import {Outlet} from "react-router-dom";
import { Link } from "react-router-dom";
import './MenuBar.css'
import { styled, alpha } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  }));
  
  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));
  
  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        width: '17ch',
        '&:focus': {
          width: '20ch',
        },
      },
    },
  }));
const MenuBar = (props) => {

    const pages = [
        {key:1,name:'Historial',path:'/Historial'},
        {key:2,name: 'Combate',path:'/Combate'},
        {key:3,name:"Pokedex",path:'/Pokedex'},
    ];

    
    let x = ['pidgey']
    const [anchorElNav, setAnchorElNav] = useState(null);
    const [search, setSearch] = useState('');
    
    
    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };
    const handleChangeSearch = (event) => {
        setSearch(event.target.value)   
    }
    const handleClickSearch = ()=>{
        x.push(search)
    }

    const handleClickHistorial = ()=>{
        console.log(x)
    }
    return ( 
        <>
            <AppBar color='default' position="static">
                <Container maxWidth='x1'>
                    <Toolbar disableGutters>
                        <CatchingPokemonIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
                            <Typography
                                variant="h6"
                                noWrap
                                component='a'
                                href="/"
                                sx={{
                                    mr: 2,
                                    display: { xs: 'none', md: 'flex' },
                                    fontFamily: 'monospace',
                                    fontWeight: 700,
                                    letterSpacing: '.3rem',
                                    color: 'inherit',
                                    textDecoration: 'none',
                                }}
                            >
                                Pokemón
                            </Typography>
                        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                            <IconButton 
                            size='large'
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            color="inherit"
                            onClick={handleOpenNavMenu}
                            >
                                <MenuIcon/>
                            </IconButton>
                            <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                            }}
                            >
                                {pages.map((pages) => (
                                    <MenuItem  key={pages.key} onClick={handleCloseNavMenu}>
                                        <Typography textAlign="center">
                                            <Link to={pages.path}>
                                                {pages.name}
                                            </Link>
                                        </Typography>    
                                    </MenuItem>
                            ))} 
                            </Menu>
                        </Box>
                        <CatchingPokemonIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
                            <Typography
                                variant="h5"
                                noWrap
                                component='a'
                                href="/"
                                sx={{
                                    mr: 2,
                                    display: { xs: 'flex', md: 'none' },
                                    flexGrow: 1,
                                    fontFamily: 'monospace',
                                    fontWeight: 700,
                                    letterSpacing: '.3rem',
                                    color: 'inherit',
                                    textDecoration: 'none',
                                }}
                            >
                                Pokemón
                            </Typography>
                        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                            {pages.map((pages) => (
                                <Button
                                    key={pages.key}
                                    onClick={handleCloseNavMenu}
                                    sx={{ my: 2, color: 'inherit', display: 'block' }}
                                >
                                    <Typography textAlign="center">
                                        {pages.name !== 'Historial' && 
                                            <Link to={pages.path}>
                                                {pages.name}
                                            </Link>}
                                        {pages.name === 'Historial' && 
                                            <Link to={pages.path} onClick={handleClickHistorial}>
                                                {pages.name}
                                            </Link>}
                                        </Typography>
                                </Button>
                                ))}
                        </Box>
                        <Search sx={{ flexGrow: 0.1, display: { xs: 'none', sm: 'flex' }}}>
                                <SearchIconWrapper>
                                <SearchIcon />
                                </SearchIconWrapper>
                                <StyledInputBase
                                placeholder="Buscar Pokemon…"
                                onChange={handleChangeSearch}
                                inputProps={{ 'aria-label': 'search' }}
                                />
                            <Button 
                                sx={{flexGrow: 0.1, display: { xs: 'none', sm: 'flex', color: 'inherit'}}}
                                onClick={handleClickSearch}
                                >
                                <Typography textAlign="center">
                                    <Link to={`/Pokedex/${search}`}>Search</Link>
                                </Typography>
                            </Button>
                        </Search>
                    </Toolbar>
                </Container>
            </AppBar>
            <Outlet/>
        </>
    );
}

export default MenuBar ;