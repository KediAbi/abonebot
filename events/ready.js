const chalk = require("chalk");
const moment = require("moment");
const Discord = require("discord.js");
const ayarlar = require("../ayarlar.json");

var prefix = ayarlar.prefix;

module.exports = client => {
  var oynuyorkısımları = [
    "Youtube Merziki",
    ",abone-say",
    ",abone-sıfırla",
    "abone"
  ];

  setInterval(function() {
    client.user.setActivity(oynuyorkısımları, { type: "WATCHING" });
  });
};
