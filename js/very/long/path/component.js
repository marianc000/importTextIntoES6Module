import loadHTML from '../../../utils/templates/loadHTML.js'

// a substitute of
// import template from './temlplate.html';
const template = await loadHTML('./template.html', import.meta.url);

document.getElementById('root').innerHTML = template;