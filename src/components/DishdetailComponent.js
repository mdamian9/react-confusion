import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, Media } from 'reactstrap';


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
        commentsCard = <RenderComments comments={props.dish.comments} />;
        console.log(props.dish.comments);
    };

    return (
        <div className="container">
            <div className="row">
                <RenderDish dish={props.dish} />
                {commentsCard}
            </div>
        </div>
    );
};

export default DishDetail;