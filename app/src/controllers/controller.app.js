class AppController {
  constructor(model, view) {
    this.view = view;
    this.model = model;

  }

  updateActiveView(view){
    this.model.setActiveView(view);
  }

  setData(data) {
    this.model.setData(data);
  }



}

const controller = new AppController();

export default controller;
