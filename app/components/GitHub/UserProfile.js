var React = require('react');

var UserProfile = React.createClass({
	propTypes: {
		username: React.PropTyops.string.IsRequired,
		bio: React.PropTyops.object.IsRequired
	},
  render: function(){
    return (
      <div>
        <p> USER PROFILE </p>
        <p> Username: {this.props.username} </p>
        <p> Bio: {this.props.bio.name} </p>
      </div>
    )
  }
})

module.exports = UserProfile;