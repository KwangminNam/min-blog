import React from 'react';
import { flexRecipe } from './flex.css';
import type { TFlexProps } from './flex.interface';

const Flex = React.forwardRef<HTMLDivElement, TFlexProps>(
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

Flex.displayName = 'Flex';

export default Flex;