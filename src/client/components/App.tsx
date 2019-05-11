import * as React from 'react';
import Post from './Post'
import IPost from './Post';

export default class App extends React.Component<any, any> {
    constructor(props: any) {
        super(props)
    }

    componentDidMount() {
        //get json data
        console.log('component mounted');
    }

    renderPosts() {
        console.log('this is ', this.state);
        return (
            <h1>These are the posts</h1>
        )
    }

    render() {
        return (
            <React.Fragment>
                <h1>This is the App Component</h1>
                {this.renderPosts()}
            </React.Fragment>
        )
    }
}