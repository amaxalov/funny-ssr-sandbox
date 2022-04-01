import { Screen, Balls } from "./styled";

export const LoadingScreen = () => {
  return (
    <Screen>
      <Balls>
        <div className="ball one" />
        <div className="ball two" />
        <div className="ball three" />
      </Balls>
    </Screen>
  );
};
