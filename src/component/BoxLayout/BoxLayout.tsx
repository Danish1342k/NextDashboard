import { Box, StyleProps } from "@chakra-ui/react";
import { ReactJSXElement } from "@emotion/react/types/jsx-namespace";

type BoxLayoutProps = StyleProps & { children: ReactJSXElement };

const BoxLayout = (props: BoxLayoutProps) => {
  const { children, ...rest } = props;

  return (
    <Box
      boxShadow="rgb(255, 255, 255)"
      borderRadius="2xl"
      bgColor="white"
      {...rest}
    >
      {children}
    </Box>
  );
};
export default BoxLayout;
