import React from 'react';

import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import ButtonTextField from 'common/containers/ButtonTextField';

import { searchComic } from 'search/actions';

const ComicSearchForm = (props) =>
   <ButtonTextField
      id={props.id}
      label={props.label}
      buttonLabel={props.buttonLabel}
      onClick={props.search}
   />;

ComicSearchForm.propTypes = {
   id: PropTypes.string.isRequired,
   label: PropTypes.string.isRequired,
   buttonLabel: PropTypes.string.isRequired,
   search: PropTypes.func.isRequired
};

const mapStateToProps = () => {
   return {};
};


const mapDispatchToProps = (dispatch) => {
   return {
      search: bindActionCreators(searchComic, dispatch)
   };
};

export default connect(
   mapStateToProps,
   mapDispatchToProps
)(ComicSearchForm);
