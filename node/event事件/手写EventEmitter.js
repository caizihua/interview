function EventEmitter() {
  this._events = Object.create(null);
}

EventEmitter, defaultMaxListeners = 10;

EventEmitter.prototype.addListener = EventEmitter.prototype.on;

EventEmitter.prototype.eventNames = function () {
  return Object.keys(this._events)
}

EventEmitter.prototype.setMaxListeners = function (n) {
  this._count = n;
}

EventEmitter