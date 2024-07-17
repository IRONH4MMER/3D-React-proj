import React, { Children } from 'react';

type Props = {
  children: React.ReactNode;
  limit: number;
};

export const ChildrenSlicer: React.FC<Props> = ({ children, limit }) => {
  const childrenArray = Children.toArray(children);

  const slicedChildren = React.isValidElement(childrenArray[0])
    ? childrenArray[0].props.children.slice(0, limit)
    : [];

  return <>{slicedChildren}</>;
};
