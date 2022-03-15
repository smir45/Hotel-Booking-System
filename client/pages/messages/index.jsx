// import React from "react";
import NavHeaderDashboard from "../../components/componentsFiles/header";
import React from 'react';
import ChatMsg from '@mui-treasury/components/chatMsg/ChatMsg';

const DefaultChatMsg = () => (
    <div className="flex">
        <NavHeaderDashboard/>
        <div className="11/12 mr-auto ml-5 mt-5 mb-2">
            <ChatMsg
                avatar={''}
                messages={[
                    'Hi Jenny, How r u today?',
                    'Did you train yesterday',
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Volutpat lacus laoreet non curabitur gravida.',
                ]}
            />
            <ChatMsg
                side={'right'}
                messages={[
                    "Great! What's about you?",
                    'Of course I did. Speaking of which check this out',
                ]}
            />
            <ChatMsg avatar={''} messages={['Im good.', 'See u later.']}/>
        </div>
    </div>
);

export default DefaultChatMsg;
