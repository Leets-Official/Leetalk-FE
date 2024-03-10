import React from 'react';

interface IconProps {
  name: IconPathTypes;
  hoverFill?: string;
  className?: string;
  onClick?: () => void;
}

const Icons = ({ name, className, onClick, hoverFill }: IconProps) => {
  const renderPaths = (paths: string | string[]) => {
    if (Array.isArray(paths)) {
      return paths.map((path, index) => <path key={index} d={path} />);
    } else {
      return <path d={paths} />;
    }
  };

  const { width, height, fill } = name;

  return (
    <svg
      width="100%"
      height="auto"
      viewBox={`0 0 ${width} ${height}`}
      onClick={onClick}
      fill={hoverFill || fill}
      className={className}
    >
      {renderPaths(name.path)}
    </svg>
  );
};

export default Icons;
