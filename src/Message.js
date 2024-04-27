function Message({ from, message }) {
    return (
      <li className="message">
        <div className="message-data">
          <span className="message-data-name">{from.name}</span>
          <span className="message-data-time">{message.time}</span>
        </div>
        <div className="message my-message">
          {message.text}
        </div>
      </li>
    );
  }

  export default Message;