                                    Dev Tinder frontend 
#setUp
-created a react project
-setup tailwind
-setup Daisy UI
-setup React router dom
-setup axios for app call 

##structure
 #Body
 -Header
 - routes: /feed
 - routes: /login
 - routes: /signUP
 - routes: /profile


 ## Notes 
 - when use localHost add in backend when use http or localhost it does'nt save cookies
    so need to set in backend middelwear cros( Pass object with -> origin: , and credentials: ture)
    when useing axios so add a object to api call {withCredential: true}

=== make change in backend when user not login and trying to fetch profile like data set code 401 not uer login return res.status(401).send("please login")
