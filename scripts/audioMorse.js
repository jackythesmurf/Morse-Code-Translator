export const playMorseLive = (letter, live, PRESS_ONCE, ctx) => {
    var dot = 1.2 / 15;
    var t = ctx.currentTime;
  
    var oscillator = ctx.createOscillator();
    oscillator.type = "sine";
    oscillator.frequency.value = 600;
  
    var gainNode = ctx.createGain();
    gainNode.gain.setValueAtTime(0, t);
  
    const setValuePerChar = (char) => {
      switch (char) {
        case ".":
          gainNode.gain.setValueAtTime(1, t);
          t += dot;
          gainNode.gain.setValueAtTime(0, t);
          t += dot;
          break;
        case "-":
          gainNode.gain.setValueAtTime(1, t);
          t += 3 * dot;
          gainNode.gain.setValueAtTime(0, t);
          t += dot;
          break;
        case " ":
          t += 7 * dot;
          break;
      }
    };
    if (live == true) {
      setValuePerChar(letter);
    } else {
      letter.split("").forEach((char) => {
        setValuePerChar(char);
      });
      let i = 0;
      const setDuration = () => {
        setInterval(() => {
          i++;
          if (i == letter.length) {
            PRESS_ONCE[0] = true;
            console.log(PRESS_ONCE)
            clearInterval(setDuration);
          }
        }, 200);
      };
      setDuration()
    }
    oscillator.connect(gainNode);
    gainNode.connect(ctx.destination);
    console.log(letter);
    oscillator.start();
  };