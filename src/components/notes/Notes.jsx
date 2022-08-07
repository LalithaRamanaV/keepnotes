
import { Box } from '@mui/material'
import React from 'react'
import {styled} from '@mui/material/styles'

import Form from'./Form'

const DrawerHeader = styled('div')(({ theme }) => ({
    ...theme.mixins.toolbar,
}));

const Notes = () => {
  return (
    <Box sx={{display: 'flex'}}>
     <Box component="main" sx={{flexGrow: 1, p: 3}}>
        <DrawerHeader/>
        <Form/>
     </Box>
    </Box>
  )
}

export default Notes