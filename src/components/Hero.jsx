import { motion } from "framer-motion";

import ButtonShimmer from "./primitives/Button/Shimmer";
import ButtonFillDiagonal from "./primitives/Button/FillDiagonal";
import Marquee from "./primitives/Marquee/Marquee";
import MarqueeElement from "./primitives/Marquee/MarqueeElement";

export default function Hero() {
  return (
    <main className="container mx-auto mt-28 px-10 pb-10 text-clrWhite1">
      <motion.h1
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ ease: "linear", duration: 0.4, delay: 0.5 }}
        className="font-normal text-[3.5rem] w-[60%] mb-4 leading-none"
      >
        Empowering Lives Through
        <br />
        Innovative{" "}
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ ease: "circOut", duration: 0.3, delay: 1 }}
          className="relative font-bold"
        >
          AI{" "}
          <motion.span
            className="absolute left-0 -bottom-1 h-2 bg-clrPurple2"
            initial={{ width: 0 }}
            animate={{ width: "85%" }}
            transition={{ delay: 1.5, duration: 0.4, ease: "easeIn" }}
          />
        </motion.span>{" "}
        Technologies.{" "}
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ ease: "circOut", duration: 0.4, delay: 2.0 }}
        className="font-normal text-[1.375rem] text-clrWhite3"
      >
        Finding new horizons for visionaries to accelerate their innovation and
        progress.
      </motion.p>

      <div className="text-[1.125rem] flex items-center gap-4 mt-7">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ ease: "circOut", duration: 0.3, delay: 2.4 }}
        >
          <ButtonShimmer>Explore Our Services</ButtonShimmer>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ ease: "circOut", duration: 0.3, delay: 2.7 }}
        >
          <ButtonFillDiagonal>Learn more</ButtonFillDiagonal>
        </motion.div>
      </div>

      <Marquee>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ ease: "circOut", duration: 0.6, delay: 3 }}
          className="flex gap-10 text-[1.5rem] mt-20"
        >
          <MarqueeElement
            title="From Ideas to Software Solutions"
            emojis="💡✨"
          />
          <MarqueeElement
            title="From Ideas to Software Solutions"
            emojis="🌟✨"
          />
          <MarqueeElement
            title="From Ideas to Software Solutions"
            emojis="💰✨"
          />
          {/* Below element is added to evenly occupy the remanining space(if any) */}
          <span className="flex-1"></span>
        </motion.div>
      </Marquee>
    </main>
  );
}
