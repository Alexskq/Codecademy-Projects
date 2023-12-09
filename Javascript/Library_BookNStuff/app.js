class Media {
  constructor(title) {
    this._title = title;
    this._rating = [];
    this._isCheckedOut = false;
  }

  get title() {
    return this._title;
  }

  get isCheckedOut() {
    return this._isCheckedOut;
  }

  get ratings() {
    return this._ratings;
  }

  set isCheckedOut(newIsCheckedOut) {
    return (this._isCheckedOut = newIsCheckedOut);
  }

  getAverageRating() {
    return this._ratings.reduce(
      (sum, (value) => sum + value / this._ratings.length)
    );
  }

  toggleCheckOutStatus() {
    return this._isCheckedOut != this._isCheckedOut;
  }

  addRating(rating) {
    return this._ratings.push(rating);
  }
}
