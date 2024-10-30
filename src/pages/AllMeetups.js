import MeetupList from '../components/meetups/MeetupList';

import React from "react";

const DUMMY_DATA = [
  { id: "m1", title: "first meetup", addrees: "this is a first meetups" },
  { id: "m2", title: "second meetup", addrees: "this is the second meetups" },
];

const AllMeetupsPage = () => {
  return (
    <section>
      <h1>All Meetups</h1>
      <MeetupList meetups={DUMMY_DATA} />
    </section>
  );
};

export default AllMeetupsPage;
