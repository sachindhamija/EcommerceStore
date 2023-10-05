import { AppBar, Switch, Typography } from '@mui/material'
import React from 'react'

interface Props{
    darkmode : boolean,
    handleThemeChange: () => void
}

function Header({darkmode,handleThemeChange}:Props) {
  return (
    <>
      <AppBar position='static' sx={{mb:4}} >
      <Typography variant='h4'>E commerce store</Typography>
      <Switch checked={darkmode} onChange={handleThemeChange}  />
      </AppBar>
    </>
  )
}

export default Header
