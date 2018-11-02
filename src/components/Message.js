import React from 'react';
import Labels from './Labels';

const Message = ({
  message,
  isSelected,
  toggleSelect,
  toggleStar,
  updateRead,
  toggleExpanded,
  isExpanded
}) => {
  const readClass = message.read ? 'read' : 'unread';
  const selectedClass = isSelected ? 'selected' : '';
  const starClass = `star fa fa-star${message.starred ? '' : '-o' }`;

  const starMessage = e => {
    e.stopPropagation();
    toggleStar([message.id]);
  }

  const CheckBox = () => (
    <div className="col-xs-2">
      <input
        type="checkbox"
        checked={isSelected}
        onChange={() => toggleSelect(message.id)}
        onClick={e => e.stopPropagation()}
      />
    </div>
  );

  const Star = () => (
    <div className="col-xs-2">
      <i className={starClass} onClick={starMessage}></i>
    </div>
  );

  const LabelsAndSubject = () => (
    <div className="col-xs-11">
      <Labels labels={message.labels} />
      <a>{message.subject}</a>
    </div>
  );

  const MessageLine = () => (
    <div
      className={`row message ${readClass} ${selectedClass}`}
      onClick={() => toggleExpanded(message.id)}
    >
      <div className="col-xs-1">
        <div className="row">
          <CheckBox />
          <Star />
        </div>
      </div>
      <LabelsAndSubject />
    </div>
  );

  const MessageBody = () => (
    <div className="row message-body">
      <div className="col-xs-11 col-xs-offset-1">
        { message.body }
      </div>
    </div>
  );

  if (isExpanded) {
    return (
      <div>
        <MessageLine />
        <MessageBody />
      </div>
    )
  } else {
    return <MessageLine />
  }
}

export default Message;
