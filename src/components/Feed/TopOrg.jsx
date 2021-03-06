import React, { useState } from 'react';

import styles from '../../scss/feed.module.scss';

const FeedOrg = () => {
  const [state, setState] = useState(false);

  const dropDown = () => {
    if (state) {
      setState(false);
    } else {
      setState(true);
    }
  };

  return (
    <div className={styles.smallbox}>
      <div className={styles['Language-Head']}>
        <div className={styles['disp-flex']}>
          <div className={styles['lang-space']}>
            <p>Top Organisations</p>
          </div>
          <button
            type="button"
            onClick={dropDown}
            className={styles['btn-drop']}>
            <img src="SVG/dropdown-icon.svg" alt="dropdown" />
          </button>
        </div>
      </div>
      <div style={{ display: state ? 'block' : 'none' }}>
        <div className={styles.Languages}>
          <div className={styles['disp-flex']}>
            <div className={styles['Languages-num']}>
              <p>1.</p>
            </div>
            <div className={styles['Languages-mozilla']}>
              <div>
                <p>Mozilla</p>
              </div>
              <div className={styles['small-follow']}>
                <p>Follow</p>
              </div>
            </div>
          </div>
          <div className={styles['disp-flex']}>
            <div className={styles['Languages-num']}>
              <p>2.</p>
            </div>
            <div className={styles['Languages-google']}>
              <div>
                <p>Google</p>
              </div>
              <div className={styles['small-follow']}>
                <p>Follow</p>
              </div>
            </div>
          </div>
          <div className={styles['disp-flex']}>
            <div className={styles['Languages-num']}>
              <p>3.</p>
            </div>
            <div className={styles['Languages-facebook']}>
              <div>
                <p>Facebook</p>
              </div>
              <div className={styles['small-follow']}>
                <p>Follow</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeedOrg;
