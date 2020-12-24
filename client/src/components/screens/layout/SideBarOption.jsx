import React from 'react';
import { Button, Icon } from '@material-ui/core';

export default function SideBarOptions({Icon,text,active }){
    return(
   
        <div className="sidebarOption">
            <Icon />
            <h2>{text}</h2>
        </div>
    )
} 