// console.log("Hello world")
//  Step 3: Creating the "Server" Arrays
// Declaring variables to simulate server methods, routes, and responses
const serverMethods = ["GET","GET","GET","POST","GET","POST"];
const serverRoutes = ["/","/store","/store-admin","/register","/developer","/login"];
const serverResponses = [
    "HOME",
    "Main Storefront",
    "Manage Products",
    "Registered New User",
    "Developed by: Zeinab Mohamed: zmmohamed@myseneca.ca",
    "User Logged In"];
    
function processRequest(method, route){
    for (let i = 0; i < serverMethods.length; i++){
        if (serverMethods[i] === method && serverRoutes[i] === route){
            return  `200: ${serverResponses[i]}`
        }
    }
        return `404: Unable to process ${method} request for ${route}`;
}
// Manually Testing the "processRequest" Function
console.log(processRequest("GET", "/")); // shows "200: Home"
console.log(processRequest("GET", "/developer")); // shows "200: Developed by: Student Name: Student Email"
console.log(processRequest("POST", "/")); // shows "404: Unable to process POST request for /"
console.log(processRequest("POST", "/")); // shows "404: Unable to process POST request for /"
console.log(processRequest("POST", "/Seneca")); // shows "404: Unable to process POST request for /"

//Automating the Tests by creating a "testRequests" Function
// Step 6: Utility Function to Generate Random Index
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

// Step 6: testRequests Function
function testRequests() {
    const testMethods = ["GET", "POST"];
    const testRoutes = ["/", "/store", "/store-admin", "/register", "/developer", "/login", "/notFound1", "/notFound2"];

    function randomRequest() {
        const randMethod = testMethods[getRandomInt(testMethods.length)];
        const randRoute = testRoutes[getRandomInt(testRoutes.length)];
        console.log(processRequest(randMethod, randRoute));
    }

    setInterval(randomRequest, 1000); // Run every 1 second
}

// Step 7: Invoke testRequests
testRequests();