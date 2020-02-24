import Data from '../../common/data/data';
class Model {
  constructor() {
    this.data = Data;
    this.carousel = {
      home: {
        percent: 20,

      },
      single: {
        percent: 0
      }
    }
  }
}

export default Model;