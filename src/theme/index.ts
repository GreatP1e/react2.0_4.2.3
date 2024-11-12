import { colorsTuple, createTheme, rem } from "@mantine/core";
import { myIndigo, myGrey } from "./constTheme";

export const theme = createTheme({
  fontFamily: "Opens Sans, sans-serif",
  fontSizes: {
    xs: rem(9),
    sm: rem(14),
    md: rem(16),
    lg: rem(20),
  },
  lineHeights: {
    lg: "24px",
  },
  headings: {
    sizes: {
      h1: {
        fontSize: rem(26),
        fontWeight: "700",
        lineHeight: "135%",
      },
      h2: {
        fontSize: rem(20),
        fontWeight: "600",
      },
    },
  },
  colors: {
    myIndigo,
    myGrey,
    myWhite: colorsTuple("#ffffff"),
    myBackgroundColor: colorsTuple("#f6f6f7"),
    myBlack: colorsTuple("#0f0f10"),
  },
});
