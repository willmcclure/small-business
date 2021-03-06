import { Table, TableBody, TableCell, TableHead, TableRow } from "@material-ui/core"
import GoogleMap from "./GoogleMap"
import DeleteIcon from '@material-ui/icons/Delete'
import { removeListing } from "../redux/actions"

const Listings = ({listings, removeListing, user}) => {
    return (
    <Table>    
        <TableHead>
            <TableRow>
                <TableCell>Business Name</TableCell>
                <TableCell>Description</TableCell>
                <TableCell>Address</TableCell>
                <TableCell>Operating Hours</TableCell>
                <TableCell>Website</TableCell>
                <TableCell>Phone Number</TableCell>
                {/* <TableCell>Map</TableCell> */}

            </TableRow>
        </TableHead>
        <TableBody>
            {listings.map((listing, index) => (
            <TableRow key={listing.id}>
                <TableCell>{listing.name}</TableCell>
                <TableCell>{listing.description}</TableCell>
                <TableCell>{listing.address}</TableCell>
                <TableCell>{listing.hours}</TableCell>
                <TableCell>{listing.url}</TableCell>
                <TableCell>{listing.phone}</TableCell>
                {/* <TableCell><GoogleMap></GoogleMap></TableCell> */}
                {document.cookie === 'loggedIn=true' ?
                    <TableCell>
                        <DeleteIcon onClick={() => removeListing(index)}></DeleteIcon>
                    </TableCell>  :
                    null
            }
                 
            </TableRow>
            ))}
        </TableBody>
    </Table>
    )
}

export default Listings 