// module.exports={
//     password:"B7CjjGCqbWkZNAE",
//     username:"ayush",
//     dburl:"mongodb://ayush:B7CjjGCqbWkZNAE@ds261644.mlab.com:61644/pravah2019",
//     captchakey:"6LdwUo0UAAAAANtFKATQWN0yNfC0lTZRu2x-3L7i",
// }


module.exports={
    password:process.env.PASSWD,
    username:process.env.USERNAME,
    dburl:process.env.DBURL,
    captchakey:process.env.CAPTCHAKEY,
}