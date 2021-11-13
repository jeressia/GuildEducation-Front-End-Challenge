import { useState } from 'react';

// import { AppContext } from '../../App/context';
// import { SocketContext } from '../../socket/context';
// import { useFilteredUsers } from '../../utils/useFilteredUsers';

import styles from './index.module.scss';

export const SelectConversation = () => {
  // const { socket } = useContext(SocketContext);
  // const { currentUser } = useContext(AppContext);
  const [selectedUser, setSelectedUser] = useState();
  const users = [{userId: 1, username: 'Jeressia Williamson'},{userId: 2, username: 'Elliot Jones'}, {userId: 3, username: 'Allison Nickels'}];

  const subtextClasses = `largeLight ${styles.selectSubtext}`;

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // socket?.emit('startConversation', {
    //   userId: currentUser?.userId,
    //   recipientId: selectedUser,
    // });
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1>New message</h1>
        <p className={subtextClasses}>
          Select an existing conversation from the left or pick a new user here to
          start chatting:
        </p>
        <form className={styles.selectUserForm} onSubmit={handleFormSubmit}>
          <div className={styles.labelInputGroup}>
            <label htmlFor="user">User</label>
            <select
              defaultValue={'select-a-user'}
              id="user"
              name="user"
              className={styles.selectUser}
              onChange={(e) => setSelectedUser(e.target.value)}
              value={selectedUser}
            >
              <option disabled value="select-a-user">
                Select one
              </option>
              {users.map((u) => (
                <option key={`user-select-option-${u.userId}`} value={u.userId}>
                  {u.username}
                </option>
              ))}
            </select>
          </div>
          <input
            disabled={!selectedUser}
            type="submit"
            className={styles.submitSelectUser}
            value="Start conversation"
          />
        </form>
      </div>
    </div>
  );
};
