function Response({ from, message }) {
    return (
      <li className="response">
        <div className="message-data align-right">
          <span className="message-data-time">{message.time}</span>
          <span className="message-data-name">{from.name}</span>
        </div>
        <div className="message other-message float-right">
          {message.text}
        </div>
      </li>
    );
  }

  export default Response;