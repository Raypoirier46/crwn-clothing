import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
// import { createStructuredSelector } from 'reselect';

// import { fetchCollectionsStartAsync } from '../../redux/shop/shop.actions';
// import { selectIsCollectionsLoaded } from '../../redux/shop/shop.selectors';

import { fetchCollectionsStart } from '../../redux/shop/shop.actions';

import CollectionsOverviewContainer from '../../components/collections-overview/collections-overview.container';
import CollectionPageContainer from '../collection/collection.container';

// import WithSpinner from '../../components/with-spinner/with-spinner.component';

// import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils';

// import { updatedCollections } from '../../redux/shop/shop.actions';

// const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
// const CollectionPageWithSpinner = WithSpinner(CollectionPage);


class ShopPage extends React.Component {
    // state = {
    //     loading: true
    // };

    // unsubscribeFromSnapshot = null;

    componentDidMount() {
        const { fetchCollectionsStart } = this.props;
            fetchCollectionsStart();
        // const { updatedCollections } = this.props;
        // const collectionRef = firestore.collection('collections');

        // collectionRef.onSnapshot
        // collectionRef.get().then(snapshot => {
        //     const collectionMap = convertCollectionsSnapshotToMap(snapshot);
        //     updatedCollections(collectionMap);
        //     this.setState({ loading: false });
        // });
    }

    render() {
        const { match } = this.props;
        // const { loading } = this.state;
        return (
            <div className='shop-page'>
                <Route 
                    exact path={`${match.path}`} 
                    component={CollectionsOverviewContainer}
                />
                <Route 
                    path={`${match.path}/:collectionId`} 
                    component={CollectionPageContainer}
                />
            </div>
        );
    }
};

// const mapStateToProps = createStructuredSelector({
//     isCollectionsLoaded: selectIsCollectionsLoaded
// })

const mapDispatchToProps = dispatch => ({
    fetchCollectionsStart: () => dispatch(fetchCollectionsStart())
//     updatedCollections: collectionsMap => dispatch(updatedCollections(collectionsMap))
});


export default connect(null, mapDispatchToProps)(ShopPage);
