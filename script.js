function mincost(arr)
{ 
	if (arr.length <= 1) return 0;

  // Create a min-heap using a priority queue
  const minHeap = [...arr].sort((a, b) => a - b);

  let totalCost = 0;

  // Continue combining ropes until only one remains
  while (minHeap.length > 1) {
    // Remove the two shortest ropes
    const first = minHeap.shift();
    const second = minHeap.shift();

    // Combine the ropes
    const cost = first + second;
    totalCost += cost;

    // Add the combined rope back to the heap
    // Insert it into the correct position to maintain the sorted order
    let inserted = false;
    for (let i = 0; i < minHeap.length; i++) {
      if (cost < minHeap[i]) {
        minHeap.splice(i, 0, cost);
        inserted = true;
        break;
      }
    }
    if (!inserted) {
      minHeap.push(cost);
    }
  }

  return totalCost;
}
//write your code here
// return the min cost
  
}

module.exports=mincost;
