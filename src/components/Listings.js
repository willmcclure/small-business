import { Table, TableBody, TableCell, TableHead, TableRow } from "@material-ui/core"
import GoogleMap from "./GoogleMap"

const Listings = (props) => {
    console.log(props)
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
            {props.listings.map((listing, index) => (
            <TableRow key={listing.id}>
                <TableCell>{listing.name}Austin Liqour</TableCell>
                <TableCell>{listing.description}We provide adult beverages</TableCell>
                <TableCell>{listing.address}1719 East Manor Rd</TableCell>
                <TableCell>{listing.hours}11am - 11pm</TableCell>
                <TableCell>{listing.url}austinliqour.com</TableCell>
                <TableCell>{listing.phone}512-555-5555</TableCell>
                {/* <TableCell><GoogleMap></GoogleMap></TableCell> */}
            </TableRow>
            ))}
            
        </TableBody>
    </Table>
    )
}

export default Listings 