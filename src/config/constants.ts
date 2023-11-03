import { Dimensions, Platform } from "react-native";

export const isIos = Platform.OS === "ios";

export const isAndroid = Platform.OS === "android";

export const isWeb = Platform.OS === "web";

export const windowHeight = Dimensions.get("window").height;

export const windowWidth = Dimensions.get("window").width;

export const phoneNumberRegex = /^(?:0|\+?44)(?:\d\s?){9,10}$/gm;
export const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
