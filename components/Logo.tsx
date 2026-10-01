interface LogoProps {
  size?: number;
  className?: string;
}

export function Logo({ size = 28, className = "" }: LogoProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 64 64"
      width={size}
      height={size}
      fill="none"
      className={`shrink-0 ${className}`}
    >
      <rect
        x="1.25"
        y="1.25"
        width="61.5"
        height="61.5"
        rx="14"
        fill="#1B1E27"
        stroke="#2A2E3A"
        strokeWidth="2.5"
      />
      <path
        d="M14.5 18.5 28.8 47c1.3 2.6 5.1 2.6 6.4 0l14.3-28.5"
        stroke="#C99A3D"
        strokeWidth="8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M32 13v24m-8-7 8 8 8-8"
        stroke="#F2F0EA"
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
