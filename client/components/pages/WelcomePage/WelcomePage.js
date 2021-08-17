import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { push } from 'connected-react-router';
import { Link } from 'react-router-dom';

import R from 'ramda';

import Section from 'react-bulma-companion/lib/Section';
import Container from 'react-bulma-companion/lib/Container';

export default function WelcomePage() {
  const dispatch = useDispatch();
  const { user } = useSelector(R.pick(['user']));

  useEffect(() => {
    if (!R.isEmpty(user)) {
      dispatch(push('/home'));
    }
  }, []);

  return (
    <div className="welcome-page page">
      <Section>
        <Container className="banner-container">
          <div className="left">
            <img
              // eslint-disable-next-line global-require
              src={require('../../../assets/images/welcome-img.png').default}
              alt=""
              className="banner-img"
            />
          </div>
          <div className="right">
            <h1 className="my-title">
              organize your tasks and execute them in priority order
            </h1>
            <p>press login or register and enjoy</p>
            <Link to="/login">
              <button className="my-btn-outline" type="button">
                Login
              </button>
            </Link>
            <Link to="/register">
              <button className="my-btn" type="button">
                Sign Up
              </button>
            </Link>
          </div>
        </Container>
      </Section>
    </div>
  );
}
