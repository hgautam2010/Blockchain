var isValidHashDifficulty = function(hash) {
  for (var i = 0; i < hash.length; i++) {
    if (hash[i] !== "0") {
      break;
    }
  }
  return i >= 3;
}

var calculateHash = function(index, previousHash, timestamp, data, nonce) {
  return Sha256.hash(index + previousHash + timestamp + data + nonce);
}

class Block {
  constructor (index, previousHash, timestamp, data, hash, nonce) {
    this.index = index;
    this.previousHash = previousHash;
    this.timestamp = timestamp;
    this.data = data;
    this.hash = hash;
    this.nonce = nonce;
  }
  static get genesis() {
    
    let index = 0;
    let previousHash = 0;
    let timestamp = new Date();
    let data = "Genesis Block";
    let nonce = 0;
    let nextHash = Sha256.hash(index + previousHash + timestamp + data + nonce);
    while (!isValidHashDifficulty(nextHash)) {
      nonce = nonce + 1;
      timestamp = new Date();
      nextHash = calculateHash(
        index,
        previousHash,
        timestamp,
        data,
        nonce
      );
    }
    return new Block(
      index,
      previousHash,
      timestamp,
      data,
      nextHash,
      nonce
    );
  }
}