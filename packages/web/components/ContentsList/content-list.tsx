'use client';

import React from 'react';
import { activeClass } from './content-list.css';
import { tocItem, tocLink, tocList, tocTitle } from './content-list.css';
import { tocContainer } from './content-list.css';
import useCreateContentList from '@/hooks/useCreateContentList';
import { cn } from '@kwangmins-blog/util';

const TableOfContents: React.FC = () => {
  const { headings, activeId, handleClick } = useCreateContentList();

  return (
    <nav className={tocContainer}>
      <h4 className={tocTitle}>Contents</h4>
      <ul className={tocList}>
        {headings.map(heading => (
          <li key={heading.id} className={tocItem}>
            <a
              href={`#${heading.id}`}
              onClick={e => handleClick(e, heading.id)}
              className={cn(tocLink, activeId === heading.id && activeClass)}
            >
              {heading.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default TableOfContents;
