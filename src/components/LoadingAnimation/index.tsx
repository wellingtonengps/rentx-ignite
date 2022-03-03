import React from "react";

import LottieView from "lottie-react-native";

import loadingLottie from "../../assets/loadingLottie.json";

import { Container } from "./styles";

export function LoadingAnimation() {
  return (
    <Container>
      <LottieView
        source={loadingLottie}
        style={{ height: 200 }}
        resizeMode="contain"
        autoPlay
        loop
      />
    </Container>
  );
}
