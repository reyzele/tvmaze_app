import React, { PureComponent, Fragment } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { getShowRequest, showSelector, isLoading, error } from 'ducks/shows';
import { Button } from 'reactstrap';
import './show-page.scss';
import './cast.scss';

class ShowPage extends PureComponent {
  componentDidMount = () => {
    const { getShowRequest, match } = this.props;
    const id = match.params.id;

    getShowRequest(id);
  };

  goBack = () => {
    this.props.history.goBack();
  };

  renderShow(show) {
    const { name, image, summary, cast } = show;

    return (
      <div className="show-page">
        <div className="show-page__top">
          <Button
            color="primary"
            onClick={this.goBack}
            className="show-page__link"
          >
            Go back
          </Button>
          <h1 className="show-page__title">{name}</h1>
          <div className="show-page__pic">
            <img className="show-page__img" src={image} alt={name} />
          </div>

          <p
            className="show-page__text"
            dangerouslySetInnerHTML={{ __html: summary }}
          />
        </div>

        <div className="cast">
          <h2>Cast</h2>
          <div className="cast__body">
            {cast.map((person, index) => (
              <div className="cast__person t-person" key={index}>
                <h3>
                  <p>{person.name}</p>
                </h3>
                <img src={person.image} alt={person.name} />
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  render() {
    const { isLoading, error, show } = this.props;

    return (
      <Fragment>
        {isLoading ? (
          <div>Retrieving data ...</div>
        ) : error ? (
          <p>{error}</p>
        ) : (
          this.renderShow(show)
        )}
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  show: showSelector(state),
  isLoading: isLoading(state),
  error: error(state)
});

const mapDispatchToProps = {
  getShowRequest
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(ShowPage)
);
