function Typing({ from }) {
  return (
    <li className="typing">
      <div className="message-data">
        <span className="message-data-name">{from.name}</span>
      </div>
      <div className="message my-message">
        Печатает...
      </div>
    </li>
  );
}

export default Typing;