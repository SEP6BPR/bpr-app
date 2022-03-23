import * as React from "react"
import Svg, { SvgProps, Defs, Rect, G, Use, Path } from "react-native-svg"
/* SVGR has dropped some elements not supported by react-native-svg: title, filter */

const SvgComponent = (props: SvgProps) => (
  <Svg
    width={46}
    height={46}
    {...props}
  >
    <Defs>
      <Rect id="b" x={0} y={0} width={40} height={40} rx={2} />
    </Defs>
    <G fill="none" fillRule="evenodd">
      <G transform="translate(3 3)" filter="url(#a)">
        <Use fill="#FFF" xlinkHref="#b" />
        <Use xlinkHref="#b" />
        <Use xlinkHref="#b" />
        <Use xlinkHref="#b" />
      </G>
      <Path
        d="M31.64 23.205c0-.639-.057-1.252-.164-1.841H23v3.481h4.844a4.14 4.14 0 0 1-1.796 2.716v2.259h2.908c1.702-1.567 2.684-3.875 2.684-6.615Z"
        fill="#4285F4"
      />
      <Path
        d="M23 32c2.43 0 4.467-.806 5.956-2.18l-2.908-2.259c-.806.54-1.837.86-3.048.86-2.344 0-4.328-1.584-5.036-3.711h-3.007v2.332A8.997 8.997 0 0 0 23 32Z"
        fill="#34A853"
      />
      <Path
        d="M17.964 24.71a5.41 5.41 0 0 1-.282-1.71c0-.593.102-1.17.282-1.71v-2.332h-3.007A8.996 8.996 0 0 0 14 23c0 1.452.348 2.827.957 4.042l3.007-2.332Z"
        fill="#FBBC05"
      />
      <Path
        d="M23 17.58c1.321 0 2.508.454 3.44 1.345l2.582-2.58C27.463 14.891 25.426 14 23 14a8.997 8.997 0 0 0-8.043 4.958l3.007 2.332c.708-2.127 2.692-3.71 5.036-3.71Z"
        fill="#EA4335"
      />
      <Path d="M14 14h18v18H14V14Z" />
    </G>
  </Svg>
)

export default SvgComponent