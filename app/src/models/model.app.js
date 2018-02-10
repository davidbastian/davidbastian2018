class AppModel {
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
