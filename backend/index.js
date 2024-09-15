import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import dotenv from "dotenv";
import axios from 'axios'
dotenv.config();

const app = express();
app.use(cors())
app.use(express.json())

//Database connection with MongoDB
mongoose.connect(process.env.MONGO_URI).then(()=>{
    console.log('Connected to MongoDB!')
}).catch((err)=>{
    console.log(err)
})


//Schema for creating Products

const tickerSchema = new mongoose.Schema({
    name:{
        type: String,
        required:true,
    },
    last:{
        type:Number,
        required:true,
    },
    buy:{
        type:Number,
        required:true,
    },
    sell:{
        type:Number,
        required:true,

    },
    volume:{
        type:Number,
        required:true,
    },
    base_unit:{
        type:Number,
        required:true,
    },
})

const Ticker = mongoose.model('Ticker', tickerSchema);

// Route to fetch and store top 10 results from WazirX API
app.get('/fetch-top-tickers', async (req, res) => {
    try {
        // Fetch data from WazirX API
        const response = await axios.get('https://api.wazirx.com/api/v2/tickers');
        
        // Get the top 10 results
        const tickers = Object.values(response.data).slice(0, 10);

        // Prepare data to store in MongoDB
        const tickerData = tickers.map(ticker => ({
            name: ticker.name,
            last: ticker.last,
            buy: ticker.buy,
            sell: ticker.sell,
            volume: ticker.volume,
            base_unit: ticker.base_unit
        }));

        // Insert data into the database
        await Ticker.insertMany(tickerData);

        res.status(200).send('Top 10 tickers data saved successfully!');
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).send('Error fetching data');
    }
});



app.listen(3000,()=>{
    console.log('server is running on port 3000')
})