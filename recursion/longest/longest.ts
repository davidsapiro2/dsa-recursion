import { LLNodeStr } from "../common/ll";

/** longest: return length of longest word in a linked list of words. */

function longest(words: LLNodeStr | null): number {
  if (words === null) return 0;
  const longestWord = longest(words.next)
  return words.val.length > longestWord ? words.val.length : longestWord;
}

export { longest };
