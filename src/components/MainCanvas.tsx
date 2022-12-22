import { Container, Text } from "@mantine/core";
import React from "react";
import { rem } from "polished";

export const MainCanvas = () => {
  return (
    <Container>
      <Text
        sx={{
          fontFamily: "Pretendard",
          fontSize: rem(20),
        }}
      >
        프리텐다드 테스트
      </Text>
    </Container>
  );
};
