import Typography from "../../base/Typography/Typography";
import Flex from "../../base/Flex/Flex";
import React from "react";
import { ImWarning } from "react-icons/im";
import { vars } from "../../../styles/global.css";
import Heading from "../Heading/Heading";

const NotFound: React.FC<{ message: string }> = ({ message }) => {
  return (
    <section>
      <Flex
        css={{
          borderRadius: vars.size.radius[12],
          height: vars.size.box[400],
          padding: vars.size.px[15],
          border: `1px solid ${vars.color.error}`
        }}
        align="center"
        gap="small"
        direction="column"
        justify="center"
      >
        <Heading level="h1" color={vars.color.error}>
          404
        </Heading>
        <ImWarning size={vars.size.px[50]} color={vars.color.error} />
        <Typography
          css={{
            color: vars.color.error
          }}
        >
          {message}
        </Typography>
      </Flex>
    </section>
  );
};

export default NotFound;
