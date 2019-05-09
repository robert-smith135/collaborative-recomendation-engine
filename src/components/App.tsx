import * as React from 'react';
import * as json from '../../data/front-page.json';
import Post from './Post'
import IPost from './Post'

export default class App extends React.Component<{stories: Array<IPost>}, {stories: Array<IPost>}> {
    constructor(props: any) {
        super(props)
    }

    renderPosts() {
        console.log('this is ', this.state);
        return this.props.stories.map((post: IPost) => {
            return (
                <Post>
                    {post}
                </Post>
            )
        })
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