/* Documentation:

This web app is designed to display data pulled from the California Department of Forestry and Fire Protection - 
or "CAL FIRE." Cal Fire publishes major fire incident information on its webpage, and I have found it to be the most 
accurate aggregator of said info.

Unfortunately, it is not friendly if you are on a mobile device or have low bandwith available, 
both of which I have personally experienced. Trying to find your position on a map that is meant for desktop usage, 
then clicking on an incident icon to read more info can be almost impossible in some situations. This site is designed 
to minimize those issues, by stripping the incident information down to a bare minimum.

Cal Fire publishes incident data as a JSON here: https://www.fire.ca.gov/umbraco/api/IncidentApi/List?inactive=false. 
(Please note, the published link on Cal Fire's site is set to "inactive=true", and thus shows recent incidents that are 
no longer active. I have chosen to change the settings to "false," so as to only get active incidents.)

While working on this project, I discovered that the JSON data was protected by 'CORS' (Cross-Origin Resource Sharing) 
rules, and was inaccessible through normal means. Research led to several possible suggestions, none of which I found 
were feasible in this version of the web app. As I believe there is value in this app, I will continue to develop it 
beyond the scope of my class assignment.

The current version of FireWatch is a mock-up, pulling data internally instead of from an external source. The data 
is formatted exactly as it is on CalFire's site, and matches a real incident that was occuring during development. 
Once importing external data is possible, the results of each incident will be displayed on their own "card," as seen 
on the home page. As fires are extinguished, they are changed to "inactive=true" by Cal Fire, and drop off the FireWatch site.

The site is responsive, and will resize according to the screen dimensions of the device.

I have used the component architecture found in several sources from throughout our course - the routing and state assignment, 
the various navbar assignments, several of the textbook examples, and Bootstrap for the CSS.

*/