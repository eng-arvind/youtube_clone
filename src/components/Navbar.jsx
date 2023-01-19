import React from 'react'
import { Stack, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import {logo} from '../utils/constants';
import SearchBar from './SearchBar';
import {DarkModeOutlined} from '@mui/icons-material';
import { useState, useEffect } from 'react';


const Navbar = () => {

  const [theme, settheme] = useState ('light-theme');
  const changeTheme = ()=>{
    if(theme === 'light-theme')
    {
      settheme('dark-theme');
    }
    else{
      settheme('light-theme');
    }
  }

  useEffect(()=>{
    document.body.className = theme;

  },[theme])

  return(
    <Stack direction={{sm:"row",sx:"column"}} alignItems={{sm:'center',sx:'flex-start'}} p={1} borderBottom='1px solid var(--borderRT)'
    sx={{position:'sticky', background:'var(--backgroundColor)', top:'0', justifyContent:'space-between'}}>
    <Link to="/" style={{display:'flex', alignItems:'center'}}>
        <img src={logo} alt="logo" height={45} /> 
        <Typography sx={{color:'var(--white)',fontFamily:'Fjalla One',fontSize:'18px'}}>YouTube</Typography>
    </Link>
    <Stack direction="row" alignItems="center" justifyContent="space-between" mt={{ xs:"10px",sm:'0px',md:'0px'}} >
      <SearchBar/>
      <Link onClick={changeTheme}>
        <DarkModeOutlined sx={{color:'var(--themeColor)',fontSize:'small', width:'35px', height:'42px', opacity:'0.8'}}></DarkModeOutlined>
      </Link>
    </Stack>
    </Stack>
  );
}

export default Navbar