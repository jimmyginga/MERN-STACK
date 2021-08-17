import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { push } from 'connected-react-router';
import R from 'ramda';

import Section from 'react-bulma-companion/lib/Section';
import Container from 'react-bulma-companion/lib/Container';
import Title from 'react-bulma-companion/lib/Title';

export default function HomePage() {
  const dispatch = useDispatch();
  const { user } = useSelector(R.pick(['user']));

  useEffect(() => {
    if (R.isEmpty(user)) {
      dispatch(push('/login'));
    }
  }, []);

  return (
    <div className="home-page page">
      <Section>
        <Container>
          <div className="left">
            <img src={} alt="" classNAme="banner-img"/>
          </div>
          <div className="right">
            <h1>organize your tasks and execute them in priority order</h1>
            <p>press on "new task" and enjoy</p>
            <button className="my-btn">
              <Link to="/todo">new task</Link>
            </button>
          </div>
        </Container>
      </Section>
    </div>
  );
}
