import React from 'react';

const ChatRoom = () => {
    return (
        <div className='chat-room'>
            <div className="messages-container">
                <div className='message'>hello</div>
                <div className='message'>hello</div>
                <div className='message'>hello</div>
                <div className='message'>hello</div>
                <div className='message'>
                    a book or other written or printed work, regarded in terms of its content rather than its physical form.
                    a book or other written or printed work, regarded in terms of its content rather than its physical form.
                    a book or other written or printed work, regarded in terms of its content rather than its physical form.
                </div>
                <div className='message'>hello</div>
                <div className='message'>hello</div>
                <div className='message'>hello</div>
                <div className='message'>hello</div>
            </div>
            <div class="chat-input-container">
                <input type="text" class="chat-input" placeholder="Type your message..." />
                <button class="send-button">Send</button>
            </div>
        </div>
    );
}

export default ChatRoom;
