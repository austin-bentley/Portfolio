const AWS = require('aws-sdk');
const docClient = new AWS.DynamoDB.DocumentClient({region: 'us-east-1'});

exports.handle = function (event, context, callback) {
    const currentDate = new Date().toISOString().replace(/T/, ' ').replace(/\..+/, '');
    let params = {
        Item: {
            date: currentDate,
            message: event.message
        },
        TableName: 'comments_PRD'
    }

    if( !event.message ) {
        callback(new Error(JSON.stringify('Invalid: Message field required!')), null);
    } else {
        docClient.put(params, function(err, data){
            if(err) {
                callback(err, null);
            } else {
                callback(null, JSON.stringify({'Success': currentDate}));
            }
        });
    }
};