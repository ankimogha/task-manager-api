// command => /home/knoldus/mongodb/bin/mongod --dbpath=/home/knoldus/mongodb-data


// const mongodb = require('mongodb')
// const MongoClient = mongodb.MongoClient
// const ObjectID = mongodb.ObjectID

const {MongoClient,ObjectID} = require('mongodb')

const connectionURl = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

// const id = new ObjectID()
// console.log(id)

MongoClient.connect(connectionURl,{ useNewUrlParser: true}, (error, client) => {
    if(error){
        return console.log('Unable to connect to database')
    }

    const db = client.db(databaseName)

    // db.collection('users').findOne({/* name : 'Ankit' */_id: new ObjectID("608661fde0ea943f9a12ef35")} ,(error,user) => {
    //     if(error) {
    //         return console.log('Unable to find')
    //     }

    //     console.log(user)
    // })


    // db.collection('tasks').find({status : true}).toArray((error,user) => {
    //     if(error) {
    //         return console.log('Unable to find')
    //     }

    //     console.log(user)
    // })

//    const updatePromise = db.collection('users').updateOne({
//         _id:new ObjectID("608661fde0ea943f9a12ef35")},
//         {
//             $set: {
//                 name:'Raju'
//             }
//         })
    
//     updatePromise.then((result) => {
//         console.log(result)
//     }).catch((error) => {
//         console.log(error)
//     })
// db.collection('users').updateOne({
//     _id:new ObjectID("608661fde0ea943f9a12ef35")},
//     {
//         $set: {
//             name:'Raju'
//         }
//     }).then((result) => {
//     console.log(result)
// }).catch((error) => {
//     console.log(error)
// })

    // db.collection('tasks').updateMany({
    //     status:false
    // },
    // {
    //     $set:{
    //         status:true
    //     }
    // }).then((result) => {
    //     console.log(result)
    // }).catch((error) => {
    //     console.log(error)
    // })

    // db.collection('users').deleteMany({
    //     age:30
    // }).then((result) => {
    //     console.log(result)
    // }).catch((error) => {
    //     console.log(error)
    // })

    db.collection('tasks').deleteOne({
        discription : "task-3"
    }).then((result) => {
        console.log(result)
    }).catch((error) => {
        console.log(error)
    })

    // db.collection('users').insertOne({
    //     name:'Ankit',
    //     age:23
    // }, (error,result) => {
    //     if(error) {
    //         return console.log('Unable to insert the user')
    //     }

    //     console.log(result.ops)
    // })

    // db.collection('users').insertMany([
    //     {
    //         name:'Mogha',
    //         age:30
    //     },
    //     {
    //         name:'Anku',
    //         age:22
    //     }
    // ], (error,result) => {
    //         if(error) {
    //             return console.log('Unable to insert the user')
    //         }
    
    //         console.log(result.ops)
    //     })

    // db.collection('tasks').insertMany([
    //     {
    //         discription:'task-1',
    //         status:true
    //     },
    //     {
    //         discription:'task-2',
    //         status:true
    //     },
    //     {
    //         discription:'task-3',
    //         status:false
    //     }
    // ],(error,result) => {
    //     if(error) {
    //         return console.log('Unable to add the documents')
    //     }

    //     console.log(result.ops)
    // })
})

