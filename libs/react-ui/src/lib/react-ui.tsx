import styles from './react-ui.module.scss';

/* eslint-disable-next-line */
export interface ReactUiProps {}

export function ReactUi(props: ReactUiProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to ReactUi!</h1>
    </div>
  );
}

export default ReactUi;
