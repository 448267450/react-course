import React from "react";

const DUMMY_DATA = [
  { id: "m1", title: "first meetup", addrees: "this is a first meetups" },
  { id: "m2", title: "second meetup", addrees: "this is the second meetups" },
];

const AllMeetupsPage = () => {
  return (
    <section>
      <h1>All Meetups</h1>
      <ul>
        {DUMMY_DATA.map((meetup) => {
          return <li key={meetup.id}>{meetup.title}</li>;
        })}
      </ul>
    </section>
  );
};

export default AllMeetupsPage;
