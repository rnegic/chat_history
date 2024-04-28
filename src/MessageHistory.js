import React from "react";
import Message from './Message';
import Response from './Response';
import Typing from './Typing';
import './Messagehistory.scss';

function MessageHistory({ list } = []) {

    if (!list.length) {
        return null;
    }

    return (
        <ul className="messages">
            {list.map((message) => {
                switch (message.type) {
                    case "message":
                        return (
                            <Message
                                key={message.id}
                                from={message.from}
                                message={message}
                            />
                        );
                    case "response":
                        return (
                            <Response
                                key={message.id}
                                from={message.from}
                                message={message}
                            />
                        );
                    case "typing":
                        return (
                            <Typing
                                key={message.id}
                                from={message.from}
                                message={message}
                            />
                        )
                    default:
                        return null;
                }
            })}
        </ul>
    );
}

export default MessageHistory;