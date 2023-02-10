import React, { useContext } from 'react';
import StateContext from '../../../context/StateContext';

function SidebarMenu() {
    const appState = useContext(StateContext)

    return ( <>
    {appState.menu ? <div>

<ul style={{listStyle:'none'}}>
    <li>
        Setting
        </li>
        <li>
        Setting
        </li><li>
        Setting
        </li><li>
        Setting
        </li>
        
        </ul>    
    </div>
    :""
        }
        </> 
        );
}

export default SidebarMenu;