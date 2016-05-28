var React = require('react');

var Repos = React.createClass({
	propTypes: {
		username: React.PropTyops.string.IsRequired,
		repoes: React.PropTyops.array.IsRequired
	},
  render: function(){
    return (
      <div>
        <p> REPOS </p>
        REPOS: {this.props.repos}
      </div>
    )
  }
})

module.exports = Repos;
