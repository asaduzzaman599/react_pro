import { useSelector } from "react-redux"
import type { RootState } from "."

export const useStoreState = () => {
const state = useSelector((state: RootState) => state)
return state
}