import { Text, View } from "react-native";

import { LinearGradient } from "expo-linear-gradient";

import config from "config";

import styles from "./SeparatedProgressBar.styles";

type SeparatedProgressBarProps = {
  goal: number;
  progress: number;
};

const SeparatedProgressBar = ({
  goal,
  progress,
}: SeparatedProgressBarProps) => {
  const currentProgress = (progress / goal) * 90 + "%";

  const goalBarLengthCheck = goal.toString().length > 4;
  const progressBarLengthCheck = progress.toString().length > 4;

  return (
    <View style={styles.container}>
      <View style={styles.barContainer}>
        {progressBarLengthCheck && (
          <Text style={{ color: config.colors.secondary, paddingVertical: 8 }}>
            £{progress}
          </Text>
        )}
        <LinearGradient
          colors={[config.colors.teal, config.colors.lightBlue]}
          style={[
            {
              height: currentProgress,
            },
            styles.progressContainer,
          ]}
        >
          {!progressBarLengthCheck && (
            <Text style={{ color: config.colors.text.darkGrey }}>
              £{progress}
            </Text>
          )}
        </LinearGradient>
      </View>
      <View style={styles.barContainer}>
        {goalBarLengthCheck && (
          <Text style={{ color: config.colors.secondary, paddingVertical: 8 }}>
            £{goal}
          </Text>
        )}
        <View style={styles.goalContainer}>
          {!goalBarLengthCheck && (
            <Text style={{ color: config.colors.secondary }}>£{goal}</Text>
          )}
        </View>
      </View>
    </View>
  );
};

export default SeparatedProgressBar;
