/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */

//  var findMedianSortedArrays = function(nums1, nums2) {
//     let ary = [...nums1, ...nums2].sort((a, b) => a - b)
//     let mid = ary.length / 2
//     if (ary.length % 2 === 0) return (ary[mid - 1] + ary[mid]) / 2
//     else return ary[Math.floor(mid)]
// };

var findMedianSortedArrays = function(nums1, nums2) {
    let mergedAry = []
    let posN1 = 0, posN2 = 0, idx = 0
    let lenSum = nums1.length + nums2.length
    let midPos = Math.floor(lenSum / 2)
    
    while (mergedAry.length < midPos + 1) {
        if (posN2 === nums2.length || nums1[posN1] < nums2[posN2]) {
            mergedAry[idx] = nums1[posN1++]
        } else if (posN1 === nums1.length || nums1[posN1] >= nums2[posN2]) {
            mergedAry[idx] = nums2[posN2++]
        }
        if (lenSum % 2 === 0 && idx === midPos) {
            return (mergedAry[idx - 1] + mergedAry[idx]) / 2
        } else if (lenSum % 2 !== 0 && idx === midPos) {
            return mergedAry[idx]
        }
        idx++
    }   
};