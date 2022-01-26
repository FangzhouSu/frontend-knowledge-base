# 力扣面试必刷题！

> - 力扣HOT100 公认的必刷题，面试的超级高频
> - 剑指Offer 经典中的经典，面试必刷！
>
> 以上只选取easy、medium难度的题目进行完成 从21/12/18开始每日至少一题！多敲代码少做总结了这里！
>
> 每个专题的题目顺序：easy——medium 先甜后苦了属于是~

## 力扣HOT100 

### [数组](https://leetcode-cn.com/problemset/all/?listId=2cktkvj&page=1&topicSlugs=array)

#### [1. 两数之和](https://leetcode-cn.com/problems/two-sum/)

- `哈希表`

```js
var twoSum = function(nums, target) {
    let map = new Map()
    for(let i = 0; i < nums.length; i++) {
        if(map.has(target - nums[i])) {
            return [i, map.get(target - nums[i])]
        }
        else {
            map.set(nums[i], i)
        }
    }
};
```

#### [53. 最大子数组和](https://leetcode-cn.com/problems/maximum-subarray/)

- `贪心法`

```js
var maxSubArray = function(nums) {
    let maxSum = nums[0]
    let sum = nums[0]
    for(let i = 1; i < nums.length; i++) {
        if(sum < 0) {

            sum = nums[i]
        }
        else {
            sum += nums[i]
        }
        maxSum = Math.max(sum, maxSum)
    }
    return maxSum
};
```

#### [121. 买卖股票的最佳时机](https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock/)

```js
var maxProfit = function(prices) {
    let maxProfit = 0
    let minPrice = prices[0]
    for (let i = 0; i < prices.length - 1; i++) {
        minPrice = minPrice < prices[i] ? minPrice : prices[i]
        maxProfit = Math.max(maxProfit, prices[i + 1] - minPrice)
    }
    return maxProfit
};
```

#### [136. 只出现一次的数字](https://leetcode-cn.com/problems/single-number/)

- `异或位运算`

