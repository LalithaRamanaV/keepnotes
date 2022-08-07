
import { Box } from '@mui/material';
import Notes from './notes/Notes';

//components
import SwipeDrawer from './SwipeDrawer';

const Home = () => {
    return (
        <Box style={{ display: 'flex', width: '100%' }}>
           
                <SwipeDrawer />
                <Notes />     
                    {/*
                   <Archives />
                  <DeleteNotes /> */}
               
        </Box>
    )
}

export default Home;