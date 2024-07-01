export function startsWithWhiteSpaces(s: string) {
  return /^\s/.test(s);
}

export function endsWithWhiteSpaces(s: string) {
  return /\s$/.test(s);
}
