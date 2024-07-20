export default function MarqueeElement({ title, emojis }) {
  return (
    <p className="bg-[linear-gradient(133deg,rgba(28,28,28,1)_0%,_rgba(227,227,227,1)_50%,_rgba(28,28,28,1)_100%);] bg-clip-text text-transparent">
      {title} <span className="text-white">{emojis}</span>
    </p>
  );
}
