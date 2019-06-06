const world = 'world';

export function hello(word: string = world): string {
  test();
  return `Hello ${word}! `;
}

async function test() : Promise<string> {
  return "hello";
}
