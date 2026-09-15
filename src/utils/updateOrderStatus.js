export function updateOrderStatus(order) {
  if (!order) {
    return order;
  }

  // Keep delivered orders delivered
  if (order.status === "Delivered") {
    return order;
  }

  // Make sure we have a starting time
  const placedTime = order.placedAt
    ? order.placedAt
    : new Date(order.date).getTime();

  const elapsed =
    Date.now() - placedTime;

  let newStatus = "Placed";

  // 10 seconds → Preparing
  if (elapsed >= 10000) {
    newStatus = "Preparing";
  }

  // 20 seconds → Out for Delivery
  if (elapsed >= 20000) {
    newStatus = "Out for Delivery";
  }

  // 30 seconds → Delivered
  if (elapsed >= 30000) {
    newStatus = "Delivered";
  }

  return {
    ...order,
    status: newStatus,
    placedAt: placedTime,
  };
}