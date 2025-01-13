// 'use client';

// import {  useLayoutEffect } from 'react';
// import { postViewCountAction } from "@/action/action";

// interface ViewCountClientProps {
//   slug: string;
//   initialViews: number;
// }

// const ViewCountClient: React.FC<ViewCountClientProps> = ({ slug, initialViews }) => {
//   useLayoutEffect(() => {
//     postViewCountAction(slug);
//   }, [slug]);

//   return <div>ViewCount: {initialViews}</div>;
// };

// export default ViewCountClient;