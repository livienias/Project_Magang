const request = require('request')
const apiurl = 'http://103.76.204.66:55557/WISECON_API/Service1.svc/LogConBranch'

request.get(apiurl, (err, res, body)=>{
    if(err){
        console.log(err)
    } else{
        const data = JSON.parse(body)
        let result = ''
        for (let i = 0; i < data.length; i++) {
            text += data[i] + "<br>";
            result += '<tr>'
            result += '<td>'+data[i].Name+'</td>'
            result += '</tr>'
          }
          $('#data-table').append(result)
          console.log('Kepanggil..')
    }
})
