import { Stack } from "expo-router";
import { useCallback } from "react";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";

SplashScreen.preventAutoHideAsync() // Prevents the app from auto-hiding the splash screen on first load
const Layout = () => {
    const [fontsloaded] = useFonts({
        DMBold: require('../assets/fonts/DMSans-Bold.ttf'),
        DMMedium: require('../assets/fonts/DMSans-Medium.ttf'),
        DMRegular: require('../assets/fonts/DMSans-Regular.ttf'),
    })
    // we only want to load the app once fonts have loaded
    const onLayoutRootView = useCallback(async () => {
        if (fontsloaded) {
            await SplashScreen.hideAsync();
        }
    }, [fontsloaded])

    if (!fontsloaded) {
        return null;
    }
    return <Stack OnLayout={onLayoutRootView} />;
}

export default Layout;

// /Users/anne/Desktop/React_native_jobs/assets/fonts/DMSans-Bold.ttf
// /Users/anne/Desktop/React_native_jobs/assets/fonts/DMSans-Medium.ttf
// /Users/anne/Desktop/React_native_jobs/assets/fonts/DMSans-Regular.ttf

