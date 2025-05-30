import { renderPageTable } from './src/pages/table/pageTable.js';
import { renderGraphics } from './src/pages/graphic/pageGraphics.js';
import { renderReport } from './src/pages/pageReport.js';
import { employee } from './src/data/employee.js';

function actions(){
  document.getElementById('btnList').addEventListener('click', () => renderPage('table'));
  document.getElementById('btnGraphics').addEventListener('click', () => renderPage('graphics'));
  document.getElementById('btnReport').addEventListener('click', () => renderPage('report'));
}

window.onload = function () {
  renderPage("table");
  actions();
};

window.renderPage = function (pageName) {
  window.currentPage = pageName;
  window.showLoading();

  setTimeout(() => {
    switch (window.currentPage) {
      case 'table':
        renderPageTable();
        break;
      case 'graphics':
        renderGraphics(window.currentPageGraphics);
        break;
      case 'report':
        renderReport(employee);
        break;
    }

    document.getElementById('btnList').disabled = (pageName === 'table');
    document.getElementById('btnGraphics').disabled = (pageName === 'graphics');
    document.getElementById('btnReport').disabled = (pageName === 'report');

    window.hideLoading();
  }, 300);
}