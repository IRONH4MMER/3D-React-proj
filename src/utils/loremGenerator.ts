import { LoremIpsum } from 'lorem-ipsum';

const lorem = new LoremIpsum({
  wordsPerSentence: {
    max: 2,
    min: 2,
  },
});

export const generateLoremIpsumPairs = (numPairs: number): string[] => {
  const wordPairs: string[] = [];

  for (let i = 0; i < numPairs; i++) {
    const sentence = lorem.generateSentences(1);
    wordPairs.push(sentence);
  }

  return wordPairs;
};
