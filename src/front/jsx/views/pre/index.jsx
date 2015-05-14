var React = require('react');

var Index = React.createClass({
  render: function() {
    return (
      <html>
        <head>
          <title>{this.props.title}</title>
        </head>
        <body>
          <div id='app-root' />
        </body>
        <script src='/js/index.js'></script>
      </html>
    );
  }
});

module.exports = Index;
