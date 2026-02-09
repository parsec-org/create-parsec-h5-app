import styles from './index.less';
import React from 'react';

export default (props: { title: string; children: React.ReactNode }) => {
  return (
    <div className={styles['demo-block']}>
      <div className={styles.title}>{props.title}</div>
      <div className={styles.main}>{props.children}</div>
    </div>
  );
};
