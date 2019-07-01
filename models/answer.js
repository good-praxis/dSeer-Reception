var Random = require('random-js');

module.exports = {
  list: [
    //Ask
    'Ask a question about the synthesis semester...',

    'Ask again in a week',
    "I'll answer that in a week",
    'Please look at the wiki',
    'Ask your assessor',
    'You should ask your assessor',
    "That's for your assessor to decide",
    'Ask your assessor',
    'You should ask your assessor',
    "That's for your assessor to decide"
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
