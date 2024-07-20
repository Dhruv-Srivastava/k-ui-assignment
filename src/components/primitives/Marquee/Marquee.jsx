import Marquee from "react-fast-marquee";
export default function MarqueeComponent({ children }) {
  return (
    <Marquee className="my-mask">
      {children}
    </Marquee>
  );
}
