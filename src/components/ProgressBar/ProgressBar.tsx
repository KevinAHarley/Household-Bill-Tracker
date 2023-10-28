import { Text, View, ViewStyle } from "react-native";

import { LinearGradient } from "expo-linear-gradient";

import config from "config";

import styles from "./ProgressBar.styles";

type ProgressBarProps = {
  goal: number;
  progress: number;
  style?: ViewStyle;
  barStyle?: ViewStyle;
};

const ProgressBar = ({ goal, progress, style, barStyle }: ProgressBarProps) => {
  const currentProgress = progress / goal;
  const currentProgressAsPercentage = currentProgress * 100 + "%";
  const oppositeProgress = 1 - currentProgress;
  const oppositeProgressAsPercentage = oppositeProgress * 40 - 5 + "%";

  const goalTextCutoff = currentProgress * 100 < 70;
  const progressTextCutoff = currentProgress * 100 > 30;

  const goalBarLengthCheck = (goal - progress).toString().length > 4;
  const progressBarLengthCheck = progress.toString().length > 4;

  return (
    <View style={style}>
      <View style={[styles.goalContainer, barStyle]}>
        <View style={styles.goalTextContainer}>
          {goalTextCutoff && !goalBarLengthCheck ? (
            // Margin right doesn't accept the % value in current format, needs reworked
            <Text
              style={[
                { marginRight: oppositeProgressAsPercentage },
                styles.goalText,
              ]}
            >
              £{goal - progress}
            </Text>
          ) : null}
        </View>
      </View>
      <LinearGradient
        colors={[config.colors.teal, config.colors.lightBlue]}
        start={{ x: 0, y: 0 }}
        style={[
          currentProgress * 100 > 10 && {
            width: currentProgressAsPercentage,
          },
          styles.progressTextContainer,
          barStyle,
        ]}
      >
        {progressTextCutoff && !progressBarLengthCheck ? (
          <Text style={styles.progressText}>£{progress}</Text>
        ) : null}
      </LinearGradient>
    </View>
  );
};

export default ProgressBar;
