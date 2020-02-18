
class Controller {
  constructor(model, view) {
    this.model = model
    this.view = view
    this.setView(model);

  }

  setView(model){
    this.view.setup(model.data);
    
  }

  updateView(){

  }

}

export default Controller;
