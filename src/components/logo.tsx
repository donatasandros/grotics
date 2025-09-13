/** biome-ignore-all lint/correctness/useUniqueElementIds: . */
/** biome-ignore-all lint/a11y/noSvgWithoutTitle: . */
import { cn } from "@/lib/utils";

interface LogoProps {
  type?: "logomark" | "combination";
  className?: string;
}

export default function Logo({ type = "logomark", className }: LogoProps) {
  if (type === "logomark") {
    return (
      <svg
        width="48"
        height="48"
        viewBox="0 0 48 48"
        fill="none"
        className={cn("size-10", className)}
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_175_231)">
          <g filter="url(#filter0_iii_175_231)">
            <mask
              id="mask0_175_231"
              className="mask-type-luminance"
              maskUnits="userSpaceOnUse"
              x="0"
              y="0"
              width="48"
              height="48"
            >
              <path
                d="M36 0H12C5.37258 0 0 5.37258 0 12V36C0 42.6274 5.37258 48 12 48H36C42.6274 48 48 42.6274 48 36V12C48 5.37258 42.6274 0 36 0Z"
                fill="white"
              />
            </mask>
            <g mask="url(#mask0_175_231)">
              <path
                d="M36 0H12C5.37258 0 0 5.37258 0 12V36C0 42.6274 5.37258 48 12 48H36C42.6274 48 48 42.6274 48 36V12C48 5.37258 42.6274 0 36 0Z"
                className="fill-brand-600"
              />
              <path d="M48 0H0V48H48V0Z" fill="url(#paint0_linear_175_231)" />
              <g filter="url(#filter1_d_175_231)">
                <path d="M14.25 33.75H9V39H14.25V33.75Z" fill="white" />
                <path
                  opacity="0.6"
                  d="M19.5 33.75H14.25V39H19.5V33.75Z"
                  fill="white"
                />
                <path
                  opacity="0.32"
                  d="M24.75 33.75H19.5V39H24.75V33.75Z"
                  fill="white"
                />
                <path
                  opacity="0.07"
                  d="M30 33.75H24.75V39H30V33.75Z"
                  fill="white"
                />
                <path
                  opacity="0.6"
                  d="M14.25 28.5H9V33.75H14.25V28.5Z"
                  fill="white"
                />
                <path
                  opacity="0.32"
                  d="M19.5 28.5H14.25V33.75H19.5V28.5Z"
                  fill="white"
                />
                <path
                  opacity="0.07"
                  d="M19.5 23.25H14.25V28.5H19.5V23.25Z"
                  fill="white"
                />
                <path
                  opacity="0.07"
                  d="M24.75 28.5H19.5V33.75H24.75V28.5Z"
                  fill="white"
                />
                <path
                  opacity="0.32"
                  d="M14.25 23.25H9V28.5H14.25V23.25Z"
                  fill="white"
                />
                <path
                  opacity="0.07"
                  d="M14.25 18H9V23.25H14.25V18Z"
                  fill="white"
                />
                <path d="M39 9H33.75V14.25H39V9Z" fill="white" />
                <path
                  opacity="0.6"
                  d="M39 14.25H33.75V19.5H39V14.25Z"
                  fill="white"
                />
                <path
                  opacity="0.32"
                  d="M33.75 14.25H28.5V19.5H33.75V14.25Z"
                  fill="white"
                />
                <path
                  opacity="0.07"
                  d="M28.5 14.25H23.25V19.5H28.5V14.25Z"
                  fill="white"
                />
                <path
                  opacity="0.32"
                  d="M39 19.5H33.75V24.75H39V19.5Z"
                  fill="white"
                />
                <path
                  opacity="0.07"
                  d="M33.75 19.5H28.5V24.75H33.75V19.5Z"
                  fill="white"
                />
                <path
                  opacity="0.07"
                  d="M39 24.75H33.75V30H39V24.75Z"
                  fill="white"
                />
                <path
                  opacity="0.6"
                  d="M33.75 9H28.5V14.25H33.75V9Z"
                  fill="white"
                />
                <path
                  opacity="0.32"
                  d="M28.5 9H23.25V14.25H28.5V9Z"
                  fill="white"
                />
                <path
                  opacity="0.07"
                  d="M23.25 9H18V14.25H23.25V9Z"
                  fill="white"
                />
              </g>
            </g>
            <path
              d="M36 1H12C5.92487 1 1 5.92487 1 12V36C1 42.0751 5.92487 47 12 47H36C42.0751 47 47 42.0751 47 36V12C47 5.92487 42.0751 1 36 1Z"
              stroke="url(#paint1_linear_175_231)"
              strokeWidth="2"
            />
          </g>
        </g>
        <defs>
          <filter
            id="filter0_iii_175_231"
            x="0"
            y="-3"
            width="48"
            height="54"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="-3" />
            <feGaussianBlur stdDeviation="1.5" />
            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
            />
            <feBlend
              mode="normal"
              in2="shape"
              result="effect1_innerShadow_175_231"
            />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="3" />
            <feGaussianBlur stdDeviation="1.5" />
            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.1 0"
            />
            <feBlend
              mode="normal"
              in2="effect1_innerShadow_175_231"
              result="effect2_innerShadow_175_231"
            />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset />
            <feGaussianBlur stdDeviation="2" />
            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0"
            />
            <feBlend
              mode="normal"
              in2="effect2_innerShadow_175_231"
              result="effect3_innerShadow_175_231"
            />
          </filter>
          <filter
            id="filter1_d_175_231"
            x="4.5"
            y="6.75"
            width="39"
            height="39"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="2.25" />
            <feGaussianBlur stdDeviation="2.25" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0.141176 0 0 0 0 0.141176 0 0 0 0 0.141176 0 0 0 0.1 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_175_231"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_175_231"
              result="shape"
            />
          </filter>
          <linearGradient
            id="paint0_linear_175_231"
            x1="24"
            y1="5.36442e-07"
            x2="26"
            y2="48"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="white" stopOpacity="0" />
            <stop offset="1" stopColor="white" stopOpacity="0.12" />
          </linearGradient>
          <linearGradient
            id="paint1_linear_175_231"
            x1="24"
            y1="-5.05344e-08"
            x2="24"
            y2="48"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="white" stopOpacity="0.12" />
            <stop offset="1" stopColor="white" stopOpacity="0" />
          </linearGradient>
          <clipPath id="clip0_175_231">
            <rect width="48" height="48" fill="white" />
          </clipPath>
        </defs>
      </svg>
    );
  }

  if (type === "combination") {
    return (
      <svg
        width="171"
        height="48"
        viewBox="0 0 171 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={cn("h-10", className)}
      >
        <path
          d="M156.044 30.168H160.556C160.565 30.8418 160.805 31.3594 161.273 31.7207C161.742 32.082 162.392 32.2627 163.222 32.2627C163.974 32.2627 164.55 32.1211 164.95 31.8379C165.36 31.5547 165.565 31.1592 165.565 30.6514C165.565 30.0752 165.365 29.6943 164.965 29.5088C164.691 29.3721 164.33 29.25 163.881 29.1426L161.024 28.6738C157.89 28.1074 156.322 26.5547 156.322 24.0156C156.322 22.3945 156.923 21.125 158.124 20.207C159.325 19.2891 160.956 18.8301 163.017 18.8301C165.067 18.8301 166.688 19.2891 167.88 20.207C169.081 21.1152 169.706 22.3457 169.755 23.8984H165.258C165.229 22.6777 164.457 22.0674 162.943 22.0674C162.289 22.0674 161.781 22.1992 161.42 22.4629C161.059 22.7266 160.878 23.1025 160.878 23.5908C160.878 23.9814 161.01 24.2939 161.273 24.5283C161.439 24.6748 161.61 24.7871 161.786 24.8652C161.962 24.9434 162.108 24.9971 162.226 25.0264C162.353 25.0459 162.592 25.0801 162.943 25.1289L165.712 25.583C168.729 26.0615 170.238 27.6094 170.238 30.2266C170.238 31.877 169.604 33.1709 168.334 34.1084C167.074 35.0361 165.36 35.5 163.192 35.5C160.976 35.5 159.228 35.0166 157.948 34.0498C156.679 33.083 156.044 31.7891 156.044 30.168Z"
          className="fill-[#0A0D12] dark:fill-gray-50"
        />
        <path
          d="M148.633 29.3037H153.159C153.071 31.1494 152.334 32.6484 150.947 33.8008C149.58 34.9336 147.827 35.5 145.688 35.5C143.267 35.5 141.328 34.7432 139.873 33.2295C138.408 31.7061 137.676 29.6846 137.676 27.165C137.676 24.6846 138.418 22.6729 139.902 21.1299C141.377 19.5967 143.325 18.8301 145.747 18.8301C147.827 18.8301 149.541 19.3867 150.889 20.5C152.256 21.6035 153.013 23.0879 153.159 24.9531H148.633C148.506 24.1914 148.179 23.6104 147.651 23.21C147.124 22.8096 146.47 22.6094 145.688 22.6094C144.575 22.6094 143.735 23.0098 143.169 23.8105C142.612 24.6016 142.334 25.7295 142.334 27.1943C142.334 28.6787 142.627 29.8115 143.213 30.5928C143.799 31.3643 144.614 31.75 145.659 31.75C146.489 31.75 147.163 31.5303 147.681 31.0908C148.208 30.6416 148.525 30.0459 148.633 29.3037Z"
          className="fill-[#0A0D12] dark:fill-gray-50"
        />
        <path
          d="M129.181 17.4531V13H133.737V17.4531H129.181ZM123.424 19.123H133.737V35.207H129.181V22.8145H123.424V29.6553C123.424 30.3877 123.566 30.9297 123.849 31.2812C124.142 31.623 124.63 31.7939 125.314 31.7939C125.792 31.7939 126.31 31.7402 126.867 31.6328V35.207C125.978 35.3828 125.021 35.4707 123.996 35.4707C121.837 35.4707 120.407 34.9141 119.704 33.8008C119.372 33.2832 119.142 32.751 119.015 32.2041C118.888 31.6572 118.825 30.998 118.825 30.2266V22.8145H116.247V19.123H118.825V15.168L123.424 13.3955V19.123Z"
          className="fill-[#0A0D12] dark:fill-gray-50"
        />
        <path
          d="M105.935 18.8301C108.347 18.8301 110.291 19.6113 111.765 21.1738C113.24 22.707 113.977 24.7139 113.977 27.1943C113.977 29.665 113.24 31.667 111.765 33.2002C110.31 34.7139 108.367 35.4707 105.935 35.4707C103.494 35.4707 101.545 34.7139 100.09 33.2002C98.606 31.6572 97.8638 29.6455 97.8638 27.165C97.8638 24.6846 98.606 22.6729 100.09 21.1299C101.565 19.5967 103.513 18.8301 105.935 18.8301ZM102.522 27.165C102.522 28.5811 102.825 29.6943 103.43 30.5049C104.045 31.3154 104.871 31.7207 105.906 31.7207C106.96 31.7207 107.791 31.3105 108.396 30.4902C109.001 29.6602 109.304 28.542 109.304 27.1357C109.304 25.7393 109.001 24.6357 108.396 23.8252C107.791 23.0146 106.951 22.6094 105.876 22.6094C104.851 22.6094 104.036 23.0244 103.43 23.8545C102.825 24.6748 102.522 25.7783 102.522 27.165Z"
          className="fill-[#0A0D12] dark:fill-gray-50"
        />
        <path
          d="M90.6729 35.207H86.1172V19.123H90.1016L90.6729 22.1846H90.8633C91.6641 19.9482 93.3242 18.8301 95.8438 18.8301V22.8145C94.125 22.8047 92.8311 23.2734 91.9619 24.2207C91.1025 25.1582 90.6729 26.5303 90.6729 28.3369V35.207Z"
          className="fill-[#0A0D12] dark:fill-gray-50"
        />
        <path
          d="M69.4775 27.0186V23.21H81.1377V35.207H77.2119L76.9482 32.292H76.7285C76.1426 33.2686 75.2197 34.0498 73.96 34.6357C72.7002 35.2119 71.2939 35.5 69.7412 35.5C66.8115 35.5 64.4531 34.5039 62.666 32.5117C60.8887 30.5 60 27.8291 60 24.499C60 21.0518 60.9766 18.293 62.9297 16.2227C64.8828 14.123 67.4951 13.0732 70.7666 13.0732C73.2959 13.0732 75.4541 13.7227 77.2412 15.0215C79.0186 16.3105 80.0391 18.0195 80.3027 20.1484H75.293C75.0391 19.2695 74.502 18.5762 73.6816 18.0684C72.8613 17.5508 71.8799 17.292 70.7373 17.292C68.9404 17.292 67.5537 17.9268 66.5771 19.1963C65.6104 20.4658 65.127 22.2236 65.127 24.4697C65.127 26.7256 65.6152 28.4443 66.5918 29.626C67.5684 30.8076 68.9209 31.3984 70.6494 31.3984C72.0947 31.3984 73.2861 30.998 74.2236 30.1973C75.1709 29.3965 75.7275 28.3369 75.8936 27.0186H69.4775Z"
          className="fill-[#0A0D12] dark:fill-gray-50"
        />
        <g clipPath="url(#clip0_175_499)">
          <g filter="url(#filter0_iii_175_499)">
            <mask
              id="mask0_175_499"
              className="mask-type-luminance"
              maskUnits="userSpaceOnUse"
              x="0"
              y="0"
              width="48"
              height="48"
            >
              <path
                d="M36 0H12C5.37258 0 0 5.37258 0 12V36C0 42.6274 5.37258 48 12 48H36C42.6274 48 48 42.6274 48 36V12C48 5.37258 42.6274 0 36 0Z"
                fill="white"
              />
            </mask>
            <g mask="url(#mask0_175_499)">
              <path
                d="M36 0H12C5.37258 0 0 5.37258 0 12V36C0 42.6274 5.37258 48 12 48H36C42.6274 48 48 42.6274 48 36V12C48 5.37258 42.6274 0 36 0Z"
                className="fill-brand-600"
              />
              <path d="M48 0H0V48H48V0Z" fill="url(#paint0_linear_175_499)" />
              <g filter="url(#filter1_d_175_499)">
                <path d="M14.25 33.75H9V39H14.25V33.75Z" fill="white" />
                <path
                  opacity="0.6"
                  d="M19.5 33.75H14.25V39H19.5V33.75Z"
                  fill="white"
                />
                <path
                  opacity="0.32"
                  d="M24.75 33.75H19.5V39H24.75V33.75Z"
                  fill="white"
                />
                <path
                  opacity="0.07"
                  d="M30 33.75H24.75V39H30V33.75Z"
                  fill="white"
                />
                <path
                  opacity="0.6"
                  d="M14.25 28.5H9V33.75H14.25V28.5Z"
                  fill="white"
                />
                <path
                  opacity="0.32"
                  d="M19.5 28.5H14.25V33.75H19.5V28.5Z"
                  fill="white"
                />
                <path
                  opacity="0.07"
                  d="M19.5 23.25H14.25V28.5H19.5V23.25Z"
                  fill="white"
                />
                <path
                  opacity="0.07"
                  d="M24.75 28.5H19.5V33.75H24.75V28.5Z"
                  fill="white"
                />
                <path
                  opacity="0.32"
                  d="M14.25 23.25H9V28.5H14.25V23.25Z"
                  fill="white"
                />
                <path
                  opacity="0.07"
                  d="M14.25 18H9V23.25H14.25V18Z"
                  fill="white"
                />
                <path d="M39 9H33.75V14.25H39V9Z" fill="white" />
                <path
                  opacity="0.6"
                  d="M39 14.25H33.75V19.5H39V14.25Z"
                  fill="white"
                />
                <path
                  opacity="0.32"
                  d="M33.75 14.25H28.5V19.5H33.75V14.25Z"
                  fill="white"
                />
                <path
                  opacity="0.07"
                  d="M28.5 14.25H23.25V19.5H28.5V14.25Z"
                  fill="white"
                />
                <path
                  opacity="0.32"
                  d="M39 19.5H33.75V24.75H39V19.5Z"
                  fill="white"
                />
                <path
                  opacity="0.07"
                  d="M33.75 19.5H28.5V24.75H33.75V19.5Z"
                  fill="white"
                />
                <path
                  opacity="0.07"
                  d="M39 24.75H33.75V30H39V24.75Z"
                  fill="white"
                />
                <path
                  opacity="0.6"
                  d="M33.75 9H28.5V14.25H33.75V9Z"
                  fill="white"
                />
                <path
                  opacity="0.32"
                  d="M28.5 9H23.25V14.25H28.5V9Z"
                  fill="white"
                />
                <path
                  opacity="0.07"
                  d="M23.25 9H18V14.25H23.25V9Z"
                  fill="white"
                />
              </g>
            </g>
            <path
              d="M36 1H12C5.92487 1 1 5.92487 1 12V36C1 42.0751 5.92487 47 12 47H36C42.0751 47 47 42.0751 47 36V12C47 5.92487 42.0751 1 36 1Z"
              stroke="url(#paint1_linear_175_499)"
              strokeWidth="2"
            />
          </g>
        </g>
        <defs>
          <filter
            id="filter0_iii_175_499"
            x="0"
            y="-3"
            width="48"
            height="54"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="-3" />
            <feGaussianBlur stdDeviation="1.5" />
            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
            />
            <feBlend
              mode="normal"
              in2="shape"
              result="effect1_innerShadow_175_499"
            />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="3" />
            <feGaussianBlur stdDeviation="1.5" />
            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.1 0"
            />
            <feBlend
              mode="normal"
              in2="effect1_innerShadow_175_499"
              result="effect2_innerShadow_175_499"
            />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset />
            <feGaussianBlur stdDeviation="2" />
            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0"
            />
            <feBlend
              mode="normal"
              in2="effect2_innerShadow_175_499"
              result="effect3_innerShadow_175_499"
            />
          </filter>
          <filter
            id="filter1_d_175_499"
            x="4.5"
            y="6.75"
            width="39"
            height="39"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="2.25" />
            <feGaussianBlur stdDeviation="2.25" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0.141176 0 0 0 0 0.141176 0 0 0 0 0.141176 0 0 0 0.1 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_175_499"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_175_499"
              result="shape"
            />
          </filter>
          <linearGradient
            id="paint0_linear_175_499"
            x1="24"
            y1="5.36442e-07"
            x2="26"
            y2="48"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="white" stopOpacity="0" />
            <stop offset="1" stopColor="white" stopOpacity="0.12" />
          </linearGradient>
          <linearGradient
            id="paint1_linear_175_499"
            x1="24"
            y1="-5.05344e-08"
            x2="24"
            y2="48"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="white" stopOpacity="0.12" />
            <stop offset="1" stopColor="white" stopOpacity="0" />
          </linearGradient>
          <clipPath id="clip0_175_499">
            <rect width="48" height="48" fill="white" />
          </clipPath>
        </defs>
      </svg>
    );
  }

  return null;
}
