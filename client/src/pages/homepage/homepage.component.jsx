import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectDirectorySections } from '../../redux/directory/directory.selectors';

import DirectoryItem from '../../components/directory-item/directory-item.component';

import './homepage.styles.scss';

const Homepage = ({ sections }) => (
  <section className="homepage">
    <div className="homepage__directory">
      {sections.map((section) => (
        <DirectoryItem key={section.id} section={section} />
      ))}
    </div>
  </section>
);

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections,
});

export default connect(mapStateToProps)(Homepage);
