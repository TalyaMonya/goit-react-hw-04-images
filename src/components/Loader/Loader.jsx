import { LoaderWrap } from "./Loader.styled"
import { RotatingLines } from "react-loader-spinner"

export const Loader = () => {
    return (
        <LoaderWrap>
            <RotatingLines
  strokeColor="grey"
  strokeWidth="5"
  animationDuration="0.75"
  width="86"
  visible={true}
/>
        </LoaderWrap>
    )
}