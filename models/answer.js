var Random = require('random-js');

module.exports = {
  list: [
    //Ask
    'Ask a module question... tap for the answer',

    'Ask your module coordinator',
    'Your module coordinator knows the answer',
    'Have you asked your module coordinator',
    'I sense that your module coordinator knows',
    'Go ask your module coordinator',
    'Maybe ask your module coordinator'
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
