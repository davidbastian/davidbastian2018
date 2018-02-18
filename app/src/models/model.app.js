class AppModel {
  constructor() {
    this.updatingView = false;
    this.firstView = true;
    this.homeScroll = {
      scrollTarget: 0,
      scrollPos: 0,
      dotPosX: 0,
      dotTargetX: 0,
      dotPosY: -40,
      dotTargetY: -40,
    }

  }
  setData(data) {
    this.data = data;
  }

  setActiveView(view) {
    this.view = view;
  }

  getActiveView() {
    return this.view;
  }

  getData() {
    return this.data;
  }
}

const model = new AppModel();

export default model;