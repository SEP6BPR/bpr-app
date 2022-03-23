import * as React from "react";
import Svg, {
  SvgProps,
  G,
  Circle,
  Path,
  Defs,
  LinearGradient,
  Stop,
} from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: filter */

const SvgComponent = (props: SvgProps) => (
  <Svg width={360} height={398} fill="none" {...props}>
    <G filter="url(#a)">
      <Circle cx={178} cy={187} r={142} fill="#F7FAFD" />
      <Circle
        cx={178}
        cy={187}
        r={142}
        stroke="url(#b)"
        strokeOpacity={0.2}
        strokeWidth={0.5}
      />
    </G>
    <G filter="url(#c)">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M265.782 135.182c-.143-7.527-7.817-11.377-15.591-10.889-4.36.275-15.57 2.84-31.96-3.555-13.812-5.386-18.078-14.524-32.534-18.883-3.768-1.14-10.156-1.14-13.928 0-14.453 4.359-18.722 13.497-32.534 18.883-16.386 6.395-27.586 3.566-31.957 3.555-8.198-.017-13.92 4.712-13.917 12.51 0 0-9.61 91.257 70.297 129.357 1.765.841 8.311 3.83 15.003 3.84h.147c6.689-.014 13.238-2.999 15-3.84 79.91-38.1 71.974-130.978 71.974-130.978Z"
        fill="#F7FAFD"
      />
      <Path
        d="M265.532 135.187v.008l.001.008.249-.021-.249.022v.003l.001.012.004.05.015.198c.013.176.03.438.049.781.039.687.085 1.701.115 3.005.061 2.608.059 6.379-.193 11.023-.504 9.289-2.007 22.07-6.003 36.039-7.992 27.936-25.949 60.609-65.821 79.619v.001c-1.758.839-8.264 3.802-14.892 3.815h-.146c-6.633-.01-13.134-2.976-14.896-3.816-39.87-19.01-57.408-51.277-64.98-78.806-3.787-13.765-5.08-26.343-5.428-35.48a137.58 137.58 0 0 1-.004-10.839 89.37 89.37 0 0 1 .168-2.953 51.415 51.415 0 0 1 .081-.962l.005-.049.001-.012v-.003l-.248-.027.249.027.001-.014v-.013c-.002-3.834 1.402-6.894 3.798-8.997 2.4-2.107 5.817-3.271 9.869-3.263.787.002 1.806.098 3.046.214 5.559.523 15.555 1.461 29.002-3.786 6.496-2.533 10.894-5.894 15.197-9.182l.89-.679c4.595-3.499 9.246-6.85 16.428-9.016 1.855-.56 4.368-.844 6.893-.844 2.525 0 5.038.284 6.89.844h.001c7.183 2.166 11.835 5.517 16.429 9.016l.891.68c4.302 3.288 8.7 6.648 15.195 9.181 14.189 5.536 24.527 4.383 29.886 3.786.855-.095 1.584-.176 2.181-.214 3.845-.242 7.652.591 10.507 2.4 2.849 1.805 4.748 4.577 4.818 8.244Z"
        stroke="url(#d)"
        strokeOpacity={0.4}
        strokeWidth={0.5}
      />
    </G>
    <G filter="url(#e)">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M216.49 210.473c-5.117 7.362-12.315 14.684-19.732 19.854-6.012 4.191-12.082 7.775-17.473 8.673-5.503-1.059-11.943-5.033-18.156-9.792-6.551-5.019-12.865-11.892-17.619-18.731-12.987-18.679-12.628-38.06.804-47.536 9.774-6.902 23.78-4.327 35.688 4.521 11.907-8.845 25.91-11.423 35.687-4.521 13.429 9.473 13.787 28.853.801 47.532Z"
        fill="#fff"
      />
      <Path
        d="m216.285 210.33.205.143-.205-.143c-5.101 7.339-12.278 14.64-19.67 19.792l.143.205-.143-.205c-5.996 4.18-12.008 7.724-17.327 8.624-5.432-1.06-11.813-4.992-18.007-9.736-6.527-5.001-12.824-11.855-17.566-18.676-6.471-9.308-9.604-18.772-9.46-27.072.144-8.293 3.559-15.429 10.203-20.116v-.001c9.646-6.811 23.527-4.301 35.394 4.518l.15.11.149-.11c11.867-8.816 25.745-11.329 35.394-4.517 6.642 4.685 10.057 11.82 10.2 20.113.144 8.3-2.989 17.764-9.46 27.071Z"
        stroke="url(#f)"
        strokeOpacity={0.41}
        strokeWidth={0.5}
      />
    </G>
    <Defs>
      <LinearGradient
        id="b"
        x1={94.324}
        y1={98.486}
        x2={279.601}
        y2={179.658}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#33DDEC" />
        <Stop offset={1} stopColor="#34AAFC" />
      </LinearGradient>
      <LinearGradient
        id="d"
        x1={128.528}
        y1={132.828}
        x2={240.527}
        y2={183.057}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#33DDEC" />
        <Stop offset={1} stopColor="#34AAFC" />
      </LinearGradient>
      <LinearGradient
        id="f"
        x1={152.894}
        y1={174.067}
        x2={209.95}
        y2={202.813}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#33DDEC" />
        <Stop offset={1} stopColor="#34AAFC" />
      </LinearGradient>
    </Defs>
  </Svg>
);

export default SvgComponent;
