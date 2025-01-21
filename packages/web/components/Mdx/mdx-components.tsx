import { components } from "@monorepo/ui/src/styles/layers.css.js";
import * as runtime from "react/jsx-runtime";

interface MdxProps {
  code: string;
}

const useMDXComponent = (code: string) => {
  const fn = new Function(code);
  return fn({ ...runtime }).default;
};

export function MDXContent({ code }: MdxProps) {
  const Component = useMDXComponent(code);

  return <Component components={components} />;
}
