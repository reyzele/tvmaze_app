import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import { Col, Card } from 'reactstrap';
import './ShowPreview.scss';

class ShowPreview extends PureComponent {
  render() {
    const { id, name, image, summary } = this.props;

    return (
      <Col lg="6" className="preview t-preview" key={id}>
        <Card className="preview__card">
          <Link to={`/shows/${id}`} className="preview__link t-link">
            {name}
          </Link>

          {image != null && (
            <div className="preview__image">
              <img className="preview__image-pic" src={image} alt={name} />
            </div>
          )}

          <p
            className="preview__descr"
            dangerouslySetInnerHTML={{ __html: summary }}
          />
        </Card>
      </Col>
    );
  }
}

export default ShowPreview;
