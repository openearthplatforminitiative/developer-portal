interface SpinnerProps {
  height: number;
  width: number;
}
export const CircleSpinner = ({ height, width }: SpinnerProps) => (
  <svg
    width={width}
    height={height}
    viewBox={`0 0 639 639`}
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <circle
      cx='319.5'
      cy='319.5'
      r='313.5'
      stroke='#77DAA0'
      strokeWidth='6'
      strokeDasharray='24 24 48 24 64 24'
    />
  </svg>
);