![image-20220111234812373](https://gitee.com/su-fangzhou/blog-image/raw/master/202201112348581.png)

```js
var singleNumber = function(nums) {
    let ans = nums[0]
    for (let i = 1; i < nums.length; i++) {
        ans ^= nums[i]
    }
    return ans
};
```



### [字符串](https://leetcode-cn.com/problemset/all/?listId=2cktkvj&page=1&topicSlugs=string)





### [链表](https://leetcode-cn.com/problemset/all/?listId=2cktkvj&page=1&topicSlugs=linked-list)

#### [21. 合并两个有序链表](https://leetcode-cn.com/problems/merge-two-sorted-lists/)

- `迭代法` 按照题意 使用一个preHead 将两个链表按序串联起来

```js
var mergeTwoLists = function(list1, list2) {
    let preHead = new ListNode(0)
    let cur = preHead
    while(list1 !== null && list2 !== null) {
        if(list1.val <= list2.val) {
            cur.next = list1
            list1 = list1.next
        }
        else {
            cur.next = list2
            list2 = list2.next
        }
        cur = cur.next
    }
    cur.next = list1 === null ? list2 : list1
    return preHead.next
};
```



#### [141. 环形链表](https://leetcode-cn.com/problems/linked-list-cycle/)

- `快慢指针`

```js
var hasCycle = function(head) {
    let slow = head
    let fast = head
    while(fast !== null && fast.next !== null) {
        slow = slow.next
        fast = fast.next.next   
        if(slow === fast) {
            return true
        } 
    }  
    return false
};
```

#### [160. 相交链表](https://leetcode-cn.com/problems/intersection-of-two-linked-lists/)



#### [206. 反转链表](https://leetcode-cn.com/problems/reverse-linked-list/)

- `一前一后的双指针`

```js
var reverseList = function(head) {
    let pre = null
    let cur = head
    while(cur !== null) {
        let next = cur.next
        // 下面三步让局部的两个结点指向反转&各自前进一个结点
        cur.next = pre
        pre = cur
        cur = next
    }
    return pre
};
```



#### [234. 回文链表](https://leetcode-cn.com/problems/palindrome-linked-list/)









#### [2. 两数相加](https://leetcode-cn.com/problems/add-two-numbers/)





#### [19. 删除链表的倒数第 N 个结点](https://leetcode-cn.com/problems/remove-nth-node-from-end-of-list/)







### [树](https://leetcode-cn.com/problemset/all/?listId=2cktkvj&page=1&topicSlugs=tree)

#### [94. 二叉树的中序遍历](https://leetcode-cn.com/problems/binary-tree-inorder-traversal/)[思路](https://leetcode-cn.com/problems/binary-tree-inorder-traversal/#)

- `DFS递归`

```js
var inorderTraversal = function(root) {
    const res = []
    function dfs(root) {
        if(root === null) {
            return;
        }
        dfs(root.left)
        res.push(root.val)
        dfs(root.right)
    }
    dfs(root)
    return res
};
```



#### [101. 对称二叉树](https://leetcode-cn.com/problems/symmetric-tree/)

- `DFS递归`

```js
var isSymmetric = function(root) {
    function dfs(left, right) {
        if(left === null && right === null) {
            return true
        }
        if(left === null || right === null) {
            return false
        }
        if(left.val !== right.val) {
            return false;   
        }
        return dfs(left.left, right.right) && dfs(left.right, right.left)
    }
    return dfs(root.left, root.right)
};
```



#### [104. 二叉树的最大深度](https://leetcode-cn.com/problems/maximum-depth-of-binary-tree/)

- `DFS递归`

```js
var maxDepth = function(root) {
    function dfs(root) {
        if(root === null) {
            return 0
        }
        let leftDepth = dfs(root.left)
        let rightDepth = dfs(root.right)
        return Math.max(leftDepth, rightDepth) + 1
    }
    return dfs(root)
};      
```







#### [226. 翻转二叉树](https://leetcode-cn.com/problems/invert-binary-tree/)

- `DFS递归`

```js
var invertTree = function(root) {
    function dfs(root) {
        if(root === null) {
            return null// 到达最底部时需要返回null-意味着空节点
        }
        // 将当前遍历到的root的左右孩子换位置
        [root.left, root.right] = [dfs(root.right), dfs(root.left)]
        return root
    }
    return dfs(root)
};
```



#### [543. 二叉树的直径](https://leetcode-cn.com/problems/diameter-of-binary-tree/)

- `DFS递归`

```js
var diameterOfBinaryTree = function(root) {
    let ans = 1
    // 求深度的DFS方法，顺带着把ans（最大直径）更新了~
    function dfs(root) {
        if(root === null) {
            return 0
        }
        let left = dfs(root.left)
        let right = dfs(root.right)
        ans = Math.max(ans, left + right + 1)
        return Math.max(left, right) + 1
    }
    dfs(root)
    return ans - 1
};
```





### [栈](https://leetcode-cn.com/problemset/all/?listId=2cktkvj&page=1&topicSlugs=stack)

#### [20. 有效的括号](https://leetcode-cn.com/problems/valid-parentheses/)

- `哈希表+栈`

```js
var isValid = function(s) {
    const map = new Map([
        ['{', '}'],
        ['[', ']'],
        ['(', ')'],
    ])
    const stack = []
    for(let str of s) {
        if(map.has(str)) {
            stack.push(str)
        }
        else {
            if(map.get(stack.pop()) !== str) {
                return false
            }
        }
    }
    return !stack.length
};
```



#### [94. 二叉树的中序遍历](https://leetcode-cn.com/problems/binary-tree-inorder-traversal/)[思路](https://leetcode-cn.com/problems/binary-tree-inorder-traversal/#)

- 借助栈的`DFS迭代`

```js
var inorderTraversal = function(root) {
    const stack = []
    const res = []
    while(stack.length || root !== null) {
        // 01 DFS到最深层(最深处的左孩子节点) 栈中的顺序为中序遍历的结果
        while(root !== null) {
            stack.push(root)
            root = root.left
        }
        // 02 将栈中内容依次弹出
        root = stack.pop()
        res.push(root.val)
        // 03 遍历右子树
        root = root.right
    }
    return res
};
```



#### [155. 最小栈](https://leetcode-cn.com/problems/min-stack/)

- `一趟遍历法`

```js
var MinStack = function() {
  this.stack = []  
};

MinStack.prototype.push = function(val) {
    this.stack.push(val)
};

MinStack.prototype.pop = function() {
    this.stack.pop()
};

MinStack.prototype.top = function() {
    return this.stack[this.stack.length - 1]
};

MinStack.prototype.getMin = function() {
    const { stack } = this// 解构赋值~
    let min = stack[0]
    for(let i = 1; i < stack.length; i++) {
        min = stack[i] < min ? stack[i] : min
    }
    return min
};
```

- `辅助单调栈`-空间换时间

```js
// 初始化栈结构
var MinStack = function() {
    this.stack = [];
    this.stack2 = [];// 辅助d栈
};
// 入栈操作
MinStack.prototype.push = function(val) {
    this.stack.push(val);
    // 本方法的关键——如何维护辅助作用的单调栈！
        // 当辅助栈为空时入栈val & val比辅助栈栈顶元素小时入栈
    if(this.stack2.length === 0 || val <= this.stack2[this.stack2.length - 1]){
        this.stack2.push(val);
    }
};

// 出栈操作
MinStack.prototype.pop = function() {
    if(this.stack.pop() === this.stack2[this.stack2.length - 1]){
        // 若出栈元素和目前辅助栈栈顶元素相同则将其从辅助栈出栈
        this.stack2.pop();
    }
};

// 获取栈顶元素
// 这里没变化~
MinStack.prototype.top = function() {
    if(this.stack === null || this.stack.length === 0){
        // 熟练地完成边界条件判断可能不是必要地，但在不少时候可能会救你一命XD
        return;
    }
    return this.stack[this.stack.length - 1];
};

// 获取栈中最小值
MinStack.prototype.getMin = function() {
    return this.stack2[this.stack2.length - 1];// 直接取栈顶元素即可！
};
```



### [队列](https://leetcode-cn.com/problemset/all/?listId=2cktkvj&page=1&topicSlugs=queue)



# 其他题目收获记录

> 有些题目做起来还是挺有收获的~这里记录下比较有收获的每日一题吧 2021/1/6

## 每日一题

#### [71. 简化路径](https://leetcode-cn.com/problems/simplify-path/) 22/1/6

- `栈+字符串`

```js
// 挺不错的一道栈相关的题目 用时二十分钟左右
var simplifyPath = function(path) {
    let pathS = path.split('/')
    let stack = []
    for (let item of pathS) {
        if (item === '.' || !item) {
            continue
        }
        else if (item === '..') {
            stack.pop()
        }
        else {
            stack.push(DataTransferItem)
        }
    }
    console.log(stack)
    // let res = stack.join('')
    // return !res ? "/" : res 
    return '/' + stack.join('/')// 这个方法不错~解决了 stack为空时无返回值的问题~
};
```

#### [747. 至少是其他数字两倍的最大数](https://leetcode-cn.com/problems/largest-number-at-least-twice-of-others/) 22/1/14

- `简单模拟题`

记录最大值、次大值、最大值下标即可~

> 这里最开始还想着搞单调栈 搞优先队列 后来发现就需要给两个元素做单调即可！考虑不够全面哦！

```js
var dominantIndex = function(nums) {
    let gg = -1, dd = -1// 没错就是哥哥和弟弟
    let index = 0// 记录最大值下标
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > gg) {
            dd = gg// 时刻确认弟弟是次大值
            gg = nums[i]
            index = i
        } else if (nums[i] > dd) {
            dd = nums[i]
        }
    }
    return gg >= dd * 2 ? index : -1
};
```

#### [539. 最小时间差](https://leetcode-cn.com/problems/minimum-time-difference/)

- `排序+挨个计算 对字符串的操作要熟练`

```js
var findMinDifference = function(timePoints) {
    timePoints.sort()
    let t0Minutes = getMinutes(timePoints[0]);
    let preMinutes = t0Minutes;
    let ans = Number.MAX_VALUE;
        for (let i = 1; i < timePoints.length; ++i) {
        const minutes = getMinutes(timePoints[i]);
        ans = Math.min(ans, minutes - preMinutes); // 相邻时间的时间差
        preMinutes = minutes;
    }
    ans = Math.min(ans, t0Minutes + 1440 - preMinutes); // 首尾时间的时间差
    return ans
};
// 根据 "xx:xx" h
const getMinutes = (t) => {
    return ((t[0].charCodeAt() - '0'.charCodeAt()) * 10 + (t[1].charCodeAt() - '0'.charCodeAt())) * 60 + (t[3].charCodeAt() - '0'.charCodeAt()) * 10 + (t[4].charCodeAt() - '0'.charCodeAt());
}

```



## 力扣周赛

### 22/1/16单周赛

#### [5980. 将字符串拆分为若干长度为 k 的组](https://leetcode-cn.com/problems/divide-a-string-into-groups-of-size-k/)

- `简单模拟`

  > 很简单 也很棒的字符串题目~
  >
  > 之前做字符串的题总是先将其转变为数组再去思考，就很复杂！这样子多简单！

```js
var divideString = function(s, k, fill) {
    const ans = []
    let str = ""
    for (const word of s) {
        str += word
        if (str.length === k) {
            ans.push(str)
            str = ''
        }
    }
    if (str.length > 0 && str.length < k) {
        while (str.length < k) {
            str += fill
        }
        ans.push(str)
    }
    return ans
};
```

#### [5194. 得到目标值的最少行动次数](https://leetcode-cn.com/problems/minimum-moves-to-reach-target-score/)

- `逆向思维`

```js
var minMoves = function(target, maxDoubles) {
    let count = 0
    while (target !== 1) {
        // 能整除（偶数） 就整除
        if (target % 2 === 0 && maxDoubles > 0) {
            target /= 2
            maxDoubles -= 1
            count++
        }
        // 暂且无法整除（是奇数） 但是还有整除的机会
        else if (maxDoubles > 0) {
            target -= 1
            count++
        }
        // 已经m
        else {
            count += target - 1
            target = 1
        }   
    }
    return count
};
```

