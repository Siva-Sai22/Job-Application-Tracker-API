const express = require('express');
const companyRoutes = require('./src/routes/company.routes');
const jobRoutes = require('./src/routes/job.routes');

const app = express();

app.use(express.json());
app.use('/api', companyRoutes);
app.use('/api', jobRoutes);
app.use((req,res)=>{
    res.sendStatus(404);
})

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});