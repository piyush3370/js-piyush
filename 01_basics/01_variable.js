const accountId = 144553
let accountEmail = "abcd@gmail.com"
var accountPassward = "12345"
accountCity = "jaipur"
let accountState;

// accountId = 2

accountEmail = "hdfh@gmail.com"
accountPassward = "21212121"
accountCity = "mumbai"

// prefer not to use var
// because of issue in block scope and functional scope

console.log(accountId);
console.table([accountId, accountEmail, accountPassward, accountCity,accountState])