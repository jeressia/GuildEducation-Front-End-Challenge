import { Link } from 'react-router-dom';

import editIcon from '../../assets/edit-icon.svg';

import styles from './index.module.scss';

export const NewMessageButton = () => (
  <Link to="/">
    <button className={styles.button} type="button">
      <span className={styles.buttonText}>
         New message 
      </span>
      <span className="material-icons-outlined">
        <img className={styles.editIcon} src={editIcon} alt="edit-icon"/>
      </span>
    </button>
  </Link>
);
