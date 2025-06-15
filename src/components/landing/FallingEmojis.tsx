
import { useEffect, useState } from 'react';

const EMOJIS = ['💸', '🪙', '💵', '💰', '🤑', '💳', '💶', '💎'];

type Emoji = {
  id: number;
  emoji: string;
  style: React.CSSProperties;
};

const createEmoji = (id: number): Emoji => {
  const style: React.CSSProperties = {
    left: `${Math.random() * 100}vw`,
    fontSize: `${Math.random() * 1.5 + 1}rem`, // 1rem to 2.5rem
    animationDuration: `${Math.random() * 4 + 5}s`, // 5s to 9s
    animationDelay: `${Math.random() * 3}s`, // 0s to 3s
  };
  return {
    id,
    emoji: EMOJIS[Math.floor(Math.random() * EMOJIS.length)],
    style,
  };
};


const FallingEmojis = () => {
  const [emojis, setEmojis] = useState<Emoji[]>([]);
  
  useEffect(() => {
    const emojiCount = 60;
    const generatedEmojis = Array.from({ length: emojiCount }, (_, i) => createEmoji(i));
    setEmojis(generatedEmojis);

    // Clean up emojis from DOM after animation
    const timer = setTimeout(() => {
      setEmojis([]);
    }, 13000); // Should be longer than max animation duration + delay (9s + 3s = 12s)

    return () => clearTimeout(timer);
  }, []);

  return (
    <div aria-hidden="true" className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
      {emojis.map((emoji) => (
        <span key={emoji.id} className="falling-emoji" style={emoji.style}>
          {emoji.emoji}
        </span>
      ))}
    </div>
  );
};

export default FallingEmojis;
