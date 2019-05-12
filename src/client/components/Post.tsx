import * as React from 'react';
import { string } from 'prop-types';
import NewsPromo from '@bbc/news-web-components/lib/organisms/NewsPromo'

export default class Post extends React.Component<any, any>  {
    constructor(props: any) {
        super(props);

    }

    render() {
        return (
            <h3>post</h3>
        )
    }
}