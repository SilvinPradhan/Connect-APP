import React from "react";
import { Card, Image, Icon, Label, Button } from "semantic-ui-react";
import moment from "moment";
import { Link } from "react-router-dom";

function PostCard({
  post: { body, createdAt, id, username, likeCount, commentCount, likes },
}) {

function likePost() {
    console.log('liked!')
}

function commentOnPost() {
    console.log('commented!')
}

  return (
    <div>
      <Card fluid>
        <Card.Content>
          <Image
            floated="right"
            size="mini"
            src="https://scontent-dfw5-2.xx.fbcdn.net/v/t1.0-9/82214742_2536239376505372_4545165212759621632_n.jpg?_nc_cat=100&_nc_sid=09cbfe&_nc_ohc=QGQky7d85B8AX9FBrAs&_nc_ht=scontent-dfw5-2.xx&oh=82f96d4a1a23e6379bd705cd117b5c1c&oe=5FB3577E"
          />
          <Card.Header>{username}</Card.Header>
          <Card.Meta as={Link} to={`/posts/${id}`}>
            {moment(createdAt).fromNow()}
          </Card.Meta>
          <Card.Description>{body}</Card.Description>
        </Card.Content>
        <Card.Content extra>
          <Button as="div" labelPosition="right" onClick={likePost}>
            <Button color="green" basic>
              <Icon name="heart" />
            </Button>
            <Label basic color="teal" pointing="left">
              {likeCount}
            </Label>
          </Button>
          <Button as="div" labelPosition="right" onClick={commentOnPost}>
            <Button color="blue" basic>
              <Icon name="comments" />
            </Button>
            <Label basic color="blue" pointing="left">
              {commentCount}
            </Label>
          </Button>
        </Card.Content>
      </Card>
    </div>
  );
}

export default PostCard;
