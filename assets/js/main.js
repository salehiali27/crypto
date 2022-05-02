fetch("https://api.wallex.ir/v1/markets")
  .then((res) => res.json())
  .then((data) => {
    data = data.result.symbols;
    var coins = [
      "BTCUSDT",
      "ETHUSDT",
      "LTCUSDT",
      "DASHUSDT",
      "ADAUSDT",
      "CAKEUSDT",
      "ATOMUSDT",
      "BCHUSDT",
      "BNBUSDT",
      "EOSUSDT",
      "LINKUSDT",
      "SANDUSDT",
    ];

    coins = coins.map((coin) => {
      return {
        name: data[coin].faBaseAsset,
        price: Math.round(data[coin].stats.bidPrice),
        low: Math.round(data[coin].stats["24h_lowPrice"]),
        high: Math.round(data[coin].stats["24h_highPrice"]),
      };
    });

    coins.forEach((coin) => {
      var table = document.querySelector(".table");
      var tbody = document.createElement("tbody");
      var myCoin = creatTag(coin);
      tbody.appendChild(myCoin);
      table.appendChild(tbody);
    });
  });

function creatTag(coin) {
  var newTr = document.createElement("tr");
  Object.values(coin).forEach((element) => {
    var newTd = document.createElement("td");
    newTd.innerHTML = element;
    newTr.appendChild(newTd);
  });

  return newTr;
}
