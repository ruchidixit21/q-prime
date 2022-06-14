
import React from 'react';
import {
    Typography
} from '@mui/material';

import AdminMain from "./admin/AdminMain";
import VideoChatSettings from './VideoChatSettings';
import NotificationSettings from './NotificationSettings';

function Main (props) {
    const { theme, queueData } = props;

    return (
        <div>
            <Typography variant="h3" textAlign='center' sx={{ mt: 4 }} fontWeight='bold'>
                Settings
            </Typography>
            <VideoChatSettings theme={theme}/>
            <NotificationSettings theme={theme}/>

            { 
                queueData?.isAdmin && <AdminMain theme={theme} queueData={queueData}/>
            }
        </div>
    );
}
  
export default Main;