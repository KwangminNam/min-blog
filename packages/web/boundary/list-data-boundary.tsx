import { Typography } from "@kwangmins-blog/ui";
import { type PropsWithChildren } from "react";

interface IListDataBoundary {
  dataLength: number;
  fallbackText?: string;
}

const ListDataBoundary: React.FC<PropsWithChildren<IListDataBoundary>> = ({
  children,
  dataLength,
  fallbackText = "작성된 글이 없습니다."
}) => {
  return (
    <>{!!dataLength ? children : <Typography variant="medium">{fallbackText}</Typography>}</>
  );
};

export default ListDataBoundary;
