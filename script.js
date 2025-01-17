function mincost(arr)
{ 
	if (arr.length <= 1) return 0;

  
  const minHeap = [...arr].sort((a, b) => a - b);

  let totalCost = 0;
  while (minHeap.length > 1) {
    const first = minHeap.shift();
    const second = minHeap.shift();

    // Combine the ropes
    const cost = first + second;
    totalCost += cost;

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
