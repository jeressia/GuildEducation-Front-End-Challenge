// import { useContext } from 'react';

// import { AppContext } from '../../App/context';
import { NewMessageButton } from '../NewMessageButton';

// import { ConversationListItem } from './ConversationListItem';
import styles from './index.module.scss';

export const LeftPanel = () => {
  // const { conversations } = useContext(AppContext);
  const filteredUsers = [{ userId: 1, username: 'Jeressia', isOnline: true }, { userId: 2, username: 'Elliot', isOnline: false }, { userId: 3, username: 'Allison', isOnline: true }];

  return (
    <div className={styles.container}>
      <NewMessageButton />
      <h2>Direct Messages</h2>
      <ul>
        {filteredUsers.map((u) => {
          return (
            <li key={u.userId}>
              <span className={styles.isOnline}>
                {u.isOnline ? <div className={styles.onlineDot}></div> : <div className={styles.offlineDot}></div>}
              </span>
              {u.username}
            </li>);
          // null check to appease ts
          // if (!otherUser) {
          //   return null;
          // }
          // return (
          // <ConversationListItem
          //   conversationId={c.conversationId}
          //   key={c.conversationId}
          //   {...otherUser}
          // />
          // );
        })}
      </ul>
    </div>
  );
};
