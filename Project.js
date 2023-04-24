const Persons = [
{
  username: 'Adhish Birthaliya', image_url:
      `https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/640px-Image_created_with_a_mobile_phone.png`,
  address: "Lyndhurst, NJ",
  job: "Software Developer Trainee 7"
},
{
  username: 'Priyesh Barade', image_url:
      `https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/640px-Image_created_with_a_mobile_phone.png`,
  address: "Warrior, AL",
  job: "Software Developer Trainee 6"
},
{
  username: 'Madhvi Lodhi', image_url:
      `https://images.pexels.com/photos/2787341/pexels-photo-2787341.jpeg?cs=srgb&dl=pexels-ali-pazani-2787341.jpg&fm=jpg`,
  address: "Cincinnati, OH",
  job: "Software Developer Trainee 5"
},
{
  username: 'Pranav Onkar', image_url:
      `https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/640px-Image_created_with_a_mobile_phone.png`,
  address: "Austin, TX",
  job: "Software Developer Trainee 4"
},
{
  username: 'Rishika Dewang', image_url:
      `https://images.pexels.com/photos/2787341/pexels-photo-2787341.jpeg?cs=srgb&dl=pexels-ali-pazani-2787341.jpg&fm=jpg`,
  address: "Fort Worth, TX",
  job: "Software Developer Trainee 3"
},
{
  username: 'Deepak Jain', image_url:
      `https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/640px-Image_created_with_a_mobile_phone.png`,
  address: "Troy, MI",
  job: "Software Developer Trainee 2"
},
{
  username: 'Ritik Sharma', image_url:
      `https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/640px-Image_created_with_a_mobile_phone.png`,
  address: "Denver, CO",
  job: "Software Developer Trainee 1"
},
{
  username: 'Govind Sharma', image_url:
      `https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/640px-Image_created_with_a_mobile_phone.png`,
  address: "Denver, CO",
  job: "Senior Software Developer"
},
{
  username: 'Mohit Birla', image_url:
      `https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/640px-Image_created_with_a_mobile_phone.png`,
  address: "Denver, CO",
  job: "Senior Software Developer"
},
{
  username: 'Pratima Rathod', image_url:
      `https://images.pexels.com/photos/2787341/pexels-photo-2787341.jpeg?cs=srgb&dl=pexels-ali-pazani-2787341.jpg&fm=jpg`,
  address: "Denver, CO",
  job: "Software Developer Trainee 8"
},
{
  username: 'Shivani Thakur', image_url:
      `https://images.pexels.com/photos/2787341/pexels-photo-2787341.jpeg?cs=srgb&dl=pexels-ali-pazani-2787341.jpg&fm=jpg`,
  address: "Denver, CO",
  job: "HR recruiter"
}
];

var dynamic = document.querySelector('.Card');

let filteredPerson = []

for (var a = 0; a < Persons.length; a++)
 {
  var fetch = document.querySelector('.Card').innerHTML;
  
  dynamic.innerHTML = `<div id="cards${a}" class="Box">
                          <div class="Box-content">
                             <div class="Img">
                             <div class="job">
                                <img src=${Persons[a].image_url}>
                                  <h4 id="username${a}">${Persons[a].username}</h4>
                                  <p>
                                  ${Persons[a].address}
                                  </p>
                                  <p>
                                  ${Persons[a].job}
                                  </p>
                              </div>
                             </div>
                           </div>
                      </div>` + fetch;
 }


let cards = document.querySelectorAll('.Card');

function SearchUsers() 
  {
 
  let search_query = document.getElementById("searchbox").value;
  
  for (let i = 0; i < Persons.length; i++) 
      
      {

      if (Persons[i].username.toLowerCase().includes(search_query.toLowerCase())) 
          {
          document.getElementById(`cards${i}`).style.display = "block"
          }   
      else if(Persons[i].address.toLowerCase().includes(search_query.toLowerCase()))
          {
          document.getElementById(`cards${i}`).style.display = "block"
          }
      else if(Persons[i].job.toLowerCase().includes(search_query.toLowerCase()))
          {
          document.getElementById(`cards${i}`).style.display = "block"
          }
      else
          {
          document.getElementById(`cards${i}`).style.display = "none"
          }
  }
}