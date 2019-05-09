import * as React from 'react';
import { string } from 'prop-types';
import NewsPromo from '../../node_modules/@bbc/news-web-components/lib/organisms/NewsPromo'

export interface IOptions {
    isBreakingNews?: boolean,
    isFactCheck?: boolean
}

export interface ILocators {
    assetUri: string,
    cpsUrn: string
}

export interface IIndexImage {
    id: string,
    subType: string,
    href: string,
    path: string,
    height?: number,
    width?: number,
    copyrightHolder?: string,
    altText?: string
}

export interface IHeadlines {
    headline: string,
    overtyped: string,
    id: string
}

export interface IPostPassport {
    category: {
        categoryId: string,
        categoryName: string
    }
}

export interface IRelatedItem {
    cpsType: string
    headlines?: {
        headline: string, 
        overtyped?: string
    }
    id: string
    locators: {
        assetUri: string, 
        cpsUrn?: string
    }
    summary: string,
    timestamp: number,
    type: string
}

export interface IPost {
    cpsType: string,
    headlines?: IHeadlines,
    id: string,
    indexImage?: IIndexImage,
    passport: IPostPassport
    prominence: string,
    relatedItems?: Array<IRelatedItem>
    section: { subType: string, name: string, uri: string, type: string} 
    summary: string,
    timestamp: number,
    type: "cps" | "vivo" 
}

export default class Post extends React.Component<any, any>  {
    constructor(props: IPost) {
        super(props);

    }

    buildProps(): any {

    }

    renderTitle(story: any) {
        console.log('story here is ', story);
        if(!story.headlines){
            return 'No title'
        };

        return story.headlines.headline
    }

    render() {
        return (
            <h3>{this.renderTitle(this.props.children)}</h3>
        )
    }
}