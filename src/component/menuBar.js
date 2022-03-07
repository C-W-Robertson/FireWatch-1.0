
// Component 'menuBar' is a JSON for storing the menu items.
// Titles for each navigation item and content heading are stored in 'title'.
// Content for page content, sans the home page/imported Cal Fire data.
// Slug for routing


const menuBar = {
  maintitle: "FireWatch",
  maincontent: "",
  mainhref: "/", 
    menus :[
      { 
        id: 1,
        title: <p class = "text-danger">About Cal Fire</p>,
        content: <p>The California Department of Forestry and Fire Protection (CAL FIRE), oversees +31 million acres of wildlands. 
                  It performs education, law enforcement, and fire prevention activities, all while also serving as the state's 
                  premiere responder for major disasters and wildfires. 
                  <br />
                  <br />
                  Cal Fire also publishes incident information for active wildfires throughout the state, whether under their 
                  jurisdiction or not. This invaluable incident data forms the backbone of this site. 
                  <br />
                  <br />
                  For more information about Cal Fire, please visit their website, <a href = "https://www.fire.ca.gov/" target = "_blank">HERE</a> (opens external link)
                  </p>,
        slug: "calfirelink"
      },
      {
        id: 2,
        title: <p class = "text-danger">About this App</p>,
        content: <p>California faces an unprecedented threat level from wildfires. Getting timely and accurate information can be difficult, 
                    especially if on a mobile device or dealing with low bandwidth. FireWatch was designed to directly gather incident data from 
                    Cal Fire, and output it in an easy-to-read, easy-to-understand, and up-to-date manner. 
                    <br />
                    <br />
                    This app makes use of the <a href = "https://reactjs.org/" target = "_blank">Reactjs</a> library, and <a href = "https://getbootstrap.com/" target = "_blank">Bootstrap</a>
                    <br />
                    <br />
                    This app was developed as part of the UC San Diego Extension <a href = "https://extension.ucsd.edu/courses-and-programs/front-end-development" target = "_blank">Front End Development</a> program</p>,
        slug: "aboutapp"
      },
      {
        id: 3,
        title: <p class = "text-danger">About the Author</p>,
        content: <p>By day, Chris Robertson is a stay-at-home-parent, attempting to teach a preschooler how to be a human.
                    <br />
                    <br />
                    By night, he becomes a front end development student, studying as part of UC San Diego Extension's <a href = "https://extension.ucsd.edu/courses-and-programs/front-end-development" target = "_blank">certificate program</a>.
                    <br />
                    <br />
                    When not chasing a small child or doing homework, he writes cheesy sci-fi and makes action figures.
                    <br />
                    <br />
                    Special thanks to the <a href = "https://workforce.org/" target = "_blank">San Diego Workforce Partnershp</a> for making this career change possible.
                  </p>,
        slug: "aboutauthor"
      },
      {
        id: 4,
        title: <p class = "text-danger">Links</p>,
        content:  <div>
                    <h6 class = "text-muted">All links open in an external tab.</h6> 
                    <h4>Author Links:</h4>
                      <a href = "https://www.linkedin.com/in/cw-robertson" target = "_blank">LinkedIn</a><br />
                      <a href = "https://github.com/C-W-Robertson" target = "_blank">Github</a><br />
                  
                    <br />

                    <h4>Resource Links:</h4>
                      <a href = "https://extension.ucsd.edu" target = "_blank">UC San Diego Extension</a><br />
                      <a href = "https://workforce.org/" target = "_blank">San Diego Workforce Partnership</a><br />
                       <a href = "https://www.fire.ca.gov/" target = "_blank">Cal Fire</a><br />
                  </div>,
        slug: "linkpage"
      }
  ]
}

export default menuBar;
