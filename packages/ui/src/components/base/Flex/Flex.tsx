import React from 'react';
import { flexRecipe, FlexProps } from './flex.css';

const Flex = React.forwardRef<HTMLDivElement, FlexProps>(
  ({ children, css, className, ...props }, ref) => {
    const flexClassName = flexRecipe(props);
    
    return (
      <div 
        ref={ref}
        className={className ? `${flexClassName} ${className}` : flexClassName}
        style={css}
      >
        {children}
      </div>
    );
  }

);

export default Flex;