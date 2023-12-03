const Queue = require('./queue');

function breadthFirstTraversal(graph, startingVertex) {
  const visited = new Set();
  const queue = new Queue();
  const result = [];

  queue.enqueue(startingVertex);
  visited.add(startingVertex);

  while (!queue.isEmpty()) {
    const currentVertex = queue.dequeue();
    result.push(currentVertex);

    for (const neighbor of graph.adjacencyList[currentVertex]) {
      if (!visited.has(neighbor)) {
        visited.add(neighbor);
        queue.enqueue(neighbor);
      }
    }
  }

  return result;
}

module.exports = breadthFirstTraversal;
