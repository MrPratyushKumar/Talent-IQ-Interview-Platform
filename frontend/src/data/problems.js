export const PROBLEMS = {
  "two-sum": {
    id: "two-sum",
    title: "Two Sum",
    difficulty: "Easy",
    category: "Array • Hash Table",
    description: {
      text: "Given an array of integers nums and an integer target, return indices of the two numbers in the array such that they add up to target.",
      notes: [
        "You may assume that each input would have exactly one solution, and you may not use the same element twice.",
        "You can return the answer in any order.",
      ],
    },
    examples: [
      {
        input: "nums = [2,7,11,15], target = 9",
        output: "[0,1]",
        explanation: "Because nums[0] + nums[1] == 9, we return [0, 1].",
      },
      {
        input: "nums = [3,2,4], target = 6",
        output: "[1,2]",
      },
      {
        input: "nums = [3,3], target = 6",
        output: "[0,1]",
      },
    ],
    constraints: [
      "2 ≤ nums.length ≤ 10⁴",
      "-10⁹ ≤ nums[i] ≤ 10⁹",
      "-10⁹ ≤ target ≤ 10⁹",
      "Only one valid answer exists",
    ],
    starterCode: {
      javascript: `function twoSum(nums, target) {
  // Write your solution here
  
}

// Test cases
console.log(twoSum([2, 7, 11, 15], 9)); // Expected: [0, 1]
console.log(twoSum([3, 2, 4], 6)); // Expected: [1, 2]
console.log(twoSum([3, 3], 6)); // Expected: [0, 1]`,
      python: `def twoSum(nums, target):
    # Write your solution here
    pass

# Test cases
print(twoSum([2, 7, 11, 15], 9))  # Expected: [0, 1]
print(twoSum([3, 2, 4], 6))  # Expected: [1, 2]
print(twoSum([3, 3], 6))  # Expected: [0, 1]`,
      java: `import java.util.*;

class Solution {
    public static int[] twoSum(int[] nums, int target) {
        // Write your solution here
        
        return new int[0];
    }
    
    public static void main(String[] args) {
        System.out.println(Arrays.toString(twoSum(new int[]{2, 7, 11, 15}, 9))); // Expected: [0, 1]
        System.out.println(Arrays.toString(twoSum(new int[]{3, 2, 4}, 6))); // Expected: [1, 2]
        System.out.println(Arrays.toString(twoSum(new int[]{3, 3}, 6))); // Expected: [0, 1]
    }
}`,
    },
    expectedOutput: {
      javascript: "[0,1]\n[1,2]\n[0,1]",
      python: "[0, 1]\n[1, 2]\n[0, 1]",
      java: "[0, 1]\n[1, 2]\n[0, 1]",
    },
  },

  "reverse-string": {
    id: "reverse-string",
    title: "Reverse String",
    difficulty: "Easy",
    category: "String • Two Pointers",
    description: {
      text: "Write a function that reverses a string. The input string is given as an array of characters s.",
      notes: ["You must do this by modifying the input array in-place with O(1) extra memory."],
    },
    examples: [
      {
        input: 's = ["h","e","l","l","o"]',
        output: '["o","l","l","e","h"]',
      },
      {
        input: 's = ["H","a","n","n","a","h"]',
        output: '["h","a","n","n","a","H"]',
      },
    ],
    constraints: ["1 ≤ s.length ≤ 10⁵", "s[i] is a printable ascii character"],
    starterCode: {
      javascript: `function reverseString(s) {
  // Write your solution here
  
}

// Test cases
let test1 = ["h","e","l","l","o"];
reverseString(test1);
console.log(test1); // Expected: ["o","l","l","e","h"]

let test2 = ["H","a","n","n","a","h"];
reverseString(test2);
console.log(test2); // Expected: ["h","a","n","n","a","H"]`,
      python: `def reverseString(s):
    # Write your solution here
    pass

# Test cases
test1 = ["h","e","l","l","o"]
reverseString(test1)
print(test1)  # Expected: ["o","l","l","e","h"]

test2 = ["H","a","n","n","a","h"]
reverseString(test2)
print(test2)  # Expected: ["h","a","n","n","a","H"]`,
      java: `import java.util.*;

class Solution {
    public static void reverseString(char[] s) {
        // Write your solution here
        
    }
    
    public static void main(String[] args) {
        char[] test1 = {'h','e','l','l','o'};
        reverseString(test1);
        System.out.println(Arrays.toString(test1)); // Expected: [o, l, l, e, h]
        
        char[] test2 = {'H','a','n','n','a','h'};
        reverseString(test2);
        System.out.println(Arrays.toString(test2)); // Expected: [h, a, n, n, a, H]
    }
}`,
    },
    expectedOutput: {
      javascript: '["o","l","l","e","h"]\n["h","a","n","n","a","H"]',
      python: "['o', 'l', 'l', 'e', 'h']\n['h', 'a', 'n', 'n', 'a', 'H']",
      java: "[o, l, l, e, h]\n[h, a, n, n, a, H]",
    },
  },

  "valid-palindrome": {
    id: "valid-palindrome",
    title: "Valid Palindrome",
    difficulty: "Easy",
    category: "String • Two Pointers",
    description: {
      text: "A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.",
      notes: ["Given a string s, return true if it is a palindrome, or false otherwise."],
    },
    examples: [
      {
        input: 's = "A man, a plan, a canal: Panama"',
        output: "true",
        explanation: '"amanaplanacanalpanama" is a palindrome.',
      },
      {
        input: 's = "race a car"',
        output: "false",
        explanation: '"raceacar" is not a palindrome.',
      },
      {
        input: 's = " "',
        output: "true",
        explanation:
          's is an empty string "" after removing non-alphanumeric characters. Since an empty string reads the same forward and backward, it is a palindrome.',
      },
    ],
    constraints: ["1 ≤ s.length ≤ 2 * 10⁵", "s consists only of printable ASCII characters"],
    starterCode: {
      javascript: `function isPalindrome(s) {
  // Write your solution here
  
}

// Test cases
console.log(isPalindrome("A man, a plan, a canal: Panama")); // Expected: true
console.log(isPalindrome("race a car")); // Expected: false
console.log(isPalindrome(" ")); // Expected: true`,
      python: `def isPalindrome(s):
    # Write your solution here
    pass

# Test cases
print(isPalindrome("A man, a plan, a canal: Panama"))  # Expected: True
print(isPalindrome("race a car"))  # Expected: False
print(isPalindrome(" "))  # Expected: True`,
      java: `class Solution {
    public static boolean isPalindrome(String s) {
        // Write your solution here
        
        return false;
    }
    
    public static void main(String[] args) {
        System.out.println(isPalindrome("A man, a plan, a canal: Panama")); // Expected: true
        System.out.println(isPalindrome("race a car")); // Expected: false
        System.out.println(isPalindrome(" ")); // Expected: true
    }
}`,
    },
    expectedOutput: {
      javascript: "true\nfalse\ntrue",
      python: "True\nFalse\nTrue",
      java: "true\nfalse\ntrue",
    },
  },

  "maximum-subarray": {
    id: "maximum-subarray",
    title: "Maximum Subarray",
    difficulty: "Medium",
    category: "Array • Dynamic Programming",
    description: {
      text: "Given an integer array nums, find the subarray with the largest sum, and return its sum.",
      notes: [],
    },
    examples: [
      {
        input: "nums = [-2,1,-3,4,-1,2,1,-5,4]",
        output: "6",
        explanation: "The subarray [4,-1,2,1] has the largest sum 6.",
      },
      {
        input: "nums = [1]",
        output: "1",
        explanation: "The subarray [1] has the largest sum 1.",
      },
      {
        input: "nums = [5,4,-1,7,8]",
        output: "23",
        explanation: "The subarray [5,4,-1,7,8] has the largest sum 23.",
      },
    ],
    constraints: ["1 ≤ nums.length ≤ 10⁵", "-10⁴ ≤ nums[i] ≤ 10⁴"],
    starterCode: {
      javascript: `function maxSubArray(nums) {
  // Write your solution here
  
}

// Test cases
console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4])); // Expected: 6
console.log(maxSubArray([1])); // Expected: 1
console.log(maxSubArray([5,4,-1,7,8])); // Expected: 23`,
      python: `def maxSubArray(nums):
    # Write your solution here
    pass

# Test cases
print(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]))  # Expected: 6
print(maxSubArray([1]))  # Expected: 1
print(maxSubArray([5,4,-1,7,8]))  # Expected: 23`,
      java: `class Solution {
    public static int maxSubArray(int[] nums) {
        // Write your solution here
        
        return 0;
    }
    
    public static void main(String[] args) {
        System.out.println(maxSubArray(new int[]{-2,1,-3,4,-1,2,1,-5,4})); // Expected: 6
        System.out.println(maxSubArray(new int[]{1})); // Expected: 1
        System.out.println(maxSubArray(new int[]{5,4,-1,7,8})); // Expected: 23
    }
}`,
    },
    expectedOutput: {
      javascript: "6\n1\n23",
      python: "6\n1\n23",
      java: "6\n1\n23",
    },
  },

  "container-with-most-water": {
    id: "container-with-most-water",
    title: "Container With Most Water",
    difficulty: "Medium",
    category: "Array • Two Pointers",
    description: {
      text: "You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).",
      notes: [
        "Find two lines that together with the x-axis form a container, such that the container contains the most water.",
        "Return the maximum amount of water a container can store.",
        "Notice that you may not slant the container.",
      ],
    },
    examples: [
      {
        input: "height = [1,8,6,2,5,4,8,3,7]",
        output: "49",
        explanation:
          "The vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water the container can contain is 49.",
      },
      {
        input: "height = [1,1]",
        output: "1",
      },
    ],
    constraints: ["n == height.length", "2 ≤ n ≤ 10⁵", "0 ≤ height[i] ≤ 10⁴"],
    starterCode: {
      javascript: `function maxArea(height) {
  // Write your solution here
  
}

// Test cases
console.log(maxArea([1,8,6,2,5,4,8,3,7])); // Expected: 49
console.log(maxArea([1,1])); // Expected: 1`,
      python: `def maxArea(height):
    # Write your solution here
    pass

# Test cases
print(maxArea([1,8,6,2,5,4,8,3,7]))  # Expected: 49
print(maxArea([1,1]))  # Expected: 1`,
      java: `class Solution {
    public static int maxArea(int[] height) {
        // Write your solution here
        
        return 0;
    }
    
    public static void main(String[] args) {
        System.out.println(maxArea(new int[]{1,8,6,2,5,4,8,3,7})); // Expected: 49
        System.out.println(maxArea(new int[]{1,1})); // Expected: 1
    }
}`,
    },
    expectedOutput: {
      javascript: "49\n1",
      python: "49\n1",
      java: "49\n1",
    },
  },
  "linked-list-cycle": {
  id: "linked-list-cycle",
  title: "Linked List Cycle",
  difficulty: "Easy",
  category: "Linked List • Two Pointers",
  description: {
    text: "Given head, the head of a linked list, determine if the linked list has a cycle in it.",
    notes: [
      "A cycle exists if there is some node in the list that can be reached again by continuously following the next pointer.",
      "Return true if there is a cycle in the linked list. Otherwise, return false."
    ],
  },
  examples: [
    {
      input: "head = [3,2,0,-4], pos = 1",
      output: "true",
      explanation: "There is a cycle in the linked list, where the tail connects to the 1st node (0-indexed).",
    },
  ],
  constraints: ["The number of nodes in the list is in the range [0, 10⁴]", "-10⁵ ≤ Node.val ≤ 10⁵"],
  starterCode: {
    javascript: `function hasCycle(head) {
  // Write your solution here
}`,
    python: `def hasCycle(head):
    # Write your solution here
    pass`,
    java: `public class Solution {
    public boolean hasCycle(ListNode head) {
        // Write your solution here
        return false;
    }
}`,
  },
  expectedOutput: {
    javascript: "true",
    python: "True",
    java: "true",
  },
},
"number-of-islands": {
  id: "number-of-islands",
  title: "Number of Islands",
  difficulty: "Medium",
  category: "Array • Depth-First Search • Breadth-First Search",
  description: {
    text: "Given an m x n 2D binary grid which represents a map of '1's (land) and '0's (water), return the number of islands.",
    notes: ["An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically."],
  },
  examples: [
    {
      input: 'grid = [["1","1","0","0","0"],["1","1","0","0","0"],["0","0","1","0","0"],["0","0","0","1","1"]]',
      output: "3",
    },
  ],
  constraints: ["m == grid.length", "n == grid[i].length", "1 ≤ m, n ≤ 300", "grid[i][j] is '0' or '1'"],
  starterCode: {
    javascript: `function numIslands(grid) {
  // Write your solution here
}`,
    python: `def numIslands(grid):
    # Write your solution here
    pass`,
    java: `class Solution {
    public int numIslands(char[][] grid) {
        // Write your solution here
        return 0;
    }
}`,
  },
  expectedOutput: {
    javascript: "3",
    python: "3",
    java: "3",
  },
},
"find-duplicate": {
  id: "find-duplicate",
  title: "Find the Duplicate Number",
  difficulty: "Medium",
  category: "Array • Two Pointers • Binary Search",
  description: {
    text: "Given an array of integers nums containing n + 1 integers where each integer is in the range [1, n] inclusive.",
    notes: [
      "There is only one repeated number in nums, return this repeated number.",
      "You must solve the problem without modifying the array nums and uses only constant extra space."
    ],
  },
  examples: [
    {
      input: "nums = [1,3,4,2,2]",
      output: "2",
    },
    {
      input: "nums = [3,1,3,4,2]",
      output: "3",
    },
  ],
  constraints: ["1 ≤ n ≤ 10⁵", "nums.length == n + 1", "1 ≤ nums[i] ≤ n"],
  starterCode: {
    javascript: `function findDuplicate(nums) {
  // Write your solution here
}`,
    python: `def findDuplicate(nums):
    # Write your solution here
    pass`,
    java: `class Solution {
    public int findDuplicate(int[] nums) {
        // Write your solution here
        return 0;
    }
}`,
  },
  expectedOutput: {
    javascript: "2\n3",
    python: "2\n3",
    java: "2\n3",
  },
},
"subarray-sum-equals-k": {
  id: "subarray-sum-equals-k",
  title: "Subarray Sum Equals K",
  difficulty: "Medium",
  category: "Array • Hash Table • Prefix Sum",
  description: {
    text: "Given an array of integers nums and an integer k, return the total number of subarrays whose sum equals to k.",
    notes: ["A subarray is a contiguous non-empty sequence of elements within an array."],
  },
  examples: [
    {
      input: "nums = [1,1,1], k = 2",
      output: "2",
    },
    {
      input: "nums = [1,2,3], k = 3",
      output: "2",
    },
  ],
  constraints: ["1 ≤ nums.length ≤ 2 * 10⁴", "-1000 ≤ nums[i] ≤ 1000", "-10⁷ ≤ k ≤ 10⁷"],
  starterCode: {
    javascript: `function subarraySum(nums, k) {
  // Write your solution here
}`,
    python: `def subarraySum(nums, k):
    # Write your solution here
    pass`,
    java: `class Solution {
    public int subarraySum(int[] nums, int k) {
        // Write your solution here
        return 0;
    }
}`,
  },
  expectedOutput: {
    javascript: "2\n2",
    python: "2\n2",
    java: "2\n2",
  },
},
"kth-largest-stream": {
  id: "kth-largest-stream",
  title: "Kth Largest Element in a Stream",
  difficulty: "Easy",
  category: "Tree • Design • Heap (Priority Queue)",
  description: {
    text: "Design a class to find the kth largest element in a stream. Note that it is the kth largest element in the sorted order, not the kth distinct element.",
    notes: [
      "Implement KthLargest class:",
      "KthLargest(int k, int[] nums) Initializes the object with the integer k and the stream of integers nums.",
      "int add(int val) Appends the integer val to the stream and returns the element representing the kth largest element in the stream."
    ],
  },
  examples: [
    {
      input: '["KthLargest", "add", "add", "add", "add", "add"], [[3, [4, 5, 8, 2]], [3], [5], [10], [9], [4]]',
      output: "[null, 4, 5, 5, 8, 8]",
    },
  ],
  constraints: ["1 ≤ k ≤ 10⁴", "0 ≤ nums.length ≤ 10⁴", "-10⁴ ≤ nums[i], val ≤ 10⁴", "At most 10⁴ calls will be made to add."],
  starterCode: {
    javascript: `class KthLargest {
  constructor(k, nums) {
    // Initialize here
  }
  add(val) {
    // Return kth largest here
  }
}`,
    python: `class KthLargest:
    def __init__(self, k: int, nums: List[int]):
        pass

    def add(self, val: int) -> int:
        pass`,
    java: `class KthLargest {
    public KthLargest(int k, int[] nums) {
        // Initialize here
    }
    
    public int add(int val) {
        // Return kth largest here
        return 0;
    }
}`,
  },
  expectedOutput: {
    javascript: "[null,4,5,5,8,8]",
    python: "[None, 4, 5, 5, 8, 8]",
    java: "[null, 4, 5, 5, 8, 8]",
  },
},
"longest-substring-without-repeating-characters": {
    id: "longest-substring-without-repeating-characters",
    title: "Longest Substring Without Repeating Characters",
    difficulty: "Medium",
    category: "String • Sliding Window",
    description: {
      text: "Given a string s, find the length of the longest substring without repeating characters[cite: 1, 16].",
      notes: ["A substring is a contiguous sequence of characters within a string[cite: 1]."],
    },
    examples: [
      {
        input: 's = "abcabcbb"',
        output: "3",
        explanation: 'The answer is "abc", with the length of 3[cite: 1].',
      },
    ],
    constraints: ["0 ≤ s.length ≤ 5 * 10⁴", "s consists of English letters, digits, symbols and spaces[cite: 1]."],
    starterCode: {
      javascript: `function lengthOfLongestSubstring(s) {\n  // Write your solution here\n}`,
      python: `def lengthOfLongestSubstring(s):\n    # Write your solution here\n    pass`,
      java: `class Solution {\n    public int lengthOfLongestSubstring(String s) {\n        // Write your solution here\n        return 0;\n    }\n}`,
    },
    expectedOutput: {
      javascript: "3",
      python: "3",
      java: "3",
    },
  },

  // --- PATTERN: FAST & SLOW POINTERS ---
  "linked-list-cycle": {
    id: "linked-list-cycle",
    title: "Linked List Cycle",
    difficulty: "Easy",
    category: "Linked List • Two Pointers",
    description: {
      text: "Given head, the head of a linked list, determine if the linked list has a cycle in it[cite: 1, 6].",
      notes: [
        "A cycle exists if a node can be reached again by following the next pointer[cite: 1].",
        "Return true if there is a cycle, otherwise return false[cite: 1].",
      ],
    },
    examples: [
      {
        input: "head = [3,2,0,-4], pos = 1",
        output: "true",
        explanation: "There is a cycle where the tail connects to the 1st node[cite: 1].",
      },
    ],
    constraints: ["The number of nodes is in range [0, 10⁴] [cite: 1]", "-10⁵ ≤ Node.val ≤ 10⁵ [cite: 1]"],
    starterCode: {
      javascript: `function hasCycle(head) {\n  // Write your solution here\n}`,
      python: `def hasCycle(head):\n    # Write your solution here\n    pass`,
      java: `public class Solution {\n    public boolean hasCycle(ListNode head) {\n        // Write your solution here\n        return false;\n    }\n}`,
    },
    expectedOutput: {
      javascript: "true",
      python: "True",
      java: "true",
    },
  },

  // --- PATTERN: CYCLIC SORT ---
  "find-the-duplicate-number": {
    id: "find-the-duplicate-number",
    title: "Find the Duplicate Number",
    difficulty: "Medium",
    category: "Array • Two Pointers • Cyclic Sort",
    description: {
      text: "Given an array of integers nums containing n + 1 integers where each integer is in the range [1, n] inclusive[cite: 1, 16].",
      notes: [
        "There is only one repeated number in nums, return this repeated number[cite: 1].",
        "You must solve the problem without modifying the array and use only constant extra space[cite: 1].",
      ],
    },
    examples: [
      {
        input: "nums = [1,3,4,2,2]",
        output: "2",
      },
    ],
    constraints: ["1 ≤ n ≤ 10⁵ [cite: 1]", "nums.length == n + 1 [cite: 1]"],
    starterCode: {
      javascript: `function findDuplicate(nums) {\n  // Write your solution here\n}`,
      python: `def findDuplicate(nums):\n    # Write your solution here\n    pass`,
      java: `class Solution {\n    public int findDuplicate(int[] nums) {\n        // Write your solution here\n        return 0;\n    }\n}`,
    },
    expectedOutput: {
      javascript: "2",
      python: "2",
      java: "2",
    },
  },

  // --- PATTERN: MERGE INTERVALS ---
  "merge-intervals": {
    id: "merge-intervals",
    title: "Merge Intervals",
    difficulty: "Medium",
    category: "Array • Sorting",
    description: {
      text: "Given an array of intervals where intervals[i] = [start_i, end_i], merge all overlapping intervals[cite: 1, 16].",
      notes: ["Return an array of the non-overlapping intervals that cover all the intervals in the input[cite: 1]."],
    },
    examples: [
      {
        input: "intervals = [[1,3],[2,6],[8,10],[15,18]]",
        output: "[[1,6],[8,10],[15,18]]",
        explanation: "Intervals [1,3] and [2,6] overlap, so they are merged into [1,6][cite: 1].",
      },
    ],
    constraints: ["1 ≤ intervals.length ≤ 10⁴ [cite: 1]", "intervals[i].length == 2 [cite: 1]"],
    starterCode: {
      javascript: `function merge(intervals) {\n  // Write your solution here\n}`,
      python: `def merge(intervals):\n    # Write your solution here\n    pass`,
      java: `class Solution {\n    public int[][] merge(int[][] intervals) {\n        // Write your solution here\n        return new int[0][0];\n    }\n}`,
    },
    expectedOutput: {
      javascript: "[[1,6],[8,10],[15,18]]",
      python: "[[1, 6], [8, 10], [15, 18]]",
      java: "[[1, 6], [8, 10], [15, 18]]",
    },
  },

  // --- PATTERN: TOP 'K' ELEMENTS ---
  "k-closest-points-to-origin": {
    id: "k-closest-points-to-origin",
    title: "K Closest Points to Origin",
    difficulty: "Medium",
    category: "Heap • Geometry",
    description: {
      text: "Given an array of points where points[i] = [x_i, y_i] and an integer k, return the k closest points to the origin (0, 0)[cite: 1, 125].",
      notes: [
        "The distance between two points on the XY plane is the Euclidean distance[cite: 1].",
        "You may return the answer in any order[cite: 1].",
      ],
    },
    examples: [
      {
        input: "points = [[1,3],[-2,2]], k = 1",
        output: "[[-2,2]]",
        explanation: "The distance from (1, 3) to the origin is sqrt(10). The distance from (-2, 2) to the origin is sqrt(8). Since sqrt(8) < sqrt(10), [-2, 2] is closer[cite: 1].",
      },
    ],
    constraints: ["1 ≤ k ≤ points.length ≤ 10⁴ [cite: 1]", "-10⁴ ≤ x_i, y_i ≤ 10⁴ [cite: 1]"],
    starterCode: {
      javascript: `function kClosest(points, k) {\n  // Write your solution here\n}`,
      python: `def kClosest(points, k):\n    # Write your solution here\n    pass`,
      java: `class Solution {\n    public int[][] kClosest(int[][] points, int k) {\n        // Write your solution here\n        return new int[0][0];\n    }\n}`,
    },
    expectedOutput: {
      javascript: "[[-2,2]]",
      python: "[[-2, 2]]",
      java: "[[-2, 2]]",
    },
  },
  // --- PATTERN: PREFIX SUM ---
  "subarray-sum-equals-k": {
    id: "subarray-sum-equals-k",
    title: "Subarray Sum Equals K",
    difficulty: "Medium",
    category: "Array • Hash Table • Prefix Sum",
    description: {
      text: "Given an array of integers nums and an integer k, return the total number of subarrays whose sum equals to k. [cite: 1]",
      notes: ["A subarray is a contiguous non-empty sequence of elements within an array. [cite: 1]"],
    },
    examples: [
      {
        input: "nums = [1,1,1], k = 2",
        output: "2",
      },
    ],
    constraints: ["1 ≤ nums.length ≤ 2 * 10⁴", "-1000 ≤ nums[i] ≤ 1000", "-10⁷ ≤ k ≤ 10⁷"],
    starterCode: {
      javascript: `function subarraySum(nums, k) {\n  // Write your solution here\n}`,
      python: `def subarraySum(nums, k):\n    # Write your solution here\n    pass`,
      java: `class Solution {\n    public int subarraySum(int[] nums, int k) {\n        // Write your solution here\n        return 0;\n    }\n}`,
    },
    expectedOutput: {
      javascript: "2",
      python: "2",
      java: "2",
    },
  },

  // --- PATTERN: TREE BREADTH FIRST SEARCH ---
  "binary-tree-level-order-traversal": {
    id: "binary-tree-level-order-traversal",
    title: "Binary Tree Level Order Traversal",
    difficulty: "Medium",
    category: "Tree • Breadth-First Search",
    description: {
      text: "Given the root of a binary tree, return the level order traversal of its nodes' values (i.e., from left to right, level by level). [cite: 83]",
      notes: [],
    },
    examples: [
      {
        input: "root = [3,9,20,null,null,15,7]",
        output: "[[3],[9,20],[15,7]]",
      },
    ],
    constraints: ["The number of nodes in the tree is in the range [0, 2000]", "-1000 ≤ Node.val ≤ 1000"],
    starterCode: {
      javascript: `function levelOrder(root) {\n  // Write your solution here\n}`,
      python: `def levelOrder(root):\n    # Write your solution here\n    pass`,
      java: `class Solution {\n    public List<List<Integer>> levelOrder(TreeNode root) {\n        // Write your solution here\n        return new ArrayList<>();\n    }\n}`,
    },
    expectedOutput: {
      javascript: "[[3],[9,20],[15,7]]",
      python: "[[3], [9, 20], [15, 7]]",
      java: "[[3], [9, 20], [15, 7]]",
    },
  },

  // --- PATTERN: TREE DEPTH FIRST SEARCH ---
  "path-sum": {
    id: "path-sum",
    title: "Path Sum",
    difficulty: "Easy",
    category: "Tree • Depth-First Search",
    description: {
      text: "Given the root of a binary tree and an integer targetSum, return true if the tree has a root-to-leaf path such that adding up all the values along the path equals targetSum. [cite: 90]",
      notes: ["A leaf is a node with no children. [cite: 90]"],
    },
    examples: [
      {
        input: "root = [5,4,8,11,null,13,4,7,2,null,null,null,1], targetSum = 22",
        output: "true",
      },
    ],
    constraints: ["The number of nodes in the tree is in the range [0, 5000]", "-1000 ≤ Node.val ≤ 1000", "-1000 ≤ targetSum ≤ 1000"],
    starterCode: {
      javascript: `function hasPathSum(root, targetSum) {\n  // Write your solution here\n}`,
      python: `def hasPathSum(root, targetSum):\n    # Write your solution here\n    pass`,
      java: `class Solution {\n    public boolean hasPathSum(TreeNode root, int targetSum) {\n        // Write your solution here\n        return false;\n    }\n}`,
    },
    expectedOutput: {
      javascript: "true",
      python: "True",
      java: "true",
    },
  },

  // --- PATTERN: BITWISE XOR ---
  "single-number": {
    id: "single-number",
    title: "Single Number",
    difficulty: "Easy",
    category: "Array • Bit Manipulation",
    description: {
      text: "Given a non-empty array of integers nums, every element appears twice except for one. Find that single one. [cite: 121]",
      notes: ["You must implement a solution with a linear runtime complexity and use only constant extra space. [cite: 121]"],
    },
    examples: [
      {
        input: "nums = [4,1,2,1,2]",
        output: "4",
      },
    ],
    constraints: ["1 ≤ nums.length ≤ 3 * 10⁴", "-3 * 10⁴ ≤ nums[i] ≤ 3 * 10⁴"],
    starterCode: {
      javascript: `function singleNumber(nums) {\n  // Write your solution here\n}`,
      python: `def singleNumber(nums):\n    # Write your solution here\n    pass`,
      java: `class Solution {\n    public int singleNumber(int[] nums) {\n        // Write your solution here\n        return 0;\n    }\n}`,
    },
    expectedOutput: {
      javascript: "4",
      python: "4",
      java: "4",
    },
  },

  // --- PATTERN: TOP 'K' ELEMENTS ---
  "top-k-frequent-elements": {
    id: "top-k-frequent-elements",
    title: "Top K Frequent Elements",
    difficulty: "Medium",
    category: "Array • Hash Table • Heap • Bucket Sort",
    description: {
      text: "Given an integer array nums and an integer k, return the k most frequent elements. [cite: 130]",
      notes: ["You may return the answer in any order. [cite: 130]"],
    },
    examples: [
      {
        input: "nums = [1,1,1,2,2,3], k = 2",
        output: "[1,2]",
      },
    ],
    constraints: ["1 ≤ nums.length ≤ 10⁵", "k is in the range [1, the number of unique elements in the array]", "-10⁴ ≤ nums[i] ≤ 10⁴"],
    starterCode: {
      javascript: `function topKFrequent(nums, k) {\n  // Write your solution here\n}`,
      python: `def topKFrequent(nums, k):\n    # Write your solution here\n    pass`,
      java: `class Solution {\n    public int[] topKFrequent(int[] nums, int k) {\n        // Write your solution here\n        return new int[0];\n    }\n}`,
    },
    expectedOutput: {
      javascript: "[1,2]",
      python: "[1, 2]",
      java: "[1, 2]",
    },
  },
  // --- PATTERN: IN-PLACE REVERSAL OF A LINKED LIST ---
  "reverse-linked-list-ii": {
    id: "reverse-linked-list-ii",
    title: "Reverse Linked List II",
    difficulty: "Medium",
    category: "Linked List",
    description: {
      text: "Given the head of a singly linked list and two integers left and right where left <= right, reverse the nodes of the list from position left to position right, and return the reversed list.",
      notes: ["The positions are 1-indexed."],
    },
    examples: [
      {
        input: "head = [1,2,3,4,5], left = 2, right = 4",
        output: "[1,4,3,2,5]",
      },
    ],
    constraints: ["The number of nodes in the list is n", "1 ≤ n ≤ 500", "-500 ≤ Node.val ≤ 500", "1 ≤ left ≤ right ≤ n"],
    starterCode: {
      javascript: `function reverseBetween(head, left, right) {\n  // Write your solution here\n}`,
      python: `def reverseBetween(head, left, right):\n    # Write your solution here\n    pass`,
      java: `class Solution {\n    public ListNode reverseBetween(ListNode head, int left, int right) {\n        // Write your solution here\n        return null;\n    }\n}`,
    },
    expectedOutput: {
      javascript: "[1,4,3,2,5]",
      python: "[1, 4, 3, 2, 5]",
      java: "[1, 4, 3, 2, 5]",
    },
  },

  // --- PATTERN: MODIFIED BINARY SEARCH ---
  "search-in-rotated-sorted-array": {
    id: "search-in-rotated-sorted-array",
    title: "Search in Rotated Sorted Array",
    difficulty: "Medium",
    category: "Array • Binary Search",
    description: {
      text: "There is an integer array nums sorted in ascending order (with distinct values). Prior to being passed to your function, nums is possibly rotated at an unknown pivot index.",
      notes: ["Given the array nums after the possible rotation and an integer target, return the index of target if it is in nums, or -1 if it is not in nums.", "You must write an algorithm with O(log n) runtime complexity."],
    },
    examples: [
      {
        input: "nums = [4,5,6,7,0,1,2], target = 0",
        output: "4",
      },
    ],
    constraints: ["1 ≤ nums.length ≤ 5000", "-10⁴ ≤ nums[i] ≤ 10⁴", "All values of nums are unique."],
    starterCode: {
      javascript: `function search(nums, target) {\n  // Write your solution here\n}`,
      python: `def search(nums, target):\n    # Write your solution here\n    pass`,
      java: `class Solution {\n    public int search(int[] nums, int target) {\n        // Write your solution here\n        return -1;\n    }\n}`,
    },
    expectedOutput: {
      javascript: "4",
      python: "4",
      java: "4",
    },
  },

  // --- PATTERN: GREEDY ---
  "valid-parenthesis-string": {
    id: "valid-parenthesis-string",
    title: "Valid Parenthesis String",
    difficulty: "Medium",
    category: "String • Greedy • Stack",
    description: {
      text: "Given a string s containing only three types of characters: '(', ')' and '*', return true if s is valid.",
      notes: [
        "Any left parenthesis '(' must have a corresponding right parenthesis ')'.",
        "Any right parenthesis ')' must have a corresponding left parenthesis '('.",
        "'*' could be treated as a single right parenthesis ')' or a single left parenthesis '(' or an empty string \"\"."
      ],
    },
    examples: [
      {
        input: 's = "(*)"',
        output: "true",
      },
    ],
    constraints: ["1 ≤ s.length ≤ 100", "s[i] is '(', ')' or '*'"],
    starterCode: {
      javascript: `function checkValidString(s) {\n  // Write your solution here\n}`,
      python: `def checkValidString(s):\n    # Write your solution here\n    pass`,
      java: `class Solution {\n    public boolean checkValidString(String s) {\n        // Write your solution here\n        return false;\n    }\n}`,
    },
    expectedOutput: {
      javascript: "true",
      python: "True",
      java: "true",
    },
  },

  // --- PATTERN: BACKTRACKING ---
  "combination-sum": {
    id: "combination-sum",
    title: "Combination Sum",
    difficulty: "Medium",
    category: "Array • Backtracking",
    description: {
      text: "Given an array of distinct integers candidates and a target integer target, return a list of all unique combinations of candidates where the chosen numbers sum to target.",
      notes: ["The same number may be chosen from candidates an unlimited number of times.", "Two combinations are unique if the frequency of at least one of the chosen numbers is different."],
    },
    examples: [
      {
        input: "candidates = [2,3,6,7], target = 7",
        output: "[[2,2,3],[7]]",
      },
    ],
    constraints: ["1 ≤ candidates.length ≤ 30", "2 ≤ candidates[i] ≤ 40", "1 ≤ target ≤ 40"],
    starterCode: {
      javascript: `function combinationSum(candidates, target) {\n  // Write your solution here\n}`,
      python: `def combinationSum(candidates, target):\n    # Write your solution here\n    pass`,
      java: `class Solution {\n    public List<List<Integer>> combinationSum(int[] candidates, int target) {\n        // Write your solution here\n        return new ArrayList<>();\n    }\n}`,
    },
    expectedOutput: {
      javascript: "[[2,2,3],[7]]",
      python: "[[2, 2, 3], [7]]",
      java: "[[2, 2, 3], [7]]",
    },
  },

  // --- PATTERN: UNION FIND ---
  "redundant-connection": {
    id: "redundant-connection",
    title: "Redundant Connection",
    difficulty: "Medium",
    category: "Graph • Union Find",
    description: {
      text: "In this problem, a tree is an undirected graph that is connected and has no cycles.",
      notes: [
        "You are given a graph that started as a tree with n nodes labeled from 1 to n, with one additional edge added.",
        "Return an edge that can be removed so that the resulting graph is a tree of n nodes."
      ],
    },
    examples: [
      {
        input: "edges = [[1,2],[1,3],[2,3]]",
        output: "[2,3]",
      },
    ],
    constraints: ["n == edges.length", "3 ≤ n ≤ 1000", "edges[i].length == 2"],
    starterCode: {
      javascript: `function findRedundantConnection(edges) {\n  // Write your solution here\n}`,
      python: `def findRedundantConnection(edges):\n    # Write your solution here\n    pass`,
      java: `class Solution {\n    public int[] findRedundantConnection(int[][] edges) {\n        // Write your solution here\n        return new int[0];\n    }\n}`,
    },
    expectedOutput: {
      javascript: "[2,3]",
      python: "[2, 3]",
      java: "[2, 3]",
    },
  },
  // --- PATTERN: TWO HEAPS ---
  "find-median-from-data-stream": {
    id: "find-median-from-data-stream",
    title: "Find Median from Data Stream",
    difficulty: "Hard",
    category: "Heap • Design • Two Heaps",
    description: {
      text: "The median is the middle value in an ordered integer list. If the size of the list is even, there is no middle value, and the median is the mean of the two middle values.",
      notes: [
        "Implement the MedianFinder class:",
        "MedianFinder() initializes the MedianFinder object.",
        "void addNum(int num) adds the integer num from the data stream to the data structure.",
        "double findMedian() returns the median of all elements so far."
      ],
    },
    examples: [
      {
        input: '["MedianFinder", "addNum", "addNum", "findMedian", "addNum", "findMedian"], [[], [1], [2], [], [3], []]',
        output: "[null, null, null, 1.5, null, 2.0]",
      },
    ],
    constraints: ["-10⁵ ≤ num ≤ 10⁵", "At most 5 * 10⁴ calls will be made to addNum and findMedian."],
    starterCode: {
      javascript: `class MedianFinder {\n  constructor() {\n    // Initialize your data structures here\n  }\n  addNum(num) {\n    // Write your logic here\n  }\n  findMedian() {\n    // Return the median\n  }\n}`,
      python: `class MedianFinder:\n    def __init__(self):\n        pass\n\n    def addNum(self, num: int) -> None:\n        pass\n\n    def findMedian(self) -> float:\n        pass`,
      java: `class MedianFinder {\n    public MedianFinder() {\n        // Initialize here\n    }\n    public void addNum(int num) {\n    }\n    public double findMedian() {\n        return 0.0;\n    }\n}`,
    },
    expectedOutput: {
      javascript: "1.5\n2.0",
      python: "1.5\n2.0",
      java: "1.5\n2.0",
    },
  },

  // --- PATTERN: ISLAND (MATRIX TRAVERSAL) ---
  "flood-fill": {
    id: "flood-fill",
    title: "Flood Fill",
    difficulty: "Easy",
    category: "Array • Matrix • Depth-First Search",
    description: {
      text: "An image is represented by an m x n integer grid image where image[i][j] represents the pixel value of the image. You are also given three integers sr, sc, and color. You should perform a flood fill on the image starting from the pixel image[sr][sc].",
      notes: [
        "To perform a flood fill, consider the starting pixel, plus any pixels connected 4-directionally to the starting pixel of the same color as the starting pixel, plus any pixels connected 4-directionally to those pixels (also with the same color), and so on.",
        "Replace the color of all of the aforementioned pixels with color."
      ],
    },
    examples: [
      {
        input: "image = [[1,1,1],[1,1,0],[1,0,1]], sr = 1, sc = 1, color = 2",
        output: "[[2,2,2],[2,2,0],[2,0,1]]",
      },
    ],
    constraints: ["m == image.length", "n == image[i].length", "1 ≤ m, n ≤ 50", "0 ≤ image[i][j], color < 2¹⁶"],
    starterCode: {
      javascript: `function floodFill(image, sr, sc, color) {\n  // Write your solution here\n}`,
      python: `def floodFill(image, sr, sc, color):\n    # Write your solution here\n    pass`,
      java: `class Solution {\n    public int[][] floodFill(int[][] image, int sr, int sc, int color) {\n        // Write your solution here\n        return image;\n    }\n}`,
    },
    expectedOutput: {
      javascript: "[[2,2,2],[2,2,0],[2,0,1]]",
      python: "[[2, 2, 2], [2, 2, 0], [2, 0, 1]]",
      java: "[[2, 2, 2], [2, 2, 0], [2, 0, 1]]",
    },
  },

  // --- PATTERN: BACKTRACKING ---
  "word-search": {
    id: "word-search",
    title: "Word Search",
    difficulty: "Medium",
    category: "Array • Backtracking • Matrix",
    description: {
      text: "Given an m x n grid of characters board and a string word, return true if word exists in the grid.",
      notes: [
        "The word can be constructed from letters of sequentially adjacent cells, where adjacent cells are horizontally or vertically neighboring.",
        "The same letter cell may not be used more than once."
      ],
    },
    examples: [
      {
        input: 'board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCCED"',
        output: "true",
      },
    ],
    constraints: ["m == board.length", "n = board[i].length", "1 ≤ m, n ≤ 6", "1 ≤ word.length ≤ 15"],
    starterCode: {
      javascript: `function exist(board, word) {\n  // Write your solution here\n}`,
      python: `def exist(board, word):\n    # Write your solution here\n    pass`,
      java: `class Solution {\n    public boolean exist(char[][] board, String word) {\n        // Write your solution here\n        return false;\n    }\n}`,
    },
    expectedOutput: {
      javascript: "true",
      python: "True",
      java: "true",
    },
  },

  // --- PATTERN: 0/1 KNAPSACK (DP) ---
  "partition-equal-subset-sum": {
    id: "partition-equal-subset-sum",
    title: "Partition Equal Subset Sum",
    difficulty: "Medium",
    category: "Array • Dynamic Programming",
    description: {
      text: "Given an integer array nums, return true if you can partition the array into two subsets such that the sum of the elements in both subsets is equal.",
      notes: [],
    },
    examples: [
      {
        input: "nums = [1,5,11,5]",
        output: "true",
        explanation: "The array can be partitioned as [1, 5, 5] and [11].",
      },
    ],
    constraints: ["1 ≤ nums.length ≤ 200", "1 ≤ nums[i] ≤ 100"],
    starterCode: {
      javascript: `function canPartition(nums) {\n  // Write your solution here\n}`,
      python: `def canPartition(nums):\n    # Write your solution here\n    pass`,
      java: `class Solution {\n    public boolean canPartition(int[] nums) {\n        // Write your solution here\n        return false;\n    }\n}`,
    },
    expectedOutput: {
      javascript: "true",
      python: "True",
      java: "true",
    },
  },

  // --- PATTERN: TRIE ---
  "implement-trie-prefix-tree": {
    id: "implement-trie-prefix-tree",
    title: "Implement Trie (Prefix Tree)",
    difficulty: "Medium",
    category: "Hash Table • String • Design • Trie",
    description: {
      text: "A trie (pronounced as 'try') or prefix tree is a tree data structure used to efficiently store and retrieve keys in a dataset of strings.",
      notes: [
        "Implement the Trie class:",
        "Trie() initializes the trie object.",
        "void insert(String word) inserts the string word into the trie.",
        "boolean search(String word) returns true if the string word is in the trie, and false otherwise.",
        "boolean startsWith(String prefix) returns true if there is a previously inserted string word that has the prefix prefix, and false otherwise."
      ],
    },
    examples: [
      {
        input: '["Trie", "insert", "search", "search", "startsWith", "insert", "search"], [[], ["apple"], ["apple"], ["app"], ["app"], ["app"], ["app"]]',
        output: "[null, null, true, false, true, null, true]",
      },
    ],
    constraints: ["1 ≤ word.length, prefix.length ≤ 2000", "At most 3 * 10⁴ calls in total will be made to insert, search, and startsWith."],
    starterCode: {
      javascript: `class Trie {\n  constructor() {\n    // Initialize here\n  }\n  insert(word) {\n  }\n  search(word) {\n  }\n  startsWith(prefix) {\n  }\n}`,
      python: `class Trie:\n    def __init__(self):\n        pass\n\n    def insert(self, word: str) -> None:\n        pass\n\n    def search(self, word: str) -> bool:\n        pass\n\n    def startsWith(self, prefix: str) -> bool:\n        pass`,
      java: `class Trie {\n    public Trie() {\n        // Initialize here\n    }\n    public void insert(String word) {\n    }\n    public boolean search(String word) {\n        return false;\n    }\n    public boolean startsWith(String prefix) {\n        return false;\n    }\n}`,
    },
    expectedOutput: {
      javascript: "true\nfalse\ntrue\ntrue",
      python: "True\nFalse\nTrue\nTrue",
      java: "true\nfalse\ntrue\ntrue",
    },
  },
  // --- PATTERN: GRAPH TRAVERSAL (BFS/DFS) ---
  "clone-graph": {
    id: "clone-graph",
    title: "Clone Graph",
    difficulty: "Medium",
    category: "Graph • Hash Table • DFS • BFS",
    description: {
      text: "Given a reference of a node in a connected undirected graph. Return a deep copy (clone) of the graph.",
      notes: [
        "Each node in the graph contains a value (int) and a list (List[Node]) of its neighbors.",
        "The graph is represented using an adjacency list.",
      ],
    },
    examples: [
      {
        input: "adjList = [[2,4],[1,3],[2,4],[1,3]]",
        output: "[[2,4],[1,3],[2,4],[1,3]]",
        explanation: "Node 1's neighbors are 2 and 4. Node 2's neighbors are 1 and 3, etc.",
      },
    ],
    constraints: ["The number of nodes in the graph is in the range [0, 100]", "1 ≤ Node.val ≤ 100", "Node.val is unique for each node."],
    starterCode: {
      javascript: `function cloneGraph(node) {\n  // Write your solution here\n}`,
      python: `def cloneGraph(node):\n    # Write your solution here\n    pass`,
      java: `class Solution {\n    public Node cloneGraph(Node node) {\n        // Write your solution here\n        return null;\n    }\n}`,
    },
    expectedOutput: {
      javascript: "[[2,4],[1,3],[2,4],[1,3]]",
      python: "[[2, 4], [1, 3], [2, 4], [1, 3]]",
      java: "[[2, 4], [1, 3], [2, 4], [1, 3]]",
    },
  },

  // --- PATTERN: TOPOLOGICAL SORT ---
  "course-schedule": {
    id: "course-schedule",
    title: "Course Schedule",
    difficulty: "Medium",
    category: "Graph • BFS • DFS • Topological Sort",
    description: {
      text: "There are a total of numCourses courses you have to take, labeled from 0 to numCourses - 1. You are given an array prerequisites where prerequisites[i] = [a, b] indicates that you must take course b first if you want to take course a.",
      notes: ["Return true if you can finish all courses. Otherwise, return false."],
    },
    examples: [
      {
        input: "numCourses = 2, prerequisites = [[1,0]]",
        output: "true",
        explanation: "To take course 1 you should have finished course 0. So it is possible.",
      },
      {
        input: "numCourses = 2, prerequisites = [[1,0],[0,1]]",
        output: "false",
        explanation: "To take course 1 you should have finished course 0, and to take course 0 you should also have finished course 1. This is impossible.",
      },
    ],
    constraints: ["1 ≤ numCourses ≤ 2000", "0 ≤ prerequisites.length ≤ 5000", "prerequisites[i].length == 2"],
    starterCode: {
      javascript: `function canFinish(numCourses, prerequisites) {\n  // Write your solution here\n}`,
      python: `def canFinish(numCourses, prerequisites):\n    # Write your solution here\n    pass`,
      java: `class Solution {\n    public boolean canFinish(int numCourses, int[][] prerequisites) {\n        // Write your solution here\n        return false;\n    }\n}`,
    },
    expectedOutput: {
      javascript: "true\nfalse",
      python: "True\nFalse",
      java: "true\nfalse",
    },
  },

  // --- PATTERN: SLIDING WINDOW (ADVANCED) ---
  "minimum-window-substring": {
    id: "minimum-window-substring",
    title: "Minimum Window Substring",
    difficulty: "Hard",
    category: "Hash Table • String • Sliding Window",
    description: {
      text: "Given two strings s and t of lengths m and n respectively, return the minimum window substring of s such that every character in t (including duplicates) is included in the window.",
      notes: ["If there is no such substring, return the empty string \"\".", "The testcases will be generated such that the answer is unique."],
    },
    examples: [
      {
        input: 's = "ADOBECODEBANC", t = "ABC"',
        output: '"BANC"',
        explanation: 'The minimum window substring "BANC" includes \'A\', \'B\', and \'C\' from string t.',
      },
    ],
    constraints: ["m == s.length", "n == t.length", "1 ≤ m, n ≤ 10⁵", "s and t consist of uppercase and lowercase English letters."],
    starterCode: {
      javascript: `function minWindow(s, t) {\n  // Write your solution here\n}`,
      python: `def minWindow(s, t):\n    # Write your solution here\n    pass`,
      java: `class Solution {\n    public String minWindow(String s, String t) {\n        // Write your solution here\n        return "";\n    }\n}`,
    },
    expectedOutput: {
      javascript: '"BANC"',
      python: '"BANC"',
      java: '"BANC"',
    },
  },

  // --- PATTERN: BINARY SEARCH ON ANSWER ---
  "koko-eating-bananas": {
    id: "koko-eating-bananas",
    title: "Koko Eating Bananas",
    difficulty: "Medium",
    category: "Array • Binary Search",
    description: {
      text: "Koko loves to eat bananas. There are n piles of bananas, the ith pile has piles[i] bananas. The guards have gone and will come back in h hours.",
      notes: [
        "Koko can decide her bananas-per-hour eating speed of k.",
        "Each hour, she chooses some pile of bananas and eats k bananas from that pile.",
        "If the pile has less than k bananas, she eats all of them instead and will not eat any more bananas during this hour.",
        "Return the minimum integer k such that she can eat all the bananas within h hours."
      ],
    },
    examples: [
      {
        input: "piles = [3,6,7,11], h = 8",
        output: "4",
      },
    ],
    constraints: ["1 ≤ piles.length ≤ 10⁴", "piles.length ≤ h ≤ 10⁹", "1 ≤ piles[i] ≤ 10⁹"],
    starterCode: {
      javascript: `function minEatingSpeed(piles, h) {\n  // Write your solution here\n}`,
      python: `def minEatingSpeed(piles, h):\n    # Write your solution here\n    pass`,
      java: `class Solution {\n    public int minEatingSpeed(int[] piles, int h) {\n        // Write your solution here\n        return 0;\n    }\n}`,
    },
    expectedOutput: {
      javascript: "4",
      python: "4",
      java: "4",
    },
  },

  // --- PATTERN: SUBSETS / BACKTRACKING ---
  "permutations": {
    id: "permutations",
    title: "Permutations",
    difficulty: "Medium",
    category: "Array • Backtracking",
    description: {
      text: "Given an array nums of distinct integers, return all the possible permutations. You can return the answer in any order.",
      notes: [],
    },
    examples: [
      {
        input: "nums = [1,2,3]",
        output: "[[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]",
      },
    ],
    constraints: ["1 ≤ nums.length ≤ 6", "-10 ≤ nums[i] ≤ 10", "All the integers of nums are unique."],
    starterCode: {
      javascript: `function permute(nums) {\n  // Write your solution here\n}`,
      python: `def permute(nums):\n    # Write your solution here\n    pass`,
      java: `class Solution {\n    public List<List<Integer>> permute(int[] nums) {\n        // Write your solution here\n        return new ArrayList<>();\n    }\n}`,
    },
    expectedOutput: {
      javascript: "[[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]",
      python: "[[1, 2, 3], [1, 3, 2], [2, 1, 3], [2, 3, 1], [3, 1, 2], [3, 2, 1]]",
      java: "[[1, 2, 3], [1, 3, 2], [2, 1, 3], [2, 3, 1], [3, 1, 2], [3, 2, 1]]",
    },
  },
  // --- PATTERN: DYNAMIC PROGRAMMING (0/1 KNAPSACK / COIN CHANGE) ---
  "coin-change": {
    id: "coin-change",
    title: "Coin Change",
    difficulty: "Medium",
    category: "Array • Dynamic Programming",
    description: {
      text: "You are given an integer array coins representing coins of different denominations and an integer amount representing a total amount of money.",
      notes: [
        "Return the fewest number of coins that you need to make up that amount.",
        "If that amount of money cannot be made up by any combination of the coins, return -1."
      ],
    },
    examples: [
      {
        input: "coins = [1,2,5], amount = 11",
        output: "3",
        explanation: "11 = 5 + 5 + 1",
      },
    ],
    constraints: ["1 ≤ coins.length ≤ 12", "1 ≤ coins[i] ≤ 2³¹ - 1", "0 ≤ amount ≤ 10⁴"],
    starterCode: {
      javascript: `function coinChange(coins, amount) {\n  // Write your solution here\n}`,
      python: `def coinChange(coins, amount):\n    # Write your solution here\n    pass`,
      java: `class Solution {\n    public int coinChange(int[] coins, int amount) {\n        // Write your solution here\n        return 0;\n    }\n}`,
    },
    expectedOutput: {
      javascript: "3",
      python: "3",
      java: "3",
    },
  },

  // --- PATTERN: MERGE INTERVALS (ADVANCED) ---
  "insert-interval": {
    id: "insert-interval",
    title: "Insert Interval",
    difficulty: "Medium",
    category: "Array",
    description: {
      text: "You are given an array of non-overlapping intervals intervals where intervals[i] = [starti, endi] represent the start and the end of the ith interval and intervals is sorted in ascending order by starti.",
      notes: [
        "You are also given an interval newInterval = [start, end] that represents the start and end of another interval.",
        "Insert newInterval into intervals such that intervals is still sorted in ascending order by starti and intervals still does not have any overlapping intervals (merge overlapping intervals if necessary)."
      ],
    },
    examples: [
      {
        input: "intervals = [[1,3],[6,9]], newInterval = [2,5]",
        output: "[[1,5],[6,9]]",
      },
    ],
    constraints: ["0 ≤ intervals.length ≤ 10⁴", "intervals[i].length == 2", "newInterval.length == 2"],
    starterCode: {
      javascript: `function insert(intervals, newInterval) {\n  // Write your solution here\n}`,
      python: `def insert(intervals, newInterval):\n    # Write your solution here\n    pass`,
      java: `class Solution {\n    public int[][] insert(int[][] intervals, int[] newInterval) {\n        // Write your solution here\n        return new int[0][0];\n    }\n}`,
    },
    expectedOutput: {
      javascript: "[[1,5],[6,9]]",
      python: "[[1, 5], [6, 9]]",
      java: "[[1, 5], [6, 9]]",
    },
  },

  // --- PATTERN: TOP 'K' ELEMENTS (STRING BASED) ---
  "top-k-frequent-words": {
    id: "top-k-frequent-words",
    title: "Top K Frequent Words",
    difficulty: "Medium",
    category: "Hash Table • String • Trie • Sorting • Heap",
    description: {
      text: "Given an array of strings words and an integer k, return the k most frequent strings.",
      notes: [
        "Return the answer sorted by the frequency from highest to lowest.",
        "Sort the words with the same frequency by their lexicographical order."
      ],
    },
    examples: [
      {
        input: 'words = ["i","love","leetcode","i","love","coding"], k = 2',
        output: '["i","love"]',
        explanation: '"i" and "love" are the two most frequent words.',
      },
    ],
    constraints: ["1 ≤ words.length ≤ 500", "1 ≤ words[i].length ≤ 10", "k is in range [1, number of unique words]"],
    starterCode: {
      javascript: `function topKFrequent(words, k) {\n  // Write your solution here\n}`,
      python: `def topKFrequent(words, k):\n    # Write your solution here\n    pass`,
      java: `class Solution {\n    public List<String> topKFrequent(String[] words, int k) {\n        // Write your solution here\n        return new ArrayList<>();\n    }\n}`,
    },
    expectedOutput: {
      javascript: '["i","love"]',
      python: '["i", "love"]',
      java: '["i", "love"]',
    },
  },

  // --- PATTERN: TWO POINTERS / GREEDY ---
  "trapping-rain-water": {
    id: "trapping-rain-water",
    title: "Trapping Rain Water",
    difficulty: "Hard",
    category: "Array • Two Pointers • Dynamic Programming • Stack",
    description: {
      text: "Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.",
      notes: [],
    },
    examples: [
      {
        input: "height = [0,1,0,2,1,0,1,3,2,1,2,1]",
        output: "6",
      },
    ],
    constraints: ["n == height.length", "1 ≤ n ≤ 2 * 10⁴", "0 ≤ height[i] ≤ 10⁵"],
    starterCode: {
      javascript: `function trap(height) {\n  // Write your solution here\n}`,
      python: `def trap(height):\n    # Write your solution here\n    pass`,
      java: `class Solution {\n    public int trap(int[] height) {\n        // Write your solution here\n        return 0;\n    }\n}`,
    },
    expectedOutput: {
      javascript: "6",
      python: "6",
      java: "6",
    },
  },

  // --- PATTERN: TREE (DFS / RECURSION) ---
  "lowest-common-ancestor-of-a-binary-tree": {
    id: "lowest-common-ancestor-of-a-binary-tree",
    title: "Lowest Common Ancestor of a Binary Tree",
    difficulty: "Medium",
    category: "Tree • Depth-First Search • Binary Tree",
    description: {
      text: "Given a binary tree, find the lowest common ancestor (LCA) of two given nodes in the tree.",
      notes: [
        "The LCA is defined between two nodes p and q as the lowest node in T that has both p and q as descendants (where we allow a node to be a descendant of itself)."
      ],
    },
    examples: [
      {
        input: "root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 1",
        output: "3",
      },
    ],
    constraints: ["The number of nodes is in the range [2, 10⁵]", "-10⁹ ≤ Node.val ≤ 10⁹", "All Node.val are unique.", "p != q", "p and q will exist in the tree."],
    starterCode: {
      javascript: `function lowestCommonAncestor(root, p, q) {\n  // Write your solution here\n}`,
      python: `def lowestCommonAncestor(root, p, q):\n    # Write your solution here\n    pass`,
      java: `class Solution {\n    public TreeNode lowestCommonAncestor(TreeNode root, TreeNode p, TreeNode q) {\n        // Write your solution here\n        return null;\n    }\n}`,
    },
    expectedOutput: {
      javascript: "3",
      python: "3",
      java: "3",
    },
  },
  // --- PATTERN: SLIDING WINDOW (VARIABLE SIZE) ---
  "longest-repeating-character-replacement": {
    id: "longest-repeating-character-replacement",
    title: "Longest Repeating Character Replacement",
    difficulty: "Medium",
    category: "Hash Table • String • Sliding Window",
    description: {
      text: "You are given a string s and an integer k. You can choose any character of the string and change it to any other uppercase English character. You can perform this operation at most k times.",
      notes: ["Return the length of the longest substring containing the same letter you can get after performing the above operations."],
    },
    examples: [
      {
        input: 's = "ABAB", k = 2',
        output: "4",
        explanation: "Replace the two 'A's with two 'B's or vice versa.",
      },
    ],
    constraints: ["1 ≤ s.length ≤ 10⁵", "s consists of only uppercase English letters.", "0 ≤ k ≤ s.length"],
    starterCode: {
      javascript: `function characterReplacement(s, k) {\n  // Write your solution here\n}`,
      python: `def characterReplacement(s, k):\n    # Write your solution here\n    pass`,
      java: `class Solution {\n    public int characterReplacement(String s, int k) {\n        // Write your solution here\n        return 0;\n    }\n}`,
    },
    expectedOutput: {
      javascript: "4",
      python: "4",
      java: "4",
    },
  },

  // --- PATTERN: TREE DFS (RECURSION / PATHS) ---
  "binary-tree-maximum-path-sum": {
    id: "binary-tree-maximum-path-sum",
    title: "Binary Tree Maximum Path Sum",
    difficulty: "Hard",
    category: "Dynamic Programming • Tree • DFS",
    description: {
      text: "A path in a binary tree is a sequence of nodes where each pair of adjacent nodes in the sequence has an edge connecting them. A node can only appear in the sequence at most once.",
      notes: ["The path sum of a path is the sum of the node's values in the path.", "Given the root of a binary tree, return the maximum path sum of any non-empty path."],
    },
    examples: [
      {
        input: "root = [-10,9,20,null,null,15,7]",
        output: "42",
        explanation: "The optimal path is 15 -> 20 -> 7 with a path sum of 15 + 20 + 7 = 42.",
      },
    ],
    constraints: ["The number of nodes is in range [1, 3 * 10⁴]", "-1000 ≤ Node.val ≤ 1000"],
    starterCode: {
      javascript: `function maxPathSum(root) {\n  // Write your solution here\n}`,
      python: `def maxPathSum(root):\n    # Write your solution here\n    pass`,
      java: `class Solution {\n    public int maxPathSum(TreeNode root) {\n        // Write your solution here\n        return 0;\n    }\n}`,
    },
    expectedOutput: {
      javascript: "42",
      python: "42",
      java: "42",
    },
  },

  // --- PATTERN: BITWISE MANIPULATION ---
  "counting-bits": {
    id: "counting-bits",
    title: "Counting Bits",
    difficulty: "Easy",
    category: "Dynamic Programming • Bit Manipulation",
    description: {
      text: "Given an integer n, return an array ans of length n + 1 such that for each i (0 <= i <= n), ans[i] is the number of 1's in the binary representation of i.",
      notes: ["It is very easy to come up with a solution with a runtime of O(n log n). Can you do it in linear time O(n) and possibly in a single pass?"],
    },
    examples: [
      {
        input: "n = 5",
        output: "[0,1,1,2,1,2]",
        explanation: "0: 0, 1: 1, 2: 10, 3: 11, 4: 100, 5: 101",
      },
    ],
    constraints: ["0 ≤ n ≤ 10⁵"],
    starterCode: {
      javascript: `function countBits(n) {\n  // Write your solution here\n}`,
      python: `def countBits(n):\n    # Write your solution here\n    pass`,
      java: `class Solution {\n    public int[] countBits(int n) {\n        // Write your solution here\n        return new int[n+1];\n    }\n}`,
    },
    expectedOutput: {
      javascript: "[0,1,1,2,1,2]",
      python: "[0, 1, 1, 2, 1, 2]",
      java: "[0, 1, 1, 2, 1, 2]",
    },
  },

  // --- PATTERN: GRAPH / BFS (SHORTEST PATH) ---
  "rotting-oranges": {
    id: "rotting-oranges",
    title: "Rotting Oranges",
    difficulty: "Medium",
    category: "Array • Matrix • BFS",
    description: {
      text: "You are given an m x n grid where each cell can have one of three values: 0 (empty), 1 (fresh orange), or 2 (rotten orange). Every minute, any fresh orange that is 4-directionally adjacent to a rotten orange becomes rotten.",
      notes: ["Return the minimum number of minutes that must elapse until no cell has a fresh orange. If this is impossible, return -1."],
    },
    examples: [
      {
        input: "grid = [[2,1,1],[1,1,0],[0,1,1]]",
        output: "4",
      },
    ],
    constraints: ["m == grid.length", "n == grid[i].length", "1 ≤ m, n ≤ 10", "grid[i][j] is 0, 1, or 2."],
    starterCode: {
      javascript: `function orangesRotting(grid) {\n  // Write your solution here\n}`,
      python: `def orangesRotting(grid):\n    # Write your solution here\n    pass`,
      java: `class Solution {\n    public int orangesRotting(int[][] grid) {\n        // Write your solution here\n        return 0;\n    }\n}`,
    },
    expectedOutput: {
      javascript: "4",
      python: "4",
      java: "4",
    },
  },

  // --- PATTERN: K-WAY MERGE (HEAPS) ---
  "merge-k-sorted-lists": {
    id: "merge-k-sorted-lists",
    title: "Merge k Sorted Lists",
    difficulty: "Hard",
    category: "Linked List • Divide and Conquer • Heap",
    description: {
      text: "You are given an array of k linked-lists lists, each linked-list is sorted in ascending order.",
      notes: ["Merge all the linked-lists into one sorted linked-list and return it."],
    },
    examples: [
      {
        input: "lists = [[1,4,5],[1,3,4],[2,6]]",
        output: "[1,1,2,3,4,4,5,6]",
      },
    ],
    constraints: ["k == lists.length", "0 ≤ k ≤ 10⁴", "0 ≤ lists[i].length ≤ 500", "lists[i] is sorted in ascending order."],
    starterCode: {
      javascript: `function mergeKLists(lists) {\n  // Write your solution here\n}`,
      python: `def mergeKLists(lists):\n    # Write your solution here\n    pass`,
      java: `class Solution {\n    public ListNode mergeKLists(ListNode[] lists) {\n        // Write your solution here\n        return null;\n    }\n}`,
    },
    expectedOutput: {
      javascript: "[1,1,2,3,4,4,5,6]",
      python: "[1, 1, 2, 3, 4, 4, 5, 6]",
      java: "[1, 1, 2, 3, 4, 4, 5, 6]",
    },
  },
  // --- PATTERN: GRAPH (DIJKSTRA / SHORTEST PATH) ---
  "network-delay-time": {
    id: "network-delay-time",
    title: "Network Delay Time",
    difficulty: "Medium",
    category: "Graph • Heap • Dijkstra",
    description: {
      text: "You are given a network of n nodes, labeled from 1 to n. You are also given times, a list of travel times as directed edges times[i] = (ui, vi, wi).",
      notes: [
        "We will send a signal from a given node k.",
        "Return the minimum time it takes for all the n nodes to receive the signal.",
        "If it is impossible for all the n nodes to receive the signal, return -1."
      ],
    },
    examples: [
      {
        input: "times = [[2,1,1],[2,3,1],[3,4,1]], n = 4, k = 2",
        output: "2",
      },
    ],
    constraints: ["1 ≤ k ≤ n ≤ 100", "1 ≤ times.length ≤ 6000", "0 ≤ wi ≤ 100"],
    starterCode: {
      javascript: `function networkDelayTime(times, n, k) {\n  // Write your solution here\n}`,
      python: `def networkDelayTime(times, n, k):\n    # Write your solution here\n    pass`,
      java: `class Solution {\n    public int networkDelayTime(int[][] times, int n, int k) {\n        // Write your solution here\n        return -1;\n    }\n}`,
    },
    expectedOutput: {
      javascript: "2",
      python: "2",
      java: "2",
    },
  },

  // --- PATTERN: DYNAMIC PROGRAMMING (STRINGS / LCS) ---
  "longest-common-subsequence": {
    id: "longest-common-subsequence",
    title: "Longest Common Subsequence",
    difficulty: "Medium",
    category: "String • Dynamic Programming",
    description: {
      text: "Given two strings text1 and text2, return the length of their longest common subsequence. If there is no common subsequence, return 0.",
      notes: ["A subsequence of a string is a new string generated from the original string with some characters (can be none) deleted without changing the relative order of the remaining characters."],
    },
    examples: [
      {
        input: 'text1 = "abcde", text2 = "ace"',
        output: "3",
        explanation: 'The longest common subsequence is "ace" and its length is 3.',
      },
    ],
    constraints: ["1 ≤ text1.length, text2.length ≤ 1000", "text1 and text2 consist of only lowercase English characters."],
    starterCode: {
      javascript: `function longestCommonSubsequence(text1, text2) {\n  // Write your solution here\n}`,
      python: `def longestCommonSubsequence(text1, text2):\n    # Write your solution here\n    pass`,
      java: `class Solution {\n    public int longestCommonSubsequence(String text1, String text2) {\n        // Write your solution here\n        return 0;\n    }\n}`,
    },
    expectedOutput: {
      javascript: "3",
      python: "3",
      java: "3",
    },
  },

  // --- PATTERN: TWO POINTERS (ADVANCED / GREEDY) ---
  "3sum": {
    id: "3sum",
    title: "3Sum",
    difficulty: "Medium",
    category: "Array • Two Pointers • Sorting",
    description: {
      text: "Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.",
      notes: ["The solution set must not contain duplicate triplets."],
    },
    examples: [
      {
        input: "nums = [-1,0,1,2,-1,-4]",
        output: "[[-1,-1,2],[-1,0,1]]",
      },
    ],
    constraints: ["3 ≤ nums.length ≤ 3000", "-10⁵ ≤ nums[i] ≤ 10⁵"],
    starterCode: {
      javascript: `function threeSum(nums) {\n  // Write your solution here\n}`,
      python: `def threeSum(nums):\n    # Write your solution here\n    pass`,
      java: `class Solution {\n    public List<List<Integer>> threeSum(int[] nums) {\n        // Write your solution here\n        return new ArrayList<>();\n    }\n}`,
    },
    expectedOutput: {
      javascript: "[[-1,-1,2],[-1,0,1]]",
      python: "[[-1, -1, 2], [-1, 0, 1]]",
      java: "[[-1, -1, 2], [-1, 0, 1]]",
    },
  },

  // --- PATTERN: DESIGN / DATA STRUCTURES ---
  "lru-cache": {
    id: "lru-cache",
    title: "LRU Cache",
    difficulty: "Medium",
    category: "Hash Table • Linked List • Design",
    description: {
      text: "Design a data structure that follows the constraints of a Least Recently Used (LRU) cache.",
      notes: [
        "LRUCache(int capacity) Initialize the LRU cache with positive size capacity.",
        "int get(int key) Return the value of the key if it exists, otherwise return -1.",
        "void put(int key, int value) Update the value of the key if it exists. Otherwise, add the key-pair to the cache. If the number of keys exceeds the capacity, evict the least recently used key."
      ],
    },
    examples: [
      {
        input: '["LRUCache", "put", "put", "get", "put", "get", "put", "get", "get", "get"], [[2], [1, 1], [2, 2], [1], [3, 3], [2], [4, 4], [1], [3], [4]]',
        output: "[null, null, null, 1, null, -1, null, -1, 3, 4]",
      },
    ],
    constraints: ["1 ≤ capacity ≤ 3000", "0 ≤ key ≤ 10⁴", "0 ≤ value ≤ 10⁵", "At most 2 * 10⁵ calls will be made to get and put."],
    starterCode: {
      javascript: `class LRUCache {\n  constructor(capacity) {\n  }\n  get(key) {\n  }\n  put(key, value) {\n  }\n}`,
      python: `class LRUCache:\n    def __init__(self, capacity: int):\n        pass\n\n    def get(self, key: int) -> int:\n        pass\n\n    def put(self, key: int, value: int) -> None:\n        pass`,
      java: `class LRUCache {\n    public LRUCache(int capacity) {\n    }\n    public int get(int key) {\n        return -1;\n    }\n    public void put(int key, int value) {\n    }\n}`,
    },
    expectedOutput: {
      javascript: "1\n-1\n-1\n3\n4",
      python: "1\n-1\n-1\n3\n4",
      java: "1\n-1\n-1\n3\n4",
    },
  },

  // --- PATTERN: SLIDING WINDOW (HARD) ---
  "sliding-window-maximum": {
    id: "sliding-window-maximum",
    title: "Sliding Window Maximum",
    difficulty: "Hard",
    category: "Array • Queue • Sliding Window • Monotonic Queue",
    description: {
      text: "You are given an array of integers nums, there is a sliding window of size k which is moving from the very left of the array to the very right. You can only see the k numbers in the window. Each time the sliding window moves right by one position.",
      notes: ["Return the max sliding window."],
    },
    examples: [
      {
        input: "nums = [1,3,-1,-3,5,3,6,7], k = 3",
        output: "[3,3,5,5,6,7]",
        explanation: "Window position: [1 3 -1], Max: 3; [3 -1 -3], Max: 3; etc.",
      },
    ],
    constraints: ["1 ≤ nums.length ≤ 10⁵", "-10⁴ ≤ nums[i] ≤ 10⁴", "1 ≤ k ≤ nums.length"],
    starterCode: {
      javascript: `function maxSlidingWindow(nums, k) {\n  // Write your solution here\n}`,
      python: `def maxSlidingWindow(nums, k):\n    # Write your solution here\n    pass`,
      java: `class Solution {\n    public int[] maxSlidingWindow(int[] nums, int k) {\n        // Write your solution here\n        return new int[0];\n    }\n}`,
    },
    expectedOutput: {
      javascript: "[3,3,5,5,6,7]",
      python: "[3, 3, 5, 5, 6, 7]",
      java: "[3, 3, 5, 5, 6, 7]",
    },
  },
  // --- PATTERN: BITWISE MANIPULATION ---
  "sum-of-two-integers": {
    id: "sum-of-two-integers",
    title: "Sum of Two Integers",
    difficulty: "Medium",
    category: "Math • Bit Manipulation",
    description: {
      text: "Given two integers a and b, return the sum of the two integers without using the operators + and -.",
      notes: ["You must use bitwise operators to handle the addition and carry logic."],
    },
    examples: [
      {
        input: "a = 1, b = 2",
        output: "3",
      },
      {
        input: "a = 2, b = 3",
        output: "5",
      },
    ],
    constraints: ["-1000 ≤ a, b ≤ 1000"],
    starterCode: {
      javascript: `function getSum(a, b) {\n  // Write your solution here\n}`,
      python: `def getSum(a, b):\n    # Write your solution here\n    pass`,
      java: `class Solution {\n    public int getSum(int a, int b) {\n        // Write your solution here\n        return 0;\n    }\n}`,
    },
    expectedOutput: {
      javascript: "3\n5",
      python: "3\n5",
      java: "3\n5",
    },
  },

  // --- PATTERN: DYNAMIC PROGRAMMING (LIS) ---
  "longest-increasing-subsequence": {
    id: "longest-increasing-subsequence",
    title: "Longest Increasing Subsequence",
    difficulty: "Medium",
    category: "Array • Binary Search • Dynamic Programming",
    description: {
      text: "Given an integer array nums, return the length of the longest strictly increasing subsequence.",
      notes: [
        "A subsequence is a derivation from an array by deleting zero or more elements without changing the order of the remaining elements.",
        "Can you optimize the solution to O(n log n) time complexity?"
      ],
    },
    examples: [
      {
        input: "nums = [10,9,2,5,3,7,101,18]",
        output: "4",
        explanation: "The longest increasing subsequence is [2,3,7,101], therefore the length is 4.",
      },
    ],
    constraints: ["1 ≤ nums.length ≤ 2500", "-10⁴ ≤ nums[i] ≤ 10⁴"],
    starterCode: {
      javascript: `function lengthOfLIS(nums) {\n  // Write your solution here\n}`,
      python: `def lengthOfLIS(nums):\n    # Write your solution here\n    pass`,
      java: `class Solution {\n    public int lengthOfLIS(int[] nums) {\n        // Write your solution here\n        return 0;\n    }\n}`,
    },
    expectedOutput: {
      javascript: "4",
      python: "4",
      java: "4",
    },
  },

  // --- PATTERN: FAST & SLOW POINTERS (LINKED LIST) ---
  "palindrome-linked-list": {
    id: "palindrome-linked-list",
    title: "Palindrome Linked List",
    difficulty: "Easy",
    category: "Linked List • Two Pointers • Stack • Recursion",
    description: {
      text: "Given the head of a singly linked list, return true if it is a palindrome or false otherwise.",
      notes: ["Could you do it in O(n) time and O(1) space?"],
    },
    examples: [
      {
        input: "head = [1,2,2,1]",
        output: "true",
      },
      {
        input: "head = [1,2]",
        output: "false",
      },
    ],
    constraints: ["The number of nodes in the list is in the range [1, 10⁵]", "0 ≤ Node.val ≤ 9"],
    starterCode: {
      javascript: `function isPalindrome(head) {\n  // Write your solution here\n}`,
      python: `def isPalindrome(head):\n    # Write your solution here\n    pass`,
      java: `class Solution {\n    public boolean isPalindrome(ListNode head) {\n        // Write your solution here\n        return false;\n    }\n}`,
    },
    expectedOutput: {
      javascript: "true\nfalse",
      python: "True\nFalse",
      java: "true\nfalse",
    },
  },

  // --- PATTERN: GREEDY / ARRAY ---
  "gas-station": {
    id: "gas-station",
    title: "Gas Station",
    difficulty: "Medium",
    category: "Array • Greedy",
    description: {
      text: "There are n gas stations along a circular route, where the amount of gas at the ith station is gas[i]. You have a car with an unlimited gas tank and it costs cost[i] of gas to travel from the ith station to its next (i + 1)th station.",
      notes: [
        "Given two integer arrays gas and cost, return the starting gas station's index if you can travel around the circuit once in the clockwise direction, otherwise return -1.",
        "If there exists a solution, it is guaranteed to be unique."
      ],
    },
    examples: [
      {
        input: "gas = [1,2,3,4,5], cost = [3,4,5,1,2]",
        output: "3",
        explanation: "Start at station 3 (index 3) and fill up with 4 unit of gas. Your tank = 4. Cost to next = 1. Tank = 3...",
      },
    ],
    constraints: ["n == gas.length == cost.length", "1 ≤ n ≤ 10⁵", "0 ≤ gas[i], cost[i] ≤ 10⁴"],
    starterCode: {
      javascript: `function canCompleteCircuit(gas, cost) {\n  // Write your solution here\n}`,
      python: `def canCompleteCircuit(gas, cost):\n    # Write your solution here\n    pass`,
      java: `class Solution {\n    public int canCompleteCircuit(int[] gas, int[] cost) {\n        // Write your solution here\n        return -1;\n    }\n}`,
    },
    expectedOutput: {
      javascript: "3",
      python: "3",
      java: "3",
    },
  },

  // --- PATTERN: BACKTRACKING / DFS ---
  "generate-parentheses": {
    id: "generate-parentheses",
    title: "Generate Parentheses",
    difficulty: "Medium",
    category: "String • Dynamic Programming • Backtracking",
    description: {
      text: "Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.",
      notes: [],
    },
    examples: [
      {
        input: "n = 3",
        output: '["((()))","(()())","(())()","()(())","()()()"]',
      },
    ],
    constraints: ["1 ≤ n ≤ 8"],
    starterCode: {
      javascript: `function generateParenthesis(n) {\n  // Write your solution here\n}`,
      python: `def generateParenthesis(n):\n    # Write your solution here\n    pass`,
      java: `class Solution {\n    public List<String> generateParenthesis(int n) {\n        // Write your solution here\n        return new ArrayList<>();\n    }\n}`,
    },
    expectedOutput: {
      javascript: '["((()))","(()())","(())()","()(())","()()()"]',
      python: '["((()))", "(()())", "(())()", "()(())", "()()()"]',
      java: '["((()))", "(()())", "(())()", "()(())", "()()()"]',
    },
  },
  // --- PATTERN: GRAPH (DIJKSTRA / SHORTEST PATH) ---
  "cheapest-flights-within-k-stops": {
    id: "cheapest-flights-within-k-stops",
    title: "Cheapest Flights Within K Stops",
    difficulty: "Medium",
    category: "Graph • Heap • Dynamic Programming",
    description: {
      text: "There are n cities connected by some number of flights. You are given an array flights where flights[i] = [from_i, to_i, price_i].",
      notes: [
        "You are also given three integers src, dst, and k.",
        "Return the cheapest price from src to dst with at most k stops. If there is no such route, return -1."
      ],
    },
    examples: [
      {
        input: "n = 4, flights = [[0,1,100],[1,2,100],[2,0,100],[1,3,600],[2,3,200]], src = 0, dst = 3, k = 1",
        output: "700",
        explanation: "The optimal path with at most 1 stop is 0 -> 1 -> 3 with cost 100 + 600 = 700.",
      },
    ],
    constraints: ["1 ≤ n ≤ 100", "0 ≤ flights.length ≤ (n * (n - 1) / 2)", "0 ≤ src, dst, k < n"],
    starterCode: {
      javascript: `function findCheapestPrice(n, flights, src, dst, k) {\n  // Write your solution here\n}`,
      python: `def findCheapestPrice(n, flights, src, dst, k):\n    # Write your solution here\n    pass`,
      java: `class Solution {\n    public int findCheapestPrice(int n, int[][] flights, int src, int dst, int k) {\n        // Write your solution here\n        return -1;\n    }\n}`,
    },
    expectedOutput: {
      javascript: "700",
      python: "700",
      java: "700",
    },
  },

  // --- PATTERN: DYNAMIC PROGRAMMING (EDIT DISTANCE) ---
  "edit-distance": {
    id: "edit-distance",
    title: "Edit Distance",
    difficulty: "Hard",
    category: "String • Dynamic Programming",
    description: {
      text: "Given two strings word1 and word2, return the minimum number of operations required to convert word1 to word2.",
      notes: [
        "You have the following three operations permitted on a word:",
        "Insert a character",
        "Delete a character",
        "Replace a character"
      ],
    },
    examples: [
      {
        input: 'word1 = "horse", word2 = "ros"',
        output: "3",
        explanation: "horse -> rorse (replace 'h' with 'r'), rorse -> rose (remove 'r'), rose -> ros (remove 'e')",
      },
    ],
    constraints: ["0 ≤ word1.length, word2.length ≤ 500", "word1 and word2 consist of lowercase English letters."],
    starterCode: {
      javascript: `function minDistance(word1, word2) {\n  // Write your solution here\n}`,
      python: `def minDistance(word1, word2):\n    # Write your solution here\n    pass`,
      java: `class Solution {\n    public int minDistance(String word1, String word2) {\n        // Write your solution here\n        return 0;\n    }\n}`,
    },
    expectedOutput: {
      javascript: "3",
      python: "3",
      java: "3",
    },
  },

  // --- PATTERN: GREEDY (INTERVALS) ---
  "non-overlapping-intervals": {
    id: "non-overlapping-intervals",
    title: "Non-overlapping Intervals",
    difficulty: "Medium",
    category: "Array • Greedy • Sorting",
    description: {
      text: "Given an array of intervals intervals where intervals[i] = [start_i, end_i], return the minimum number of intervals you need to remove to make the rest of the intervals non-overlapping.",
      notes: [],
    },
    examples: [
      {
        input: "intervals = [[1,2],[2,3],[3,4],[1,3]]",
        output: "1",
        explanation: "[1,3] can be removed and the rest of the intervals are non-overlapping.",
      },
    ],
    constraints: ["1 ≤ intervals.length ≤ 10⁵", "intervals[i].length == 2"],
    starterCode: {
      javascript: `function eraseOverlapIntervals(intervals) {\n  // Write your solution here\n}`,
      python: `def eraseOverlapIntervals(intervals):\n    # Write your solution here\n    pass`,
      java: `class Solution {\n    public int eraseOverlapIntervals(int[][] intervals) {\n        // Write your solution here\n        return 0;\n    }\n}`,
    },
    expectedOutput: {
      javascript: "1",
      python: "1",
      java: "1",
    },
  },

  // --- PATTERN: TWO POINTERS / SLIDING WINDOW (HARD) ---
  "longest-valid-parentheses": {
    id: "longest-valid-parentheses",
    title: "Longest Valid Parentheses",
    difficulty: "Hard",
    category: "String • Dynamic Programming • Stack",
    description: {
      text: "Given a string containing just the characters '(' and ')', return the length of the longest valid (well-formed) parentheses substring.",
      notes: [],
    },
    examples: [
      {
        input: 's = ")()())"',
        output: "4",
        explanation: "The longest valid parentheses substring is \"()()\".",
      },
    ],
    constraints: ["0 ≤ s.length ≤ 3 * 10⁴", "s consists of '(' and ')' only."],
    starterCode: {
      javascript: `function longestValidParentheses(s) {\n  // Write your solution here\n}`,
      python: `def longestValidParentheses(s):\n    # Write your solution here\n    pass`,
      java: `class Solution {\n    public int longestValidParentheses(String s) {\n        // Write your solution here\n        return 0;\n    }\n}`,
    },
    expectedOutput: {
      javascript: "4",
      python: "4",
      java: "4",
    },
  },

  // --- PATTERN: HEAP / PRIORITY QUEUE ---
  "find-k-pairs-with-smallest-sums": {
    id: "find-k-pairs-with-smallest-sums",
    title: "Find K Pairs with Smallest Sums",
    difficulty: "Medium",
    category: "Array • Heap",
    description: {
      text: "You are given two integer arrays nums1 and nums2 sorted in non-decreasing order and an integer k.",
      notes: [
        "Define a pair (u, v) which consists of one element from the first array and one element from the second array.",
        "Return the k pairs (u1, v1), (u2, v2), ..., (uk, vk) with the smallest sums."
      ],
    },
    examples: [
      {
        input: "nums1 = [1,7,11], nums2 = [2,4,6], k = 3",
        output: "[[1,2],[1,4],[1,6]]",
      },
    ],
    constraints: ["1 ≤ nums1.length, nums2.length ≤ 10⁵", "1 ≤ k ≤ 10⁴", "nums1 and nums2 are sorted in ascending order."],
    starterCode: {
      javascript: `function kSmallestPairs(nums1, nums2, k) {\n  // Write your solution here\n}`,
      python: `def kSmallestPairs(nums1, nums2, k):\n    # Write your solution here\n    pass`,
      java: `class Solution {\n    public List<List<Integer>> kSmallestPairs(int[] nums1, int[] nums2, int k) {\n        // Write your solution here\n        return new ArrayList<>();\n    }\n}`,
    },
    expectedOutput: {
      javascript: "[[1,2],[1,4],[1,6]]",
      python: "[[1, 2], [1, 4], [1, 6]]",
      java: "[[1, 2], [1, 4], [1, 6]]",
    },
  },
  // --- PATTERN: MATRIX / BFS (PATHFINDING) ---
  "shortest-path-in-a-grid-with-obstacles-elimination": {
    id: "shortest-path-in-a-grid-with-obstacles-elimination",
    title: "Shortest Path in a Grid with Obstacles Elimination",
    difficulty: "Hard",
    category: "Array • Matrix • BFS",
    description: {
      text: "You are given an m x n integer matrix grid where each cell is either 0 (empty) or 1 (obstacle). You can move up, down, left, or right.",
      notes: [
        "You are also given an integer k that faces the maximum number of obstacles you can eliminate.",
        "Return the minimum number of steps to walk from the upper left corner (0,0) to the lower right corner (m-1, n-1).",
        "If it is not possible to find such a path, return -1."
      ],
    },
    examples: [
      {
        input: "grid = [[0,0,0],[1,1,0],[0,0,0],[0,1,1],[0,0,0]], k = 1",
        output: "6",
        explanation: "The shortest path without eliminating any obstacle is 10. With one elimination at (1,1), the path becomes 6.",
      },
    ],
    constraints: ["m == grid.length", "n == grid[i].length", "1 ≤ m, n ≤ 40", "0 ≤ k ≤ m * n"],
    starterCode: {
      javascript: `function shortestPath(grid, k) {\n  // Write your solution here\n}`,
      python: `def shortestPath(grid, k):\n    # Write your solution here\n    pass`,
      java: `class Solution {\n    public int shortestPath(int[][] grid, int k) {\n        // Write your solution here\n        return -1;\n    }\n}`,
    },
    expectedOutput: {
      javascript: "6",
      python: "6",
      java: "6",
    },
  },

  // --- PATTERN: TRIE (ADVANCED / SEARCH) ---
  "word-search-ii": {
    id: "word-search-ii",
    title: "Word Search II",
    difficulty: "Hard",
    category: "Array • String • Backtracking • Trie",
    description: {
      text: "Given an m x n board of characters and a list of strings words, return all words on the board.",
      notes: [
        "Each word must be constructed from letters of sequentially adjacent cells.",
        "Adjacent cells are horizontally or vertically neighboring.",
        "The same letter cell may not be used more than once in a word."
      ],
    },
    examples: [
      {
        input: 'board = [["o","a","a","n"],["e","t","a","e"],["i","h","k","r"],["i","f","l","v"]], words = ["oath","pea","eat","rain"]',
        output: '["eat","oath"]',
      },
    ],
    constraints: ["m == board.length", "n == board[i].length", "1 ≤ m, n ≤ 12", "1 ≤ words.length ≤ 3 * 10⁴"],
    starterCode: {
      javascript: `function findWords(board, words) {\n  // Write your solution here\n}`,
      python: `def findWords(board, words):\n    # Write your solution here\n    pass`,
      java: `class Solution {\n    public List<String> findWords(char[][] board, String[] words) {\n        // Write your solution here\n        return new ArrayList<>();\n    }\n}`,
    },
    expectedOutput: {
      javascript: '["eat","oath"]',
      python: '["eat", "oath"]',
      java: '["eat", "oath"]',
    },
  },

  // --- PATTERN: DYNAMIC PROGRAMMING (BITMASK) ---
  "can-i-win": {
    id: "can-i-win",
    title: "Can I Win",
    difficulty: "Medium",
    category: "Math • Dynamic Programming • Bitmask • Game Theory",
    description: {
      text: "In the '100 game', two players take turns adding, to a running total, any integer from 1 to 10. The player who first causes the running total to reach or exceed 100 wins.",
      notes: [
        "What if we change the game so that players cannot re-use integers?",
        "Given maxChoosableInteger and desiredTotal, return true if the first player to move can force a win, otherwise, return false."
      ],
    },
    examples: [
      {
        input: "maxChoosableInteger = 10, desiredTotal = 11",
        output: "false",
      },
    ],
    constraints: ["1 ≤ maxChoosableInteger ≤ 20", "0 ≤ desiredTotal ≤ 300"],
    starterCode: {
      javascript: `function canIWin(maxChoosableInteger, desiredTotal) {\n  // Write your solution here\n}`,
      python: `def canIWin(maxChoosableInteger, desiredTotal):\n    # Write your solution here\n    pass`,
      java: `class Solution {\n    public boolean canIWin(int maxChoosableInteger, int desiredTotal) {\n        // Write your solution here\n        return false;\n    }\n}`,
    },
    expectedOutput: {
      javascript: "false",
      python: "False",
      java: "false",
    },
  },

  // --- PATTERN: MONOTONIC STACK (ADVANCED) ---
  "largest-rectangle-in-histogram": {
    id: "largest-rectangle-in-histogram",
    title: "Largest Rectangle in Histogram",
    difficulty: "Hard",
    category: "Array • Stack • Monotonic Stack",
    description: {
      text: "Given an array of integers heights representing the histogram's bar height where the width of each bar is 1, return the area of the largest rectangle in the histogram.",
      notes: [],
    },
    examples: [
      {
        input: "heights = [2,1,5,6,2,3]",
        output: "10",
        explanation: "The largest rectangle is formed by bars [5,6] with an area of 5 * 2 = 10.",
      },
    ],
    constraints: ["1 ≤ heights.length ≤ 10⁵", "0 ≤ heights[i] ≤ 10⁴"],
    starterCode: {
      javascript: `function largestRectangleArea(heights) {\n  // Write your solution here\n}`,
      python: `def largestRectangleArea(heights):\n    # Write your solution here\n    pass`,
      java: `class Solution {\n    public int largestRectangleArea(int[] heights) {\n        // Write your solution here\n        return 0;\n    }\n}`,
    },
    expectedOutput: {
      javascript: "10",
      python: "10",
      java: "10",
    },
  },

  // --- PATTERN: SLIDING WINDOW (HARD / DEQUE) ---
  "constrained-subsequence-sum": {
    id: "constrained-subsequence-sum",
    title: "Constrained Subsequence Sum",
    difficulty: "Hard",
    category: "Array • Dynamic Programming • Queue • Monotonic Queue",
    description: {
      text: "Given an integer array nums and an integer k, return the maximum sum of a non-empty subsequence of that array such that for every two consecutive integers in the subsequence, nums[i] and nums[j], where i < j, the condition j - i <= k is satisfied.",
      notes: [],
    },
    examples: [
      {
        input: "nums = [10,2,-10,5,20], k = 2",
        output: "37",
        explanation: "The subsequence is [10, 2, 5, 20].",
      },
    ],
    constraints: ["1 ≤ k ≤ nums.length ≤ 10⁵", "-10⁴ ≤ nums[i] ≤ 10⁴"],
    starterCode: {
      javascript: `function constrainedSubsetSum(nums, k) {\n  // Write your solution here\n}`,
      python: `def constrainedSubsetSum(nums, k):\n    # Write your solution here\n    pass`,
      java: `class Solution {\n    public int constrainedSubsetSum(int[] nums, int k) {\n        // Write your solution here\n        return 0;\n    }\n}`,
    },
    expectedOutput: {
      javascript: "37",
      python: "37",
      java: "37",
    },
  },
  // --- PATTERN: DYNAMIC PROGRAMMING (GAME THEORY) ---
  "predict-the-winner": {
    id: "predict-the-winner",
    title: "Predict the Winner",
    difficulty: "Medium",
    category: "Array • Math • Dynamic Programming • Recursion",
    description: {
      text: "You are given an integer array nums. Two players are playing a game with this array: player 1 and player 2.",
      notes: [
        "Players take turns, with player 1 going first.",
        "Both players start with a score of 0. In each turn, the player takes one of the numbers from either end of the array which reduces the size of the array by 1.",
        "The player adds the chosen number to their score. The game ends when there are no more elements in the array.",
        "Return true if Player 1 can win the game. If the scores are equal, player 1 is still the winner."
      ],
    },
    examples: [
      {
        input: "nums = [1,5,2]",
        output: "false",
        explanation: "Initially, player 1 can choose between 1 and 2. If he chooses 2 (or 1), then player 2 can choose from [1,5] (or [5,2]). Player 2 will choose 5, making it impossible for player 1 to win.",
      },
    ],
    constraints: ["1 ≤ nums.length ≤ 20", "0 ≤ nums[i] ≤ 10⁷"],
    starterCode: {
      javascript: `function predictTheWinner(nums) {\n  // Write your solution here\n}`,
      python: `def predictTheWinner(nums):\n    # Write your solution here\n    pass`,
      java: `class Solution {\n    public boolean predictTheWinner(int[] nums) {\n        // Write your solution here\n        return false;\n    }\n}`,
    },
    expectedOutput: {
      javascript: "false",
      python: "False",
      java: "false",
    },
  },

  // --- PATTERN: GRAPH (MINIMUM SPANNING TREE) ---
  "min-cost-to-connect-all-points": {
    id: "min-cost-to-connect-all-points",
    title: "Min Cost to Connect All Points",
    difficulty: "Medium",
    category: "Array • Graph • Union Find • Minimum Spanning Tree",
    description: {
      text: "You are given an array points representing integer coordinates of some points on a 2D-plane, where points[i] = [xi, yi].",
      notes: [
        "The cost of connecting two points [xi, yi] and [xj, yj] is the Manhattan distance: |xi - xj| + |yi - yj|.",
        "Return the minimum cost to make all points connected (all points have at least one path between them)."
      ],
    },
    examples: [
      {
        input: "points = [[0,0],[2,2],[3,10],[5,2],[7,0]]",
        output: "20",
      },
    ],
    constraints: ["1 ≤ points.length ≤ 1000", "-10⁶ ≤ xi, yi ≤ 10⁶"],
    starterCode: {
      javascript: `function minCostConnectPoints(points) {\n  // Write your solution here\n}`,
      python: `def minCostConnectPoints(points):\n    # Write your solution here\n    pass`,
      java: `class Solution {\n    public int minCostConnectPoints(int[][] points) {\n        // Write your solution here\n        return 0;\n    }\n}`,
    },
    expectedOutput: {
      javascript: "20",
      python: "20",
      java: "20",
    },
  },

  // --- PATTERN: SLIDING WINDOW (FREQUENCY TRACKING) ---
  "subarrays-with-k-different-integers": {
    id: "subarrays-with-k-different-integers",
    title: "Subarrays with K Different Integers",
    difficulty: "Hard",
    category: "Array • Hash Table • Sliding Window",
    description: {
      text: "Given an integer array nums and an integer k, return the number of good subarrays of nums.",
      notes: [
        "A good subarray is an array where the number of different integers in that array is exactly k.",
        "Example: [1,2,3,1,2] has 3 different integers: 1, 2, and 3."
      ],
    },
    examples: [
      {
        input: "nums = [1,2,1,2,3], k = 2",
        output: "7",
        explanation: "Subarrays: [1,2], [2,1], [1,2], [2,3], [1,2,1], [2,1,2], [1,2,1,2].",
      },
    ],
    constraints: ["1 ≤ nums.length ≤ 2 * 10⁴", "1 ≤ nums[i] ≤ nums.length", "1 ≤ k ≤ nums.length"],
    starterCode: {
      javascript: `function subarraysWithKDistinct(nums, k) {\n  // Write your solution here\n}`,
      python: `def subarraysWithKDistinct(nums, k):\n    # Write your solution here\n    pass`,
      java: `class Solution {\n    public int subarraysWithKDistinct(int[] nums, int k) {\n        // Write your solution here\n        return 0;\n    }\n}`,
    },
    expectedOutput: {
      javascript: "7",
      python: "7",
      java: "7",
    },
  },

  // --- PATTERN: DYNAMIC PROGRAMMING (STRING PARTITIONING) ---
  "palindrome-partitioning": {
    id: "palindrome-partitioning",
    title: "Palindrome Partitioning",
    difficulty: "Medium",
    category: "String • Backtracking • Dynamic Programming",
    description: {
      text: "Given a string s, partition s such that every substring of the partition is a palindrome.",
      notes: ["Return all possible palindrome partitioning of s."],
    },
    examples: [
      {
        input: 's = "aab"',
        output: '[["a","a","b"],["aa","b"]]',
      },
    ],
    constraints: ["1 ≤ s.length ≤ 16", "s contains only lowercase English letters."],
    starterCode: {
      javascript: `function partition(s) {\n  // Write your solution here\n}`,
      python: `def partition(s):\n    # Write your solution here\n    pass`,
      java: `class Solution {\n    public List<List<String>> partition(String s) {\n        // Write your solution here\n        return new ArrayList<>();\n    }\n}`,
    },
    expectedOutput: {
      javascript: '[["a","a","b"],["aa","b"]]',
      python: '[["a", "a", "b"], ["aa", "b"]]',
      java: '[["a", "a", "b"], ["aa", "b"]]',
    },
  },

  // --- PATTERN: HEAP / PRIORITY QUEUE (GREEDY) ---
  "reorganize-string": {
    id: "reorganize-string",
    title: "Reorganize String",
    difficulty: "Medium",
    category: "Hash Table • String • Greedy • Heap",
    description: {
      text: "Given a string s, rearrange the characters of s so that any two adjacent characters are not the same.",
      notes: ["Return any possible rearrangement of s or return \"\" if not possible."],
    },
    examples: [
      {
        input: 's = "aab"',
        output: '"aba"',
      },
      {
        input: 's = "aaab"',
        output: '""',
      },
    ],
    constraints: ["1 ≤ s.length ≤ 500", "s consists of lowercase English letters."],
    starterCode: {
      javascript: `function reorganizeString(s) {\n  // Write your solution here\n}`,
      python: `def reorganizeString(s):\n    # Write your solution here\n    pass`,
      java: `class Solution {\n    public String reorganizeString(String s) {\n        // Write your solution here\n        return "";\n    }\n}`,
    },
    expectedOutput: {
      javascript: '"aba"',
      python: '"aba"',
      java: '"aba"',
    },
  },
  // --- PATTERN: GRAPH (DIJKSTRA / SHORTEST PATH) ---
  "path-with-minimum-effort": {
    id: "path-with-minimum-effort",
    title: "Path With Minimum Effort",
    difficulty: "Medium",
    category: "Array • Binary Search • Graph • Dijkstra",
    description: {
      text: "You are a hiker preparing for an upcoming hike. You are given heights, a 2D array of size rows x columns, where heights[row][col] represents the height of cell (row, col).",
      notes: [
        "You are situated in the top-left cell, (0, 0), and you hope to travel to the bottom-right cell, (rows-1, columns-1).",
        "A route's effort is the maximum absolute difference in heights between two consecutive cells of the route.",
        "Return the minimum effort required to travel from the top-left cell to the bottom-right cell."
      ],
    },
    examples: [
      {
        input: "heights = [[1,2,2],[3,8,2],[5,3,5]]",
        output: "2",
        explanation: "The route [1,3,5,3,5] has a maximum absolute difference of 2.",
      },
    ],
    constraints: ["rows == heights.length", "columns == heights[i].length", "1 ≤ rows, columns ≤ 100", "1 ≤ heights[i][j] ≤ 10⁶"],
    starterCode: {
      javascript: `function minimumEffortPath(heights) {\n  // Write your solution here\n}`,
      python: `def minimumEffortPath(heights):\n    # Write your solution here\n    pass`,
      java: `class Solution {\n    public int minimumEffortPath(int[][] heights) {\n        // Write your solution here\n        return 0;\n    }\n}`,
    },
    expectedOutput: {
      javascript: "2",
      python: "2",
      java: "2",
    },
  },

  // --- PATTERN: GREEDY (SORTING) ---
  "task-scheduler": {
    id: "task-scheduler",
    title: "Task Scheduler",
    difficulty: "Medium",
    category: "Array • Hash Table • Greedy • Heap",
    description: {
      text: "Given a characters array tasks, representing the tasks a CPU needs to do, where each letter represents a different task. Tasks could be done in any order. Each task is done in one unit of time.",
      notes: [
        "For each unit of time, the CPU could complete either one task or just be idle.",
        "However, there is a non-negative integer n that represents the cooldown period between two same tasks.",
        "Return the least number of units of times that the CPU will take to finish all the given tasks."
      ],
    },
    examples: [
      {
        input: 'tasks = ["A","A","A","B","B","B"], n = 2',
        output: "8",
        explanation: "A -> B -> idle -> A -> B -> idle -> A -> B",
      },
    ],
    constraints: ["1 ≤ tasks.length ≤ 10⁴", "tasks[i] is upper-case English letter.", "0 ≤ n ≤ 100"],
    starterCode: {
      javascript: `function leastInterval(tasks, n) {\n  // Write your solution here\n}`,
      python: `def leastInterval(tasks, n):\n    # Write your solution here\n    pass`,
      java: `class Solution {\n    public int leastInterval(char[] tasks, int n) {\n        // Write your solution here\n        return 0;\n    }\n}`,
    },
    expectedOutput: {
      javascript: "8",
      python: "8",
      java: "8",
    },
  },

  // --- PATTERN: BINARY SEARCH ON ANSWER ---
  "split-array-largest-sum": {
    id: "split-array-largest-sum",
    title: "Split Array Largest Sum",
    difficulty: "Hard",
    category: "Array • Binary Search • Dynamic Programming",
    description: {
      text: "Given an integer array nums and an integer k, split nums into k non-empty contiguous subarrays.",
      notes: ["Minimize the largest sum among these k subarrays.", "Return the minimized largest sum of the split."],
    },
    examples: [
      {
        input: "nums = [7,2,5,10,8], k = 2",
        output: "18",
        explanation: "There are four ways to split: ([7], [2,5,10,8]), ([7,2], [5,10,8]), ([7,2,5], [10,8]), ([7,2,5,10], [8]). The third split has the smallest largest sum: 18.",
      },
    ],
    constraints: ["1 ≤ nums.length ≤ 1000", "0 ≤ nums[i] ≤ 10⁶", "1 ≤ k ≤ min(50, nums.length)"],
    starterCode: {
      javascript: `function splitArray(nums, k) {\n  // Write your solution here\n}`,
      python: `def splitArray(nums, k):\n    # Write your solution here\n    pass`,
      java: `class Solution {\n    public int splitArray(int[] nums, int k) {\n        // Write your solution here\n        return 0;\n    }\n}`,
    },
    expectedOutput: {
      javascript: "18",
      python: "18",
      java: "18",
    },
  },

  // --- PATTERN: BITWISE (SUBSETS) ---
  "subsets": {
    id: "subsets",
    title: "Subsets",
    difficulty: "Medium",
    category: "Array • Backtracking • Bit Manipulation",
    description: {
      text: "Given an integer array nums of unique elements, return all possible subsets (the power set).",
      notes: ["The solution set must not contain duplicate subsets. Return the solution in any order."],
    },
    examples: [
      {
        input: "nums = [1,2,3]",
        output: "[[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]",
      },
    ],
    constraints: ["1 ≤ nums.length ≤ 10", "-10 ≤ nums[i] ≤ 10", "All the numbers are unique."],
    starterCode: {
      javascript: `function subsets(nums) {\n  // Write your solution here\n}`,
      python: `def subsets(nums):\n    # Write your solution here\n    pass`,
      java: `class Solution {\n    public List<List<Integer>> subsets(int[] nums) {\n        // Write your solution here\n        return new ArrayList<>();\n    }\n}`,
    },
    expectedOutput: {
      javascript: "[[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]",
      python: "[[], [1], [2], [1, 2], [3], [1, 3], [2, 3], [1, 2, 3]]",
      java: "[[], [1], [2], [1, 2], [3], [1, 3], [2, 3], [1, 2, 3]]",
    },
  },

  // --- PATTERN: GRAPH (BIPARTITE CHECK) ---
  "is-graph-bipartite": {
    id: "is-graph-bipartite",
    title: "Is Graph Bipartite?",
    difficulty: "Medium",
    category: "Depth-First Search • Breadth-First Search • Graph",
    description: {
      text: "There is an undirected graph with n nodes, where each node is numbered between 0 and n - 1.",
      notes: [
        "A graph is bipartite if the nodes can be partitioned into two independent sets A and B such that every edge in the graph connects a node in set A and a node in set B.",
        "Return true if the graph is bipartite, or false otherwise."
      ],
    },
    examples: [
      {
        input: "graph = [[1,2,3],[0,2],[0,1,3],[0,2]]",
        output: "false",
        explanation: "Nodes 0, 1, 2, 3 cannot be split into two sets such that every edge connects different sets.",
      },
    ],
    constraints: ["n == graph.length", "1 ≤ n ≤ 100", "0 ≤ graph[u].length < n"],
    starterCode: {
      javascript: `function isBipartite(graph) {\n  // Write your solution here\n}`,
      python: `def isBipartite(graph):\n    # Write your solution here\n    pass`,
      java: `class Solution {\n    public boolean isBipartite(int[][] graph) {\n        // Write your solution here\n        return false;\n    }\n}`,
    },
    expectedOutput: {
      javascript: "false",
      python: "False",
      java: "false",
    },
  },
  // --- PATTERN: DYNAMIC PROGRAMMING (STRINGS) ---
  "wildcard-matching": {
    id: "wildcard-matching",
    title: "Wildcard Matching",
    difficulty: "Hard",
    category: "String • Dynamic Programming • Greedy • Backtracking",
    description: {
      text: "Given an input string (s) and a pattern (p), implement wildcard pattern matching with support for '?' and '*' where:",
      notes: [
        "'?' Matches any single character.",
        "'*' Matches any sequence of characters (including the empty sequence).",
        "The matching should cover the entire input string (not partial)."
      ],
    },
    examples: [
      {
        input: 's = "cb", p = "?a"',
        output: "false",
        explanation: "'?' matches 'c', but the second letter 'a' does not match 'b'."
      },
      {
        input: 's = "adceb", p = "*a*b"',
        output: "true",
        explanation: "The first '*' matches empty, then 'a', then the second '*' matches 'dce', and finally 'b'."
      }
    ],
    constraints: ["0 ≤ s.length, p.length ≤ 2000", "s contains lowercase English letters.", "p contains lowercase English letters, '?' or '*'."],
    starterCode: {
      javascript: `function isMatch(s, p) {\n  // Write your solution here\n}`,
      python: `def isMatch(s: str, p: str) -> bool:\n    # Write your solution here\n    pass`,
      java: `class Solution {\n    public boolean isMatch(String s, String p) {\n        // Write your solution here\n        return false;\n    }\n}`,
    },
    expectedOutput: {
      javascript: "true",
      python: "True",
      java: "true",
    },
  },

  // --- PATTERN: TREE (SERIALIZATION) ---
  "serialize-and-deserialize-binary-tree": {
    id: "serialize-and-deserialize-binary-tree",
    title: "Serialize and Deserialize Binary Tree",
    difficulty: "Hard",
    category: "String • Tree • DFS • BFS • Design",
    description: {
      text: "Serialization is the process of converting a data structure or object into a sequence of bits so that it can be stored in a file or memory buffer, or transmitted across a network connection link to be reconstructed later in the same or another computer environment.",
      notes: [
        "Design an algorithm to serialize and deserialize a binary tree.",
        "There is no restriction on how your serialization/deserialization algorithm should work.",
        "You just need to ensure that a binary tree can be serialized to a string and this string can be deserialized to the original tree structure."
      ],
    },
    examples: [
      {
        input: "root = [1,2,3,null,null,4,5]",
        output: "[1,2,3,null,null,4,5]",
      },
    ],
    constraints: ["The number of nodes in the tree is in the range [0, 10⁴]", "-1000 ≤ Node.val ≤ 1000"],
    starterCode: {
      javascript: `function serialize(root) {};\nfunction deserialize(data) {};`,
      python: `def serialize(root):\n    pass\n\ndef deserialize(data):\n    pass`,
      java: `public class Codec {\n    public String serialize(TreeNode root) {\n        return "";\n    }\n    public TreeNode deserialize(String data) {\n        return null;\n    }\n}`,
    },
    expectedOutput: {
      javascript: "[1,2,3,null,null,4,5]",
      python: "[1, 2, 3, None, None, 4, 5]",
      java: "[1, 2, 3, null, null, 4, 5]",
    },
  },

  // --- PATTERN: GREEDY (GAS/JUMP) ---
  "jump-game-ii": {
    id: "jump-game-ii",
    title: "Jump Game II",
    difficulty: "Medium",
    category: "Array • Greedy • Dynamic Programming",
    description: {
      text: "You are given a 0-indexed array of integers nums of length n. You are initially positioned at nums[0].",
      notes: [
        "Each element nums[i] represents the maximum length of a forward jump from index i.",
        "Return the minimum number of jumps to reach nums[n - 1].",
        "The test cases are generated such that you can reach the last index."
      ],
    },
    examples: [
      {
        input: "nums = [2,3,1,1,4]",
        output: "2",
        explanation: "Jump 1 step from index 0 to 1, then 3 steps to the last index.",
      },
    ],
    constraints: ["1 ≤ nums.length ≤ 10⁴", "0 ≤ nums[i] ≤ 1000"],
    starterCode: {
      javascript: `function jump(nums) {\n  // Write your solution here\n}`,
      python: `def jump(nums: List[int]) -> int:\n    # Write your solution here\n    pass`,
      java: `class Solution {\n    public int jump(int[] nums) {\n        // Write your solution here\n        return 0;\n    }\n}`,
    },
    expectedOutput: {
      javascript: "2",
      python: "2",
      java: "2",
    },
  },

  // --- PATTERN: BITWISE (RANGE) ---
  "bitwise-and-of-numbers-range": {
    id: "bitwise-and-of-numbers-range",
    title: "Bitwise AND of Numbers Range",
    difficulty: "Medium",
    category: "Bit Manipulation",
    description: {
      text: "Given two integers left and right that represent the range [left, right], return the bitwise AND of all numbers in this range, inclusive.",
      notes: [],
    },
    examples: [
      {
        input: "left = 5, right = 7",
        output: "4",
        explanation: "5 (101) & 6 (110) & 7 (111) = 4 (100)",
      },
    ],
    constraints: ["0 ≤ left ≤ right ≤ 2³¹ - 1"],
    starterCode: {
      javascript: `function rangeBitwiseAnd(left, right) {\n  // Write your solution here\n}`,
      python: `def rangeBitwiseAnd(left: int, right: int) -> int:\n    # Write your solution here\n    pass`,
      java: `class Solution {\n    public int rangeBitwiseAnd(int left, int right) {\n        // Write your solution here\n        return 0;\n    }\n}`,
    },
    expectedOutput: {
      javascript: "4",
      python: "4",
      java: "4",
    },
  },

  // --- PATTERN: TOP 'K' ELEMENTS (FREQUENCY) ---
  "sort-characters-by-frequency": {
    id: "sort-characters-by-frequency",
    title: "Sort Characters By Frequency",
    difficulty: "Medium",
    category: "Hash Table • String • Sorting • Heap • Bucket Sort",
    description: {
      text: "Given a string s, sort it in decreasing order based on the frequency of the characters.",
      notes: ["The frequency of a character is the number of times it appears in the string.", "Return the sorted string. If there are multiple answers, return any of them."],
    },
    examples: [
      {
        input: 's = "tree"',
        output: '"eert"',
        explanation: "'e' appears twice while 'r' and 't' appear once. 'eetr' is also a valid answer."
      },
    ],
    constraints: ["1 ≤ s.length ≤ 5 * 10⁵", "s consists of uppercase and lowercase English letters and digits."],
    starterCode: {
      javascript: `function frequencySort(s) {\n  // Write your solution here\n}`,
      python: `def frequencySort(s: str) -> str:\n    # Write your solution here\n    pass`,
      java: `class Solution {\n    public String frequencySort(String s) {\n        // Write your solution here\n        return "";\n    }\n}`,
    },
    expectedOutput: {
      javascript: '"eert"',
      python: '"eert"',
      java: '"eert"',
    },
  },
  // --- PATTERN: DYNAMIC PROGRAMMING (STRINGS / DISTINCT SUBSEQUENCES) ---
  "distinct-subsequences": {
    id: "distinct-subsequences",
    title: "Distinct Subsequences",
    difficulty: "Hard",
    category: "String • Dynamic Programming",
    description: {
      text: "Given two strings s and t, return the number of distinct subsequences of s which equals t.",
      notes: [
        "The test cases are generated so that the answer fits in a 32-bit signed integer."
      ],
    },
    examples: [
      {
        input: 's = "rabbbit", t = "rabbit"',
        output: "3",
        explanation: "There are 3 ways you can generate 'rabbit' from 'rabbbit' by removing one 'b' at a time.",
      },
    ],
    constraints: ["1 ≤ s.length, t.length ≤ 1000", "s and t consist of English letters."],
    starterCode: {
      javascript: `function numDistinct(s, t) {\n  // Write your solution here\n}`,
      python: `def numDistinct(s: str, t: str) -> int:\n    # Write your solution here\n    pass`,
      java: `class Solution {\n    public int numDistinct(String s, String t) {\n        // Write your solution here\n        return 0;\n    }\n}`,
    },
    expectedOutput: {
      javascript: "3",
      python: "3",
      java: "3",
    },
  },

  // --- PATTERN: GRAPH (TOPOLOGICAL SORT / DEPENDENCIES) ---
  "course-schedule-ii": {
    id: "course-schedule-ii",
    title: "Course Schedule II",
    difficulty: "Medium",
    category: "Graph • Topological Sort • BFS • DFS",
    description: {
      text: "There are a total of numCourses courses you have to take, labeled from 0 to numCourses - 1. You are given an array prerequisites where prerequisites[i] = [ai, bi] indicates that you must take course bi first if you want to take course ai.",
      notes: [
        "Return the ordering of courses you should take to finish all courses.",
        "If there are many valid answers, return any of them. If it is impossible to finish all courses, return an empty array."
      ],
    },
    examples: [
      {
        input: "numCourses = 4, prerequisites = [[1,0],[2,0],[3,1],[3,2]]",
        output: "[0,2,1,3]",
        explanation: "To take course 3 you should have finished both courses 1 and 2. Both courses 1 and 2 should be taken after you finished course 0. So one correct course order is [0,1,2,3]. Another correct ordering is [0,2,1,3].",
      },
    ],
    constraints: ["1 ≤ numCourses ≤ 2000", "0 ≤ prerequisites.length ≤ numCourses * (numCourses - 1)"],
    starterCode: {
      javascript: `function findOrder(numCourses, prerequisites) {\n  // Write your solution here\n}`,
      python: `def findOrder(numCourses: int, prerequisites: List[List[int]]) -> List[int]:\n    # Write your solution here\n    pass`,
      java: `class Solution {\n    public int[] findOrder(int numCourses, int[][] prerequisites) {\n        // Write your solution here\n        return new int[0];\n    }\n}`,
    },
    expectedOutput: {
      javascript: "[0,2,1,3]",
      python: "[0, 2, 1, 3]",
      java: "[0, 2, 1, 3]",
    },
  },

  // --- PATTERN: MATRIX / DP (PATH COUNTING) ---
  "unique-paths-ii": {
    id: "unique-paths-ii",
    title: "Unique Paths II",
    difficulty: "Medium",
    category: "Array • Dynamic Programming • Matrix",
    description: {
      text: "You are given an m x n integer array grid. There is a robot initially located at the top-left corner (grid[0][0]). The robot tries to move to the bottom-right corner (grid[m-1][n-1]). The robot can only move either down or right at any point in time.",
      notes: [
        "An obstacle and space are marked as 1 and 0 respectively in the grid.",
        "A path that the robot takes cannot include any square that is an obstacle.",
        "Return the number of possible unique paths that the robot can take to reach the bottom-right corner."
      ],
    },
    examples: [
      {
        input: "obstacleGrid = [[0,0,0],[0,1,0],[0,0,0]]",
        output: "2",
        explanation: "There is one obstacle in the middle of the 3x3 grid. There are two ways to reach the bottom-right corner: 1. Right -> Right -> Down -> Down, 2. Down -> Down -> Right -> Right",
      },
    ],
    constraints: ["m == obstacleGrid.length", "n == obstacleGrid[i].length", "1 ≤ m, n ≤ 100", "obstacleGrid[i][j] is 0 or 1."],
    starterCode: {
      javascript: `function uniquePathsWithObstacles(obstacleGrid) {\n  // Write your solution here\n}`,
      python: `def uniquePathsWithObstacles(obstacleGrid: List[List[int]]) -> int:\n    # Write your solution here\n    pass`,
      java: `class Solution {\n    public int uniquePathsWithObstacles(int[][] obstacleGrid) {\n        // Write your solution here\n        return 0;\n    }\n}`,
    },
    expectedOutput: {
      javascript: "2",
      python: "2",
      java: "2",
    },
  },

  // --- PATTERN: BITWISE (SINGLE NUMBER VARIATION) ---
  "single-number-ii": {
    id: "single-number-ii",
    title: "Single Number II",
    difficulty: "Medium",
    category: "Array • Bit Manipulation",
    description: {
      text: "Given an integer array nums where every element appears three times except for one, which appears exactly once. Find the single element and return it.",
      notes: [
        "You must implement a solution with a linear runtime complexity and use only constant extra space."
      ],
    },
    examples: [
      {
        input: "nums = [2,2,3,2]",
        output: "3",
      },
      {
        input: "nums = [0,1,0,1,0,1,99]",
        output: "99",
      },
    ],
    constraints: ["1 ≤ nums.length ≤ 3 * 10⁴", "-2³¹ ≤ nums[i] ≤ 2³¹ - 1"],
    starterCode: {
      javascript: `function singleNumber(nums) {\n  // Write your solution here\n}`,
      python: `def singleNumber(nums: List[int]) -> int:\n    # Write your solution here\n    pass`,
      java: `class Solution {\n    public int singleNumber(int[] nums) {\n        // Write your solution here\n        return 0;\n    }\n}`,
    },
    expectedOutput: {
      javascript: "3",
      python: "3",
      java: "3",
    },
  },

  // --- PATTERN: BACKTRACKING (N-QUEENS) ---
  "n-queens": {
    id: "n-queens",
    title: "N-Queens",
    difficulty: "Hard",
    category: "Array • Backtracking",
    description: {
      text: "The n-queens puzzle is the problem of placing n queens on an n x n chessboard such that no two queens attack each other.",
      notes: [
        "Given an integer n, return all distinct solutions to the n-queens puzzle.",
        "Each solution contains a distinct board configuration of the n-queens' placement, where 'Q' and '.' both indicate a queen and an empty space, respectively."
      ],
    },
    examples: [
      {
        input: "n = 4",
        output: '[[\".Q..\",\"...Q\",\"Q...\",\"..Q.\"],[\"..Q.\",\"Q...\",\"...Q\",\".Q..\"]]',
      },
    ],
    constraints: ["1 ≤ n ≤ 9"],
    starterCode: {
      javascript: `function solveNQueens(n) {\n  // Write your solution here\n}`,
      python: `def solveNQueens(n: int) -> List[List[str]]:\n    # Write your solution here\n    pass`,
      java: `class Solution {\n    public List<List<String>> solveNQueens(int n) {\n        // Write your solution here\n        return new ArrayList<>();\n    }\n}`,
    },
    expectedOutput: {
      javascript: '[[\".Q..\",\"...Q\",\"Q...\",\"..Q.\"],[\"..Q.\",\"Q...\",\"...Q\",\".Q..\"]]',
      python: '[[\".Q..\", \"...Q\", \"Q...\", \"..Q.\"], [\"..Q.\", \"Q...\", \"...Q\", \".Q..\"]]',
      java: '[[\".Q..\",\"...Q\",\"Q...\",\"..Q.\"],[\"..Q.\",\"Q...\",\"...Q\",\".Q..\"]]',
    },
  },

};

export const LANGUAGE_CONFIG = {
  javascript: {
    name: "JavaScript",
    icon: "/javascript.png",
    monacoLang: "javascript",
  },
  python: {
    name: "Python",
    icon: "/python.png",
    monacoLang: "python",
  },
  java: {
    name: "Java",
    icon: "/java.png",
    monacoLang: "java",
  },

};