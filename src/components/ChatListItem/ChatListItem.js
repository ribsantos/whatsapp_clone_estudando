import React from 'react';
import './ChatListItem.css'

export default () => {
    return (
        <div className="chatListItem">
            <img className="chatListItem--avatar" src="https://www.w3schools.com/howto/img_avatar2.png" alt="" />

            <div className="chatListItem--lines">
                <div className="chatListItem--line">  
                    <div className="chatListItem--name">Texugo</div>
                    <div className="chatListItem--date">02:00</div>
                </div>
                <div className="chatListItem--line">    
                    <div className="chatListItem--lastMsg">
                        <p>Eu sou ruim no valorant, eu sou ruim no valorant, eu sou ruim no valorant</p>
                    </div>
                </div>
            </div>
        </div>
    )
}