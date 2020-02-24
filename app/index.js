import "./common/styles/_base.scss";
import Model from './src/models/model.app';
import View from './src/views/view.app';
import Controller from './src/controllers/controller.app';

window.App = new Controller(new Model(), new View());