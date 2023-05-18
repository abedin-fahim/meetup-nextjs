import { Fragment } from 'react';
import MeetupList from '@/components/meetups/MeetupList';

const DUMMY_MEETUPS = [
  {
    id: 'm1',
    title: 'A dummy meetup',
    image:
      'https://plus.unsplash.com/premium_photo-1669825050561-de372096dc24?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1932&q=80',
    address:
      'A random place, at a random street and at a random city in a random country',
    description: 'The quick brown fox jumps over the lazy dog',
  },
  {
    id: 'm2',
    title: 'A dummy meetup 2',
    image:
      'https://plus.unsplash.com/premium_photo-1669825050561-de372096dc24?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1932&q=80',
    address:
      'A random place, at a random street and at a random city in a random country',
    description: 'The quick brown fox jumps over the lazy dog',
  },
  {
    id: 'm3',
    title: 'A dummy meetup 3',
    image:
      'https://plus.unsplash.com/premium_photo-1669825050561-de372096dc24?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1932&q=80',
    address:
      'A random place, at a random street and at a random city in a random country',
    description: 'The quick brown fox jumps over the lazy dog',
  },
  {
    id: 'm4',
    title: 'A dummy meetup 4',
    image:
      'https://plus.unsplash.com/premium_photo-1669825050561-de372096dc24?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1932&q=80',
    address:
      'A random place, at a random street and at a random city in a random country',
    description: 'The quick brown fox jumps over the lazy dog',
  },
];

const HomePage = () => {
  return (
    <Fragment>
      <MeetupList meetups={DUMMY_MEETUPS} />
    </Fragment>
  );
};

export default HomePage;
