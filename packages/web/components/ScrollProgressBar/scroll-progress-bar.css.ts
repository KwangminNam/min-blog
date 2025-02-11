import { vars } from "@monorepo/ui";
import { style, createVar } from "@vanilla-extract/css";

export const progressWidthVar = createVar();

export const scrollProgressBar = style({
    position: "fixed",
    top: "4.4rem",
    left: 0,
    width: "100%",
    height: "10px",
    backgroundColor: "transparent",
    zIndex: vars.zIndex.zMax,
});

export const scrollProgressBarBar = style({
    width: progressWidthVar,
    height: "100%",
    background: "linear-gradient(90deg, #00C9FF 0%, #92FE9D 100%)",
    transition: "width 0.1s ease-out",
    borderRadius: '2px'
});