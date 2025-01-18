import { Typography } from "@monorepo/ui";
import { PropsWithChildren } from "react";

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
    <>{!!dataLength ? children : <Typography>{fallbackText}</Typography>}</>
  );
};

export default ListDataBoundary;
