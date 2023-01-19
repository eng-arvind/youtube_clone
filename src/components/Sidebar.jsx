import React from 'react'
import { Stack } from '@mui/material';
import { categories } from '../utils/constants';

const Sidebar = ({selectedCategory,setselectedCategory}) => (
    <Stack direction="row" sx={{
        overflowY:'auto',
        height:{sx:'auto',md:"95%"},
        flexDirection:{md:'column'},
    }}>
    {categories.map((category)=>(
        <button className='category-btn'
        onClick={()=>setselectedCategory(category.name)}
        style={{background:category.name === selectedCategory && 'var(--buttonHoverColor)',
        color:'var(--white)'}} key={category.name}>
            <span style={{
                color:category.name===selectedCategory ? 'var(--black)':'red', marginRight:'15px'
            }}>{category.icon}</span>
            <span style={{
               opacity: category.name===selectedCategory ? '0.8' :'0.8', color: category.name===selectedCategory ? 'var(--black)' :'var(--white)'
            }}>{category.name}</span>
        </button>
    ))}
    </Stack>
  );

export default Sidebar