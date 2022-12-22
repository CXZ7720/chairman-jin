import { Center, Container, Flex } from "@mantine/core";
import React from "react";

export const ScreenLayout = ({ children }: React.PropsWithChildren) => {
  return (
    <Container size="md" bg="indigo" pt="lg" pb="lg" h="100%">
      <Flex direction="column" justify="center" align="center">
        {children}
      </Flex>
    </Container>
  );
};
