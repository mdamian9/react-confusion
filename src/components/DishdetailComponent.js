import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, Media } from 'reactstrap';

class DishDetail extends Component {

    constructor(props) {
        super(props);
    };

    componentDidMount() {
        console.log("DishDetailComponent Mounted");
    };

    componentDidUpdate() {
        console.log("DishDetailComponent Update");
    };

    renderDish(dish) {
        if (dish != null)
            return (
                <Card>
                    <CardImg top src={dish.image} alt={dish.name} />
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            );
        else
            return (
                <div></div>
            );
    };

    renderComments(commentsArr) {
        if (commentsArr != null) {
            const comments = commentsArr.map((comment) => {
                return (
                    <Media list key={comment.id} className="list-unstyled">
                        <Media tag="li">
                            <p>{comment.comment}</p>
                        </Media>
                        <Media tag="li">
                            -- {comment.author}, {new Intl.DateTimeFormat('en-US',
                                { year: 'numeric', month: 'long', day: '2-digit' }).format(new Date(comment.date))}
                        </Media>
                    </Media>
                );
            });
            return (
                <div>
                    <Media>
                        <h4>Comments</h4>
                    </Media>
                    {comments}
                </div>
            );
        } else {
            return (<div></div>);
        }
    };

    render() {

        console.log("DishDetailComponent Render");

        let comments;
        if (this.props.dish != null) {
            comments = this.renderComments(this.props.dish.comments);
        };

        return (
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        {this.renderDish(this.props.dish)}
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        {comments}
                    </div>
                </div>
            </div>
        );
    };

};

export default DishDetail;