function checkCashRegister(price, cash, cid) {
  const denominations = {
    PENNY: 0.01,
    NICKEL: 0.05,
    DIME: 0.1,
    QUARTER: 0.25,
    ONE: 1,
    FIVE: 5,
    TEN: 10,
    TWENTY: 20,
    'ONE HUNDRED': 100,
  };

  const status = {
    open: {
      status: 'OPEN',
    },
    closed: {
      status: 'CLOSED',
      change: cid,
    },
    insufficient: {
      status: 'INSUFFICIENT_FUNDS',
      change: [],
    },
  };

  let totalInDrawer = cid
    .reduce((totalInDrawer, denomination) => denomination[1] + totalInDrawer, 0)
    .toFixed(2);

  let dueChangeAmount = cash - price;

  if (dueChangeAmount == totalInDrawer) return status.closed;
  if (dueChangeAmount > totalInDrawer) return status.insufficient;

  let changeDenominations = {};
  let currentDenom = 8;

  while (dueChangeAmount > 0 && currentDenom >= 0) {
    if (
      cid[currentDenom][1] > 0 &&
      dueChangeAmount >= denominations[cid[currentDenom][0]]
    ) {
      if (cid[currentDenom][0] in changeDenominations) {
        dueChangeAmount -= denominations[cid[currentDenom][0]];
        dueChangeAmount = dueChangeAmount.toFixed(2);

        cid[currentDenom][1] -= denominations[cid[currentDenom][0]];

        changeDenominations[cid[currentDenom][0]] +=
          denominations[cid[currentDenom][0]];
      } else {
        changeDenominations[cid[currentDenom][0]] = 0;
      }
    } else {
      currentDenom--;
    }
  }

  if (dueChangeAmount == 0) {
    status.open.change = Object.entries(changeDenominations);
    return status.open;
  } else {
    return status.insufficient;
  }
}

checkCashRegister(19.5, 20, [
  ['PENNY', 1.01],
  ['NICKEL', 2.05],
  ['DIME', 3.1],
  ['QUARTER', 4.25],
  ['ONE', 90],
  ['FIVE', 55],
  ['TEN', 20],
  ['TWENTY', 60],
  ['ONE HUNDRED', 100],
]);
