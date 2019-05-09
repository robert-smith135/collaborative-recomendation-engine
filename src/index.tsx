import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as json from '../data/front-page.json';

console.log('react do mhere is ', ReactDOM)

import App from './components/App'

let stories = [];
        
json.content.groups.forEach((item) => {
    item.items.forEach((story: any) => {
        //console.log('story is ', story);
        stories.push(story);
    })
});

console.log('stories before passing is ', stories)

ReactDOM.render(<App stories={stories}/>, document.getElementById('react-root'));

