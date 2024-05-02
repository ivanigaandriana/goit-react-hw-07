import css from './ErrorMessage.module.css';
function ErrorMessage({message = `Oh something went wrong`}) {
    return(
      <p className={css.errorMessage}>{message}</p>
    )}
    export default ErrorMessage;