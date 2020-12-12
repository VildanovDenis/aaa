import React from 'react';
import { ChatMessage } from '../../../components';

export const Home = () => {
    return (
        <div>
            <ChatMessage
                imageSrc='https://sun9-46.userapi.com/impg/6zqVyUUsvjwJsWbg8BGK48NU-OE_-HWHsMM-jQ/jej2zVCYmNU.jpg?size=400x0&quality=96&crop=0,0,960,960&sign=96030f5532dd81dbe5fc3d1b40574b23&ava=1'
                date={new Date(2020, 4, 11)}
                message='Пашел ты нахир казед еба чорт сука бля 👍'
                userId='123'
                senderId='123'
                isRead={true}
            />
            <ChatMessage
                imageSrc='https://sun9-59.userapi.com/impg/cPejUXWzYc4erTUSQNe1bzbf041dnU7-dWlntg/NQ7x53Oeg84.jpg?size=400x0&quality=96&crop=0,46,1232,1232&sign=66b64e2f15149c221012022f6d410701&ava=1'
                date={new Date(2020, 4, 12)}
                message='Привет'
                userId='123'
                senderId='1234'
            />
            <ChatMessage
                imageSrc='https://sun9-46.userapi.com/impg/6zqVyUUsvjwJsWbg8BGK48NU-OE_-HWHsMM-jQ/jej2zVCYmNU.jpg?size=400x0&quality=96&crop=0,0,960,960&sign=96030f5532dd81dbe5fc3d1b40574b23&ava=1'
                date={new Date(2020, 11, 13, 1, 30)}
                message='Йоу, Ден, расшарь мне киберпанк в стиме плис. Буду благодарен, от души!'
                userId='123'
                senderId='123'
                isRead={false}
            />
            <ChatMessage
                imageSrc='https://sun9-59.userapi.com/impg/cPejUXWzYc4erTUSQNe1bzbf041dnU7-dWlntg/NQ7x53Oeg84.jpg?size=400x0&quality=96&crop=0,46,1232,1232&sign=66b64e2f15149c221012022f6d410701&ava=1'
                date={new Date()}
                message='Привет'
                userId='123'
                senderId='1234'
            />
        </div>
    );
};