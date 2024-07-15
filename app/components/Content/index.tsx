import React from "react";

interface Props {
  children: JSX.Element | JSX.Element[];
  styling?: string;
}

const Content = ({ children, styling }: Props) => {
  return (
    <div className={`max-w-5xl mx-auto ${styling}`}>
      {React.Children.map(children, (child) => child)}
    </div>
  );
};

export default Content;
