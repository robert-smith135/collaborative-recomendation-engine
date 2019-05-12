import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Post from './Post'
import IPost from './Post';
import '../sass/main.scss';
import Rating from 'react-rating';
import { Nav, NavItem, NavLink,   Navbar,
    NavbarToggler,
    NavbarBrand, } from "shards-react";
import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css";
import MainNav from './MainNav'
import { Container, Row, Col } from "shards-react";
import { FormSelect } from "shards-react";
import { Form, FormInput, FormGroup } from "shards-react";
import axios from 'axios'

export default class App extends React.Component<any, any> {
    constructor(props: any) {
        super(props)
        this.state = {
            userList: [],
            movieList: []
        }
    }

    componentDidMount() {
        //get json data
        console.log('component mounted');
        this.getUsers();
        this.getMovies();
    }

    renderHeading() {
        return (
            <MainNav/>
        );
    }

    getUsers(){
        axios.get('/users')
            .then((response) => {
                this.setState({
                    userList: response.data
                })
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    getMovies(){
        axios.get('/movies')
            .then((response) => {
                this.setState({
                    movieList: response.data
                })
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    renderUserList() {
        if(this.state.userList && this.state.userList.length > 0){
            return this.state.userList.map((user) => {
                return <option value={user._id}>User: {user._id}, occupation: {user.occupation}</option>
            })
        }
    }

    rednerMovieList() {
        if(this.state.movieList && this.state.movieList.length > 0){
            return this.state.movieList.map((movie) => {
                return <option value={movie._id}>{movie.movie_title}</option>
            })
        }
    }

    renderUserDropdown() {
        return (
            <FormSelect id='#user-dropdown'>
                {this.renderUserList()}
            </FormSelect>
        )
    }

    renderMovieDropdown() {
        return (
            <FormSelect>
                {this.rednerMovieList()}
            </FormSelect>
        )
    }

    render() {
        return (
            <React.Fragment>
                {this.renderHeading()}
                <Container className="dr-example-container">
                    <Row>
                        <Col sm="12" lg="12" xl="12">
                            <FormGroup>
                                <h3>Current Users:</h3>
                                {this.renderUserDropdown()}
                            </FormGroup>
                            <FormGroup>
                                <h3>Current Movies:</h3>
                                {this.renderMovieDropdown()}
                            </FormGroup>
                            <h3>Selected User:</h3>
                            <h3>Ratings:</h3>
                            <h3>Recomendations:</h3>
                        </Col>
                    </Row>
                </Container>
            </React.Fragment>
        )
    }
}