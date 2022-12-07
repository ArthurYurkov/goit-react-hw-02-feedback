import styles from './styles.module.css';
import PropTypes from 'prop-types';

const Notification = ({ message }) => {
  return <p className={styles.title}>{message}</p>;
};

Notification.propTypes = {
  message: PropTypes.string,
};

export default Notification;
