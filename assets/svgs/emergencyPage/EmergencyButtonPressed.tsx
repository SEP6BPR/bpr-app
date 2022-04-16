import * as React from "react";
import Svg, {
  SvgProps,
  Circle,
  Path,
  Defs,
  LinearGradient,
  Stop,
} from "react-native-svg";

const SvgComponent = (props: SvgProps) => (
  <Svg width={290} height={290} fill="none" {...props}>
    <Circle cx={145} cy={145} r={142} fill="#F7FAFD" />
    <Circle
      cx={145}
      cy={145}
      r={143.5}
      stroke="#33DDEC"
      strokeOpacity={0.73}
      strokeWidth={3}
    />
    <Path
      d="M217.097 80.796c-.631.04-1.387.124-2.264.22-5.368.595-15.295 1.694-29.057-3.675-6.259-2.44-10.479-5.665-14.792-8.96l-.87-.663c-4.632-3.528-9.488-7.04-16.984-9.3-2.073-.626-4.77-.918-7.396-.918-2.625 0-5.323.292-7.398.919-7.494 2.26-12.35 5.771-16.983 9.299-.291.22-.58.442-.869.663-4.314 3.295-8.535 6.519-14.794 8.96-13.002 5.074-22.495 4.196-28.114 3.677-1.31-.12-2.41-.223-3.294-.225-4.38-.009-8.24 1.251-11.027 3.697-2.792 2.45-4.377 5.98-4.394 10.237l-.019.204c-.016.181-.039.448-.065.794a91.24 91.24 0 0 0-.171 3.012c-.108 2.604-.172 6.358.003 10.978.351 9.235 1.659 21.952 5.49 35.877 7.665 27.865 25.46 60.633 65.914 79.922 1.782.85 8.591 3.975 15.646 3.986h.152c7.05-.014 13.862-3.136 15.643-3.986 40.456-19.289 58.666-52.46 66.749-80.718 4.041-14.124 5.559-27.04 6.068-36.425.255-4.695.257-8.51.196-11.159a93.11 93.11 0 0 0-.168-3.869l-.016-.21-.002-.028c-.099-4.32-2.378-7.58-5.63-9.64-3.224-2.043-7.414-2.929-11.554-2.669Z"
      fill="#36B1E6"
      stroke="#35E2F1"
      strokeWidth={3}
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M183.49 168.473c-5.117 7.362-12.315 14.684-19.732 19.854-6.012 4.191-12.082 7.775-17.473 8.673-5.503-1.059-11.943-5.033-18.156-9.792-6.551-5.019-12.865-11.892-17.619-18.731-12.987-18.679-12.628-38.06.804-47.536 9.774-6.902 23.78-4.327 35.688 4.521 11.907-8.845 25.91-11.423 35.687-4.521 13.429 9.473 13.787 28.853.801 47.532Z"
      fill="#fff"
    />
    <Path
      d="M182.258 167.617c-5.02 7.222-12.093 14.416-19.358 19.479-5.911 4.122-11.635 7.468-16.596 8.378-5.078-1.064-11.17-4.789-17.263-9.457-6.411-4.911-12.621-11.667-17.3-18.397l-1.231.857 1.231-.857c-6.36-9.148-9.375-18.36-9.236-26.336.138-7.94 3.39-14.684 9.674-19.117 9.007-6.361 22.261-4.17 33.928 4.499l.894.665.895-.665c11.667-8.666 24.918-10.86 33.928-4.499h.001c6.281 4.431 9.533 11.174 9.67 19.114.139 7.976-2.877 17.188-9.237 26.336Z"
      stroke="url(#a)"
      strokeOpacity={0.41}
      strokeWidth={3}
    />
    <Defs>
      <LinearGradient
        id="a"
        x1={119.894}
        y1={132.067}
        x2={176.95}
        y2={160.813}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#33DDEC" />
        <Stop offset={1} stopColor="#175F92" />
      </LinearGradient>
    </Defs>
  </Svg>
);

export default SvgComponent;
