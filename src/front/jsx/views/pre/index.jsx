var React = require('react');
var Layout = require('./layout.jsx');

var Index = React.createClass({
  render: function() {
    return (
      <Layout title={this.props.title}>
        <h1>Hello</h1>
      </Layout>
    );
  }
});

module.exports = Index;
