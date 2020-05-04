import { Value } from "react-native-reanimated"
import { SpringConfig } from "./types"

/**
 * Default parameters for ripple scale and duration.
 */
export const rippleAnimeParams = {
    small: 1,
    medium: 1.5,
    large: 2.5,
    duration: 150,
}

/**
 * Rotation spring parameters.
 */
export const defaultSpringConfig: SpringConfig = {
    velocity: -5,
    config: {
        mass: new Value(1.2),
        stiffness: new Value(80),
        damping: new Value(12),
    },
}