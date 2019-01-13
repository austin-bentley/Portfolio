const AWS = require('aws-sdk');
const docClient = new AWS.DynamoDB.DocumentClient({region: 'us-east-1'});

exports.handle = function (event, context, callback) {

    let scanningParams = {
        TableName: 'comments_PRD',
        Limit: '10'
    }

    docClient.scan(scanningParams, function(err, data) {
        if (err) {
            callback(err, null);
        } else {
            callback(null, data);
        }
    });


    //scan can be very expensive, query instead
    // let scanningParams = {
    //     TableName: 'guestbook',
    //     Key: {
    //         'date': 1546727213369
    //     }
    // }

    // docClient.get(scanningParams, function(err, data) {
    //     if (err) {
    //         callback(err, null);
    //     } else {
    //         callback(null, data);
    //     }
    // });


};