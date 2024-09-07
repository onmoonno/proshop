
import math

def minOperationsToOrganize(items):
    n = len(items)
    items2 = items.copy()
    operations1, operations2 = 0, 0

    for i, num in enumerate(items):
        if num % 2 != i % 2:
            num //= 2
            operations1 += 1
        if num == 0:
            break
    if i != n - 1:
        operations1 = inf
    
    for j, num in enumerate(items2):
        if num % 2 == j % 2:
            num //= 2
            operations2 += 1
        if num == 0:
            break

    if j != n - 1:
        operations2 = inf
        
    return min(operations1, operations2)


    # # Helper function to compute operations needed to change an even number to odd
    # def countOpsToOdd(x):
    #     ops = 0
    #     while x % 2 == 0:
    #         x //= 2
    #         ops += 1
    #     return ops

    # i = 0
    # while i < n - 1:
    #     # 如果相邻两个元素有相同的奇偶性
    #     if items[i] % 2 == items[i + 1] % 2:
    #         # 如果是偶数，我们需要计算将其变成奇数的操作次数
    #         if items[i] % 2 == 0:
    #             # 比较当前元素和下一个元素的操作次数，选择较小的进行操作
    #             if countOpsToOdd(items[i]) <= countOpsToOdd(items[i + 1]):
    #                 operations += countOpsToOdd(items[i])
    #                 # 调整当前元素为奇数
    #                 while items[i] % 2 == 0:
    #                     items[i] //= 2
    #             else:
    #                 operations += countOpsToOdd(items[i + 1])
    #                 # 调整下一个元素为奇数
    #                 while items[i + 1] % 2 == 0:
    #                     items[i + 1] //= 2
    #         else:  # 如果是奇数，只需要一次操作将其变为偶数
    #             items[i + 1] //= 2
    #             operations += 1
    #     i += 1

    # return operations



items = [4, 10, 10, 6, 2]
items2 = [5, 4, 10, 10, 6, 3]
print(minOperationsToOrganize(items2))  # Output: 2
