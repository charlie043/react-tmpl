var React  = require('react');
var Router = require('react-router');
var {
  DefaultRoute,
  NotFoundRoute,
  Link,
  Route,
  RouteHandler
} = Router;

// Main App View
var App = React.createClass({
  render: function () {
    return (
      <div>
        <RouteHandler />
      </div>
    );
  }
});

// Router
var Pages = require('./views/pages');
console.log(Pages);
var routes = (
  <Route name='Top' path='/' handler={App}>
    <DefaultRoute handler={Pages.Top} />
    <NotFoundRoute handler={Pages.NotFound} />
  </Route>
);

// render
Router.run(routes, function (Handler, state) {
  React.render(<Handler />, document.getElementById('app-root'));
});
