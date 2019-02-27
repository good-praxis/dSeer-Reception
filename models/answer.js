var Random = require('random-js');

module.exports = {
  list: [
    //Ask
    'Found something broking in FGP? Find out how to solve this issue',

    'Ask the reception',
    'The reception knows the answer',
    'Have you asked the reception?',
    'I sense that the reception knows',
    'Go ask the reception',
    'Maybe ask the reception'
  ],

  create: function(index) {
    var self = Object.create(this);

    self.index = index !== undefined ? index : self.random(self.list.length - 1);
    self.message = self.list[self.index];
    self.type = self.getType();
    return self;
  },

  getType: function () {
    if (this.index === 0) return 'ask'
    return 'maybe';
  },

  random: function(max) {
    return new Random(Random.engines.mt19937().autoSeed()).die(max);
  }
};
