import Button from 'components/Button';
import { ControlContext } from 'provider/ControlProvider';
import React, { useContext, useState } from 'react';
import { ReactComponent as Cube } from 'assets/svg/cube.svg';
import { ReactComponent as List } from 'assets/svg/list.svg';
import { ReactComponent as Setting } from 'assets/svg/setting.svg';
import Styles from './style.module.scss';

function Navigation() {
  const [controlStatus, setControlStatus] = useState<boolean>(false);
  const [show, setShow] = useState<boolean>(false);
  return (
    <nav className={Styles.wrapper}>
      <div className={Styles.lgMenu}>
        <div className={Styles.content}>
          <div className={Styles.list}>
            <button
              type='button'
              className={Styles.button}
              aria-controls='mobile-menu'
              aria-expanded='false'
              onClick={() => setShow(true)}
            >
              <span className={Styles.spanInfo}>Open main menu</span>
              <List className={Styles.svgTag} />
            </button>
          </div>
          <div className={Styles.menuBtn}>
            <div className={Styles.content}>
              <img
                className={Styles.lgImg}
                src='https://javascript-cdn.obs.cn-east-3.myhuaweicloud.com/home/logo.png'
                alt='Workflow'
              />
              <img
                className={Styles.mdImg}
                src='https://javascript-cdn.obs.cn-east-3.myhuaweicloud.com/home/logo.png'
                alt='Workflow'
              />
            </div>
            <div className={Styles.buttonContent}>
              <div className={Styles.buttons}>
                <Button
                  active={!controlStatus}
                  onClick={() => {
                    setControlStatus(false);
                  }}
                >
                  <Cube className='w-10 h-auto text-white' />
                  <p>Scene</p>
                </Button>
                <Button
                  active={controlStatus}
                  onClick={() => {
                    setControlStatus(true);
                  }}
                >
                  <Setting className='w-10 h-auto text-white' />
                  <p>Admin</p>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={Styles.mdMenu} id='mobile-menu'>
        {show ? (
          <div className={Styles.content}>
            <Button
              active={!controlStatus}
              onClick={() => {
                setShow(false);
                setControlStatus(false);
              }}
            >
              <Cube className={Styles.svgTag} />
              <p>Scene</p>
            </Button>
            <Button
              active={controlStatus}
              onClick={() => {
                setShow(false);
                setControlStatus(true);
              }}
            >
              <Setting className={Styles.svgTag} />
              <p>Admin</p>
            </Button>
          </div>
        ) : null}
      </div>
    </nav>
  );
}
