import { Switch, Route } from "react-router-dom";

import { Home } from "../Home";
import { Page404 } from "../Page404";
import { Page1Routes } from "./Page1Routes";
import { Page2Routes } from "./Page2Routes";

export const Router = () => {
  return (
    <Switch>
      {/* exact完全一致、これがないと/配下で全てのページで表示される */}
      <Route exact path="/">
        <Home />
      </Route>
      {/* 書き方① Route　path="/page1" render={() => <Page1 />}*/}
      <Route
        path="/page1"
        render={({ match: { url } }) => (
          <Switch>
            {console.log({ url })}
            {console.log({ Page1Routes })}
            {Page1Routes.map((route) => (
              <Route
                key={route.path}
                exact={route.exact}
                path={`${url}${route.path}`}
              >
                {route.children}
              </Route>
            ))}
          </Switch>
        )}
      />
      {/* 書き方②　<Route path="/page2">
          　　　　　　　　      <Page2 />
                  　</Route> */}
      <Route
        path="/page2"
        render={({ match: { url } }) => (
          <Switch>
            {console.log({ url })}
            {console.log({ Page1Routes })}
            {Page2Routes.map((route) => (
              <Route
                key={route.path}
                exact={route.exact}
                path={`${url}${route.path}`}
              >
                {route.children}
              </Route>
            ))}
          </Switch>
        )}
      />
      <Route path="*">
        <Page404 />
      </Route>
    </Switch>
  );
};
