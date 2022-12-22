import { Container, Title } from "@mantine/core";
import styled from "@emotion/styled";
import React from "react";

export const MainTitle = () => {
  return (
    <Container>
      <Title
        sx={{
          fontFamily: "Macho",
        }}
      >
        재벌집 막내아들 짤 생성기
      </Title>
    </Container>
  );
};
