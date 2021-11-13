import '@reach/dialog/styles.css';
import { Dialog } from '@reach/dialog';
import qs from 'qs';
import { useContext } from 'react';
import { useHistory, useLocation } from 'react-router';
import { v4 } from 'uuid';

import { AppContext } from '../../App/context';
import closeIcon from '../../assets/close-icon.svg';
import { SocketContext } from '../../socket/context';

import styles from './index.module.scss';

export const UsernameModal = () => {
  const { pathname, search } = useLocation();
  const history = useHistory();
  const parsedParams = qs.parse(search, { ignoreQueryPrefix: true });
  const { currentUser, setCurrentUser } = useContext(AppContext);
  const { socket } = useContext(SocketContext);

  const handleChange = (e) => {
    if (currentUser?.userId) {
      setCurrentUser({
        username: e.target.value,
        userId: currentUser.userId,
      });
    } else {
      setCurrentUser({
        username: e.target.value,
        userId: v4(),
      });
    }
    localStorage.setItem('username', e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    history.push(`${pathname}`);
    socket?.emit('username', currentUser);
  };

  const handleCancel = (e) => {
    e.preventDefault();
    history.push(`${pathname}`);
  };

  return (
    <Dialog className={styles.modal}
      aria-label="Username input"
      isOpen={Boolean(parsedParams.isEditingName) || false}
      onDismiss={() => history.push(`${pathname}`)}
    >
      <div className={styles.modalCloseButton}>
        <button onClick={handleCancel}>
          <span><img src={closeIcon} alt="close button for modal"/></span>
        </button>
      </div>
      <form className={styles.formControl} onSubmit={handleSubmit}>
        <h1>Enter Your Name</h1>
        <p className={styles.modalSubtext}>Edit how your name displays when others chat with you.</p>
        <label className={styles.modalLabel} htmlFor="username">Name</label>
        <input
          className={styles.modalTextInput}
          aria-label="Edit your name"
          type="text"
          name="username"
          id="username"
          onChange={handleChange}
          value={currentUser ? currentUser.username : ''}
          placeholder="Enter your name"
        />
        <div className={styles.modalButtons}>
          <input type="submit" value="Cancel" onSubmit={handleCancel} />
          <input type="submit" value="Save" />
        </div>
      </form>
    </Dialog>
  );
};
