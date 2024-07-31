About:

The task is all about to test your UI skills as well as to test your integration skills. Instead of the below reference you can also go with your own creativity while developing UI screens.

Your task consists of you creating 3 pages
Sign up
Log In
Dashboard

Sign Up:

Reference Image: (for UI development)


API url https://syoft.dev/Api/user_registeration/api/user_registeration 

Sample Payload:
{
    "user_firstname":"mani",
    "user_email":" mail@gmail.com ",
    "user_phone":"9876543210",
    "user_password":"123456",
    "user_lastname":"ni",  
    "user_city":"Hyderabad",
    "user_zipcode": "500072"
}
Collect user_firstname, user_email, user_password, user_phone from the form (Like from UI) and for user_lastname, user_city, user_zipcode send some static data.
Login In:


API url: https://syoft.dev/Api/userlogin/api/userlogin

Sample Payload:
{
    "user_email":"mail@gmail.com",
    "user_password":"123456"
}

After Login In store user information in local storage and redirect user to dashboard page and in dashboard page just show the user information (try to show your creativity here).


Note: 
Framework should be React.
Both APIs are POST API, and you should submit JSON object for those.
Design should be responsive.
There should be form validations on fields like whether field is filled or not and whether the given information is valid or not.

All the Best😁
