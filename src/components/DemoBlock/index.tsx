import styles from './index.less';

export default (props: { title: string; children: JSX.Element }) => {

  return (
    <div className={styles['demo-block']}>
      <div className={styles.title}>
        {props.title}
      </div>
      <div className={styles.main}>
        {props.children}
      </div>
    </div>
  )
}
