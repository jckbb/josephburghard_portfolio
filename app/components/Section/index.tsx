import React from "react";

interface Props {
  children: JSX.Element | JSX.Element[];
  styling?: HTMLElement["className"];
}

const Section = ({ children, styling }: Props) => {
  return (
    <div className={`h-screen ${styling}`}>
      {React.Children.map(children, (child) => child)}
    </div>
  );
};

export default Section;
