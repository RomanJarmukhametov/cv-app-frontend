import React from "react";

interface BodyTextProps {
  children?: React.ReactNode;
  className?: string;
}

const BodyText: React.FC<BodyTextProps> = ({
  children,
  className,
  ...attrs
}) => {
  return (
    <p
      className={`antialiased font-normal text-gray-800 text-base leading-6 md:text-lg md:leading-7 ${className}`}
      {...attrs}>
      {children ||
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit blanditiis veritatis molestias ducimus minus iste nobis ipsam facere, velit asperiores quod sequi hic eveniet laborum similique tempore animi nihil ut!"}
    </p>
  );
};

export default BodyText;
