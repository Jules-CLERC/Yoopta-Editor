import React from 'react';
import Editor from './Editor';
import Sidebar from './Sidebar';
import { CssBaseline, Box } from '@mui/material';

function App() {
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <Sidebar />
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <h1>My Application</h1>
        <Editor />
      </Box>
    </Box>
  );
}

export default App;