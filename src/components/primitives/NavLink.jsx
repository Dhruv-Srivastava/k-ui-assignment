import { motion } from "framer-motion";

const DURATION = 0.25;
const STAGGER = 0.025;

export default function NavLink({ children, to }) {
  // We can wrap the entire component in a Link component from a library like react-router-dom or from Next and pass the "to" prop to the <Link> Component for navigation

  return (
    <motion.li
      initial="initial"
      whileHover="hovered"
      className="relative block overflow-hidden whitespace-nowrap cursor-pointer"
    >
      <div>
        {children.split("").map((l, i) => (
          <motion.span
            variants={{
              initial: {
                y: 0,
              },

              hovered: {
                y: "-100%",
              },
            }}
            transition={{
              duration: DURATION,
              ease: "easeInOut",
              delay: STAGGER * i,
            }}
            className="inline-block"
            key={i}
          >
            {l}
          </motion.span>
        ))}
      </div>

      <div className="absolute inset-0">
        {children.split("").map((l, i) => (
          <motion.span
            variants={{
              initial: {
                y: "100%",
              },
              hovered: {
                y: 0,
              },
            }}
            transition={{
              duration: DURATION,
              ease: "easeInOut",
              delay: STAGGER * i,
            }}
            className="inline-block"
            key={i}
          >
            {l}
          </motion.span>
        ))}
      </div>
    </motion.li>
  );
}
