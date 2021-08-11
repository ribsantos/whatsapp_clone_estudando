import React from 'react';
import './ChatListItem.css'

export default () => {
    return (
        <div className="chatListItem">
            <img className="chatListItem--avatar" src="https://www.w3schools.com/howto/img_avatar2.png" alt="" />

            <div className="chatListItem--lines">
                <div className="chatListItem--line">  
                    <div className="chatListItem--name">Texugay</div>
                    <div className="chatListItem--date">02:00</div>
                </div>
                <div className="chatListItem--line">    
                    <div className="chatListItem--lastMsg">
                        <p>certo dia, a beira mar, apareceu um jovem galileu, ngm podia imaginar que alguém pudesse amar como ele amava, e seu nome era jesus de nazare</p>
                    </div>
                </div>
            </div>
        </div>
    )
}