import css from './Feedback.module.css';

const Notification = ({message, children}) => {
    return <p className={css.message}>{message}{children}</p>
}

export default Notification;