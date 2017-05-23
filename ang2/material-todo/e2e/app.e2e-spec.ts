import { MaterialTodoPage } from './app.po';

describe('material-todo App', () => {
  let page: MaterialTodoPage;

  beforeEach(() => {
    page = new MaterialTodoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
