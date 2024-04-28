function Response({ from, message }) {
    return (
    <div className="response">
      <li>
        <div className="message-data align-right">
          <span className="message-data-time">{message.time}</span>
          <span className="message-data-name">{from.name}</span>
        </div>
        <div className="response message float-right">
          {message.text}
        </div>
      </li>
    </div>
    );
  }

  export default Response;