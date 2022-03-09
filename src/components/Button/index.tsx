import React from "react";
import { TouchableOpacityProps, ActivityIndicator } from "react-native";
import { useTheme } from "styled-components";

import { Container, Title } from "./styles";

interface Props extends TouchableOpacityProps {
  title: string;
  color?: string;
  disabled?: boolean;
  loading?: boolean;
  light?: boolean;
}

export function Button({
  title,
  color,
  disabled = false,
  loading = false,
  light = false,
  ...rest
}: Props) {
  const theme = useTheme();

  return (
    <Container
      {...rest}
      color={color ? color : theme.colors.main}
      disabled={disabled}
      style={{ opacity: disabled === true || loading === true ? 0.5 : 1 }}
    >
      {loading ? (
        <ActivityIndicator color={theme.colors.shape} />
      ) : (
        <Title light={light}>{title}</Title>
      )}
    </Container>
  );
}
