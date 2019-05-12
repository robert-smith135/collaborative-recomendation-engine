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
import axios from 'axios';
import { ListGroup, ListGroupItem } from "shards-react";

export default class App extends React.Component<any, any> {
    constructor(props: any) {
        super(props)
        this.state = {
            userList: [],
            movieList: [],
            selectedUsersRatings: [],
            loadingUserRatings: true
        }
    }

    componentDidMount() {
        //get json data
        this.getUsers();
        this.getMovies();
        this.getRatingsForUsers(3)
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

    getRatingsForUsers(id){
        this.setState({
            loadingUserRatings: true
        })
        axios.get('/ratings/user-ratings/' + id)
            .then((response) => {
                this.setState({
                    selectedUsersRatings: response.data,
                    loadingUserRatings: false
                })
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
                this.setState({
                    loadingUserRatings: false
                })
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

    onChangeUser(item) {
        console.log('this is ', this);
        console.log('value is ', item.target.value);
        this.getRatingsForUsers(item.target.value)
    }

    renderUserDropdown() {
        return (
            <FormSelect onChange={this.onChangeUser.bind(this)} id='#user-dropdown'>
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

    renderMovieListItem() {
        if(this.state.selectedUsersRatings && this.state.selectedUsersRatings.length > 0){
            return this.state.selectedUsersRatings.map((item) => {

                return <ListGroupItem>{item.title} Rating: {item.rating}</ListGroupItem>
            })
        }
    }

    renderMovieList() {
        console.log('rendering movie list', this.renderMovieListItem())
        return (
            <ListGroup>
                {this.renderMovieListItem()}
            </ListGroup>
        );
    }

    renderSelectedUsersRatings() {
        if(this.state.loadingUserRatings){
            return <div>Loading</div>
        }
        return (
            <React.Fragment>
                <h3>Ratings:</h3>
                {this.renderMovieList()}
            </React.Fragment>
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
                        </Col>
                    </Row>
                    <Row>
                        <Col sm="12" lg="12" xl="12">
                            <div>
                                <h3>Selected User:</h3>
                            </div>
                                {this.renderSelectedUsersRatings()}
                                <h3>Recomendations:</h3>
                        </Col>
                    </Row>
                </Container>
            </React.Fragment>
        )
    }
}