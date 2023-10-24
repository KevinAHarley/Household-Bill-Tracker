import { FC } from "react";
import { Image, Pressable, Text, ViewStyle } from "react-native";

import styles from "./Avatar.styles";

type AvatarProps = {
  onPress?: () => void;
  size: "XS" | "S" | "M" | "L";
  source?: string;
  initials?: string;
  style?: ViewStyle;
  testID?: string;
};
export const Avatar: FC<AvatarProps> = ({
  onPress,
  size,
  style,
  source,
  initials,
  testID,
}) => {
  let avatarSize = 60;

  switch (true) {
    case size === "XS": {
      avatarSize = 40;
      break;
    }
    case size === "S": {
      avatarSize = 50;
      break;
    }
    case size === "M": {
      avatarSize = 100;
      break;
    }
    case size === "L": {
      avatarSize = 140;
      break;
    }
  }

  return (
    <Pressable
      onPress={onPress}
      style={[
        initials ? styles.initialsContainer : styles.container,
        { height: avatarSize, width: avatarSize, borderRadius: avatarSize / 2 },
        style,
      ]}
      disabled={!onPress}
      testID={testID}
    >
      {initials ? (
        <Text style={[styles.initialsText, { fontSize: avatarSize / 3 }]}>
          {initials}
        </Text>
      ) : (
        <Image
          source={{
            uri: source,
          }}
          style={{
            height: avatarSize,
            width: avatarSize,
            borderRadius: avatarSize / 2,
          }}
        />
      )}
    </Pressable>
  );
};
