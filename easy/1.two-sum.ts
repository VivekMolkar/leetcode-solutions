/*
 * @lc app=leetcode id=1 lang=typescript
 *
 * [1] Two Sum
 */

// @lc code=start
function twoSum(nums: number[], target: number): number[] {
    const seen = new Map<number, number>();

    for (let i = 0; i < nums.length; i++) {
        const current = nums[i]!;
        const complement = target - current;

        if (seen.has(complement)) {
            return [seen.get(complement)!, i];
        }

        seen.set(current, i);
    }

    return [];
};
// @lc code=end

