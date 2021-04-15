import { Button, TextField, Typography } from '@material-ui/core'
import { ColorLensRounded } from '@material-ui/icons'
import { userEffect, useState} from 'react'
import { useHistory} from 'react-router'


const AddBusiness = (props) => {
    // const classes = useStyles()
    const history = useHistory()

    const [newListing, setNewListing] = useState({
        name: '',
        description: '',
        address: '',
        hours: '',
        url: '',
        phone: ''
    })

    const handleInput = (event) => {
        let newInput = newListing
        
        // if (event.target.name === 'address') {
        //     newInput.location[event.target.name] = e.target.value
        //     if (event.target.value !== '') {
        //         coords(event.target.value)
        //     }
        // }

        newInput[event.target.name] = event.target.value
        setNewListing({...newListing, newInput})
    }

    // const addIt = () => {
    //     newListing.id = props.listings.length
    //     props.addListing(newListing)
    //     history.pushState("/")
    // }

    return (
        <div>
            <br></br><br></br><br></br><br></br><br></br><br></br><br></br>
            <Typography>Add a Business</Typography>
            <TextField onChange={handleInput} value={newListing.name} name='name' label='Business Name'></TextField>
            <TextField onChange={handleInput} value={newListing.description} name='description' label='Description'></TextField>
            <TextField onChange={handleInput} value={newListing.address} name='address' label='Address'></TextField>
            <TextField onChange={handleInput} value={newListing.hours} name='hours' label='Hours of Operation'></TextField>
            <TextField onChange={handleInput} value={newListing.phone} name='phone' label='Phone'></TextField>
            <Button 
            // onClick={addIt}
            >SAVE BUSINESS INFO</Button>
        </div>
    )
}

export default AddBusiness