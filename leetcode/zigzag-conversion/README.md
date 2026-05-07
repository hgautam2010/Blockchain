# Zigzag Conversion

Solved by @himanshu

- Platform: leetcode
- Difficulty: Medium
- Language: python3
- Solved at: 2026-05-07T08:28:40.491Z
- Prepiora problem: https://prepiora.com/problems/zigzag-conversion
- Prepiora profile: https://prepiora.com/u/himanshu

## Approach

The solution simulates the zigzag conversion pattern by iterating through the input string and appending characters to corresponding rows in a list. It tracks the current row and direction to move vertically down or up through the rows, then concatenates all rows to form the final converted string.

## Complexity

- Time: O(n) where n is the length of the input string, since it iterates through the string once.
- Space: O(n) to store the characters in the intermediate rows before concatenation.

## Signals

- Simulation
- String Manipulation
- Two Pointer
- String Traversal
- Conditional Logic
- List Usage
- Concatenation
