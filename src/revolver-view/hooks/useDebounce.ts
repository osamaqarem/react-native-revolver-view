import { useState, useEffect, useRef } from "react"
import shallowEqual from "../utils/shallowEqual"

export function useDebounce<T>(value: T, delay: number): T {
    const prevValue = useRef(value)
    const [debouncedValue, setDebouncedValue] = useState(value)

    useEffect(() => {
        const handler = setTimeout(() => {
            // prevent infinite rerenders if an object is passed
            if (!shallowEqual(value, prevValue.current)) {
                prevValue.current = value
                setDebouncedValue(value)
            }
        }, delay)
        return () => {
            clearTimeout(handler)
        }
    }, [value, delay])

    return debouncedValue
}