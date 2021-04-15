import { connect} from 'react-redux'
import AddBusiness from '../components/AddBusiness'
import { addListing } from '../redux/actions'

const mapStateToProps = (state) => {
    return {
        listings: state.listings,
        // map: state.map
    }
}

// const mapDispatchToProps = (dispatch) => {
    
// }

export default connect(mapStateToProps)(AddBusiness)