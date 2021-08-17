import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { push } from 'connected-react-router';
import { Link } from 'react-router-dom';
import R from 'ramda';

import Section from 'react-bulma-companion/lib/Section';
import Container from 'react-bulma-companion/lib/Container';

export default function HomePage() {
  const dispatch = useDispatch();
  const { user } = useSelector(R.pick(['user']));

  useEffect(() => {
    if (R.isEmpty(user)) {
      dispatch(push('/login'));
    }
  }, []);

  return (
    <div className="page">
      <Section>
        <Container className="banner-container">
          <div className="left">
            <img
              // eslint-disable-next-line global-require
              src={require('../../../assets/images/home-img.png').default}
              alt=""
              className="banner-img"
            />
          </div>
          <div className="right">
            <h1 className="my-title">
              hi, welcome, do you want to work now?
            </h1>
            <p>press on &quot;new task&quot; and enjoy</p>
            <button className="my-btn-outline" type="button">
              <Link to="/todo">new task</Link>
            </button>
          </div>
        </Container>
      </Section>
    </div>
  );
}
