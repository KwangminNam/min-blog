import Typography from "../../base/Typography/Typography";
import Flex from "../../base/Flex/Flex";
import React from "react";
import { ImWarning } from "react-icons/im";
import { vars } from "../../../styles/global.css";

const NotFound: React.FC<{ message: string }> = ({ message }) => {
  return (
    <section>
      <Flex
        css={{
          borderRadius: "12px",
          height: "400px",
          padding: "15px",
          border: `1px solid ${vars.color.error}`,
        }}
        align="center"
        gap="small"
        direction="column"
        justify="center"
      >
        <ImWarning size={50} color={vars.color.error} />
        <Typography css={{
          color:vars.color.error
        }}>{message}</Typography>
      </Flex>
    </section>
  );
};

export default NotFound;
