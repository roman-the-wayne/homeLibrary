import React from 'react';
import { useState } from 'react';

function Sidebar() {
    const [isActive, setIsActive] = useState(true);

    function toggleSidebar() {
        setIsActive(!isActive);
    }

    return (
        <div className={isActive? 'sidebar active' : 'sidebar disabled'}>
            <div>
                <button onClick={toggleSidebar}>Смена</button>
            </div>
            <div className='links'>
                <a href='#'>Чаты</a>
                <a href='#'>Мои книги</a>
            </div>
        </div>
    )
}

export default Sidebar;