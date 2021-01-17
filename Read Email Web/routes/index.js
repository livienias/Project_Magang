const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.render('home')
})

router.get('/data', (req, res)=>{
    const request = require('request')
    const apiurl = 'http://103.76.204.66:55557/WISECON_API/Service1.svc/LogConBranch'

    let data = [];
    request.get(apiurl, (err, res2, body)=>{
        if(err){        
            console.log(err)
        } else{
            const result = JSON.parse(body);
            data = result;
            return res.render('data', { data: data });
        }
    })
})

module.exports = router