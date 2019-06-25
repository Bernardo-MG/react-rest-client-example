import React from 'react';

import PropTypes from 'prop-types';

import { Provider } from 'react-redux';
import routes from 'routes';
import { HashRouter as Router } from 'react-router-dom';

import { IntlProvider } from 'react-intl';

import localeData from 'i18n/messages.json';

const language = (navigator.languages && navigator.languages[0])
   || navigator.language
   || navigator.userLanguage;

/**
 * Production root application.
 */
const Root = ({ store }) =>
   (
      <IntlProvider locale={language} messages={localeData}>
         <Provider store={store}>
            <Router>
               {routes}
            </Router>
         </Provider>
      </IntlProvider>
   );

Root.propTypes = {
   /** Application store */
   store: PropTypes.object.isRequired
};

export default Root;
