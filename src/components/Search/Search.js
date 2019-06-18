import React, { PureComponent } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import ShowPreview from 'components/ShowPreview';
import { seriesSelector, isLoading, error, searchRequest } from 'ducks/search';
import { Container, Button, Input } from 'reactstrap';
import { Row } from 'reactstrap';
import './Search.scss';

class Search extends PureComponent {
  state = {
    query: ''
  };

  handleSearchFieldInput = event => {
    const value = event.target.value;
    this.setState({ query: value });
  };

  handleSearchButtonClick = () => {
    const { searchRequest } = this.props;
    const { query } = this.state;

    if (query) searchRequest(query);
  };

  handleKeyPress = event => {
    if (event.key === 'Enter') {
      this.handleSearchButtonClick();
    }
  };

  render() {
    const { query } = this.state;
    const { series, isLoading, error } = this.props;

    return (
      <Container>
        {isLoading ? (
          <div>Searching ...</div>
        ) : (
          <div className="search">
            <div className="search__header">
              <Input
                type="text"
                placeholder="Type name of the series"
                value={query}
                onKeyPress={this.handleKeyPress}
                onChange={this.handleSearchFieldInput}
              />
              <Button
                className="search__btn"
                onClick={this.handleSearchButtonClick}
              >
                Search
              </Button>
            </div>

            {error ? (
              <div>{error}</div>
            ) : (
              <Row className="search__preview t-search-result">
                {series.map(({ id, name, summary, image }) => (
                  <ShowPreview key={id} {...{ id, name, summary, image }} />
                ))}
              </Row>
            )}
          </div>
        )}
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  series: seriesSelector(state),
  isLoading: isLoading(state),
  error: error(state)
});

const mapDispatchToProps = {
  searchRequest
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Search)
);
