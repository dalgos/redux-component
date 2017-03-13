/**
 * 딜 상세용 프로토타입 JS
 */

const SelectBox = require('components/SelectBox');
const selectData = [
  { text: '1', value: 1, selected: true },
  { text: '2', value: 2, selected: false },
  { text: '3', value: 3, selected: false },
];

const initialize = (root) => {
  console.log(root);
  const sBox1 = new SelectBox(selectData);
  const sBox2 = new SelectBox(selectData);
  root.appendChild(sBox1);
  root.appendChild(sBox2);
};

(function (root) {
  root.addEventListener('DOMContentLoaded', (evt) => {
    initialize(document.body);
  });
}(window));