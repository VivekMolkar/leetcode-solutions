/*
 * @lc app=leetcode id=242 lang=typescript
 *
 * [242] Valid Anagram
 */

// @lc code=start
function isAnagram(s: string, t: string): boolean {
    // early length check
    if (s.length !== t.length) {
        return false;
    }

    // use a fixed-size array for counts assuming input is lowercase
    // ASCII letters allow 26 slots; using charCode is faster than Map lookups.
    const counts: number[] = new Array(26).fill(0);
    const base = 'a'.charCodeAt(0);

    for (let i = 0; i < s.length; i++) {
        counts[s.charCodeAt(i) - base]++;
    }

    for (let i = 0; i < t.length; i++) {
        const idx = t.charCodeAt(i) - base;
        if (--counts[idx] < 0) {
            return false;
        }
    }

    return true;
};
// @lc code=end

