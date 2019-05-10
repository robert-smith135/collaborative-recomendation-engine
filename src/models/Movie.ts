import { 
    Model, 
    Column, 
    Table, 
    HasMany, 
} from "sequelize-typescript";

export interface IMovie {
    id: number;
    movie_title: number;
    release_date: String;
    video_release_date: string;
    IMDb_URL: string;
    unknown: boolean;
    Action: boolean;
    Adventure: boolean;
    Animation: boolean;
    Childrens: boolean;
    Comedy: boolean;
    Crime: boolean;
    Documentary: boolean;
    Drama: boolean;
    Fantasy: boolean;
    Film_Noir : boolean;
    Horror: boolean;
    Musical: boolean;
    Mystery: boolean;
    Romance: boolean;
    Sci_Fi : boolean;
    Thriller : boolean;
    War : boolean;
    Western : boolean;
}

@Table
export default class Movies extends Model<Movies> {
    @Column
    id: number;

    @Column
    movie_title: number;

    @Column
    release_date: String;

    @Column
    video_release_date: string;

    @Column
    IMDb_URL: string;

    @Column
    unknown: boolean;

    @Column
    Action: boolean;

    @Column
    Adventure: boolean;
    
    @Column
    Animation: boolean;

    @Column
    Childrens: boolean;

    @Column
    Comedy: boolean;

    @Column
    Crime: boolean;

    @Column
    Documentary: boolean;

    @Column
    Drama: boolean;

    @Column
    Fantasy: boolean;

    @Column
    Film_Noir : boolean;

    @Column
    Horror: boolean;

    @Column
    Musical: boolean;

    @Column
    Mystery: boolean;

    @Column
    Romance: boolean;

    @Column
    Sci_Fi : boolean;

    @Column
    Thriller : boolean;

    @Column
    War : boolean;

    @Column
    Western : boolean;
}