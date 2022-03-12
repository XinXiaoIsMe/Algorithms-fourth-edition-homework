function insertAfter (firstNode, secondNode) {
  if (firstNode === null || secondNode === null) return
  secondNode.next = firstNode.next
  firstNode.next = secondNode
}

module.exports = insertAfter
