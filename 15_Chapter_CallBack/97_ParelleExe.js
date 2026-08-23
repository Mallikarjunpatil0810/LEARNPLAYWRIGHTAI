// ============================================================
// Parallel Execution Example - Real-time E-commerce Dashboard
// Demonstrating Promise.all, Promise.race, Promise.allSettled
// ============================================================

// Simulates fetching order data from an API (1-4s delay)
function fetchOrderData(orderId) {
  return new Promise((resolve) => {
    const delay = Math.floor(Math.random() * 3000) + 1000;
    console.log(`   📦 Fetching Order #${orderId}... (${(delay / 1000).toFixed(1)}s)`);
    setTimeout(() => {
      resolve({
        orderId,
        items: [`Item-A${orderId}`, `Item-B${orderId}`],
        total: Math.round(Math.random() * 500 + 50),
        status: 'confirmed'
      });
    }, delay);
  });
}

// Simulates fetching user profile (0.5-2.5s delay)
function fetchUserProfile(userId) {
  return new Promise((resolve) => {
    const delay = Math.floor(Math.random() * 2000) + 500;
    console.log(`   👤 Fetching User #${userId} profile... (${(delay / 1000).toFixed(1)}s)`);
    setTimeout(() => {
      resolve({
        userId,
        name: `User_${userId}`,
        email: `user${userId}@example.com`,
        tier: userId % 2 === 0 ? 'Premium' : 'Standard'
      });
    }, delay);
  });
}

// Simulates fetching inventory stock (0.8-3.3s delay)
function fetchInventoryStock(productCode) {
  return new Promise((resolve) => {
    const delay = Math.floor(Math.random() * 2500) + 800;
    console.log(`   📊 Checking stock for Product #${productCode}... (${(delay / 1000).toFixed(1)}s)`);
    setTimeout(() => {
      resolve({
        productCode,
        available: Math.random() > 0.2 ? Math.floor(Math.random() * 100 + 10) : 0,
        warehouse: `WH-${String(productCode).charAt(0)}`
      });
    }, delay);
  });
}

// Sequential (one after another) — for comparison
async function runSequential(orderIds, userId, productCodes) {
  console.log('\n🚫 --- SEQUENTIAL EXECUTION ---\n');
  const start = Date.now();

  const orders = [];
  for (const id of orderIds) orders.push(await fetchOrderData(id));
  const user = await fetchUserProfile(userId);
  const stocks = [];
  for (const code of productCodes) stocks.push(await fetchInventoryStock(code));

  console.log(`\n✅ Sequential finished in ${((Date.now()-start)/1000).toFixed(2)}s`);
  return { orders, user, stocks };
}

// Parallel (all at once via Promise.all)
async function runParallel(orderIds, userId, productCodes) {
  console.log('\n⚡ --- PARALLEL EXECUTION (Promise.all) ---\n');
  const start = Date.now();

  const [orders, user, stocks] = await Promise.all([
    Promise.all(orderIds.map(id => fetchOrderData(id))),
    fetchUserProfile(userId),
    Promise.all(productCodes.map(code => fetchInventoryStock(code)))
  ]);

  console.log(`\n✅ Parallel finished in ${((Date.now()-start)/1000).toFixed(2)}s`);
  return { orders, user, stocks };
}

// Promise.race — first settled wins
async function runRace() {
  console.log('\n🏁 --- PROMISE.RACE (first to complete wins) ---\n');
  const winner = await Promise.race([
    fetchOrderData(101),
    fetchUserProfile(202),
    fetchInventoryStock('P999')
  ]);
  console.log('\n🥇 Winner:', JSON.stringify(winner, null, 2));
  return winner;
}

// Promise.allSettled — get all results even if some fail
async function runAllSettled() {
  console.log('\n📋 --- PROMISE.ALLSETTLED (all results including failures) ---\n');
  const tasks = [
    fetchOrderData(301),
    fetchUserProfile(302),
    new Promise((_, reject) =>
      setTimeout(() => reject(new Error('❌ Network timeout')), 1200)
    ),
    fetchInventoryStock('P606')
  ];

  const results = await Promise.allSettled(tasks);
  results.forEach((r, i) => {
    if (r.status === 'fulfilled')
      console.log(`   ✅ Task ${i+1} succeeded:`, JSON.stringify(r.value));
    else
      console.log(`   ❌ Task ${i+1} failed:`, r.reason.message);
  });
  return results;
}

// ---------- Run everything ----------
(async () => {
  console.log('='.repeat(55));
  console.log('🚀  PARALLEL EXECUTION DEMO  🚀');
  console.log('='.repeat(55));

  const orderIds = [101, 102, 103];
  const userId = 42;
  const productCodes = ['P100', 'P200'];

  await runSequential(orderIds, userId, productCodes);
  await runParallel(orderIds, userId, productCodes);
  await runRace();
  await runAllSettled();

  console.log('\n🎯 All demos completed!');
})();