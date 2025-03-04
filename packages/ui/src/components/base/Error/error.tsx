import Flex from "../Flex/flex";
import { vars } from "@kwangmins-blog/ui";
import { ImWarning } from "react-icons/im";
import Typography from "../Typography/typography";

export default function Error({
  errorMessage = "에러가 발생했습니다. 잠시후 다시 시도해주세요."
}: {
  errorMessage?: string;
}) {
  return (
    <section>
      <Flex
        css={{
          borderRadius: "12px",
          height: "400px",
          padding: "15px",
          border: `1px solid ${vars.color.error}`
        }}
        align="center"
        gap="small"
        direction="column"
        justify="center"
      >
        <ImWarning size={50} color={vars.color.error} />
        <Typography
          css={{
            color: vars.color.error
          }}
        >
          {errorMessage}
        </Typography>
      </Flex>
    </section>
  );
}
