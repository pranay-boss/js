const accountID=144553           //cannot be changed
let accountEmail="pn@gmail.com"  
var password="1234"
accountcity="Jaipur" //bilkul bhi acha tarika nhi hai

//accountID=1123  it remains fixed

/* prefer not to use var
   because of issue in block scope and functional scope  
*/

accountEmail="pn1234@gmail.com"
password="2312"
accountcity="Dehradun"

console.log(accountID)

console.table([accountID, accountEmail,password,accountcity])
