import { connect} from 'react-redux'
import Listings from '../components/Listings'


const mapStateToProps = (state) => {
    return {
        user: state.user,
        listings: state.listings,
        // map: state.map
    }
}

// const mapDispatchToProps = (dispatch) => {
    
// }

export default connect(mapStateToProps)(Listings)