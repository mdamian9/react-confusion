import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, Media, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';

function RenderDish({ dish }) {
    if (dish != null)
        return (
            <div className="col-12 col-md-5 m-1">
                <Card>
                    <CardImg top src={dish.image} alt={dish.name} />
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            </div>
        );
    else
        return (
            <div></div>
        );
};

function RenderComments({ comments }) {
    if (comments != null) {
        const commentsCard = comments.map((comment) => {
            return (
                <Media key={comment.id} list className="list-unstyled">
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
            <div className="col-12 col-md-5 m-1">
                <Media>
                    <h4>Comments</h4>
                </Media>
                {commentsCard}
            </div>
        );
    } else {
        return (<div></div>);
    }
};

const DishDetail = (props) => {

    console.log("DishDetailComponent Render");

    let commentsCard;
    if (props.dish != null) {
        commentsCard = <RenderComments comments={props.comments} />;
        console.log(props.comments);
    };

    return (
        <div className="container">
            <div className="row">
                <Breadcrumb>
                    <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                    <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                </Breadcrumb>
                <div className="col-12">
                    <h3>{props.dish.name}</h3>
                    <hr />
                </div>
            </div>
            <div className="row">
                <RenderDish dish={props.dish} />
                {commentsCard}
            </div>
        </div>
    );
};

export default DishDetail;