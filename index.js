// Import the required modules
const express = require('express');
const axios = require('axios');

// Initialize the Express app
const app = express();

// Use JSON middleware to parse incoming requests
app.use(express.json());

// Route that sends a POST request to another API (e.g., service 2)
app.post('/svc2-add', async (req, res) => {
    try {
        // JSON payload to send in the POST request
        const dataToSend = {
            number1: 1,
            number2: 2
        };

        // Make a POST request to an external API using Axios
        const response = await axios.post('http://vm.subroto.xyz/api/hello', dataToSend);

        // Send the response from the external API back to the client
        res.status(200).json({
            message: 'Data sent successfully',
            responseData: response.data
        });
    } catch (error) {
        // Handle any errors that occur during the request
        res.status(500).json({
            message: 'An error occurred',
            error: error.message
        });
    }
});

// Route that handles /api/hello requests
app.post('/api/hello', (req, res) => {
    const body = req.body;
    // Send back the received data as JSON
    res.json(body);
});

// Start the Express server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
