'use strict';

const e = React.createElement;

class LikeButton extends React.Component {

state = {
  restaurants: [],
  error: null,
};

componentDidMount = async () => {
  try {
    const response = await axios.get('http://104.168.122.239:1337/navigations');
    this.setState({ restaurants: response.data });
  } catch (error) {
    this.setState({ error });
  }
};


    render() {
      const { error, restaurant } = this.state;

      // Print errors if any
      if (error) {
        return <div>An error occured: {error.message}</div>;
      }

      return (
        <div className="App">
          <ul>
            {this.state.restaurants.map(restaurant => (
              <li key={restaurant.id}>{restaurant.title}</li>
            ))}
          </ul>
        </div>
      );
    }
}

// Find all DOM containers, and render Like buttons into them.
document.querySelectorAll('.navbarsExample07')
  .forEach(domContainer => {
    // Read the comment ID from a data-* attribute.
    //const commentID = parseInt(domContainer.dataset.commentid, 10);
    ReactDOM.render(
      e(LikeButton, { }),
      domContainer
    );
  });
