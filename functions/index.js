const functions = require('firebase-functions');
let cors = require('cors')({ origin: true })
let os = require('os')
let Busboy = require('busboy')
let fs = require('fs')
let path = require('path')

let gcconfig = {
    projectId: 'ecompattern-8d9be',
    keyFilename: 'ecompattern-8d9be-firebase-adminsdk-5t6us-b04ddafb8a.json'
}

// let gcs = require('@google-cloud/storage')(gcconfig)



// exports.uploadFile = functions.https.onRequest((req, res) => {
//     cors(req, res, () => {
//         if (req.method !== 'POST') {
//             return res.status(500).json({
//                 message: 'Not allowed'
//             })
//         }

//         let busboy = new Busboy({ headers: req.headers })
//         let uploadData = null

//         busboy.on('file', (fieldname, file, filename, encoding, mimetype) => {
//             let filepath = path.join(os.tmpdir(), filename)
//             uploadData = { file: filepath, type: mimetype }
//             file.pipe(fs.createWriteStream(filepath))
//         })

//         busboy.on('finish', () => {
//             let bucket = gcs.bucket('ecompattern-8d9be.appspot.com')
//             bucket
//                 .upload(uploadData.file, {
//                     uploadType: 'media',
//                     metadata: {
//                         metadata: {
//                             contentType: uploadData.type
//                         }
//                     }
//                 })
//                 .then(() => {
//                     res.status(200).json({
//                         message: 'it worked'
//                     })
//                 })
//                 .catch(err => {
//                     res.status(500).json({
//                         error: err
//                     })
//                 })
//         })
//     })
//     busboy.end(req.rawBody)
// })