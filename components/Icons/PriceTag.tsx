const PriceTag: React.FC<{ class: string }> = (props) => {
  return (
    <svg
      width="48"
      height="48"
      viewBox="0 0 64 64"
      xmlns="http://www.w3.org/2000/svg"
      strokeWidth="3"
      className={props.class}
      stroke="currentColor"
      fill="none"
    >
      <path
        d="M43.18,58.17H20.82a2.34,2.34,0,0,1-2.34-2.34V28.88a1.19,1.19,0,0,1,.37-.86L30.72,16.88a1.18,1.18,0,0,1,1.57,0L45.12,28a1.18,1.18,0,0,1,.4.88V55.83A2.34,2.34,0,0,1,43.18,58.17Z"
        strokeLinecap="round"
      />
      <path
        d="M32,25.17c-4.42,0-8-4.33-8-9.67s3.57-9.67,8-9.67,8,4.33,8,9.67"
        strokeLinecap="round"
      />
      <path
        d="M38.48,50.08H27.28a.08.08,0,0,1-.06-.14c.76-.82,4.42-5,3-8.79-1.56-4.21-.55-10.89,7-7.78"
        strokeLinecap="round"
      />
      <line
        x1="25.52"
        y1="41.26"
        x2="35.97"
        y2="41.26"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default PriceTag;
